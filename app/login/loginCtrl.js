'use strict';

angular.module('myApp').controller('View2Ctrl', ['$scope','dataService','$location',function (scope,dataService,location) {

    scope.loginForm = function (login) {


        dataService.httpData('POST',"http://localhost:3000/login",scope.obj3)
            .then(function (response) {
                if (response.status===200) {
                    console.log(response.data.result.logo)
                    dataService.c_id=response.data.result._id;
                    dataService.img=response.data.result.logo;
                    console.log(dataService.c_id);
                    console.log("**********",dataService.img);
                    location.path('/addEmployee');
                    alert('You have successfully Logged In');
                }
                    else {
                        alert(response.data.error)
                    }
                })
            .catch(function (err) {
                console.log(err)
                alert(err.data.error)
            });
        console.log(scope.obj3);
        scope.obj3 = {};
        scope.login.$setPristine(true);
    }
    }]);