function handleYesClick() {
  window.location.href = "yes_page.html";
}

const noBtn = document.getElementById("noBtn");
const noMessage = document.getElementById("noMessage");

const messages = [
  "Seriouslyyyy?? 🥺💔",
  "Aww nooo please don’t 😭💖",
  "That hurt my heart 😣💔",
  "Why are you running from love 🥹💞",
  "Heyyy!! that’s not fair 😤💖",
  "Choose love, not NO 🫶❤️"
];

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - 120);
  const y = Math.random() * (window.innerHeight - 60);

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;

  const msg = messages[Math.floor(Math.random() * messages.length)];
  noMessage.textContent = msg;
  noMessage.style.display = "block";

  setTimeout(() => {
    noMessage.style.display = "none";
  }, 1200);
});

noBtn.addEventListener("click", (e) => {
  e.preventDefault();
});
