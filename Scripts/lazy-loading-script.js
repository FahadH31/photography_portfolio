//LAZY LOADING----------------------------------------------------------------------------------------
function preload_image(img) {
    img.src = img.dataset.src;
    console.log(`Loading ${img.src}`);
  }
  
  const config_opts = {
    rootMargin: '200px 200px 200px 200px'
  };
  
  let observer = new IntersectionObserver(function(entries, self) {
    for(entry of entries) { 
      if(entry.isIntersecting) {
        let elem = entry.target;
        preload_image(elem);   
        self.unobserve(elem);
      }
    }
  }, config_opts);
  
  let images = document.querySelectorAll('img.lazy-load');
  
  for(image of images) {
    observer.observe(image);
  }

  // Ensure lazy loading is re-applied when the page fully loads
  window.addEventListener('DOMContentLoaded', (event) => {
  let images = document.querySelectorAll('img.lazy-load');
  for(let image of images) {
    observer.observe(image);
  }
  });

  // Ensure observer resets
  window.addEventListener('beforeunload', () => {
    observer.disconnect(); // Disconnect observer when leaving the page
  });
