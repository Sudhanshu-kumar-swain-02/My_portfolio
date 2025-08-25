function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// for auto typing text
const words = [
  "a MERN Stack Developer",
  "a Problem Solver",
  "a Future Engineer",
  "a Tech Explorer",
  "a Coder",
  "a Logic Builder",
];
const autoTypeElement = document.getElementById("auto-type");
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  let currentWord = words[wordIndex];

  if (!isDeleting) {
    autoTypeElement.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentWord.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1000); // Pause after typing full word
      return;
    }
  } else {
    autoTypeElement.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length; // Next word
    }
  }

  const speed = isDeleting ? 80 : 150; // Faster delete
  setTimeout(typeEffect, speed);
}

typeEffect();

/* ASO scrolling effect */
AOS.init({
  once: true,
  duration: 800,
  easing: "ease-out",
  offset: 120,
});

//chatbot effect

document.addEventListener("DOMContentLoaded", () => {
  const chatbotButton = document.getElementById("chatbot-button");
  const chatbotWindow = document.getElementById("chatbot-window");
  const chatbotSend = document.getElementById("chatbot-send");
  const chatbotInput = document.getElementById("chatbot-input");
  const chatbotMessages = document.getElementById("chatbot-messages");

  // Toggle chatbot window
  chatbotButton.addEventListener("click", () => {
    chatbotWindow.classList.toggle("show");
  });

  // Send message
  function sendMessage() {
    const msg = chatbotInput.value.trim();
    if (!msg) return;
    appendMessage(msg, "user-msg");
    chatbotInput.value = "";

    // Fake AI response (replace this with real AI later)
    setTimeout(() => {
      const botReply = getBotResponse(msg); // use your own function
      appendMessage(botReply, "bot-msg");
    }, 800);
  }

  // Send on button click
  chatbotSend.addEventListener("click", sendMessage);

  // Send on Enter key
  chatbotInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  });

  // Append messages to chat window
  function appendMessage(msg, className) {
    const div = document.createElement("div");
    div.classList.add(className);
    div.innerText = msg;
    chatbotMessages.appendChild(div);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  }

  // Example: simple rule-based AI
  function getBotResponse(msg) {
    msg = msg.toLowerCase();

    // Greetings
    if (msg.includes("hello") || msg.includes("hi") || msg.includes("hey")) {
      return "Hello! 👋 I'm Sudhanshu's AI Assistant. How can I help you today?";
    }
    // About coffee project
    else if (
      msg.includes("which technology use in cafe website") ||
      msg.includes("technologies used") ||
      msg.includes("about cafe website")
    ) {
      return "Our Café website is built using HTML for structure, CSS for styling, and JavaScript for interactivity. 🍵";
    }
    // About Sudhanshu
    else if (msg.includes("about") || msg.includes("sudhanshu")) {
      return `Sudhanshu Kumar Swain is an MCA student, skilled in frontend and backend development. He loves building projects using HTML, CSS, JavaScript, React, Node.js, and more. 💻`;
    }
    // Portfolio / Projects
    else if (
      msg.includes("portfolio") ||
      msg.includes("projects") ||
      msg.includes("work")
    ) {
      return "You can check out Sudhanshu's latest projects in the Projects section above! 🚀";
    }
    // Skills
    else if (
      msg.includes("skills") ||
      msg.includes("tech") ||
      msg.includes("technology")
    ) {
      return "Sudhanshu's technical skills include HTML, CSS, JavaScript, React, Tailwind CSS, Node.js, Express.js, MongoDB, and Git. 🛠️";
    }
    // Contact
    else if (
      msg.includes("contact") ||
      msg.includes("email") ||
      msg.includes("message")
    ) {
      return "You can contact Sudhanshu via the Contact section above or send a message using this chat!   -kumarswainsudhanshu@gmail.com📩";
    }
    // Hobbies / Interests
    else if (
      msg.includes("hobby") ||
      msg.includes("interest") ||
      msg.includes("like")
    ) {
      return "Sudhanshu enjoys coding, building projects, learning new technologies, and solving problems. 🔥";
    }
    // Fun responses
    else if (msg.includes("joke") || msg.includes("fun")) {
      return "Why do programmers prefer dark mode? Because light attracts bugs! 😆";
    } else if (msg.includes("thanks") || msg.includes("thank you")) {
      return "You're welcome! 😄 Always happy to help.";
    } else if (msg.includes("jyoti")) {
      return "Hey Jyoti! Hope you're having an amazing day! Always remember, your positivity lights up every room you enter. Keep shining! 🌟";
    } else if (msg.includes("silan")) {
      return "Hi Silan! Keep rocking your MCA journey. Coding, learning, and exploring new things—you're doing great! 💻🔥";
    } else if (msg.includes("ompriya")) {
      return "Hey Ompriya! Keep pushing yourself in MCA and enjoy every challenge. Your dedication is inspiring! 🚀";
    } else if (msg.includes("lipun")) {
      return "Hi Lipun! How is your DSA going? Keep coding and learning! 🔥";
    } else if (msg.includes("lipsha")) {
      return "Hi Lipsha! Wishing you happiness, success, and tons of fun moments every day. Keep being awesome! 🌸 Gaon ku kebe asiba?";
    } else if (msg.includes("who is soumya")) {
      return "Hey Soumya! Hope your days are filled with laughter and learning. Keep chasing your dreams! ✨ & tell me about Monalisha TATWA";
    } else if (msg.includes("good")) {
      return "That's great to hear!";
    }

    // Default fallback messages
    const fallbackMessages = [
      "Hmm, I didn't understand that. Could you ask differently? 🤔",
      "Sorry, I’m still learning. Try asking about Sudhanshu or his projects! 💡",
      "I’m here to talk about Sudhanshu, his skills, or projects. Ask me something! 🧠",
      "Oops! I didn’t catch that. Maybe ask about his portfolio or experience? 📚",
    ];

    return fallbackMessages[
      Math.floor(Math.random() * fallbackMessages.length)
    ];
  }
});
