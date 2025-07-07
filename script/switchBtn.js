const switchBtn = document.getElementById('switchBtn');
const eliott = document.getElementById('eliott');
const flamonix = document.getElementById('flamonix');

let showEliott = true;

switchBtn.addEventListener('click', () => {
showEliott = !showEliott;

if (showEliott) {
    eliott.classList.remove('blurred');
    eliott.classList.add('focused');
    flamonix.classList.remove('focused');
    flamonix.classList.add('blurred');
} else {
    flamonix.classList.remove('blurred');
    flamonix.classList.add('focused');
    eliott.classList.remove('focused');
    eliott.classList.add('blurred');
}
});