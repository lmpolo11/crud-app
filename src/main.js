import './style.css'
import usersStore from './users/store/users-store.js';
import { UsersApp } from './users/users-app.js'

document.querySelector('#app').innerHTML = `
  <div>

     <h3>CRUD APP</h3>
    
    <div class="card">
      
    </div>
    
  </div>
`

const element = document.querySelector('.card');

UsersApp(element);



