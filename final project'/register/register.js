const allInputs = document.querySelectorAll("input");
const button = document.querySelector(".button ");
const users = JSON.parse(localStorage.getItem('users'))


button.addEventListener("click", (e) => {
    if (allInputs[1].checkValidity()) {
        e.preventDefault();
        let newUser = {
            name: allInputs[0].value,
            phone: allInputs[1].value,
            password: allInputs[2].value,
            computers: []
        };

        users.push(newUser);

        localStorage.setItem('users', JSON.stringify(users))

        location.href = '../login/login.html'
    }
})