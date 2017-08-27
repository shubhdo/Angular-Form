'use strict';

angular.module('myApp').controller('View2Ctrl', ['$scope','dataService','$location',function (scope,dataService,location) {

    scope.loginForm = function (login) {


        dataService.httpData('POST',"http://localhost:3000/login",scope.obj3)
            .then(function (response) {
                if (response.status===200) {
                    location.path('/addCompany');
                    alert('You have successfully registered');
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