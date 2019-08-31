// login_system.js
// define loginSystem function
function loginSystem(user) {

  // define user information
  const users = [
    {
      firstName: 'Tony',
      email: 'tony@stark.com',
      password: 'iamironman'
    },
    {
      firstName: 'Steve',
      email: 'captain@hotmail.com',
      password: 'icandothisallday'
    },
    {
      firstName: 'Peter',
      email: 'peter@parker.com',
      password: 'enajyram'
    },
    {
      firstName: 'Natasha',
      email: 'natasha@gamil.com',
      password: '*parol#@$!'
    },
    {
      firstName: 'Nick',
      email: 'nick@shield.com',
      password: 'password'
    }
  ]

  // check there has this user information or not
  let message = ''

  // return error notice if user does not input information
  if (user.email === '' || user.password === '') {
    message = 'Please provide Email and password'
  } else {
    for (let i = 0; i < users.length; i++) {

      if (user.email === users[i].email && user.password === users[i].password) {
        message = `Welcome back,${users[i].firstName}！`
        break
      } else if (user.email === users[i].email && user.password !== users[i].password) {
        message = 'Your Password is wrong'
        break
      }

    }

  }

  if (message === '') {
    message = `無 ${user.email} 此用戶`
  }

  return message
}

// export generatePassword function for other files to use
module.exports = loginSystem

