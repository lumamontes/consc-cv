var slider = document.getElementById('font-size');

slider.addEventListener('input', function() {
    var size = slider.value;
    document.body.style.fontSize = size + "px";
});