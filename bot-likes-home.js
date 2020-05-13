var interval = 0;
var consecutiveLikesAlreadyRegistred = 0;
var toggleBotButton = 0;

function toggleName(name) {
  document.getElementById("activeButton").textContent = name;
}

function toggleBot() {
  toggleBotButton = !toggleBotButton;

  toggleName("Parar");

  var mainDiv = document.getElementsByClassName("cGcGK")[0].children[1]
    .children[0];

  count = 0;
  (function loop() {
    if (!toggleBotButton) {
      clearInterval(interval);
      interval = 0;
      toggleName("Iniciar");
      return;
    }

    var rand = Math.random() * 3000 + 2000;
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
          toggleName("Iniciar");
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

function createButton() {
  const divExtensionButton = document.createElement("div");

  divExtensionButton.innerHTML = `
        <div>
          <button id="activeButton" type="button" onClick="toggleBot()" class="sqdOP  L3NKy _4pI4F   _8A5w5    "
          style="margin-top: -4px;">Iniciar</button>
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
