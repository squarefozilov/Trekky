import axios from 'axios'
 const reload = func => {
  return window.location.reload(false)
    
}
export const register = newUser => {
  return axios
    .post('/register', {
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      email: newUser.email,
      password: newUser.password
    })
    .then(response => {
      console.log('Registered')
    })
}

export const newSearch = addSearch => {
  return axios
    .post('/addHistory', {
      email : addSearch.email,
      userid: addSearch.password, 
      fromlocation: addSearch.fromlocation, 
      tolocation: this.addSearch.tolocation 
    })
    .then(response => {
      console.log('Registered',response)
    })
}

export const login = user => {

  return axios
    .post('/login', {
      email: user.email,
      password: user.password
    })
    .then(response => {
     
      localStorage.setItem('usertoken', response.data)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })

    
}

export const getProfile = user => {
  return axios
    .get('users/profile', {
      //headers: { Authorization: ` ${this.getToken()}` }
    })
    .then(response => {
      window.location.reload(false)
      console.log(response)
      return response.data  
    })
    .catch(err => {
      console.log(err)
    })
}


