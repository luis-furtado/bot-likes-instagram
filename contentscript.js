//stored Variables
// var containerNotFollowBack;

// chrome.storage.local.get(["containerHtml"], function (response) {
//   containerNotFollowBack = response.containerHtml;
// });

// var interval = setInterval(() => {
//   var container = document.getElementsByClassName("RnEpo Yx5HN    ")[0];
//   if (container) {
//     chrome.storage.local.clear();
//     chrome.storage.local.set(
//       { containerHtml: container.innerHTML },
//       function () {
//         console.log("test stored");
//       }
//     );
//     clearInterval(interval);
//   }
// }, 2000);

// var globalVariables = document.createElement("script");
// globalVariables.innerHTML = `
//   var containerNotFollowBack = ${containerNotFollowBack};
// `;
// (document.head || document.documentElement).appendChild(globalVariables);
// globalVariables.onload = function () {
//   globalVariables.parentNode.removeChild(globalVariables);
// };

//add bot-likes-home script
var botLikesHome = document.createElement("script");
botLikesHome.src = chrome.extension.getURL("bot-likes-home.js");
(document.head || document.documentElement).appendChild(botLikesHome);
botLikesHome.onload = function () {
  botLikesHome.parentNode.removeChild(botLikesHome);
};

//add bot-likes-home script
var botFollow = document.createElement("script");
botFollow.src = chrome.extension.getURL("bot-follow.js");
(document.head || document.documentElement).appendChild(botFollow);
botFollow.onload = function () {
  botFollow.parentNode.removeChild(botFollow);
};

//add unfollowed-back script
var unfollowedBack = document.createElement("script");
unfollowedBack.src = chrome.extension.getURL("unfollowed-back.js");
(document.head || document.documentElement).appendChild(unfollowedBack);
unfollowedBack.onload = function () {
  unfollowedBack.parentNode.removeChild(unfollowedBack);
};
