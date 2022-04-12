export function strategyFactory(strategy, {
  // Fetch API 配置
  fetchOptions,
  // Cache 名称
  cacheName = "runtime-cache",
  // cache.match 配置
  matchOptions,
} = {}) {

  const cacheResponse = async (request, response) => {
    // 使用 cacheName 参数打开缓存
    let cache = await caches.open(cacheName);
    await cache.put(request, response);
  };

  const getCachedResponse = async (request) => {
    let cache = await caches.open(cacheName);
    return cache.match(request, matchOptions);
  };

  const fetchAndCatch = async (request) => {
    let response = await fetch(request.clone(), fetchOptions);
    // 请求资源失败时直接返回
    if (!response.ok) {
      return;
    }
    // 网络请求成功后，将请求响应结果复制一份存入缓存中
    // 更新缓存过程无需阻塞函数执行
    cacheResponse(request, response.clone())
      // 同时缓存更新行为只需静默执行即可
      .catch(() => {});

    // 返回响应结果
    return response;
  };

  const networkFirst = async (request) => {
    let response;

    try {
      // 优先发起网络请求，并将请求返回结果缓存到本地
      response = await fetchAndCatch(request);
    } catch (e) {}

    if (response == null) {
      // 网络资源请求失败时，从本地缓存中读取缓存
      response = await getCachedResponse(request);
    }

    return response;
  };


  const cacheFirst = async (request) => {
    let response;

    try {
      // 优先匹配本地缓存
      response = await getCachedResponse(request);
    } catch (e) {}
    // 匹配不到缓存或者缓存读取出现异常时，再去发起网络请求
    // 并且将请求成功的资源写入缓存中
    if (response == null) {
      response = await fetchAndCatch(request);
    }

    return response;
  };

  const networkOnly = async (request) => fetch(request, fetchOptions);

  const cacheOnly = async (request) => {
    let response = await getCachedResponse(request);
    return response;
  };

  const staleWhileRevalidate = async (request) => {
    let response;
    // 首先读取本地缓存
    try {
      response = await getCachedResponse(request);
    } catch (e) {}
    // 发起网络请求并更新缓存
    let fetchPromise = fetchAndCatch(request);
    // 如果存在本地缓存，则静默更新缓存即可，无需阻塞函数执行
    if (response) {
      // 静默更新，无需报错
      fetchPromise.catch((e) => {});
    } else {
      // 反之则将网络请求到的资源返回
      response = await fetchPromise;
    }

    return response;
  };

  switch(strategy){
    case "networkFirst":
      return networkFirst
    case "cacheFirst":
      return cacheFirst
    case "cacheOnly":
      return cacheOnly
    case "networkOnly":
      return networkOnly
    case "staleWhileRevalidate":
      return staleWhileRevalidate;
    default :
      return networkOnly
  }
}
