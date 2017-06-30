angular.module('angdmodule', []);
angular.module('angdmodule').controller('angController', function($scope) {

  $scope.user={
    name:'Sumit Saha',
    address:{
      street:'PO Box 128',
      city:'Secret Rebel',
      planet:'Pluto'
    },
    friends:[
      'Han',
      'Lucy',
      'Andrew'
    ]
  };
});

angular.module('angdmodule').directive('userInfoCard',function(){
  return {
    template:"Name: {{user.name}} <br/> Address : {{user.address.street}} <br/> City : {{user.address.city}} <br/><br/> <h4>Friends</h4>",
    restrict:"E"
  };
});
