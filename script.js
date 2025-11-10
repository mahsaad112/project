const storyText = document.getElementById('story-text');
const lumberjack = document.querySelector('.lumberjack');
const fish = document.querySelector('.fish');

const dialogues = [
  // Narration broken into smaller pieces
  { speaker: null, text: "There lived a lumberjack in the forest with the birch trees. He chopped wood from dusk till dawn." },
  { speaker: null, text: "He found satisfaction in the labor, for it allowed him solitude. The swing of his axe never wearied him, nor did he wish to cease his work." },
  { speaker: null, text: "This was all he knew. When the day's work ended, he would sit beside the river and watch the sun sink beyond the trees. He ate the supper he had prepared the day before." },

  // Dialogue starts
  { speaker: 'lumberjack', text: "One day during his supper, he notices a fish." },
  { speaker: 'fish', text: "O creature of the land, I have observed you many days by this river. Will you come to despoil the water, as you have wrought upon the forest?" },
  { speaker: 'lumberjack', text: "Sire, I have no desire to harm your home. I am here only to behold the river and the suns." },
  { speaker: 'fish', text: "I see. You seek not to destroy; you merely observe the sky and the world around. For what purpose, may I ask?" },
  { speaker: 'lumberjack', text: "I cannot answer your question. I come because it feels required of me… by my very nature." },
  { speaker: 'fish', text: "What nature do you speak of, creature of the land?" },
  { speaker: 'lumberjack', text: "The innate nature of my kind. We are drawn to the mesmerizing, to beauty beyond rational measure." },
  { speaker: 'fish', text: "Ah… I understand." },
  { speaker: 'lumberjack', text: "Truly, sire? Do not mind my curiosity, but what do you mean?" }

  // You can continue adding the rest of your Dostoevsky-style story here
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
