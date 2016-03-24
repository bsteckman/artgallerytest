app.controller('ArtController', function($scope){
    $scope.add = false;
    $scope.art= {};
    $scope.test = 2+2;
    $scope.gallery = [];
    $scope.toGallery = function(){
         $scope.gallery.push($scope.art);
         $scope.art = {};
         $scope.add= true;
    }
    $scope.showForm = function () {
        $scope.add = !$scope.add
    }
    $scope.removeItem = function(i){
        $scope.gallery.splice(i, 1);
    }
})