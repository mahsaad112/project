const storyText = document.getElementById('story-text');
const lumberjack = document.querySelector('.lumberjack');
const fish = document.querySelector('.fish');

const dialogues = [
  { speaker: 'lumberjack', text: "There lived a lumberjack in the forest..." },
  { speaker: 'fish', text: "O beast of the lands..." },
  { speaker: 'lumberjack', text: "Sire, I have no wish..." },
  // add more...
];

let index = 0;

function showDialogue(i) {
  storyText.textContent = dialogues[i].text;

  // Remove bobbing from both
  lumberjack.classList.remove('bobbing');
  fish.classList.remove('bobbing');

  // Show fish if it's fish's turn
  if (dialogues[i].speaker === 'fish') {
    fish.style.display = 'block';
    fish.classList.add('bobbing');
  } else {
    fish.style.display = 'none';
  }

  // Lumberjack bobs if it's his turn
  if (dialogues[i].speaker === 'lumberjack') {
    lumberjack.classList.add('bobbing');
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
