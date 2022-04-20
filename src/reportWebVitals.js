const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry, true);
      getFID(onPerfEntry, true);
      getFCP(onPerfEntry, true);
      getLCP(onPerfEntry, true);
      getTTFB(onPerfEntry, true);
    });
  }
};

export default reportWebVitals;
