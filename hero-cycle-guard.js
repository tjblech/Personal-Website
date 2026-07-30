(function(){
  const nativeSetInterval = window.setInterval.bind(window);

  window.setInterval = function(callback, delay, ...args){
    if(delay !== 6000){
      return nativeSetInterval(callback, delay, ...args);
    }

    let running = false;
    return nativeSetInterval(()=>{
      if(running) return;
      running = true;
      Promise.resolve(callback(...args)).finally(()=>{
        running = false;
      });
    }, delay);
  };

  function removeAccidentalDoubling(){
    const name = document.getElementById('phName');
    if(!name) return;

    const letters = Array.from(name.children);
    if(letters.length < 2 || letters.length % 2 !== 0) return;

    const doubled = letters.every((letter, index)=>{
      if(index % 2 !== 0) return true;
      return letters[index + 1] && letter.textContent === letters[index + 1].textContent;
    });

    if(!doubled) return;
    letters.forEach((letter, index)=>{
      if(index % 2 === 1) letter.remove();
    });
  }

  document.addEventListener('visibilitychange', ()=>{
    if(!document.hidden){
      requestAnimationFrame(removeAccidentalDoubling);
    }
  });
})();
