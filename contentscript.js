//add bot-likes-home script
var botLikesHome = document.createElement("script");
botLikesHome.src = chrome.extension.getURL("bot-likes-home.js");
(document.head || document.documentElement).appendChild(botLikesHome);
botLikesHome.onload = function () {
botLikesHome.parentNode.removeChild(botLikesHome);
};

//add bot-likes-home script
var followUnfollow = document.createElement("script");
followUnfollow.src = chrome.extension.getURL("follow-unfollow.js");
(document.head || document.documentElement).appendChild(followUnfollow);
followUnfollow.onload = function () {
followUnfollow.parentNode.removeChild(followUnfollow);

