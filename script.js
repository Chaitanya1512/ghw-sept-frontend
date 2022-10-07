const pKeys = document.querySelectorAll(".key");

function playSound(newUrl) {
  new Audio(newUrl).play();
  console.log(newUrl);
}

pKeys.forEach((pKey, i) => {
  const newUrl = "notes/" + (i + 1) + ".mp3";
  pKey.addEventListener("click", () => playSound(newUrl));
});
