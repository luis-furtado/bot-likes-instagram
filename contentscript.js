//add bot-likes-home script
var botLikesHome = document.createElement("script");
botLikesHome.src = chrome.extension.getURL("bot-likes-home.js");
(document.head || document.documentElement).appendChild(botLikesHome);
botLikesHome.onload = function () {
  botLikesHome.parentNode.removeChild(botLikesHome);
};

//add bot-likes-home script
var follow = document.createElement("script");
follow.src = chrome.extension.getURL("follow.js");
(document.head || document.documentElement).appendChild(follow);
follow.onload = function () {
  follow.parentNode.removeChild(follow);
};

//add unfollowed-back script
var unfollowedBack = document.createElement("script");
unfollowedBack.src = chrome.extension.getURL("unfollowed-back.js");
(document.head || document.documentElement).appendChild(unfollowedBack);
unfollowedBack.onload = function () {
  unfollowedBack.parentNode.removeChild(unfollowedBack);
};
