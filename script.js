const storyText = document.getElementById('story-text');
const lumberjack = document.querySelector('.lumberjack');
const fish = document.querySelector('.fish');
const storyPhoto = document.getElementById('story-photo');

const dialogues = [
  // Initial narration - no sprites
  { speaker: null, text: "There lived a lumberjack in the forest with the birch trees. He chopped wood from dusk till dawn.", photo: null },
  { speaker: null, text: "He found satisfaction in the labor, for it allowed him solitude. The swing of his axe never wearied him, nor did he wish to cease his work.", photo: null },
  { speaker: null, text: "This was all he knew. When the day's work ended, he would sit beside the river and watch the sun sink beyond the trees. He ate the supper he had prepared the day before.", photo: null },

  // Dialogue starts
  { speaker: 'lumberjack', text: "One day during his supper, he notices a fish.", photo: null },
  { speaker: 'fish', text: "O creature of the land, I have observed you many days by this river. Will you come to despoil the water, as you have wrought upon the forest?", photo: null },
  { speaker: 'lumberjack', text: "Sire, I have no desire to harm your home. I am here only to behold the river and the suns.", photo: null },
  { speaker: 'fish', text: "I see. You seek not to destroy; you merely observe the sky and the world around. For what purpose, may I ask?", photo: null },
  { speaker: 'lumberjack', text: "I cannot answer your question. I come because it feels required of me… by my very nature.", photo: null },
  { speaker: 'fish', text: "What nature do you speak of, creature of the land?", photo: null },
  { speaker: 'lumberjack', text: "The innate nature of my kind. We are drawn to the mesmerizing, to beauty beyond rational measure.", photo: null },
  { speaker: 'fish', text: "Ah… I understand.", photo: null },
  { speaker: 'lumberjack', text: "Truly, sire? Do not mind my curiosity, but what do you mean?", photo: null },
  { speaker: 'fish', text: "I once knew of a man, who loved someone so much that he looked at 'her' the same way. With warmth, care and astonishment. How could someone be so breathtaking!", photo: 'assets/photo1.jpg' },
  { speaker: 'lumberjack', text: "Sire, oh what interesting tales you speak of. Tell me more about her...", photo: null },
  { speaker: 'fish', text: "She—was who he would sing songs for if he were a bard; she was who he would write novels for if he had any literacy! She was who he would swear oaths for if he could ever become a knight! She was who, whose eyes could crumble him like leaves in autumn, whose voice had such deep pull on the strings of his existence.", photo: 'assets/photo2.jpg' },
  { speaker: 'fish', text: "Such was she, any and every form of flattery could not do justice to her beauty.", photo: 'assets/photo3.jpg' },
  { speaker: 'fish', text: "Her elegance graced the ground beneath her. Her presence elevated everything around her. She had the strongest effect on him though.", photo: 'assets/photo4.jpg' },
  { speaker: 'fish', text: "But alas, she went on to another adventure. Far away in distant lands, leaving him alone. No, not for eternity—a promise was kept for their reunion. That could not stop her though.", photo: 'assets/photo5.jpg' },
  { speaker: 'fish', text: "She strove for greater feats and harder challenges. She overcame them all. How, you ask? She had been the strongest of them all. In her it was known that not only was she charming as a wildflower grove in the middle of the plains—", photo: 'assets/photo6.jpg' },
  { speaker: 'fish', text: "Her mind was mesmerising too. The way she thought, cared, her way of life. It was all simply perfection.", photo: 'assets/photo7.jpg' },
  { speaker: 'fish', text: "I sometimes think about them. Does he still remember her scent? How her eyes fluttered when there was tension between his eyes and hers, how she frown-laughed with her lips whenever he made the absolute worst of jokes, how she locked her arms between his?", photo: null },
  { speaker: 'lumberjack', text: "I do remember everything. I only need to close my eyes to relive it. She is right here with me. I know she exists far away in the real world, and one day, soon, we will meet again.", photo: 'assets/photo8.jpg' },
  { speaker: 'lumberjack', text: "But the presence and the impact she has left on my life is immeasurable. It dictates me and my decisions even—", photo: null },
  { speaker: 'fish', text: "Sorry to interrupt you, o creature of the lands, but your manner of speech, are you implying you know 'her'?", photo: null },
  { speaker: 'lumberjack', text: "Yes, sire. I am very overdue a meeting with her. I have to go back to cut logs again, till I have enough timber to build my own bridge back to her. It was good talking to you, sir. I hope we will meet again someday.", photo: null }
];

let index = 0;

function showDialogue(i) {
  const current = dialogues[i];

  // Fade-in text
  storyText.classList.remove('fade-in');
  void storyText.offsetWidth;
  storyText.textContent = current.text;
  storyText.classList.add('fade-in');

  // Hide sprites
  [lumberjack, fish].forEach(sprite => {
    sprite.style.display = 'none';
    sprite.classList.remove('bobbing');
    sprite.style.opacity = 0;
  });

  // Show only active speaker
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

  // Show photo if any
  if (current.photo) {
    storyPhoto.src = current.photo;
    storyPhoto.style.opacity = 1;
  } else {
    storyPhoto.style.opacity = 0;
  }
}

// Button listeners
document.getElementById('next-btn').addEventListener('click', () => {
  if (index < dialogues.length - 1) index++;
  showDialogue(index);
});

document.getElementById('back-btn').addEventListener('click', () => {
  if (index > 0) index--;
  showDialogue(index);
});

// Initial call
showDialogue(index);
