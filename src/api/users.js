import {get, del} from './apiHelpers';
console.log('in users')

export function getUsers() {
  return get('users');
}

export function deleteUser(id) {
  return del(`users/${id}`);
}
