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
