var myApp = angular.module('app', []);

myApp.controller('dreamparkcontroller', ['$scope', function($scope) {
    $scope.tickets=[
        "Family","Silver"
    ];
    $scope.selectedticket='Select Type';
   $scope.total=-1;
   $scope.customer={
       ID:-1,
       Name:"",
   };
   $scope.counter=4;
function  validate() {
    return true;
}
}]);

