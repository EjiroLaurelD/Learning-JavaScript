const userNames = {
    "laurel" : {
        firstName : "ejiro",
        lastName : "dafe",
        email : "dafe@gmail.com",
        password : "***",
        accountActive : "yes"
    }

}


function validateUserDetails(){

let userName = prompt("enter your username")
while (validateUserName(userName) == false) {

    userName = prompt("incorrect username, please try again")
}
if (userName == null){
    return
}


let password = prompt("enter password")

while (validatePassword(password) == false){
    password = prompt("invalid password, please try again")
}
if (password == null){
    return
}

let confirmPassword = prompt("confirm password")
while (confirmPassword !== password){
    if (confirmPassword == null){
        return
    }
    else{
    confirmPassword = prompt("password does not match, please try again")
}
}

const user = userNames[userName]
if (user == undefined){
    alert ("user not found")
}
alert (`user found with the following details
First Name: ${user.firstName}
Last Name: ${user.lastName}
Email : ${user.email}
account Status: ${user.accountActive}
`)

//console.log(userNames)
}

validateUserDetails()
alert ("you have come to the end of the program, goodbye!")


function validateUserName(userName){
    if (userName == null) {
        return true
    }
    if (userName.length < 10){
        return true
    }
    else {
        return false
    }
}

function validatePassword(password){
    if (password == null){
        return true
    }
    if (password.length > 6){
        return true
    }
    else {
        return false
    }
}


//console.log(validateUserName(userName), validatePassword(password))


function buildTriangle(triangle){
    let triangle = "*"
    if (triangle.length < 10){
        return triangle ++ /n
    }

    for (i = 0; i < 10; i++){
        return triangle /n
    }
console.log(buildingTriangle(10))
}