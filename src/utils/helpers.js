
//throttle function
function throttle(func, ms) {

  let last;
  let timer;

  return function(){
    let now = Date.now();
    let context = this;
    let args = arguments;
    if (last && now < last + ms) {
      clearTimeout(timer)
      timer = setTimeout(function() {
        func.apply(context,args);
        last = now;
      }, ms);
    } else {
      func.apply(context,args);
      last = now;
    }
  }
}

//debounce function
function debounce(func, ms) {
  let timer = null;
  return function(){
    clearTimeout(timer);
    timer = setTimeout(function() {
      func();
    }, ms);
  }
}
