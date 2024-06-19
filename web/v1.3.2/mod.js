var audioElement0 = document.createElement('audio');
audioElement0.setAttribute('src', 'https://media.djlunatique.com/2023/02/Metamorphosis.mp3');
audioElement0.setAttribute('autoplay', 'autoplay');
audioElement0.Play(); 
audioElement0.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);