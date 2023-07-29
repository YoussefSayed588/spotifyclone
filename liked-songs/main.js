let arr = [
  {
    track: "../music/The Chainsmokers - Hope ft. Winona Oak.mp3",
    image: "../images/sick-boy.jpg",
    title: "Hope",
    artist: "The Chainsmokers",
    album: "Sick Boy",
    duration: "3:00",
  },
  {
    track: "../music/The Chainsmokers - Beach House.mp3",
    image: "../images/sick-boy.jpg",
    title: "Beach House",
    artist: "The Chainsmokers",
    album: "Sick Boy",
    duration: "3:26",
  },
  {
    track: "../music/The Chainsmokers - Side Effects ft. Emily Warren.mp3",
    image: "../images/sick-boy.jpg",
    title: "Side Effects",
    artist: "The Chainsmokers",
    album: "Sick Boy",
    duration: "2:54",
  },
  {
    track: "../music/The Chainsmokers Somebody ft. Drew Love.mp3",
    image: "../images/sick-boy.jpg",
    title: "Somebody",
    artist: "The Chainsmokers",
    album: "Sick Boy",
    duration: "3:42",
  },
  {
    track: "../music/The Chainsmokers - Everybody Hates Me.mp3",
    image: "../images/sick-boy.jpg",
    title: "Everybody Hates Me",
    artist: "The Chainsmokers",
    album: "Sick Boy",
    duration: "3:40",
  },
  {
    track: "../music/The Chainsmokers ‒ Sick Boy.mp3",
    image: "../images/sick-boy.jpg",
    title: "Sick Boy",
    artist: "The Chainsmokers",
    album: "Sick Boy",
    duration: "3:14",
  },
  {
    track: "../music/The Chainsmokers - You Owe Me.mp3",
    image: "../images/sick-boy.jpg",
    title: "You Owe Me",
    artist: "The Chainsmokers",
    album: "Sick Boy",
    duration: "3:09",
  },
  {
    track: "../music/The Weeknd - Blinding Lights.mp3",
    image: "../images/The_Weeknd_-_Starboy.png",
    title: "Blinding Lights",
    artist: "The Weeknd",
    album: "After Hours",
    duration: "3:23",
  },
  {
    track: "../music/The Weeknd - Save Your Tears.mp3",
    image: "../images/The_Weeknd_-_Starboy.png",
    title: "Save Your Tears",
    artist: "The Weeknd",
    album: "After Hours",
    duration: "3:37",
  },
  {
    track: "../music/The Weeknd - Starboy.mp3",
    image: "../images/The_Weeknd_-_Starboy.png",
    title: "Starboy",
    artist: "The Weeknd",
    album: "Starboy",
    duration: "3:51",
  },
  {
    track: "../music/Die For You.mp3",
    image: "../images/The_Weeknd_-_Starboy.png",
    title: "Die For You",
    artist: "The Weeknd",
    album: "Starboy",
    duration: "4:20",
  },
];
const cards = document.getElementsByClassName("card");
const previousBtn = document.getElementById("previous-btn");
const shufflePlayBtn = document.getElementById("shuffle-play-btn");
const playBtn = document.getElementById("play-btn");
const nextBtn = document.getElementById("next-btn");
const shuffleBtn = document.getElementById("shuffle-btn");
const repeatBtn = document.getElementById("repeat-btn");
const playerTrackImg = document.getElementById("player-track-img");
const playerTrackTitle = document.getElementById("player-track-title");
const playerTrackArtist = document.getElementById("player-track-artist");
const playerHeartIcon = document.getElementById("player-heart-icon");
const audioEl = document.getElementById("audio-el");
const currentDurationEl = document.getElementById("current-duration-el");
const totalDurationEl = document.getElementById("total-duration-el");
const seekSlider = document.getElementById("seek-slider");
const volumeSlider = document.getElementById("volume-slider");
let noSource = true;
let isPlaying = false;
let isRandom = false;
let isRepeated = false;

for (i = 0; i < arr.length; i++) {
  createDiv();
}

function createDiv() {
  const div = document.createElement("div");
  div.classList.add("card");
  div.innerHTML = `
    <div class="title">
      <span>${i + 1}</span>
      <img src="${arr[i].image}"/>
      <div>
        <h3>${arr[i].title}</h3>
        <h4>
          <a href="#">${arr[i].artist}</a>
        </h4>
      </div>
    </div>
    <div class="album">
      <h4>
        <a href="#">${arr[i].album}</a>
      </h4>
    </div>
    <div class="date-added">
      <h4>24 Apr,2022</h4>
    </div>
    <div class="duration">
      <img src="../images/heart.svg">
      <h4>${arr[i].duration}</h4>
      <i class="fa-solid fa-ellipsis-vertical"></i>
    </div>
    <audio src = "${arr[i].track}"></audio>
    `;
  document.getElementById("row-3").appendChild(div);
  div.addEventListener("click", function () {
    audioEl.src = div.querySelector("audio").src;
    noSource = false;
    isPlaying = true;
    playBtn.src = "../images/pause.svg";
    audioEl.play();
    playerTrackImg.src = div.querySelector("img").src;
    playerTrackTitle.textContent = div.querySelector("h3").innerHTML;
    playerTrackArtist.textContent = div.querySelector("h4 a").innerHTML;
    playerHeartIcon.src = "../images/heart.svg";
    totalDurationEl.textContent = div.querySelector(".duration h4").innerHTML;
    seekSlider.max = div.querySelector("audio").duration;
    let trackIndex = Number(this.querySelector(".title span").innerHTML) - 1;
    function renderTrack() {
      playerTrackImg.src = arr[trackIndex].image;
      playerTrackTitle.textContent = arr[trackIndex].title;
      playerTrackArtist.textContent = arr[trackIndex].artist;
      audioEl.src = arr[trackIndex].track;
      audioEl.play();
    }
    function nextTrack() {
      if (trackIndex < arr.length - 1 && isRandom === false) {
        trackIndex++;
        totalDurationEl.textContent = arr[trackIndex].duration;
        renderTrack();
      } else if (trackIndex < arr.length - 1 && isRandom === true) {
        let randomIndex = Number.parseInt(Math.random() * arr.length);
        trackIndex = randomIndex;
        totalDurationEl.textContent = arr[trackIndex].duration;
        renderTrack();
      } else {
        trackIndex = 0;
        totalDurationEl.textContent = arr[trackIndex].duration;
        renderTrack();
      }
    }
    nextBtn.addEventListener("click", nextTrack);
    previousBtn.addEventListener("click", function () {
      if (trackIndex > 0) {
        trackIndex--;
        totalDurationEl.textContent = arr[trackIndex].duration;
        renderTrack();
      } else {
        trackIndex = arr.length - 1;
        totalDurationEl.textContent = arr[trackIndex].duration;
        renderTrack();
      }
    });
    audioEl.addEventListener("ended", (event) => {
      if (
        trackIndex < arr.length - 1 &&
        isRandom === false &&
        isRepeated === false
      ) {
        trackIndex++;
        totalDurationEl.textContent = arr[trackIndex].duration;
        renderTrack();
      } else if (
        trackIndex < arr.length - 1 &&
        isRandom === true &&
        isRepeated === false
      ) {
        let randomIndex = Number.parseInt(Math.random() * arr.length);
        trackIndex = randomIndex;
        totalDurationEl.textContent = arr[trackIndex].duration;
        renderTrack();
      } else if (
        trackIndex < arr.length - 1 &&
        isRandom === false &&
        isRepeated === true
      ) {
        trackIndex = trackIndex;
        totalDurationEl.textContent = arr[trackIndex].duration;
        renderTrack();
      } else if (
        trackIndex === arr.length - 1 &&
        isRandom === true &&
        isRepeated === false
      ) {
        let randomIndex = Number.parseInt(Math.random() * arr.length);
        trackIndex = randomIndex;
        totalDurationEl.textContent = arr[trackIndex].duration;
        renderTrack();
      } else if (
        trackIndex === arr.length - 1 &&
        isRandom === false &&
        isRepeated === true
      ) {
        trackIndex = trackIndex;
        totalDurationEl.textContent = arr[trackIndex].duration;
        renderTrack();
      } else if (
        trackIndex === arr.length - 1 &&
        isRandom === true &&
        isRepeated === true
      ) {
        trackIndex = trackIndex;
        totalDurationEl.textContent = arr[trackIndex].duration;
        renderTrack();
      } else {
        trackIndex = 0;
        totalDurationEl.textContent = arr[trackIndex].duration;
        renderTrack();
      }
    });
  });
}

audioEl.addEventListener("ended", (event) => {
  setTimeout(() => {
    seekSlider.max = audioEl.duration;
  }, 500);
});

previousBtn.addEventListener("click", function () {
  setTimeout(() => {
    seekSlider.max = audioEl.duration;
  }, 500);
});

nextBtn.addEventListener("click", function () {
  setTimeout(() => {
    seekSlider.max = audioEl.duration;
  }, 500);
});

playBtn.addEventListener("click", function () {
  if (noSource === true) {
  } else {
    if (isPlaying == false) {
      isPlaying = true;
      playBtn.src = "../images/pause.svg";
      audioEl.play();
    } else {
      isPlaying = false;
      playBtn.src = "../images/play.svg";
      audioEl.pause();
    }
  }
});

shuffleBtn.addEventListener("click", function () {
  if (isRandom === false) {
    isRandom = true;
    shuffleBtn.style.filter =
      "invert(68%) sepia(18%) saturate(7271%) hue-rotate(149deg) brightness(102%) contrast(107%)";
  } else if (isRandom === true) {
    isRandom = false;
    shuffleBtn.style.filter = "invert(80%)";
  }
});

repeatBtn.addEventListener("click", function () {
  if (isRepeated === false) {
    isRepeated = true;
    repeatBtn.style.filter =
      "invert(68%) sepia(18%) saturate(7271%) hue-rotate(149deg) brightness(102%) contrast(107%)";
  } else if (isRepeated === true) {
    isRepeated = false;
    repeatBtn.style.filter = "invert(80%)";
  }
});

audioEl.addEventListener("timeupdate", () => {
  seekSlider.value = audioEl.currentTime;
  let currentMinutes = parseInt(audioEl.currentTime / 60);
  let currentSeconds = Math.floor(audioEl.currentTime - currentMinutes * 60);
  if (currentSeconds < 10) {
    currentSeconds = "0" + currentSeconds;
  }
  currentDurationEl.textContent = currentMinutes + ":" + currentSeconds;
});

seekSlider.addEventListener("change", () => {
  audioEl.currentTime = seekSlider.value;
});

window.onload = function () {
  audioEl.volume = volumeSlider.value / 100;
};

volumeSlider.addEventListener("change", function () {
  audioEl.volume = volumeSlider.value / 100;
});
