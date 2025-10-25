window.addEventListener('load', function() {
    setTimeout(function() {
        document.getElementById('loadingOverlay').classList.add('hidden');
    }, 500); // Reduced to 500ms after load
});