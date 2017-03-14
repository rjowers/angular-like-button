function LikeController ($scope){
  $scope.count=0;
  $scope.Likes='Likes';
  $scope.Like = function() {
    $scope.count++;
    if ($scope.count === 1) {
      $scope.Likes = 'Like'

    }
  }
  $scope.Unlike=function (){
    $scope.count--;
  }
}




export default LikeController;
