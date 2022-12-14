

let songs = [
    {
        name: 'In My Mind',
        path: 'songs/Buju-BNXN-In-My-Mind-(JustNaija.com).mp3',
        artist: 'Buju-BNXN',
        cover: 'images/Buju-BNXN-Bad-Since-97-Ep-artwork.webp'
    },
    {
        name: 'Loose Emotions',
        path: 'songs/Buju-BNXN-Loose-Emotions-file-1-(JustNaija.com).mp3',
        artist: 'Buju-BNXN',
        cover: 'images/Buju-BNXN-Bad-Since-97-Ep-artwork.webp'
    },
    {
        name: 'Modupe',
        path: 'songs/Buju-BNXN-Modupe-ft-Olamide-file-1-(JustNaija.com).mp3',
        artist: 'Buju-BNXN ft Olamide',
        cover: 'images/Buju-BNXN-Bad-Since-97-Ep-artwork.webp'
    },
    {
        name: 'Daniel Benson',
        path: 'songs/Buju-Daniel-Benson-(JustNaija.com).mp3',
        artist: 'Buju-BNXN',
        cover: 'images/Buju-Sorry-Im-Late-Ep-artwork.webp'
    },
    {
        name: 'Never Stopped',
        path: 'songs/Buju-Never-Stopped-(JustNaija.com).mp3',
        artist: 'Buju-BNXN',
        cover: 'images/Buju-Sorry-Im-Late-Ep-artwork.webp'
    },
    {
        name: 'For Here',
        path: 'songs/Buju-For-Here-(JustNaija.com).mp3',
        artist: 'Buju-BNXN',
        cover: 'images/Buju-Sorry-Im-Late-Ep-artwork.webp'
    },
    {
        name: 'Ogechukwu',
        path: 'songs/Buju-Ogechukwu-ft-The-Cavemen-(JustNaija.com).mp3',
        artist: 'Buju-BNXN ft Cavemen',
        cover: 'images/Buju-Sorry-Im-Late-Ep-artwork.webp'
    },
    {
        name: 'Kilometer',
        path: 'songs/Burna Boy - Kilometre [Official Audio].mp3',
        artist: 'Burna Boy',
        cover: 'images/Love-Damini-cover.jpeg'
    },
    {
        name: 'Solid',
        path: 'songs/Burna_Boy_Blxst_Kehlani_Solid_(thinkNews.com.ng).mp3',
        artist: 'Burna Boy ft Blxst & Kehlani',
        cover: 'images/Love-Damini-cover.jpeg'
    },
    {
        name: 'Last Last',
        path: 'songs/Burna_Boy_Last_Last_(thinkNews.com.ng).mp3',
        artist: 'Burna Boy',
        cover: 'images/Love-Damini-cover.jpeg'
    },
    {
        name: 'cloak & Dagger ',
        path: 'songs/Burna_Boy_J_Hus_Cloak_Dagger_(thinkNews.com.ng).mp3',
        artist: 'Burna Boy ft J-Hus',
        cover: 'images/Love-Damini-cover.jpeg'
    },
    {
        name: 'Common Person',
        path: 'songs/Burna_Boy_Common_Person_(thinkNews.com.ng).mp3',
        artist: 'Burna Boy',
        cover: 'images/Love-Damini-cover.jpeg'
    },
    {
        name: 'How Bad Could It Be',
        path: 'songs/Burna_Boy_How_Bad_Could_It_Be_(thinkNews.com.ng).mp3',
        artist: 'Burna Boy ft Khalid',
        cover: 'images/Love-Damini-cover.jpeg'
    },
    {
        name: 'Toni-Ann Singh',
        path: 'songs/Burna_Boy_Popcaan_Toni_Ann_Singh_(thinkNews.com.ng).mp3',
        artist: 'Burna Boy',
        cover: 'images/Love-Damini-cover.jpeg'
    },
    {
        name: 'Essence',
        path: 'songs/Wizkid-ft-Tems-Essence-[TrendyBeatz.com].mp3',
        artist: 'Wizkid ft Tems',
        cover: 'images/Wizkids-14-track-studio-album-points-in-different-directions-1.jpg'
    },
    {
        name: 'Gyrate',
        path: 'songs/Wizkid-Gyrate-[TrendyBeatz.com].mp3',
        artist: 'Wizkid',
        cover: 'images/Wizkids-14-track-studio-album-points-in-different-directions-1.jpg'
    },
    {
        name: 'Blessed',
        path: 'songs/Wizkid-ft-Damian-Marley-Blessed-[TrendyBeatz.com].mp3',
        artist: 'Wizkid ft Damian Marley',
        cover: 'images/Wizkids-14-track-studio-album-points-in-different-directions-1.jpg'
    },
]




//Carousels

const carousel = [...document.querySelectorAll('.carousel img')]

let carouselImageIndex = 0;

const changeCarousel = () => {
    carousel[carouselImageIndex].classList.toggle('active');

    if(carouselImageIndex >= carousel.length - 1) {
        carouselImageIndex = 0;
    } else {
        carouselImageIndex++;
    }

    carousel[carouselImageIndex].classList.toggle('active');

}

setInterval(() => {
    changeCarousel();
}, 3000)

//Navigations///

//toggling music player

const musicPlayerSection = document.querySelector('.music-player-section');

let clickCount = 1;

musicPlayerSection.addEventListener('click', () => {
    if (clickCount >= 2) {
        musicPlayerSection.classList.add('active');
        clickCount = 1;
        return;
    }
    clickCount++;
    setTimeout(() => {
        clickCount = 1;
    }, 250);
})


///back from music player

const backToHome = document.querySelector('.music-player-section .back-btn');

backToHome.addEventListener('click', () => {
    musicPlayerSection.classList.remove('active');
})

///access playlist

const playlistSection = document.querySelector('.playlist');
const navBtn = document.querySelector('.music-player-section .nav-btn');

navBtn.addEventListener('click', () => {
    playlistSection.classList.add('active');
})

///back fromm playlist to music player

const backToMusicPlayer = document.querySelector('.playlist .back-btn');
    backToMusicPlayer.addEventListener('click', () => {
    playlistSection.classList.remove('active');
})




/// music

let currentMusic = 0;

const music = document.querySelector('#audio-source');

const seekBar = document.querySelector('.music-seek-bar');
const songName = document.querySelector('.current-song-name');
const artistName = document.querySelector('.artist-name');
const coverImage = document.querySelector('.cover');
const currentMusicTime = document.querySelector('.current-time');
const musicDuration = document.querySelector('.duration');

const queue = [...document.querySelectorAll('.queue')];

///select all buttons

const forwardBtn = document.querySelector('i.fa-forward');
const backwardBtn = document.querySelector('i.fa-backward');
const playBtn = document.querySelector('i.fa-play');
const pauseBtn = document.querySelector('i.fa-pause');
const repeatBtn = document.querySelector('span.fa-redo');
const volumeBtn = document.querySelector('span.fa-volume-up');
const volumeSlider = document.querySelector('.volume-slider')

///play btn click event

playBtn.addEventListener('click', () => {
    music.play()
    playBtn.classList.remove('active');
    pauseBtn.classList.add('active');
})

///play btn click event

pauseBtn.addEventListener('click', () => {
    music.pause();
    pauseBtn.classList.remove('active');
    playBtn.classList.add('active');
})

/// function for setting up music

const setMusic = (i) => {
    seekBar.value = 0;
    let song = songs[i];
    currentMusic = i;

    music.src = song.path

    songName.innerHTML = song.name;
    artistName.innerHTML = song.artist;
    coverImage.src = song.cover

    setTimeout(() => {
        seekBar.max = music.duration;
        musicDuration.innerHTML = formatTime(music.duration);
    }, 3000);
    currentMusicTime.innerHTML = '00 : 00';
    queue.forEach(item => item.classList.remove('active'));
    queue[currentMusic].classList.add('active');
}

setMusic(8);

/// format duration in 00 : 00 format

const formatTime  = (time) => {
    let min = Math.floor(time / 60);
    if (min < 10){
        min = '0' + min;
    }

    let sec = Math.floor(time % 60);
    if (sec < 10){
        sec = '0' + sec;
    }

    return `${min} : ${sec}`;
}


/// seek bar events

setInterval(() => {
    seekBar.value = music.currentTime;
    currentMusicTime.innerHTML = formatTime(music.currentTime);
    if(Math.floor(music.currentTime) == Math.floor(seekBar.max)){
        if(repeatBtn.className.includes('active')){
            setMusic(currentMusic);
            playBtn.click();
        } else {
            // forwardBtn.click()
        }
    }
}, 500)

seekBar.addEventListener('change', () => {
    music.currentTime = seekBar.value;
})


// forward btn

forwardBtn.addEventListener('click', () => {
    if (currentMusic >= songs.length - 1){
        currentMusic = 0;
    } else {
        currentMusic++;
    }
    setMusic(currentMusic);
    playBtn.click();
})

//backward btn

backwardBtn.addEventListener('click', () => {
    if (currentMusic <= 0){
        currentMusic = songs.length - 1;
    } else {
        currentMusic--;
    }
    setMusic(currentMusic);
    playBtn.click();
})

/// repeat btn

repeatBtn.addEventListener ('click', () => {
    repeatBtn.classList.toggle('active');
})


//volume section 

volumeBtn.addEventListener('click', () => {
    volumeBtn.classList.toggle('active');
    volumeSlider.classList.toggle('active');
})

volumeSlider.addEventListener('input', () =>{
    music.volume = volumeSlider.value;
})


queue.forEach((item, i) => {
    item.addEventListener('click', () => {
        setMusic(i);
        playBtn.click();
    })
})
