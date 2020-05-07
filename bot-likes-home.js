var interval = 0;
var consecutiveLikesAlreadyRegistred = 0;
var toggleBotButton = 0;

function toggleBot() {
  toggleBotButton = !toggleBotButton;

  toggleName("Off");

  var mainDiv = document.getElementsByClassName("cGcGK")[0].children[1]
    .children[0];

  count = 0;
  (function loop() {
    if (!toggleBotButton) {
      clearInterval(interval);
      interval = 0;
      toggleName("On");
      return;
    }

    var rand = Math.random() * 3000 + 1000;
    console.log(rand);
    interval = setTimeout(function () {
      var button =
        mainDiv.children[count].children[2].children[0].children[0].children[0];
      button.scrollIntoView();
      var icon = button.firstChild;
      var iconAttribute = icon.getAttribute("aria-label");
      if (iconAttribute == "Like") {
        button.click();
        consecutiveLikesAlreadyRegistred = 0;
      } else {
        consecutiveLikesAlreadyRegistred++;
        if (consecutiveLikesAlreadyRegistred == 5) {
          clearInterval(interval);
          interval = 0;
          toggleName("On");
          consecutiveLikesAlreadyRegistred = 0;
          return;
        }
      }
      if (count < 4) {
        count++;
      }
      loop();
    }, rand);
  })();
}

function toggleName(name) {
  document.getElementById("activeButton").firstChild.data = name;
}

function createButton() {
  const divExtensionButton = document.createElement("div");

  divExtensionButton.innerHTML = `
        <div class="buttonActive">
          <button id="activeButton" type="button" onClick="toggleBot()">Bot</button>
        </div>
    `;

  const navButtons = document.getElementsByClassName("_47KiJ")[0];

  if (navButtons) {
    // put Button of extension
    navButtons.insertBefore(divExtensionButton, navButtons.firstChild);
  }
  console.log("Button bot-likes-home created!");
}

createButton();

console.log("botLikesHome loaded!");
