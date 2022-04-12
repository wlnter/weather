/* eslint-disable no-restricted-globals */

// This service worker can be customized!
// See https://developers.google.com/web/tools/workbox/modules
// for the list of available Workbox modules, or add any other
// code you'd like.
// You can also remove this file if you'd prefer not to use a
// service worker, and the Workbox build step will be skipped.

import { clientsClaim } from 'workbox-core';
import { ExpirationPlugin } from 'workbox-expiration';
import { precacheAndRoute, createHandlerBoundToURL } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';

import { CacheWrapper, Router, strategyFactory } from "./worker";

clientsClaim();

// Precache all of the assets generated by your build process.
// Their URLs are injected into the manifest variable below.
// This variable must be present somewhere in your service worker file,
// even if you decide not to use precaching. See https://cra.link/PWA
precacheAndRoute(self.__WB_MANIFEST);

// Set up App Shell-style routing, so that all navigation requests
// are fulfilled with your index.html shell. Learn more at
// https://developers.google.com/web/fundamentals/architecture/app-shell
const fileExtensionRegexp = new RegExp('/[^/?]+\\.[^/]+$');
registerRoute(
  // Return false to exempt requests from being fulfilled by index.html.
  ({ request, url }) => {
    // If this isn't a navigation, skip.
    if (request.mode !== 'navigate') {
      return false;
    } // If this is a URL that starts with /_, skip.

    if (url.pathname.startsWith('/_')) {
      return false;
    } // If this looks like a URL for a resource, because it contains // a file extension, skip.

    if (url.pathname.match(fileExtensionRegexp)) {
      return false;
    } // Return true to signal that we want to use the handler.

    return true;
  },
  createHandlerBoundToURL(process.env.PUBLIC_URL + '/index.html')
);

// An example runtime caching route for requests that aren't handled by the
// precache, in this case same-origin .png requests like those from in public/
registerRoute(
  // Add in any other file extensions or routing criteria as needed.
  ({ url }) => url.origin === self.location.origin && url.pathname.endsWith('.png'), // Customize this strategy as needed, e.g., by changing to CacheFirst.
  new StaleWhileRevalidate({
    cacheName: 'images',
    plugins: [
      // Ensure that once this runtime cache reaches a maximum size the
      // least-recently used images are removed.
      new ExpirationPlugin({ maxEntries: 50 }),
    ],
  })
);

// This allows the web app to trigger skipWaiting via
// registration.waiting.postMessage({type: 'SKIP_WAITING'})
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Any other custom service worker logic can go here.
const router = new Router();
// 实例化 imageCache 对象
const imageCache = new CacheWrapper({
  // 单独给图片资源分配缓存名称
  cacheName: "image-cache",
  expireOptions: {
    // 对图片资源缓存 1 星期
    maxAgeSeconds: 7 * 24 * 60 * 60,
  },
});
router.registerRoute(/\.(jpe?g|png|svg)$/, async (request) => {
  // 优先读取本地缓存中的图片
  // 如果本地无缓存图片/缓存过期/读取缓存出错，则 response 为空
  let response = await imageCache.get(request).catch(() => {});
  if (response) {
    return response;
  }
  // 如果本地尚未缓存或者缓存过期，则发起网络请求获取最新图片资源
  response = await fetch(request.clone());
  // 如果请求成功，则更新缓存
  // 更新缓存过程无需阻塞进程
  if (response.ok) {
    imageCache.set(request, response.clone());
  }
  // 返回资源
  return response;
});
router.registerRoute(
  /\/index\.(html|css|js)$/,
  strategyFactory("cacheFirst")
);
const ruler = (url) => url.indexOf('amap.com') > -1 || url.indexOf('qweather.com') > -1
router.registerRoute(ruler, strategyFactory("networkFirst"));
