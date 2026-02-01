const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

let yesSize = 1;

function moveNoButton() {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 100 - 50;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;

  yesSize += 0.2;
  yesBtn.style.transform = `scale(${yesSize})`;
}

noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("click", moveNoButton);

yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <div style="text-align:center;">
      <h1 style="color:#e63946;">YAY!!! 💖🥰</h1>
      <p>You just made me the happiest person 💕</p>
    </div>
  `;
});
