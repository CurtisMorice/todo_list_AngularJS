const app = angular.module('ToDoApp', []);

app.controller('ToDoController', ['$http', function($http) {
    let vm = this;

    vm.toDos = [];
    
    vm.addTask = function() {
        console.log('Add Task');
        console.log(vm.newTask);
        $http({
            method: 'POST',
            url: '/tasks',
            data: vm.newTask
        }).then(function(response) {
            vm.clearInputs();
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
            vm.toDos = response.data;
        }).catch(function(error) {
            console.log('Error from GET', error);
            
        })
    }

    vm.clearInputs = function() {
        vm.newTask = {
            name: ''
        }
    }

    vm.completeTask = function(selectedToDo) {
        console.log('complete button!');
        console.log('task to delete', selectedToDo);
        let updatedData = {
            completed: true
        }
        $http({
            method: 'PUT',
            url: `/tasks/${selectedToDo._id}`,
            data: updatedData
        }).then(function(response) {
            vm.getTasks();
        }).catch(function(error) {
            console.log('Error from PUT', error);
            
        })
        
    }

    vm.getTasks();
}]);