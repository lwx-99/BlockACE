window.addEventListener('scroll', navbarSticky)

function navbarSticky() {
    var navBar = document.getElementById("nav-bar-main");
    var measureFromTop = document.documentElement.scrollTop;
    var startingPoint = navBar.getBoundingClientRect().y;

    if (window.innerWidth > 960) {

     if (measureFromTop >= startingPoint) {
          navBar.style.top = "20px";
          navBar.style.opacity = "0.8";
          navBar.style.transform = "translate(-50%, 0) scale(0.8)";
     } else {
          navBar.style.top = "calc(2.5vh + 30px)";
          navBar.style.opacity = "1";
          navBar.style.transform = "translate(-50%, 0) scale(1)";
  
     }

    } else {
          return
    }

 
}