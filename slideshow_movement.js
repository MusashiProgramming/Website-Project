var controls = document.querySelectorAll('.controls');
for(var i=0; i<controls.length; i++){
	controls[i].style.display = 'inline-block';
}

var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;

function goToSlide(n){
	slides[currentSlide].className = 'slide';
	currentSlide = (n+slides.length)%slides.length;
	slides[currentSlide].className = 'slide showing';
}

// Assign each button to a specific slide
document.getElementById('home_btn').addEventListener('click', function() {
    goToSlide(0);
});

document.getElementById('contact_btn').addEventListener('click', function() {
    goToSlide(1);
});

document.getElementById('information_btn').addEventListener('click', function() {
    goToSlide(2);
});

document.getElementById('about_btn').addEventListener('click', function() {
    goToSlide(3);
});