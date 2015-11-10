let SearchController = function ($scope) {

  $scope.title = 'Unsplash Photos';

  // Create method when search is submitted

  $scope.getPhoto = (query) => {

    console.log(query);

    $scope.photoUrl = 'https://source.unsplash.com/all/?' + query;

    $scope.query = '';

  };


};

SearchController.$inject = ['$scope'];

export default SearchController;