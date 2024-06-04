window.addEventListener('scroll', function() {
    const image = document.getElementById('scroll-image');
    const scrollPosition = window.scrollY;
    image.style.marginTop = scrollPosition * .20 + 'px'; // Adjust the factor to control the speed of movement
});
