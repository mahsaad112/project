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

const story = [
  { speaker: null, text: "There lived a lumberjack in the forest with the birch trees." },
  { speaker: null, text: "He chopped wood from dusk till dawn, enjoying his work for the solitude it brought." },
  { speaker: null, text: "When the day ended, he would sit near the river and watch the sun sink beyond the trees, eating supper he had prepared the day before." },
  { speaker: "fish", text: "I once knew of a man, who loved someone so much that he looked at 'her' the same way. With warmth, care and an extensive amount of astonishment. How could someone be so breathtaking! (picture 1)" },
  { speaker: "lumberjack", text: "Sire, oh what interesting tales you speak of. Tell me more about her..." },
  { speaker: "fish", text: "She—was who, he would sing songs for, if he were a bard; she was who, he would write novels for, if he had any literacy! she was who, he would swear oaths for, if he could ever become a knight! she was who, whose eyes had the ability to crumble him like he were leaves which fell in autumn, whose voice had such deep pull on the strings of his existence. (picture 2)" },
  { speaker: "fish", text: "Such was she, any and every form of flattery could not do justice to her beauty. (picture 3)" },
  { speaker: "fish", text: "Her elegance graced the ground beneath her. Her presence elevated everything around her. She had the strongest effect on him though. (picture 4)" },
  { speaker: "fish", text: "But alas, she went on to another adventure. Far away in distant lands, leaving him alone. No, not for eternity—a promise was kept for their reunion. (picture 5)" },
  { speaker: "fish", text: "She strove for greater feats and harder challenges. She overcame them all. How, you ask? She had been the strongest of them all. (picture 6)" },
  { speaker: "fish", text: "Her mind was mesmerising too. The way she thought, cared, her way of life—it was all simply perfection. (picture 7)" },
  { speaker: "fish", text: "I sometimes think about them. Does he still remember her scent? How her eyes fluttered when tension filled the air, how she laughed even when he made the worst jokes, how she locked her arms with his?" },
  { speaker: "lumberjack", text: "I do remember everything. I only need to close my eyes to relive it. She is right here with me. I know she exists far away in the real world, and one day, soon, we will meet again. (picture 8)" },
  { speaker: "lumberjack", text: "But the presence and the impact she has left on my life is immeasurable. It dictates me and my decisions even—" },
  { speaker: "fish", text: "Sorry to interrupt you, o creature of the lands, but your manner of speech—are you implying you know 'her'?" },
  { speaker: "lumberjack", text: "Yes, sire. I am long overdue a meeting with her. I must return to cutting logs until I have enough timber to build my own bridge back to her. It was good talking to you, sir. I hope we meet again someday." },
  { speaker: "cat", text: "Hi Eume! Happy birthday! I hope you are doing well." },
  { speaker: "cat", text: "This is now me talking to you breaking the fourth wall. Yes, I have indeed turned into a cat." },
  { speaker: "cat", text: "You're my babygirl, you know? I love you so much. And what I said in the IG story, I meant it." },
  { speaker: "cat", text: "I absolutely adore you and I cannot wait to spend my life with you. One of my favourite pastimes is fantasising about our life together." },
  { speaker: "cat", text: "And for all of these things to have happened, I'd say your birth was a PRETTY IMPORTANT THING!" },
  { speaker: "cat", text: "And to conclude, I am grateful, thankful, and downright DELIGHTED because of your existence. I love you so much!" }
];

function updateScene() {
  const line = story[index];
  storyText.style.opacity = 0;

  // Hide love button unless final
  loveBtn.style.display = (index === story.length - 1) ? "block" : "none";

  // Reset sprites
  [lumberjack, fish, cat].forEach(s => {
    s.style.opacity = 0;
    s.classList.remove("bobbing");
  });

  setTimeout(() => {
    storyText.textContent = line.text;
    storyText.style.opacity = 1;

    // Sprite visibility
    if (line.speaker === "lumberjack") {
      lumberjack.style.opacity = 1;
      lumberjack.classList.add("bobbing");
    } else if (line.speaker === "fish") {
      fish.style.opacity = 1;
      fish.classList.add("bobbing");
    } else if (line.speaker === "cat") {
      cat.style.opacity = 1;
      cat.classList.add("bobbing");
    }

    // Handle photo
    if (line.text.toLowerCase().includes("(picture")) {
      const match = line.text.match(/\(picture\s*(\d+)\)/i);
      if (match) {
        const num = match[1];
        storyPhoto.src = `assets/photo${num}.png`;
        photoDisplay.style.display = "block";
        setTimeout(() => storyPhoto.classList.add("visible"), 50);
      }
    } else {
      photoDisplay.style.display = "none";
      storyPhoto.classList.remove("visible");
    }

  }, 400);
}

nextBtn.addEventListener("click", () => {
  if (index < story.length - 1) {
    index++;
    updateScene();
  }
});

backBtn.addEventListener("click", () => {
  if (index > 0) {
    index--;
    updateScene();
  }
});

// Start story
updateScene();
