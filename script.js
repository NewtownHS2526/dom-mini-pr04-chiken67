// 1. Select Elements
const tuxBtn = document.getElementById('tux-button');
const daisyBtn = document.getElementById('daisy-button');
const rockyBtn = document.getElementById('rocky-button');

const tuxPenguin = document.getElementById('tux-penguin');
const daisyPenguin = document.getElementById('daisy-penguin');
const rockyPenguin = document.getElementById('rocky-penguin');

const winnerDisplay = document.getElementById('winner-display');
const winnerText = document.getElementById('winner-text');
const resetBtn = document.getElementById('reset-btn');

// 2. Game State
let positions = {
  tux: 0,
  daisy: 0,
  rocky: 0
};

let gameActive = true;
const FINISH_LINE = 90; // The percentage needed to win
const SLIDE_AMOUNT = 6; // How far they move per click

// 3. Movement Function
function slidePenguin(name, element) {
  // If game is over, stop buttons from working
  if (!gameActive) return;

  // Update position logic
  positions[name] += SLIDE_AMOUNT;

  // Update Visuals (CSS)
  element.style.left = positions[name] + '%';

  // Check for Win
  if (positions[name] >= FINISH_LINE) {
    declareWinner(name);
  }
}

// 4. Winner Function
function declareWinner(name) {
  gameActive = false;
  // Capitalize first letter
  const formattedName = name.charAt(0).toUpperCase() + name.slice(1);
  winnerText.textContent = `🎉 ${formattedName} wins the race!`;
  winnerDisplay.classList.remove('hidden');
}

// 5. Reset Function
function resetGame() {
  // Reset Data
  positions = { tux: 0, daisy: 0, rocky: 0 };
  gameActive = true;

  // Reset Visuals
  tuxPenguin.style.left = '0%';
  daisyPenguin.style.left = '0%';
  rockyPenguin.style.left = '0%';

  // Hide winner banner
  winnerDisplay.classList.add('hidden');
}

// 6. Event Listeners
tuxBtn.addEventListener('click', () => slidePenguin('tux', tuxPenguin));
daisyBtn.addEventListener('click', () => slidePenguin('daisy', daisyPenguin));
rockyBtn.addEventListener('click', () => slidePenguin('rocky', rockyPenguin));

resetBtn.addEventListener('click', resetGame);