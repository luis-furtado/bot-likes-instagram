var followingUsers = [];
var followedUsers = [];
var notFollowBack = [];

var totalFollowing;
var totalFollowers;

var limitRequests = false;

createButtonUnfollowedBack();

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
  await processUsers("following");
  notFollowBack = await processUsersNotFollowBack();
  await manipulateContainer();
  await removeUsersFollowBack();
}

function processTotalUsers() {
  var interval = setInterval(() => {
    totalFollowers = document.getElementsByClassName("g47SY ")[1].textContent;
    totalFollowing = document.getElementsByClassName("g47SY ")[2].textContent;
    if (totalFollowing && totalFollowers) {
      clearInterval(interval);
      console.log("Following " + totalFollowing);
      console.log("Followers " + totalFollowers);
    }
  }, 200);
}

async function processUsers(user) {
  console.log("initializing process " + user);

  await clickButton();
  changeLayoutContainer();
  await processContainer();
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
      }, 2000);
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
      }, 2000);
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
      var count = 0;
      var interval = setInterval(() => {
        var follow = containerFollowers.childNodes[count];

        var link_username = document.getElementsByClassName(
          "FPmhX notranslate  _0imsa "
        )[count];

        if (
          count == (user == "following" ? totalFollowing : totalFollowers) ||
          count > 500
        ) {
          // if (count > 1000) {
          //   limitRequests = true;
          // }
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

  // var containerLoading = document.createElement("div");
  // containerLoading.className = "containerLoading";

  // var containerInsideLoadingContainer = document.createElement("div");
  // containerInsideLoadingContainer.className = "containerInsideLoadingContainer";
  // containerInsideLoadingContainer.innerHTML = `
  //   <h3 class="loadingIcon">Carregando...</h3>
  // `;

  // containerLoading.appendChild(containerInsideLoadingContainer);

  // var container = document.getElementsByClassName("pbNvD  fPMEg    HYpXt")[0];
  // container.appendChild(containerLoading);
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
