

// log in

let log_myform = document.getElementById("log_form")

let log_email_error = document.getElementById("log_email_error")

let log_password_error = document.getElementById("log_password_error")


log_myform.addEventListener("submit", (e) => {
    e.preventDefault();
    var userData = {

        email: log_myform.log_email.value,
        password: log_myform.log_password.value,
    }

    //    validation of form

    if (userData.email !== "" && userData.password.length !== 0) {
        log_email_error.innerHTML = null; log_password_error.innerHTML = null;
        login_User(userData)
    } else {
        userData.email == "" ? log_email_error.innerHTML = "*Enter Email!"
            : log_email_error.innerHTML = null;

        userData.password.length == 0 ? log_password_error.innerHTML = "*Enter Password!"
            : log_password_error.innerHTML = null;
    }


})


function login_User(obj) {
    fetch("https://63c67422dcdc478e15c1bf8d.mockapi.io/users")
        .then(responseObject => responseObject.json())
        .then((data) => {
            //   console.log(data)
            let flag = false;
            var element = "";
            data.forEach((item) => {
                if (item.email == obj.email && item.password == obj.password) {
                    element = item;
                    flag = true;

                }
            })
            if (flag == true) {
                 localStorage.setItem("loginUser",JSON.stringify(element))
                alert(`Congratulation ${element.firstname} ${element.lastname}, Explore your dream journey with GhumOCaR`)
                log_closePopup()
                login_name.innerHTML=`Welcome, ${element.firstname} ${element.lastname}`;

            } else {
                log_password_error.innerHTML = "Username and password may be incorrect!"
            }
        })

}


let log_popup = document.getElementById("log_popup");

function log_openPopup() {
    log_popup.classList.add("log_open-popup");
}
function log_closePopup() {
    log_popup.classList.remove("log_open-popup");
}

//sign up 


let myform = document.getElementById("form")
// let cpassword = document.getElementById("cpassword")

let first_name_error = document.getElementById("first_error")
let last_name_error = document.getElementById("last_error")
let mobile_error = document.getElementById("mobile_error")
let email_error = document.getElementById("email_error")
let date_error = document.getElementById("date_error")
let password_error = document.getElementById("password_error")
let cpassword_error = document.getElementById("cpassword_error")
let gender_error = document.getElementById("gender_error")

myform.addEventListener("submit", (e) => {
    e.preventDefault();

    var userData = {
        firstname: myform.firstname.value,
        lastname: myform.lastname.value,
        email: myform.email.value,
        mobile: myform.mobile.value,
        DOB: myform.birthdate.value,
        gender: myform.gender.value,
        password: myform.password.value,

    }

    //    validation of form
    if (userData.firstname !== "" && userData.lastname !== "" && userData.email !== "" && userData.email !== "" && userData.mobile.length == 10 && userData.DOB !== "" && userData.gender !== "" && userData.password.length >= 6 && myform.cpassword.value == userData.password) {
        first_name_error.innerHTML = null; date_error.innerHTML = null; gender_error.innerHTML = null;
        last_name_error.innerHTML = null; password_error.innerHTML = null; cpassword_error.innerHTML = null;
        email_error.innerHTML = null; mobile_error.innerHTML = null;

        alert(`Hey ${userData.firstname} ${userData.lastname}! You Signed Up Successfully.`)
        SignUp_user(userData)

    } else {
        userData.firstname == "" ? first_name_error.innerHTML = "*Enter First Name!"
            : first_name_error.innerHTML = null;

        userData.lastname == "" ? last_name_error.innerHTML = "*Enter Last Name!"
            : last_name_error.innerHTML = null;

        userData.email == "" ? email_error.innerHTML = "*Enter Email!"
            : email_error.innerHTML = null;

        userData.mobile.length == 0 ? mobile_error.innerHTML = "*Enter Mobile Number!"
            : userData.mobile.length != 10 ? mobile_error.innerHTML = "*Mobile Number should be 10 digit."
                : mobile_error.innerHTML = null;

        userData.DOB == "" ? date_error.innerHTML = "*Enter Date of Birth!"
            : date_error.innerHTML = null;
        userData.gender == "" ? gender_error.innerHTML = "*Fill the gender" : gender_error.innerHTML = null;

        userData.password.length == 0 ? password_error.innerHTML = "*Enter Password!"
            : userData.password.length < 6 ? password_error.innerHTML = "*Password length should be greater than or equal to 6."
                : password_error.innerHTML = null;

        cpassword.value !== userData.password ? cpassword_error.innerHTML = "*Password & confirm password must be equal!"
            : cpassword_error.innerHTML = null;
    }


})


function SignUp_user(obj) {
    fetch("https://63c67422dcdc478e15c1bf8d.mockapi.io/users", {
        method: "POST",
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(obj)
    }
    )
        .then(responseObject => responseObject.json())
        .then((data) => {
            console.log(data)
            // location.href = "./home.html"
        })
}



let popup = document.getElementById("popup");

function openPopup() {
  popup.classList.add("open-popup");
}
function closePopup() {
  popup.classList.remove("open-popup");
}


//homepage

let data  = JSON.parse(localStorage.getItem("loginUser")) ||null; 
let login_name = document.querySelector(".LOGIN_SIGNUP")

if(data!=null){
    login_name.innerHTML=`Welcome, ${data.firstname} ${data.lastname}`;
}


