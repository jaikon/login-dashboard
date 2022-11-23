const togglePasword = document.querySelector("#togglePassword")
const btnLogin      = document.querySelector(".btnLogin")
const password      = document.getElementById("Password")
const errorText     = document.querySelector(".error-text")

function showPassword() {
    if(password.type === 'password'){
        togglePasword.classList.remove("fa-eye")
        togglePasword.classList.add("fa-eye-slash")
        password.type = 'text'
    } else {
        togglePasword.classList.remove("fa-eye-slash")
        togglePasword.classList.add("fa-eye")
        password.type = 'password'
    }
}

btnLogin.addEventListener("click", () => {
    const username = document.getElementById("Username").value
    if(username == "admin" && password.value == "admin"){
        location.replace("/home/anon/Documentos/Desenvolvimento/Login_Sistemas_Herbet/view/menu.html")
    } else {
        errorText.innerHTML = "Usuário ou senha incorretos!"
    }
})