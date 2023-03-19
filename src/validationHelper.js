const emailValidation = (e) => {
    const regEx = /^\w{3,}@\w{2,}\.\w{2,}$/;
    return regEx.test(e) ? true : false
}

const passwordValidation = (e) => {
    const regEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
    return regEx.test(e) ? true : false
}

const namesValidation = (e) => {
    const regEx = /^[A-Z]{1,1}[a-zA-Z]{2,}$/;
    return regEx.test(e) ? true : false
}

export const validation = (e) => {
    e.target.classList.remove("valid")
    e.target.classList.remove("invalid")

   if(emailValidation(e.target.value) || passwordValidation(e.target.value) || namesValidation(e.target.value))  {
    e.target.style.border = "2px solid green"

   } else (
    e.target.style.border = "2px solid red"
   )
}
