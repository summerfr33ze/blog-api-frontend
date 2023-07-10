const { response } = require("express")

const loginSubmit = document.querySelector(".login-submit")
const signUpSubmit = document.querySelector(".sign-in-submit")
const username = document.querySelector(".username")
const password = document.querySelector(".password")
const confirmPassword = document.querySelector(".confirm-password")

loginSubmit.addEventListener("click",(e) => {
    e.preventDefault()

    const user = {
        username: username.value,
        password: password.value,
    }

    async function loginPost (user) {
        try {
            const response = await fetch("../blog-api/login", {
                method: "POST",
                headers: {
                "Content-Type": "application/json"
            },
                body: JSON.stringify(user)
            })
            const result = await response.json()

            console.log(result)

            if (result.message === "auth successful"){
                window.location.href = "/index"
            }

            

            console.log(result)
        }   
        catch (error) {
            console.error(error)

        }
    }

})

signUpSubmit.addEventListener("click", (e) => {
    e.preventDefault()

    const user = {
        username: username.value,
        password: password.value,
        confirm_password: confirmPassword.value
    }

    async function loginPost (user) {
        try {
            const response = await fetch("../blog-api/signup", {
                method: "POST",
                headers: {
                "Content-Type": "application/json"
            },
                body: JSON.stringify(user)
            })
            const result = await response.json()

            console.log(result)

            if (result.message === "auth successful"){
                window.location.href = "/index"
            }

            

            console.log(result)
        }   
        catch (error) {
            console.error(error)

        }
    }

})



