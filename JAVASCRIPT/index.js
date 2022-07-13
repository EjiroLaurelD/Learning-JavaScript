//dummy database-how database works
const userDataBase = {
    "laurel" : {
        firstName: "laurel",
        lastName: "Dafe",
        email: "dafelaurele@gmail.com",
        password: "laurelee",
        accountActivated: true
    },

    "Ejiro" : {
        firstName: "Ejiro",
        lastName: "Dafe",
        email: "ejlaurele@gmail.com",
        password: "ejiro4000",
        accountActivated: true
    },
    "laurele" : {
        firstName: "pearl",
        lastName: "Dafe",
        email: "pearle@gmail.com",
        password: "pearlee",
        accountActivated: false
    },

    "jaykay" : {
        firstName: "jaykay",
        lastName: "john",
        email: "jaykay@gmail.com",
        passWord: "jaykay",
        accountActivated: false
    }

}

function validateUserDetails(){
    //enter username
    let username = prompt("enter your username")

while (validateUsername(username) == false) {
    username = prompt("Invalid username, please try again.")
}

if (username == null){
    return
}
//enter password
let password = prompt("enter your password")


while (validatePassword(password) == false) {
    password = prompt("Invalid Password, please enter a valid password.")
}
if (password == null){
    return
}

//confirm password
let confirmPassword = prompt("confirm your password")
while(confirmPassword !== password){
    if (confirmPassword == null){
        return
    }
    
    confirmPassword = prompt("password does not match, please try again.")
}

const user = userDataBase[username]
//code below is for when a user isnt registered
if (user == undefined){
    alert ("user not found, please sign up.")
}
/*console.log(user)*/
alert (` 
user found with the following details:
First Name: ${user.firstName},
Last Name: ${user.lastName},
Email: ${user.email}
Account status: $
password:******
`)
//the back tick is used to embed variables `${name of variable}` customise the message exactly how we want it
/*console.log(username, password, confirmPassword)*/


}

validateUserDetails()
alert("you have come to the end of this program, goodbye!")

function validateUsername(username){
    if (username == null){
        return true;
    }
    if (username.length < 10) {
    return true;
    }
    else { 
        return false;
}
}

function validatePassword(password){
    if (password == null){
        return true;
    }
    if (password.length > 6){
        return true;
    }
    else {
        return false;
    }
}

