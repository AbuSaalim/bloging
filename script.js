const toggleButton = document.getElementById('toggleButton');
const hiddenText = document.getElementById('hiddenText');

toggleButton.addEventListener('click', function() {
    if (hiddenText.classList.contains('hidden')) {
        hiddenText.classList.remove('hidden');
    } else {
        hiddenText.classList.add('hidden');
    }
});

const toggleButton1 = document.getElementById('toggleButton1');
const hiddenText1 = document.getElementById('hiddenText1');

toggleButton1.addEventListener('click', function() {
    if (hiddenText1.classList.contains('hidden')) {
        hiddenText1.classList.remove('hidden');
    } else {
        hiddenText1.classList.add('hidden');
    }
});