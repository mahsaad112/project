const story = [
  "There lived a lumberjack in a forest of birch trees.",
  "He worked from dawn until the light faded.",
  "One evening, as he sat by the river, a fish rose from the water.",
  "The fish spoke: 'O man of the forests...'",
];

let index = 0;
const text = document.getElementById('text');
const nextBtn = document.getElementById('next');
const backBtn = document.getElementById('back');
const bg = document.getElementById('background');

function updateStory() {
  gsap.to(text, { opacity: 0, duration: 0.5, onComplete: () => {
    text.textContent = story[index];
    gsap.to(text, { opacity: 1, duration: 0.8 });
  }});

  // change backgrounds or scenes at certain points
  if (index === 2) bg.src = "assets/bg_river.png";
  if (index === 3) bg.src = "assets/bg_sunset.png";
}

nextBtn.addEventListener('click', () => {
  if (index < story.length - 1) {
    index++;
    updateStory();
  }
});

backBtn.addEventListener('click', () => {
  if (index > 0) {
    index--;
    updateStory();
  }
});

// animate sprites slightly
gsap.to("#fish", { y: "-=10", repeat: -1, yoyo: true, duration: 2, ease: "sine.inOut" });
gsap.to("#lumberjack", { x: "+=10", repeat: -1, yoyo: true, duration: 3, ease: "sine.inOut" });

updateStory(); // initial call
