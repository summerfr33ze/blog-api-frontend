const { response } = require("express")

const loginSubmit = document.querySelector(".login-submit")
const username = document.querySelector(".username")
const password = document.querySelector(".password")
const confirmPassword = document.querySelector(".confirm-password")

loginSubmit.addEventListener("click",(e) => {
    e.preventDefault()

    const user = {
        username: username.value,
        password: password.value,
        confirm_password: confirmPassword.value
    }

    async function loginPost (user) {
        try {
            const response = await fetch("../blog-api/posts", {
                method: "POST",
                headers: {
                "Content-Type": "application/json"
            },
                body: JSON.stringify(user)
            })
            const result = await response.json()

            console.log(result)

            if (result.success){
                window.location.href = "/index"
            }


            console.log("Success:", result)
        }   
        catch (error) {
            console.error("Error: ", error)

        }
    }

})