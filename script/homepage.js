

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

    // var admin={
    //     email:"admin",
    //     password:"admin1",
    // }

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
                if(obj.email=="admin@gmail.com" && obj.password=="admin1"){
                    window.location.href= "../html/admin.html"
                }
                else
                if (item.email == obj.email && item.password == obj.password) {
                    element = item;
                    flag = true;

                }

            })
            if (flag == true) {
                 localStorage.setItem("loginUser",JSON.stringify(element))
                alert(`Congratulation ${element.firstname} ${element.lastname}, Explore your dream journey with GhumooCaR`)
                log_closePopup()
                login_name.innerHTML=`Hey, ${element.firstname} ${element.lastname}
                <i id="pro" class="fa-solid fa-user"></i>`;

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
    login_name.innerHTML=`Hey, ${data.firstname} ${data.lastname}
    <i id="pro" class="fa-solid fa-user"></i>`;
}
document.getElementById("pro").addEventListener("click",()=>window.location.href="../html/profile.html")



//------------------------------------------------------------------------------------------------------------------------------//
let customerquery=JSON.parse(localStorage.getItem("rentalcarquery"))||[];
//homepage gaurav
let airport=document.getElementById("airport");
let withincity=document.getElementById("withincity");
let outstation=document.getElementById("outstation");
let onewaytransfer=document.getElementById("onewaytransfer");
let radios=document.getElementsByClassName("radio1");
let requiredalert=document.getElementsByClassName("requiredalert");

//---------------------------------function to calculate days from dates-------------------
// function subtractDates(date1, date2) {
//     var timeDiff = Math.abs(date2.getTime() - date1.getTime());
//     var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
//     return diffDays;
// }
//-----------------------------------------------------------------------------------------
for(let element of radios){
    element.addEventListener("click",()=>{
        if(element.value=="A"){
            airport.style.display="block";
            let airport_origin_city=document.getElementById("airport_origin_city");
            let transferttype=document.getElementById("transferttype");
            let PICKUP_ADDRESS=document.getElementById("PICKUP_ADDRESS");
            let DROP_ADDRESS=document.getElementById("DROP_ADDRESS");
            let START_DATE=document.getElementById("START_DATE");
            let airportSEARCH=document.getElementById("airportSEARCH");
            airportSEARCH.onclick=function AS(){
                console.log("hello")
                let obj={
                    createdAt:new Date(),
                    rentaltype:"Airport",
                    transferttype:transferttype.value,
                    origincity: airport_origin_city.value,
                    pickupadd:PICKUP_ADDRESS.value,
                    dropadd:DROP_ADDRESS.value,
                    startdate:START_DATE.value,    
                };
                console.log(obj)
                localStorage.setItem("rentalcarquery",JSON.stringify(obj));
                window.location.href = 'booking.html'
            }
            


            withincity.style.display="none";
            outstation.style.display="none"
            onewaytransfer.style.display="none";
           }else{
            airport.style.display="none";
            
           }
        if(element.value=="B"){

             withincity.style.display="block";

      
             let within_origin_city=document.getElementById("within_origin_city");
             
             let WITHINCITY_PICKUP_ADDRESS=document.getElementById("WITHINCITY_PICKUP_ADDRESS");
             let WITHINCITY_START_DATE=document.getElementById("WITHINCITY_START_DATE");
             let WITHINCITY_END_DATE=document.getElementById("WITHINCITY_END_DATE");
             let SEARCH=document.getElementById("withinsearchbutton");
             SEARCH.onclick=function WIC(){

                //calculating date in days  OR RENT DURATION
            
                function subtractDates(date1, date2) {
                    var timeDiff = Math.abs(date2.getTime() - date1.getTime());
                    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
                    return diffDays;
                }
                let date1=new Date(WITHINCITY_START_DATE.value);
                let date2=new Date(WITHINCITY_END_DATE.value);
                let rentduration=subtractDates(date1,date2);
                
                //
                let obj={
                    createdAt:new Date(),
                    rentaltype:"withincity",
                    origincity: within_origin_city.value,
                    pickupadd:WITHINCITY_PICKUP_ADDRESS.value,
                    startdate:WITHINCITY_START_DATE.value,
                    end_date:WITHINCITY_END_DATE.value,
                    rentduration:rentduration+" days"
                    
                };
                console.log(obj)
                
                
                localStorage.setItem("rentalcarquery",JSON.stringify(obj));
                window.location.href = 'booking.html'
            }
            
            
             

             airport.style.display="none";
             outstation.style.display="none"
             onewaytransfer.style.display="none";
        }else{
            
            withincity.style.display="none";
            
        }
        if(element.value=="C"){
            outstation.style.display="block";

            let outstation_origin_city=document.getElementById("outstation_origin_city");
            let outTO_CITY=document.getElementById("outTO_CITY");
            let outpickup_ADDRESS=document.getElementById("outpickup_ADDRESS");
            let out_START_DATE=document.getElementById("out_START_DATE");
            let out_END_DATE=document.getElementById("out_END_DATE");
            let outstationSEARCH=document.getElementById("outstationSEARCH");

            function subtractDates(date1, date2) {
                var timeDiff = Math.abs(date2.getTime() - date1.getTime());
                var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
                return diffDays;
            }
                let date1=new Date(out_START_DATE.value);
                let date2=new Date(out_END_DATE.value);
                let rentduration=subtractDates(date1,date2);
            outstationSEARCH.onclick=()=>{
                let obj={
                    createdAt:new Date(),
                    rentaltype:"OUTSTATION",
                    origincity: outstation_origin_city.value.toUpperCase(),
                    tocity:outTO_CITY.value.toUpperCase(),
                    pickupadd:outpickup_ADDRESS.value.toUpperCase(),
                    startdate:out_START_DATE.value,
                    end_date:out_END_DATE.value,
                    rentduration:rentduration+" days"
                    
                };
                console.log(obj)
                
                
                localStorage.setItem("rentalcarquery",JSON.stringify(obj));
                window.location.href = 'booking.html'
            }


            airport.style.display="none";
            withincity.style.display="none";
            onewaytransfer.style.display="none";
       }else{
            
            outstation.style.display="none"
            
       }
       if(element.value=="D"){
            onewaytransfer.style.display="block";

            let onewaytransfer_origin_city=document.getElementById("onewaytransfer_origin_city");
            let oneway_tocity=document.getElementById("oneway_tocity");
            // var autocomplete = new google.maps.places.Autocomplete(oneway_tocity);
            // autocomplete.addListener('place_changed', function() {
            //     var place = autocomplete.getPlace();
            //     console.log(place);
            // });

            let oneway_pickupadd=document.getElementById("oneway_pickupadd");
            let oneway_START_DATE=document.getElementById("oneway_START_DATE");
            let onewaySEARCH=document.getElementById("onewaySEARCH");
  
            onewaySEARCH.onclick=()=>{
                let obj={
                    createdAt:new Date(),
                    rentaltype:"OneWayTransfer",
                    tocity:oneway_tocity.value,
                    origincity: onewaytransfer_origin_city.value,
                    pickupadd:oneway_pickupadd.value,
                    startdate:oneway_START_DATE.value,
                    
                    
                    
                };
                console.log(obj)
                localStorage.setItem("rentalcarquery",JSON.stringify(obj));
                window.location.href = 'booking.html'
                
            }


            airport.style.display="none";
            withincity.style.display="none";
            outstation.style.display="none"
       }else{
            
            onewaytransfer.style.display="none";
       }
       
    })
}


let fromcity=document.getElementById("origin_city");

