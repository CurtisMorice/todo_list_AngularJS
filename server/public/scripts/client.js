const app = angular.module('ToDoApp', []);

app.controller('ToDoController', ['$http', function($http) {
    let vm = this;
    
    vm.addTask = function() {
        console.log('Add Task');
        console.log(vm.newTask);
        $http({
            method: 'POST',
            url: '/tasks',
            data: vm.newTask
        }).then(function(response) {
            vm.getTasks();
        }).catch(function(error) {
            console.log('Error from POST', error);  
        });
    }

    vm.getTasks = function() {
        $http({
            method: 'GET',
            url: '/tasks'
        }).then(function(response) {
            console.log('Response from GET', response);
            
        }).catch(function(error) {
            console.log('Error from GET', error);
            
        })
    }

    vm.getTasks();
}]);