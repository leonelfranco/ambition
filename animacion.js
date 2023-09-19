gsap.from('#cohete', 1.5, {opacity: 0, y: -300, delay:.2})
gsap.from('#nubes', 1.5, {opacity: 0, x: -200, delay:.3})
gsap.from('#nubes2', 1.5, {opacity: 0, x: 200, delay:.1})


gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollTrigger.normalizeScroll(true)
ScrollSmoother.create({
    smooth: 4,               // how long (in seconds) it takes to "catch up" to the native scroll position
    effects: true,           // looks for data-speed and data-lag attributes on elements
    smoothTouch: 0.5,        // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
  });

