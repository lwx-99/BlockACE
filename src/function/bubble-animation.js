window.addEventListener('scroll', bubble)

function bubble() {
    var bubble01 = document.getElementById("bubble-01");
    var bubble02 = document.getElementById("bubble-02");
  
    var windowheight = window.innerHeight;
    var offsetY01 = bubble01.getBoundingClientRect().top;
    var offsetY02 = bubble02.getBoundingClientRect().top;

    var startingPoint = 0;

    if (offsetY01 < windowheight - startingPoint) {
        bubble01.style.transform = `translate3d(${-offsetY01/5}px,${-offsetY01/2}px,0)`
        bubble02.style.transform = `translate3d(${offsetY01/4}px,${offsetY01/2.5}px,0)`
    } else {

    }
  
  }