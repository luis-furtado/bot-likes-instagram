var followingUsers = [];
var followedUsers = [];
var notFollowBack = [];

var totalFollowing;
var totalFollowers;

var limitRequests = false;

var count = 0;

createButtonUnfollowedBack();

function createNotFollowBackContainer() {
  var notFollowBackContainer = document.createElement("div");
  notFollowBackContainer.setAttribute("class", "RnEpo Yx5HN    ");
  notFollowBackContainer.setAttribute("role", "presentation");
}

function createButtonUnfollowedBack() {
  var interval = setInterval(() => {
    var buttonsContainer = document.getElementsByClassName("k9GMp ")[0];

    if (buttonsContainer) {
      var buttonDiv = document.createElement("li");
      buttonDiv.innerHTML = `
      <button type="button" onclick="processComponents()" class="sqdOP  L3NKy _4pI4F   _8A5w5    "
      style="margin-top: -5px;">
        <span class="-nal3 ">
          Não segue de volta
        </span>
      </button>
    `;
      buttonsContainer.appendChild(buttonDiv);
      clearInterval(interval);
    }
  }, 2000);
}

async function processComponents() {
  processTotalUsers();
  await processUsers("followers");
  console.log("waiting ten minutes to proceed");
  await waitTenMinutes();
  await processUsers("following");
  notFollowBack = await processUsersNotFollowBack();
  await manipulateContainer();
  await removeUsersFollowBack();
}

function processTotalUsers() {
  var interval = setInterval(() => {
    totalFollowers = document
      .getElementsByClassName("g47SY ")[1]
      .textContent.replace(",", "");
    totalFollowing = document
      .getElementsByClassName("g47SY ")[2]
      .textContent.replace(",", "");
    if (totalFollowing && totalFollowers) {
      clearInterval(interval);
      console.log("Following " + totalFollowing);
      console.log("Followers " + totalFollowers);
      var totalUsers =
        parseFloat(totalFollowers.replace(",", "")) +
        parseFloat(totalFollowing.replace(",", ""));
      console.log("Total users " + totalUsers);
      alert(
        "Essa ação durará aproximadamente " +
          (Math.floor(totalUsers / 2000) * 15 + 1) +
          " minuto(s)"
      );
    }
  }, 200);
}

async function processUsers(user) {
  console.log("initializing process " + user);

  await clickButton();
  changeLayoutContainer();
  await processContainer();
  count = 0;
  await getUsers();
  if (user == "followers") {
    await closeContainer();
  }

  function changeLayoutContainer() {
    return new Promise((resolve) => {
      var interval = setInterval(() => {
        var title = document.getElementsByClassName("m82CD")[0];
        if (title) {
          title = title.firstChild;
          title.textContent = "Carregando...";
          var usersLoadingContainer = document.getElementsByClassName(
            "isgrP"
          )[0];
          usersLoadingContainer.classList.add("usersLoadingContainer");
          clearInterval(interval);
          resolve();
        }
      }, 200);
    });
  }

  function clickButton() {
    return new Promise((resolve) => {
      var interval = setInterval(() => {
        var buttonFollowing = document.getElementsByClassName("-nal3 ")[
          user == "following" ? 2 : 1
        ];
        if (buttonFollowing) {
          buttonFollowing.click();
          clearInterval(interval);
          resolve();
        }
      }, 200);
    });
  }

  function processContainer() {
    return new Promise((resolve) => {
      console.log("process container");
      var interval = setInterval(() => {
        containerFollowers = document.getElementsByClassName("PZuss")[0];
        if (containerFollowers) {
          clearInterval(interval);
          resolve();
        }
      }, 2000);
    });
  }

  function getUsers() {
    return new Promise((resolve) => {
      console.log("get users");
      var interval = setInterval(async () => {
        var follow = containerFollowers.childNodes[count];

        var link_username = document.getElementsByClassName(
          "FPmhX notranslate  _0imsa "
        )[count];

        if (count % 2000 == 0 && count > 0) {
          clearInterval(interval);
          console.log("call function wait ten minutes...");
          await waitTenMinutes();
          console.log("callback getUsers function");
          getUsers();
        }

        if (
          count ==
          (user == "following" ? totalFollowing - 5 : totalFollowers - 5)
        ) {
          clearInterval(interval);
          resolve();
          console.log(user == "following" ? followingUsers : followedUsers);
        }

        if (link_username) {
          var follow_username = link_username.textContent;
          follow.scrollIntoView();

          user == "following"
            ? followingUsers.push(follow_username)
            : followedUsers.push(follow_username);
        } else {
          count--;
        }

        count++;
      }, 1);
    });
  }

  function closeContainer() {
    return new Promise((resolve) => {
      console.log("close container");
      var closeButton = document.getElementsByClassName("wpO6b ")[1];
      closeButton.click();
      resolve();
    });
  }
}

async function processUsersNotFollowBack() {
  var usersNotFollowBack = followingUsers.filter(
    (user) => followedUsers.indexOf(user) == -1
  );
  console.log(usersNotFollowBack);
  return usersNotFollowBack;
}

// manipulate following container to not following back container
async function manipulateContainer() {
  var titleContainer = document.getElementsByClassName("m82CD")[0];
  var title = titleContainer.firstChild;
  title.textContent = `Não segue de volta: ${notFollowBack.length}`;

  var usersLoadingContainer = document.getElementsByClassName("isgrP")[0];
  usersLoadingContainer.classList.remove("usersLoadingContainer");

  var buttonHashtags = document.getElementsByClassName("_9MPbZ")[0];
  buttonHashtags.remove();
}

async function removeUsersFollowBack() {
  return new Promise((resolve) => {
    if (limitRequests) {
      alert(
        "Reduzimos a quantidade de usuários que não segue de volta. O instagram limita o número de requisições."
      );
    }
    console.log("remove users following back");
    var count = followedUsers.length - 1;
    var interval = setInterval(() => {
      var follow = containerFollowers.childNodes[count];

      var link_username = document.getElementsByClassName(
        "FPmhX notranslate  _0imsa "
      )[count];

      if (count < 0) {
        clearInterval(interval);
        resolve();
        console.log("finish!");
      }

      if (link_username) {
        var follow_username = link_username.textContent;
        follow.scrollIntoView();

        if (notFollowBack.indexOf(follow_username) == -1) {
          follow.remove();
        }
      } else {
        count++;
      }
      count--;
    }, 1);
  });
}

function waitTenMinutes() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("waiting ten minutes finish!...");
      resolve();
    }, 450000);
  });
}
