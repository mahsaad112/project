const storyText = document.getElementById("story-text");
const nextBtn = document.getElementById("next-btn");
const backBtn = document.getElementById("back-btn");
const fishSprite = document.querySelector(".fish");

// Your story paragraphs
const story = [
  "There lived a lumberjack in the forest with the birch trees. He chopped wood from dusk till dawn.",
  "He enjoyed his work. It allowed him to be by himself.",
  "After the day's work, he would sit by the river and watch the sun fade beyond the trees.",
  "One day, during his supper, he finds a fish.",  // fish appears here
  "The fish says, 'O beast of the lands. I have seen you many a day near the river. Will you come to destroy the water-land, the way you have waged war against the forest?'",  
  "The lumberjack replies, 'Sire, I have no wish nor desire to harm your abode. I simply come here to awe at the sight of the river and the suns.'",
  "'I see. You seek not destruction, you merely gaze at the sky and the world around. What for, may I ask?'",
  "'I humbly apologise. I do not have an answer to your query. I come here because I think I am required to... by my very nature?'",
  "'What nature do you speak of, o beast of the lands?'",
  "'The innate nature of my species. We are drawn by mesmerising sights. Beauty of which we cannot rationally measure.'",
  "'Oh. I understand.'",
  "'Really sire? Do not mind my curiosity, but, what do you mean?'"
];

let index = 0;

function showText() {
  // Show or hide fish sprite
  if (index >= 3) { // index 3 is where fish first appears
    fishSprite.style.display = "block";
  } else {
    fishSprite.style.display = "none";
  }

  // Fade in text
  storyText.style.opacity = 0;
  setTimeout(() => {
    storyText.textContent = story[index];
    storyText.style.opacity = 1;
  }, 200);
}

// Next paragraph
nextBtn.addEventListener("click", () => {
  if (index < story.length - 1) {
    index++;
    showText();
  }
});

// Previous paragraph
backBtn.addEventListener("click", () => {
  if (index > 0) {
    index--;
    showText();
  }
});

// Initialize first paragraph
showText();
