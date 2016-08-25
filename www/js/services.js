angular.module('todo.services', [])


.factory('toDos', function() {
  // Might use a resource here that returns a JSON array
  
  // Some fake testing data
  //var test = [{content:'Store HTML 5', createdOn:Date()}];
  //localStorage.setItem('toDos', JSON.stringify(test));

//Test
//localStorage.removeItem('toDos');

  var toDos = localStorage.getItem("toDos")? JSON.parse(localStorage.getItem("toDos")): [];
  
  console.log(toDos);

  return {
    all: function() {
      return toDos;
    },
    complete: function(toDo) {

      toDo.completedOn = Date();
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (toDos[i].id === parseInt(toDos)) {
          return toDos[i];
        }
      }
      return null;
    },
    persist: function(){
       localStorage.setItem('toDos', JSON.stringify(toDos));

    }


  };

});