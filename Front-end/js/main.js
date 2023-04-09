let opIntsObserver = {
    targets: document.getElementsByClassName(`sp`),
    options: {
      root: null,
      rootMargin: `0px`,
      threshold: Array.from(
        { length: 101 },
        (v, i) => +(i * 0.01).toFixed(10)
      )
    },
    changeStyleTarget: (entries, observer) => {
      entries.forEach(entry => {
        entry.target.style.backgroundColor = `rgba(0, 0, 255, ${entry.intersectionRatio})`;
      });
    },
  };
  
  opIntsObserver.observer = new IntersectionObserver(
    opIntsObserver.changeStyleTarget,
    opIntsObserver.options
  );
  
  Array.prototype.forEach.call(opIntsObserver.targets, t => opIntsObserver.observer.observe(t));