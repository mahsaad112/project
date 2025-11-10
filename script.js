const storyText = document.getElementById("story-text");
const nextBtn = document.getElementById("next-btn");
const backBtn = document.getElementById("back-btn");

const story = [
  "There lived a lumberjack in the forest with the birch trees. He chopped wood from dusk till dawn.",
  "He enjoyed his work. It allowed him to be by himself.",
  "After the day's work, he would sit by the river and watch the sun fade beyond the trees.",
  "One day, during his supper, he finds a fish."
];

let index = 0;

function showText() {
  storyText.style.opacity = 0;
  setTimeout(() => {
    storyText.textContent = story[index];
    storyText.style.opacity = 1;
  }, 200);
}

nextBtn.addEventListener("click", () => {
  if (index < story.length - 1) {
    index++;
    showText();
  }
});

backBtn.addEventListener("click", () => {
  if (index > 0) {
    index--;
    showText();
  }
});

// Load first text
showText();
