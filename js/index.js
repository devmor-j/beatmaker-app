class DrumKit {
  constructor() {
    this.pads = document.querySelectorAll('.pad');
    this.playButton = document.querySelector('.play');
    this.muteButtons = document.querySelectorAll('.mute');
    this.kickAudio = document.querySelector('.kick-sound');
    this.snareAudio = document.querySelector('.snare-sound');
    this.hihatAudio = document.querySelector('.hihat-sound');
    this.index = 0;
    this.isPlaying = false;
    this.selectedAudios = document.querySelectorAll('select');
    this.tempo = 150;
    this.tempoSlider = document.querySelector('.tempo-slider');
    this.tempoNumber = document.querySelector('.tempo-number');
  }

  activePad() {
    this.classList.toggle('active-pad');
  }

  start() {
    const intervalTime = (60 / this.tempo) * 1000;
    if (!this.isPlaying) {
      this.isPlaying = setInterval(() => {
        this.playBar();
      }, intervalTime);
      this.playButton.innerText = 'Pause';
    } else {
      clearInterval(this.isPlaying);
      this.isPlaying = false;
      this.playButton.innerText = 'Play';
    }
  }

  playBar() {
    const step = this.index % 8;
    this.index += 1;

    const activeBars = document.querySelectorAll(`.b${step}`);

    activeBars.forEach((bar) => {
      bar.classList.add('bar-transition');
      bar.addEventListener('transitionend', () => {
        bar.classList.remove('bar-transition');
      });

      if (bar.classList.contains('active-pad')) {
        if (bar.classList.contains('kick-pad')) {
          this.kickAudio.currentTime = 0;
          this.kickAudio.play();
        }
        if (bar.classList.contains('snare-pad')) {
          this.snareAudio.currentTime = 0;
          this.snareAudio.play();
        }
        if (bar.classList.contains('hihat-pad')) {
          this.hihatAudio.currentTime = 0;
          this.hihatAudio.play();
        }
      }
    });
  }

  updateSoundSources(ev) {
    switch (ev.target.name) {
      case 'kick-select':
        this.kickAudio.src = ev.target.value;
        break;
      case 'snare-select':
        this.snareAudio.src = ev.target.value;
        break;
      case 'hihat-select':
        this.hihatAudio.src = ev.target.value;
        break;
      default:
        break;
    }
  }

  mute(ev) {
    const muteTrackIndex = ev.target.getAttribute('data-track');
    ev.target.classList.toggle('active-mute');
    if (ev.target.classList.contains('active-mute')) {
      switch (muteTrackIndex) {
        case '0':
          this.kickAudio.volume = 0;
          break;
        case '1':
          this.snareAudio.volume = 0;
          break;
        case '2':
          this.hihatAudio.volume = 0;
          break;
        default:
          break;
      }
    } else {
      switch (muteTrackIndex) {
        case '0':
          this.kickAudio.volume = 1;
          break;
        case '1':
          this.snareAudio.volume = 1;
          break;
        case '2':
          this.hihatAudio.volume = 1;
          break;
        default:
          break;
      }
    }
  }

  updateTempo(ev) {
    this.tempo = ev.target.value;
    this.tempoNumber.innerText = this.tempo;

    this.start();
    this.start();
  }
}

const drumkit = new DrumKit();

drumkit.pads.forEach((pad) => pad.addEventListener('click', drumkit.activePad));

drumkit.playButton.addEventListener('click', () => drumkit.start());

drumkit.selectedAudios.forEach((selection) => {
  selection.addEventListener('change', (ev) => drumkit.updateSoundSources(ev));
});

drumkit.muteButtons.forEach((button) => {
  button.addEventListener('click', (ev) => drumkit.mute(ev));
});

drumkit.tempoSlider.addEventListener('change', (ev) => drumkit.updateTempo(ev));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIERydW1LaXQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnBhZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGFkJyk7XG4gICAgdGhpcy5wbGF5QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXknKTtcbiAgICB0aGlzLm11dGVCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm11dGUnKTtcbiAgICB0aGlzLmtpY2tBdWRpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5raWNrLXNvdW5kJyk7XG4gICAgdGhpcy5zbmFyZUF1ZGlvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNuYXJlLXNvdW5kJyk7XG4gICAgdGhpcy5oaWhhdEF1ZGlvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhpaGF0LXNvdW5kJyk7XG4gICAgdGhpcy5pbmRleCA9IDA7XG4gICAgdGhpcy5pc1BsYXlpbmcgPSBmYWxzZTtcbiAgICB0aGlzLnNlbGVjdGVkQXVkaW9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc2VsZWN0Jyk7XG4gICAgdGhpcy50ZW1wbyA9IDE1MDtcbiAgICB0aGlzLnRlbXBvU2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXBvLXNsaWRlcicpO1xuICAgIHRoaXMudGVtcG9OdW1iZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcG8tbnVtYmVyJyk7XG4gIH1cblxuICBhY3RpdmVQYWQoKSB7XG4gICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUtcGFkJyk7XG4gIH1cblxuICBzdGFydCgpIHtcbiAgICBjb25zdCBpbnRlcnZhbFRpbWUgPSAoNjAgLyB0aGlzLnRlbXBvKSAqIDEwMDA7XG4gICAgaWYgKCF0aGlzLmlzUGxheWluZykge1xuICAgICAgdGhpcy5pc1BsYXlpbmcgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIHRoaXMucGxheUJhcigpO1xuICAgICAgfSwgaW50ZXJ2YWxUaW1lKTtcbiAgICAgIHRoaXMucGxheUJ1dHRvbi5pbm5lclRleHQgPSAnUGF1c2UnO1xuICAgIH0gZWxzZSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMuaXNQbGF5aW5nKTtcbiAgICAgIHRoaXMuaXNQbGF5aW5nID0gZmFsc2U7XG4gICAgICB0aGlzLnBsYXlCdXR0b24uaW5uZXJUZXh0ID0gJ1BsYXknO1xuICAgIH1cbiAgfVxuXG4gIHBsYXlCYXIoKSB7XG4gICAgY29uc3Qgc3RlcCA9IHRoaXMuaW5kZXggJSA4O1xuICAgIHRoaXMuaW5kZXggKz0gMTtcblxuICAgIGNvbnN0IGFjdGl2ZUJhcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuYiR7c3RlcH1gKTtcblxuICAgIGFjdGl2ZUJhcnMuZm9yRWFjaCgoYmFyKSA9PiB7XG4gICAgICBiYXIuY2xhc3NMaXN0LmFkZCgnYmFyLXRyYW5zaXRpb24nKTtcbiAgICAgIGJhci5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgKCkgPT4ge1xuICAgICAgICBiYXIuY2xhc3NMaXN0LnJlbW92ZSgnYmFyLXRyYW5zaXRpb24nKTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoYmFyLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlLXBhZCcpKSB7XG4gICAgICAgIGlmIChiYXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdraWNrLXBhZCcpKSB7XG4gICAgICAgICAgdGhpcy5raWNrQXVkaW8uY3VycmVudFRpbWUgPSAwO1xuICAgICAgICAgIHRoaXMua2lja0F1ZGlvLnBsYXkoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYmFyLmNsYXNzTGlzdC5jb250YWlucygnc25hcmUtcGFkJykpIHtcbiAgICAgICAgICB0aGlzLnNuYXJlQXVkaW8uY3VycmVudFRpbWUgPSAwO1xuICAgICAgICAgIHRoaXMuc25hcmVBdWRpby5wbGF5KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJhci5jbGFzc0xpc3QuY29udGFpbnMoJ2hpaGF0LXBhZCcpKSB7XG4gICAgICAgICAgdGhpcy5oaWhhdEF1ZGlvLmN1cnJlbnRUaW1lID0gMDtcbiAgICAgICAgICB0aGlzLmhpaGF0QXVkaW8ucGxheSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGVTb3VuZFNvdXJjZXMoZXYpIHtcbiAgICBzd2l0Y2ggKGV2LnRhcmdldC5uYW1lKSB7XG4gICAgICBjYXNlICdraWNrLXNlbGVjdCc6XG4gICAgICAgIHRoaXMua2lja0F1ZGlvLnNyYyA9IGV2LnRhcmdldC52YWx1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzbmFyZS1zZWxlY3QnOlxuICAgICAgICB0aGlzLnNuYXJlQXVkaW8uc3JjID0gZXYudGFyZ2V0LnZhbHVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2hpaGF0LXNlbGVjdCc6XG4gICAgICAgIHRoaXMuaGloYXRBdWRpby5zcmMgPSBldi50YXJnZXQudmFsdWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgbXV0ZShldikge1xuICAgIGNvbnN0IG11dGVUcmFja0luZGV4ID0gZXYudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS10cmFjaycpO1xuICAgIGV2LnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUtbXV0ZScpO1xuICAgIGlmIChldi50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUtbXV0ZScpKSB7XG4gICAgICBzd2l0Y2ggKG11dGVUcmFja0luZGV4KSB7XG4gICAgICAgIGNhc2UgJzAnOlxuICAgICAgICAgIHRoaXMua2lja0F1ZGlvLnZvbHVtZSA9IDA7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJzEnOlxuICAgICAgICAgIHRoaXMuc25hcmVBdWRpby52b2x1bWUgPSAwO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICcyJzpcbiAgICAgICAgICB0aGlzLmhpaGF0QXVkaW8udm9sdW1lID0gMDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc3dpdGNoIChtdXRlVHJhY2tJbmRleCkge1xuICAgICAgICBjYXNlICcwJzpcbiAgICAgICAgICB0aGlzLmtpY2tBdWRpby52b2x1bWUgPSAxO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICcxJzpcbiAgICAgICAgICB0aGlzLnNuYXJlQXVkaW8udm9sdW1lID0gMTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnMic6XG4gICAgICAgICAgdGhpcy5oaWhhdEF1ZGlvLnZvbHVtZSA9IDE7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlVGVtcG8oZXYpIHtcbiAgICB0aGlzLnRlbXBvID0gZXYudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMudGVtcG9OdW1iZXIuaW5uZXJUZXh0ID0gdGhpcy50ZW1wbztcblxuICAgIHRoaXMuc3RhcnQoKTtcbiAgICB0aGlzLnN0YXJ0KCk7XG4gIH1cbn1cblxuY29uc3QgZHJ1bWtpdCA9IG5ldyBEcnVtS2l0KCk7XG5cbmRydW1raXQucGFkcy5mb3JFYWNoKChwYWQpID0+IHBhZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRydW1raXQuYWN0aXZlUGFkKSk7XG5cbmRydW1raXQucGxheUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGRydW1raXQuc3RhcnQoKSk7XG5cbmRydW1raXQuc2VsZWN0ZWRBdWRpb3MuZm9yRWFjaCgoc2VsZWN0aW9uKSA9PiB7XG4gIHNlbGVjdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXYpID0+IGRydW1raXQudXBkYXRlU291bmRTb3VyY2VzKGV2KSk7XG59KTtcblxuZHJ1bWtpdC5tdXRlQnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2KSA9PiBkcnVta2l0Lm11dGUoZXYpKTtcbn0pO1xuXG5kcnVta2l0LnRlbXBvU2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldikgPT4gZHJ1bWtpdC51cGRhdGVUZW1wbyhldikpO1xuIl19
