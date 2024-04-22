// Get the slide wrapper element
var slideWrapper = document.querySelector('.slide-wrapper');

// Add event listeners to the buttons
document.getElementById('home_btn').addEventListener('click', function() {
    slideWrapper.style.marginLeft = '0px';
});

document.getElementById('contact_btn').addEventListener('click', function() {
    slideWrapper.style.marginLeft = '-728px';
});

document.getElementById('information_btn').addEventListener('click', function() {
    slideWrapper.style.marginLeft = '-1456px';
});

document.getElementById('about_btn').addEventListener('click', function() {
    slideWrapper.style.marginLeft = '-2184px';
});
