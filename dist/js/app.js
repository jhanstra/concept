var app = angular.module('concept', [
'ngRoute',
'angulartics',
'angulartics.google.analytics'
]);

// CONTROLLERS
app.controller('MainCtrl', ['$rootScope','$scope', function($rootScope, $scope) {
  $scope.test = "hello test";
  $scope.randomImage = Math.floor((Math.random() * 5) + 1);
  $scope.downloadLink = false;
  $scope.toggleDownload = function() {
    $scope.downloadLink = !$scope.downloadLink;
  }
}]);



// CONFIG / ROUTING
app.config(function($routeProvider) {
  $routeProvider
  .when('/', { templateUrl: '/views/concept.html' })
  .when('/components', { templateUrl: '/views/components.html' })
  .when('/css', {templateUrl: '/views/css.html'})
  .when('/icons', {templateUrl: '/views/icons.html'})
  .otherwise({ redirectTo: '/' });

});

// DIRECTIVES
app.directive('conceptFooter', function(){
  return {
    restrict : 'E',
    templateUrl : 'views/concept-footer.html'
  }
});
app.directive('downloadLightBox', function(){
  return {
    restrict : 'E',
    scope: {
      downloadLink: '='
    },
    templateUrl : 'views/download-light-box.html'
  }
});

app.controller('IconsCtrl', ['$rootScope','$scope', function($rootScope, $scope) {
  $scope.icons = [
    "account-login",
    "account-logout",
    "action-redo",
    "action-undo",
    "align-center",
    "align-left",
    "align-right",
    "aperture",
    "arrow-bottom",
    "arrow-circle-bottom",
    "arrow-circle-left",
    "arrow-circle-right",
    "arrow-circle-top",
    "arrow-left",
    "arrow-right",
    "arrow-thick-bottom",
    "arrow-thick-left",
    "arrow-thick-right",
    "arrow-thick-top",
    "arrow-top",
    "audio",
    "audio-spectrum",
    "badge",
    "ban",
    "bar-chart",
    "basket",
    "battery-empty",
    "battery-full",
    "beaker",
    "bell",
    "bluetooth",
    "bold",
    "bolt",
    "book",
    "bookmark",
    "box",
    "briefcase",
    "british-pound",
    "browser",
    "brush",
    "bug",
    "bullhorn",
    "calculator",
    "calendar",
    "camera-slr",
    "caret-bottom",
    "caret-left",
    "caret-right",
    "caret-top",
    "cart",
    "chat",
    "check",
    "chevron-bottom",
    "chevron-left",
    "chevron-right",
    "chevron-top",
    "circle-check",
    "circle-x",
    "clipboard",
    "clock",
    "cloud",
    "cloud-download",
    "cloud-upload",
    "cloudy",
    "code",
    "cog",
    "collapse-down",
    "collapse-left",
    "collapse-right",
    "collapse-up",
    "command",
    "comment-square",
    "compass",
    "contrast",
    "copywriting",
    "credit-card",
    "crop",
    "dashboard",
    "data-transfer-download",
    "data-transfer-upload",
    "delete",
    "dial",
    "document",
    "dollar",
    "double-quote-sans-left",
    "double-quote-sans-right",
    "double-quote-serif-left",
    "double-quote-serif-right",
    "droplet",
    "eject",
    "elevator",
    "ellipses",
    "envelope-closed",
    "envelope-open",
    "euro",
    "excerpt",
    "expand-down",
    "expand-left",
    "expand-right",
    "expand-up",
    "external-link",
    "eye",
    "eyedropper",
    "file",
    "fire",
    "flag",
    "flash",
    "folder",
    "fork",
    "fullscreen-enter",
    "fullscreen-exit",
    "globe",
    "graph",
    "grid-four-up",
    "grid-three-up",
    "grid-two-up",
    "hard-drive",
    "header",
    "headphones",
    "heart",
    "home",
    "image",
    "inbox",
    "infinity",
    "info",
    "italic",
    "justify-center",
    "justify-left",
    "justify-right",
    "key",
    "laptop",
    "layers",
    "lightbulb",
    "link-broken",
    "link-intact",
    "list",
    "list-rich",
    "location",
    "lock-locked",
    "lock-unlocked",
    "loop",
    "loop-circular",
    "loop-square",
    "magnifying-glass",
    "map",
    "map-marker",
    "media-pause",
    "media-play",
    "media-record",
    "media-skip-backward",
    "media-skip-forward",
    "media-step-backward",
    "media-step-forward",
    "media-stop",
    "medical-cross",
    "menu",
    "microphone",
    "minus",
    "monitor",
    "moon",
    "move",
    "musical-note",
    "paperclip",
    "pencil",
    "people",
    "person",
    "phone",
    "pie-chart",
    "pin",
    "play-circle",
    "plus",
    "power-standby",
    "print",
    "project",
    "pulse",
    "puzzle-piece",
    "question-mark",
    "rain",
    "random",
    "reload",
    "resize-both",
    "resize-height",
    "resize-width",
    "rss",
    "rss-alt",
    "script",
    "share",
    "share-boxed",
    "shield",
    "signal",
    "signpost",
    "sort-ascending",
    "sort-descending",
    "spreadsheet",
    "star",
    "sun",
    "tablet",
    "tag",
    "tags",
    "target",
    "task",
    "terminal",
    "text",
    "thumb-down",
    "thumb-up",
    "timer",
    "transfer",
    "trash",
    "underline",
    "vertical-align-bottom",
    "vertical-align-center",
    "vertical-align-top",
    "video",
    "volume-high",
    "volume-low",
    "volume-off",
    "warning",
    "wifi",
    "wrench",
    "x",
    "yen",
    "zoom-in",
    "zoom-out"
  ]
}])
