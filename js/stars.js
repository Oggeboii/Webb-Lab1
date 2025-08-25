
const stars = document.getElementsByClassName("star");
const output = document.getElementById("output");

function gfg(n) {
  resetStars();

  const classes = ["one", "two", "three", "four", "five"];
  const cls = classes[n - 1];

  for (let i = 0; i < n; i++) {
    stars[i].className = "star " + cls;
  }

  output.innerText = `Rating is: ${n}/5`;
}

function resetStars() {
  for (let i = 0; i < stars.length; i++) {
    stars[i].className = "star";
  }
}
