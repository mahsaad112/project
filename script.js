const storyText = document.getElementById("story-text");
const nextBtn = document.getElementById("next-btn");
const backBtn = document.getElementById("back-btn");
const loveBtn = document.getElementById("love-btn");

const lumberjack = document.querySelector(".lumberjack");
const fish = document.querySelector(".fish");
const cat = document.querySelector(".cat");

const photoDisplay = document.querySelector(".photo-display");
const storyPhoto = document.getElementById("story-photo");

let index = 0;

const storyData = [
  { text: "There lived a lumberjack in the forest with the birch trees. He chopped wood from dusk till dawn.", photo: null, sprites: [] },
  { text: "He found satisfaction in the labor, for it allowed him solitude. The swing of his axe never wearied him, nor did he wish to cease his work.", photo: null, sprites: [] },
  { text: "This was all he knew. When the day's work ended, he would sit beside the river and watch the sun sink beyond the trees. He ate the supper he had prepared the day before.", photo: null, sprites: [] },
  { text: "One day during his supper, he notices a fish.", photo: null, sprites: ["lumberjack"] },
  { text: "O creature of the land, I have observed you many days by this river. Will you come to despoil the water, as you have wrought upon the forest?", photo: null, sprites: ["fish"] },
  { text: "Sire, I have no desire to harm your home. I am here only to behold the river and the suns.", photo: null, sprites: ["lumberjack"] },
  { text: "I see. You seek not to destroy; you merely observe the sky and the world around. For what purpose, may I ask?", photo: null, sprites: ["fish"] },
  { text: "I cannot answer your question. I come because it feels required of me… by my very nature.", photo: null, sprites: ["lumberjack"] },
  { text: "What nature do you speak of, creature of the land?", photo: null, sprites: ["fish"] },
  { text: "The innate nature of my kind. We are drawn to the mesmerizing, to beauty beyond rational measure.", photo: null, sprites: ["lumberjack"] },
  { text: "Ah… I understand.", photo: null, sprites: ["fish"] },
  { text: "Truly, sire? Do not mind my curiosity, but what do you mean?", photo: null, sprites: ["lumberjack"] },
  { text: "I once knew of a man, who loved someone so much that he looked at 'her' the same way. With warmth, care and astonishment. How could someone be so breathtaking!", photo: "assets/photo1.jpg", sprites: ["fish"] },
  { text: "Sire, oh what interesting tales you speak of. Tell me more about her...", photo: null, sprites: ["lumberjack"] },
  { text: "She—was who he would sing songs for if he were a bard; she was who he would write novels for if he had any literacy! She was who he would swear oaths for if he could ever become a knight! She was who, whose eyes could crumble him like leaves in autumn, whose voice had such deep pull on the strings of his existence.", photo: "assets/photo2.jpg", sprites: ["fish"] },
  { text: "Such was she, any and every form of flattery could not do justice to her beauty.", photo: "assets/photo3.jpg", sprites: ["fish"] },
  { text: "Her elegance graced the ground beneath her. Her presence elevated everything around her. She had the strongest effect on him though.", photo: "assets/photo4.jpg", sprites: ["fish"] },
  { text: "But alas, she went on to another adventure. Far away in distant lands, leaving him alone. No, not for eternity- a promise was kept for their reunion. That could not stop her though.", photo: "assets/photo5.jpg", sprites: ["fish"] },
  { text: "She strove for greater feats and harder challenges. She overcame them all. How, you ask? She had been the strongest of them all. In her it was known that not only was she charming as a wildflower grove in the middle of the plains—", photo: "assets/photo6.jpg", sprites: ["fish"] },
  { text: "Her mind was mesmerising too. The way she thought, cared, her way of life. It was all simply perfection.", photo: "assets/photo7.jpg", sprites: ["fish"] },
  { text: "I sometimes think about them. Does he still remember her scent? How her eyes fluttered when there was tension between his eyes and hers, how she frown-laughed with her lips whenever he made the absolute worst of jokes, how she locked her arms between his?", photo: null, sprites: ["lumberjack"] },
  { text: "I do remember everything. I only need to close my eyes to relive it. She is right here with me. I know she exists far away in the real world, and one day, soon, we will meet again.", photo: "assets/photo8.jpg", sprites: ["lumberjack"] },
  { text: "But the presence and the impact she has left on my life is immeasurable. It dictates me and my decisions even-", photo: null, sprites: ["lumberjack"] },
  { text: "Sorry to interrupt you, o creature of the lands, but your manner of speech, are you implying you know 'her'?", photo: null, sprites: ["fish"] },
  { text: "Yes, sire. I am very overdue a meeting with her. I have to go back to cut logs again, till I have enough timber to build my own bridge back to her. It was good talking to you, sir. I hope we will meet again someday.", photo: null, sprites: ["lumberjack"] },
  { text: "Hi Eume! Happy birthday! I hope you are doing well. I miss you so so much, I can't wait to see you, whenever I do you're getting smothered with kisses.", photo: null, sprites: ["cat"] },
  { text: "This is now me talking to you breaking the fourth wall. Yes, I have indeed turned into a cat. No it is non refundable.", photo: null, sprites: ["cat"] },
  { text: "You're my babygirl, you know? I love you so much. And what I said in the Instagram story, I meant it. I can not think of any other reason to smile rather than the ones you give me.", photo: null, sprites: ["cat"] },
  { text: "I absolutely adore you and I cannot wait to spend my life with you. One of my favourite pastimes is fantasising about our life together. I keep on drifting off to think about you all the time. And it's a valid excuse too so no one can blame me :P", photo: null, sprites: ["cat"] },
  { text: "And for all of these things to have happened, I'd say your birth was a PRETTY IMPORTANT THING! THIS DAY IS VEEEEEERY SPECIAL FOR YOU! BECAUSE YOU'RE THE MOST SPECIAL PERSON EVER!", photo: null, sprites: ["cat"] },
  { text: "And to conclude, I am grateful, thankful, and downright delighted because of your existence. I love you so much! Please do allow me to live my dream and grow old with you.", photo: null, sprites: ["cat"] },
];

function updateStory() {
  const story = storyData[index];
  
  // Update text
  storyText.textContent = story.text;
  
  // Update photo
  if (story.photo) {
    storyPhoto.src = story.photo;
    photoDisplay.style.display = "block";
    storyPhoto.classList.add("visible");
  } else {
    photoDisplay.style.display = "none";
    storyPhoto.classList.remove("visible");
  }
  
  // Update sprites
  [lumberjack, fish, cat].forEach(sprite => sprite.style.opacity = "0");
  story.sprites.forEach(spriteName => {
    document.querySelector("." + spriteName).style.opacity = "1";
  });
  
  // Show love button at the end
  if (index === storyData.length - 1) {
    loveBtn.style.display = "block";
  } else {
    loveBtn.style.display = "none";
  }
}

nextBtn.addEventListener("click", () => {
  if (index < storyData.length - 1) {
    index++;
    updateStory();
  }
});

backBtn.addEventListener("click", () => {
  if (index > 0) {
    index--;
    updateStory();
  }
});

// Initialize
updateStory();