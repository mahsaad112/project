const storyText = document.getElementById("story-text");
const nextBtn = document.getElementById("next-btn");
const backBtn = document.getElementById("back-btn");

const lumberjack = document.querySelector(".lumberjack");
const fish = document.querySelector(".fish");
const cat = document.querySelector(".cat");

let index = 0;

const story = [
  // Opening narration
  { speaker: null, text: "There lived a lumberjack in the forest with the birch trees." },
  { speaker: null, text: "He chopped wood from dusk till dawn, enjoying his solitude." },
  { speaker: null, text: "Each evening, he’d sit by the river, watching the sun melt into gold." },

  // Conversation begins
  { speaker: "fish", text: "You like staring at the sunset, don’t you?" },
  { speaker: "lumberjack", text: "Aye, it reminds me that endings can be beautiful too." },
  { speaker: "fish", text: "I once knew of a man, who loved someone so much that he looked at her the same way. With warmth, care, and astonishment. How could someone be so breathtaking!" },
  { speaker: "fish", image: "photo1.jpg" },
  { speaker: "lumberjack", text: "Sire, oh what interesting tales you speak of. Tell me more about her..." },
  { speaker: "fish", text: "She—was who he would sing songs for, if he were a bard; she was who he would write novels for, if he had any literacy!" },
  { speaker: "fish", image: "photo2.jpg" },
  { speaker: "fish", text: "She was who he would swear oaths for, if he could ever become a knight! Her eyes could crumble him like autumn leaves; her voice tugged the strings of his very being." },
  { speaker: "fish", image: "photo3.jpg" },
  { speaker: "fish", text: "Such was she; no flattery could ever match her beauty." },
  { speaker: "fish", image: "photo4.jpg" },
  { speaker: "fish", text: "Her elegance graced the ground beneath her, her presence elevated all around her." },
  { speaker: "fish", image: "photo5.jpg" },
  { speaker: "fish", text: "But alas, she went to another adventure, far away, with a promise to return." },
  { speaker: "fish", image: "photo6.jpg" },
  { speaker: "fish", text: "She overcame every challenge. Strong, graceful, radiant." },
  { speaker: "fish", image: "photo7.jpg" },
  { speaker: "fish", text: "I sometimes wonder—does he still remember her scent, her laughter, her arms entwined with his?" },
  { speaker: "lumberjack", text: "I do remember everything. I only need to close my eyes to relive it." },
  { speaker: "lumberjack", text: "Though she’s far away, she’s still here, in everything I do." },
  { speaker: "fish", text: "Wait... are you saying you know her?" },
  { speaker: "lumberjack", text: "Yes, sire. I must return to my logs, to gather enough timber to build a bridge back to her. Till then, farewell, old friend." },

  // Cat epilogue
  { speaker: "cat", text: "Hi Eume! Happy birthday! I hope you are doing well." },
  { speaker: "cat", text: "This is now me talking to you breaking the fourth wall. Yes, I have indeed turned into a cat." },
  { speaker: "cat", text: "You're my babygirl, you know? I love you so much. And what I said in the IG story, I meant it." },
  { speaker: "cat", text: "I absolutely adore you and I cannot wait to spend my life with you. One of my favourite pastimes is fantasising about our life together." },
  { speaker: "cat", text: "And for all of these things to have happened, I'd say your birth was a PRETTY IMPORTANT THING!" },
  { speaker: "cat", text: "And to conclude, I am grateful, thankful, and downright delighted because of your existence. I love you so much!" },
];

function showText() {
  const line = story[index];
  storyText.innerHTML = line.text || "";

  // Handle sprites
  lumberjack.classList.remove("visible", "bobbing");
  fish.classList.remove("visible", "bobbing");
  cat.classList.remove("visible", "bobbing");

  if (line.speaker === "lumberjack") {
    lumberjack.classList.add("visible", "bobbing");
  } else if (line.speaker === "fish") {
    fish.classList.add("visible", "bobbing");
  } else if (line.speaker === "cat") {
    cat.classList.add("visible", "bobbing");
  }

  // Handle photo lines
  if (line.image) {
    storyText.innerHTML = `<img src="assets/${line.image}" style="max-width: 80%; border-radius: 10px;">`;
  }
}

nextBtn.addEventListener("click", () => {
  if (index < story.length - 1) index++;
  showText();
});

backBtn.addEventListener("click", () => {
  if (index > 0) index--;
  showText();
});

showText();
