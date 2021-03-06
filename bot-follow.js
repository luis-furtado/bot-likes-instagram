var countFollow = 0;
var followInterval = 0;
var toggleFollowButton = 0;
var people;

function toggleNameFollow(name) {
  document.getElementById("buttonFollow").firstChild.data = name;
}

function enableBotFollowButton(enabled) {
  var botFollowButton = document.getElementById("buttonFollow");
  botFollowButton.disabled = enabled ? false : true;
}

function waitFiveMinutes() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("wait 5 minutes successfull!!!");
      resolve();
    }, 300000);
  });
}

function toggleFollow() {
  enableBotFollowButton(true);

  toggleFollowButton = !toggleFollowButton;

  if (!toggleFollowButton || !people) {
    clearInterval(followInterval);
    toggleNameFollow("Start Bot");
    return;
  }

  toggleNameFollow("Stop");

  followInterval = setInterval(async () => {
    var button = people[countFollow].firstChild.childNodes[1].firstChild;
    var textButton = button.textContent;
    if (textButton == "Follow") {
      button.click();
    }
    people[countFollow > 2 ? countFollow - 2 : countFollow].scrollIntoView();
    countFollow++;
    if (countFollow % 10 == 0) {
      clearInterval(followInterval);
      toggleFollowButton = !toggleFollowButton;
      toggleNameFollow("Waiting 5 minutes...");
      enableBotFollowButton(false);
      await waitFiveMinutes();
      console.log("successfull, callback toggleFollow()");
      toggleFollow();
    }
  }, 1000);
}

function createButton() {
  // alert(
  //   "O instagram só permite que cada conta siga apenas 10 usuários por minuto."
  // );
  const newButton = document.createElement("div");
  newButton.classList.add("buttonFollow");

  newButton.innerHTML = `
        <button class="sqdOP  L3NKy _4pI4F   _8A5w5    "
        style="margin-top: 4px;" id="buttonFollow" type="button" onClick="toggleFollow()">Start Bot</button>
  `;

  const container = document.getElementsByClassName("eiUFA")[0];

  if (container) {
    // put Button of extension
    if (container.firstChild.getAttribute("class") == "buttonFollow") {
      return;
    }
    container.insertBefore(newButton, container.children[1]);
  }
  console.log("Button bot-follow created!");
}

var checkInterval = 0;
checkInterval = setInterval(function () {
  people = document.getElementsByClassName("PZuss")[0];

  if (people) {
    people = people.childNodes;

    createButton();

    clearInterval(checkInterval);
    console.log("botFollowButton loaded!");
  } else {
    console.log("botFollowButton not loaded!");
  }
}, 5000);
