function fontLoader() {
  if (sessionStorage.fontsLoaded) {
    document.documentElement.classList.add('sans-serif-loaded');
    document.documentElement.classList.add('monospace-loaded');
    return;
  }

  if (document.fonts) {
    Promise.all([
      document.fonts.load('normal 1em Public Sans Variable'),
      document.fonts.load('italic 1em Public Sans Variable'),
    ]).then(() => {
      document.documentElement.classList.add('sans-serif-loaded');

      document.fonts.load('normal 1em JetBrains Mono Variable').then(() => {
        document.documentElement.classList.add('monospace-loaded');
        sessionStorage.fontsLoaded = true;
      });
    });
  }
}

fontLoader();

document.addEventListener('astro:after-swap', fontLoader);
