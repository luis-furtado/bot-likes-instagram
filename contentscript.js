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

//create content not follow back stored
// var interval = setInterval(() => {
//   //cleaning
//   chrome.storage.local.clear(function () {
//     var error = chrome.runtime.lastError;
//     if (error) {
//       console.error(error);
//     }
//   });

//   //store
//   var titleContainer = document.getElementsByClassName("m82CD")[0];
//   if (titleContainer) {
//     var title = titleContainer.firstChild.textContent;
//     if (title.includes("Não segue de volta")) {
//       var container = document.getElementsByTagName("body")[0].lastChild;
//       var htmlContent = container.innerHTML;
//       chrome.storage.local.set(
//         { containerNotFollowBack: htmlContent },
//         function () {
//           console.log("the htmlContent of UsersNotFollowBack was stored!");
//           console.log("stored -> " + htmlContent);
//         }
//       );
//       clearInterval(interval);
//     }
//   }
// }, 12000);

//getting storaged data and store in global variables
// chrome.storage.local.get(["containerNotFollowBack"], function (result) {
//   console.log("Value currently is " + result.containerNotFollowBack);
//   storedNotFollowBackHtml = result.key;
// });
