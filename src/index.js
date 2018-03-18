import {getUsers} from "./api/users.js";

// Populate table of users via API call.
getUsers().then(result => {
  let usersBody = "";

  result.forEach(user => {
    usersBody += `<tr>\n      
                    <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>\n      
                    <td>${user.id}</td>\n     
                    <td>${user.firstName}</td>\n      
                    <td>${user.lastName}</td>\n      
                    <td>${user.email}</td>\n      
                  </tr>`
  });

  global.document.getElementById('users').innerHTML = usersBody;

});

