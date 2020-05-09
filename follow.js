var countFollow = 0;
var followInterval = 0;
var followIntervalTwo = 0;
var toggleFollowButton = 0;
var people;

function toggleName(name) {
  document.getElementById("buttonFollow").firstChild.data = name;
}

async function toggleFollow() {
  //create again to update the users
  await createButton();

  toggleFollowButton = !toggleFollowButton;

  if (!toggleFollowButton || !people) {
    clearInterval(followInterval);
    clearInterval(followIntervalTwo);
    toggleName("On");
  }

  toggleName("Off");

  followIntervalTwo = setInterval(() => {
    followInterval = setInterval(() => {
      var button = people[countFollow].firstChild.childNodes[1].firstChild;
      var textButton = button.textContent;
      if (textButton == "Follow") {
        button.click();
      }
      people[countFollow > 2 ? countFollow - 2 : countFollow].scrollIntoView();
      countFollow = countFollow + Math.round(Math.random() * 3 + 1);
      if (countFollow > 100) {
        clearInterval(followInterval);
      }
    }, 3000);
  }, 60000);
}

async function createButton() {
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

var checkInterval = 0;
checkInterval = setInterval(function () {
  people = document.getElementsByClassName("PZuss")[0];

  if (people) {
    people = people.childNodes;

    createButton();

    clearInterval(checkInterval);
    console.log("botFollowUnfollow loaded!");
  } else {
    console.log("botFollowUnfollow not loaded!");
  }
}, 5000);
