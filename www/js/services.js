angular.module('todo.services', [])


.factory('toDos', function() {
  
  var toDos = localStorage.getItem("toDos")? JSON.parse(localStorage.getItem("toDos")): [];
  
  console.log(toDos);

  return {
    all: function() {
      return toDos;
    },
    complete: function(toDo) {

      toDo.completedOn = Date();
    },
    persist: function(){
       localStorage.setItem('toDos', JSON.stringify(toDos));

    }


  };

});
