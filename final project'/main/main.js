const logout = document.querySelector('#logout')
const login = document.querySelector('#login')
const register = document.querySelector('#register')

const currentUser = localStorage.getItem('currentUser')

if(currentUser === '' || currentUser === null){
    logout.style = 'display: none'
} else{
    logout.style = 'display: inline'
    login.style = 'display: none'
    register.style = 'display: none'
}

logout.addEventListener('click', () =>{
    localStorage.removeItem('currentUser')
    logout.style = 'display: none'
    login.style = 'display: inline'
    register.style = 'display: inline'
})

const h1 = document.querySelector('h1')

if(localStorage.getItem('currentUser')){
    h1.innerHTML += localStorage.getItem('currentUser')
}