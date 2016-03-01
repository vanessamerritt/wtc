app.controller('mainCtrl', MainCtrl);

function MainCtrl($http) {
  var ctrl = this;

  ctrl.http = $http;
 



  ctrl.images = "";


  ctrl.activate();
}



MainCtrl.prototype.activate = function(){
  var ctrl = this;

  //var url = "http://public-api.wordpress.com/rest/v1/sites/wtmpeachtest.wordpress.com/posts?callback=JSON_CALLBACK";
  var url = "https://api.instagram.com/v1/tags/westtorontocrossfit/media/recent?client_id=61f8b631abd34732a3bcd8c73d0d73a9&callback=JSON_CALLBACK";

  ctrl.http.jsonp(url)
    .success(function(data){
        console.log(data);
    });
  
}