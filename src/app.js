/* eslint-disable jsx-quotes */
// import {getUsers, deleteUser} from "./api/users.js";
//
// // Populate table of users via API call.
// getUsers().then(result => {
//   let usersBody = "";
//
//   result.forEach(user => {
//     usersBody += `<tr>\n
//                     <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>\n
//                     <td>${user.id}</td>\n
//                     <td>${user.firstName}</td>\n
//                     <td>${user.lastName}</td>\n
//                     <td>${user.email}</td>\n
//                   </tr>`
//   });
//
//   global.document.getElementById('users').innerHTML = usersBody;
//
//   const deleteLinks = global.document.getElementsByClassName('deleteUser');
//
//   // Must use Array.from to create a real array from a DOM collection
//   // getElementsByClassName only returns an "array like" object
//   Array.from(deleteLinks, link => {
//     link.onclick = event => {
//       const element = event.target;
//       event.preventDefault();
//       deleteUser(element.attributes['data-id'].value);
//       const row = element.parentNode.parentNode;
//       row.parentNode.removeChild(row);
//     };
//   });
// });

import React from 'react'
import ReactDom from 'react-dom'
import App from './components/root/App'
import './app.scss'
require('../database/dbHelper');

const app = document.getElementById('app');
ReactDom.render(<App title='Example App' />, app);
