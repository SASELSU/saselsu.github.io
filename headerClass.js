var headerTitle = document.getElementById("headerTitle");
var navbarNav = document.getElementById("navbarNav")
var navButton = document.getElementById("navButton");

var i = 0;

navButton.addEventListener("click", function() {
    var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    var viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    var titleElement = document.querySelector('.title'); 
    if (i % 2 == 0) {
        titleElement.style.top = '600px';
    }
    else {
        if(viewportWidth < 750) {
            titleElement.style.top = '40%';
        }
        else {
            titleElement.style.top = '30%';
        }
    }
    i++;
});