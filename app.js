angular.module('blog', []);
angular.module('blog').controller('Rest', function ($scope, $http, $window){
  $http.get('https://api-fake-blog.onrender.com/postagens').
      success(function(data) {
          $scope.publicacoes = data;
      }
  );
  $scope.ver_detalhes = function (index) {
    let getUrl = '/detalhes.html?index=' + index;
    $window.location.href = getUrl;
  }
});
angular.module('blog').controller('Detalhes', function ($scope, $http){
  let parametros = new URLSearchParams(window.location.search);
  let id = parametros.get('index');
  $http.get('https://api-fake-blog.onrender.com/postagem/' + id).
      success(function(data) {
          $scope.detalhesPostagem  = data;
      }
  );
});