const storyText = document.getElementById('story-text');
const lumberjack = document.querySelector('.lumberjack');
const fish = document.querySelector('.fish');

const dialogues = [
  // Narration only
  { speaker: null, text: "There lived a lumberjack in the forest with the birch trees. He chopped wood from dusk till dawn." },
  { speaker: null, text: "He enjoyed his work; it allowed him to be by himself. Chopping wood never made him tired, nor did he ever want to stop being a lumberjack." },
  { speaker: null, text: "It was all he knew. After the day's work was done, he would sit near the river and watch the sun setting beyond the trees. He would have the supper he cooked for himself the day before." },

  // Dialogue starts
  { speaker: 'lumberjack', text: "One day during his supper, he finds a fish." },
  { speaker: 'fish', text: "O beast of the lands. I have seen you many a day near the river. Will you come to destroy the water-land, the way you have waged war against the forest?" },
  { speaker: 'lumberjack', text: "Sire, I have no wish nor desire to harm your abode. I simply come here to awe at the sight of the river and the suns." },
  { speaker: 'fish', text: "I see. You seek not destruction, you merely gaze at the sky and the world around. What for, may I ask?" },
  { speaker: 'lumberjack', text: "I humbly apologise. I do not have an answer to your query. I come here because I think I am required to... by my very nature?" },
  { speaker: 'fish', text: "What nature do you speak of, o beast of the lands?" },
  { speaker: 'lumberjack', text: "The innate nature of my species. We are drawn by mesmerising sights. Beauty of which we can not rationally measure." },
  { speaker: 'fish', text: "Oh. I understand." },
  { speaker: 'lumberjack', text: "Really sire? Do not mind my curiosity, but, what do you mean?" }

  // Continue adding the rest of your story
];

let index = 0;

function showDialogue(i) {
  const current = dialogues[i];

  // Text fade-in
  storyText.classList.remove('fade-in');
  void storyText.offsetWidth; // trigger reflow
  storyText.textContent = current.text;
  storyText.classList.add('fade-in');

  // Hide sprites initially
  [lumberjack, fish].forEach(sprite => {
    sprite.style.display = 'none';
    sprite.classList.remove('bobbing');
    sprite.style.opacity = 0;
  });

  // Show only the active speaker
  if (current.speaker === 'lumberjack') {
    lumberjack.style.display = 'block';
    setTimeout(() => { lumberjack.style.opacity = 1; }, 50);
    lumberjack.classList.add('bobbing');
  }
  if (current.speaker === 'fish') {
    fish.style.display = 'block';
    setTimeout(() => { fish.style.opacity = 1; }, 50);
    fish.classList.add('bobbing');
  }
}

// Next button
document.getElementById('next-btn').addEventListener('click', () => {
  if (index < dialogues.length - 1) index++;
  showDialogue(index);
});

// Back button
document.getElementById('back-btn').addEventListener('click', () => {
  if (index > 0) index--;
  showDialogue(index);
});

// Initial display
showDialogue(index);
