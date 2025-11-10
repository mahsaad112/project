const storyText = document.getElementById('story-text');
const lumberjack = document.querySelector('.lumberjack');
const fish = document.querySelector('.fish');

const dialogues = [
  { speaker: 'lumberjack', text: "There lived a lumberjack in the forest with the birch trees..." },
  { speaker: 'fish', text: "O beast of the lands. I have seen you many a day near the river..." },
  { speaker: 'lumberjack', text: "Sire, I have no wish nor desire to harm your abode..." },
  { speaker: 'fish', text: "I once knew someone who also only ever wanted to gaze at something beautiful..." }
  // Add more dialogues here
];

let index = 0;

function showDialogue(i) {
  storyText.textContent = dialogues[i].text;

  // Ensure fish is visible after first paragraph
  if (i >= 1) {
    fish.style.display = 'block';
  }

  // Remove bobbing from both
  lumberjack.classList.remove('bobbing');
  fish.classList.remove('bobbing');

  // Apply bobbing only to current speaker
  if (dialogues[i].speaker === 'lumberjack') {
    lumberjack.classList.add('bobbing');
  }
  if (dialogues[i].speaker === 'fish') {
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
