var people = document.getElementsByClassName("PZuss")[0].childNodes;

var countFollow = 0;
var followInterval = 0;
var toggleFollowButton = 0;

function toggleFollow() {
  toggleFollowButton = !toggleFollowButton;

  if (!toggleFollowButton) {
    clearInterval(followInterval);
    followInterval = 0;
    return;
  }

  followInterval = setInterval(() => {
    var button = people[countFollow].firstChild.childNodes[1].firstChild;
    var textButton = button.textContent;
    if (textButton == "Follow") {
      button.click();
    }
    people[countFollow].scrollIntoView();
    countFollow = countFollow + Math.round(Math.random() * 3 + 1);
    if (countFollow > 100) {
      clearInterval(followInterval);
      return;
    }
  }, 5000);
}

function createButton() {
  const newButton = document.createElement("div");

  newButton.innerHTML = `
        <div class="buttonFollow">
          <button id="buttonFollow" type="button" onClick="toggleFollow()">Bot</button>
        </div>
    `;

  const container = document.getElementsByClassName("eiUFA")[0];

  if (container) {
    // put Button of extension
    container.insertBefore(newButton, container.children[1]);
  }
  console.log("Button follow-unfollow created!");
}

console.log("botFollowUnfollow loaded!");
