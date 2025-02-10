const headings = [
  "the Sanctity of Yogmaya Maiya",
  "the Divine Legacy",
  "the Worship and Rituals",
  "the Divine Presence",
  "the Spiritual Heart of Our Temple"
];

let index = 0;
const headingElement = document.getElementById("abouthead");

function changeHeading() {
headingElement.style.opacity = "0"; // Start fade-out
setTimeout(() => {
  headingElement.innerText = "A Glimpse into " + headings[index];
  headingElement.style.opacity = "1";
  index = (index + 1) % headings.length;
}, 500);
}

setInterval(changeHeading, 3500);