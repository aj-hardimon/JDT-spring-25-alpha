const messages = [
    "Are you sure?",
    "Really sure?",
    "Pookie Please?",
    "I'm going to cry... :(",
    "You're breaking my heart!",
    "REALLY sure?",
    "please?",
    "pretty please?",
    "PLEASE?",
    "PRETTY PLEASE?",
    "PLEASE PLEASE PLEASE?",
    "PLEASE PLEASE PLEASE PLEASE PL",
    "stop",
    "STOP",
    ":(",
    ":( :(",
    ":( :( :(",
    "I'm sad now",
    "No",
    "No",
    "No",
    "No",
 ];
 
let currentMessageIndex = 0;

const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");

let yesScale = 1;
let noScale = 1;

function updateYes(){
   yesButton.addEventListener('click', () => {
      document.getElementById("joe").src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fedition.cnn.com%2Finteractive%2F2021%2F03%2Fpolitics%2Fjoe-biden-photographer-cnnphotos%2Fmedia%2Fimages%2Fs_1F98DEEDD71BDC49CDBE7E13CBC026DB8607F5BCF17FD9345F8B0FFC6A5B362C_1614886075662_EdUhG4NXgAEalI.jpg&f=1&nofb=1&ipt=11ae28c80130ab174fd9219b238a19f6424777e6520f28e4effd1fffd5394ece&ipo=images";
      yesButton.textContent = "Yay!!!!";
      noButton.style.display = "none";
      yesButton.style.transform = "scale(1.6)";
   });
}

yesButton.addEventListener("click", updateYes);

noButton.addEventListener("click", () => {
   yesScale += 0.1
   yesButton.style.transform = `scale(${yesScale})`;

   noScale -= 0.1
   noButton.style.transform = `scale(${noScale})`;

   teleportButton(noButton);

   noButton.textContent = messages[currentMessageIndex];
   currentMessageIndex = (currentMessageIndex + 1) % messages.length


});

function teleportButton(button) {
   const screenWidth = window.innerWidth; // Get the width of the screen
   const screenHeight = window.innerHeight; // Get the height of the screen
   const card = document.querySelector('.card'); // Get the card element
   const cardRect = card.getBoundingClientRect(); // Get the card's position and size    // Define padding to keep the button within the screen and away from the card
   const padding = 20;    // Calculate safe boundaries for the button
   const minX = padding;
   const maxX = screenWidth - button.offsetWidth - padding;
   const minY = padding;
   const maxY = screenHeight - button.offsetHeight - padding;    // Ensure the button doesn't overlap with the card
   let randomX, randomY;
   do {
       randomX = minX + Math.random() * (maxX - minX);
       randomY = minY + Math.random() * (maxY - minY);
   } while (
       // Check if the button overlaps with the card
       randomX + button.offsetWidth > cardRect.left - padding &&
       randomX < cardRect.right + padding &&
       randomY + button.offsetHeight > cardRect.top - padding &&
       randomY < cardRect.bottom + padding
   );    // Apply the new position
   button.style.position = 'absolute'; // Ensure the button can move freely
   button.style.left = `${randomX}px`;
   button.style.top = `${randomY}px`;
}


