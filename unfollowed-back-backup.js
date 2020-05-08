var client_username = document.getElementsByClassName(
  "_7UhW9       fKFbl yUEEX   KV-D4            fDxYl     "
)[0].textContent;

var followerProfile = document.getElementsByClassName(
  "FPmhX notranslate  _0imsa "
)[0];

followerProfile.click();

var containerFollowers;
var verified = false;

document.addEventListener("DOMContentLoaded", processComponents());

function processComponents() {
  processButtonFollowing();
  processContainerFollowers();
}

function processButtonFollowing() {
  var interval = setInterval(() => {
    var buttonFollowing = document.getElementsByClassName("-nal3 ")[2];
    if (buttonFollowing) {
      buttonFollowing.click();
      clearInterval(interval);
    }
  }, 200);
}

function processContainerFollowers() {
  var interval = setInterval(() => {
    containerFollowers = document.getElementsByClassName("PZuss")[0];
    if (containerFollowers) {
      console.log("container followers loaded!");
      verifyFollowing();
      clearInterval(interval);
    }
  }, 200);
}

function verifyFollowing() {
  var count = 0;
  var interval = setInterval(() => {
    var follow = containerFollowers.childNodes[count];
    // var follow_username =
    //   // follow.firstChild.firstChild.childNodes[1].firstChild.firstChild.text;
    //   follow.firstChild.childNodes[1].firstChild.firstChild.firstChild
    //     .firstChild.text;

    var link_username = document.getElementsByClassName(
      "FPmhX notranslate  _0imsa "
    )[count];

    if (!link_username) {
      clearInterval(interval);
      console.log("client user not found");
      console.log(count);
    }

    var follow_username = link_username.textContent;

    console.log(follow_username);

    if (follow_username === client_username) {
      verified = true;
      clearInterval(interval);
      console.log("verified");
    }

    follow.scrollIntoView();
    count++;
  }, 200);
}
