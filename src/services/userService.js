import {toast} from 'react-toastify';

let userlist = localStorage.users ? JSON.parse(localStorage.users) : [];


export const user = {
    'LOGIN': login,
    'LOGOUT': logout,
    'REGISTER': registerUser
}


async function login(username, password) {
    let response = {};
    try {
        if(!userExist(username)) {
            throw new Error('User not Found')
        }
        
        if(!passwordCheck(username, password)) {
            throw new Error('Password incorect')
        }
        
    } catch(err) {
        response = {
            status: 'Failed',
            message: err.message
        }
        return response;
    }

    const user = userlist.find(user => user.username.toLowerCase() === username.toLowerCase());
    localStorage.user = JSON.stringify(user);

    response = {
        status: 'Success',
        message: 'User logged in',
        user
    }
    toast(`Welcome, ${username}!`)
    return response;

}


async function logout() {
    localStorage.removeItem('user');
    let response = {};
    try {
        if (localStorage.user) {
            throw new Error ('Failed to log out')
        }
    } catch(err) {
        response = {
            status: 'Failed',
            message: err.message
        }
        return response;
    }

    response = {
        status: 'Success',
        message:'User logged out'
    }
    toast(response.message);
    return response;
}


async function registerUser(username, password) {
    try {
        if (userExist(username)) {
            throw new Error("Username taken")
        }
    } catch(err) {
        return {
            status: 'Failed',
            message: err.message
        }
    }
    const user = {
        'id': userlist.length,
        'username' : (username).toString(),
        'password' : (password).toString()
    }
    userlist.push(user)
    localStorage.users = JSON.stringify(userlist);
    return {
        status:'Success',
        message: 'User created',
        user
    }
}

function userExist(username) {
    const _username = username.toString().toLowerCase();
    return userlist.some(user => user.username.toLowerCase() === _username)
}

function passwordCheck(username, password) {
    const user = userlist.find(user => user.username.toLowerCase() === username.toLowerCase());
    return user.password === (password).toString();
}
