let burgerMenu = document.getElementById('burgerMenu')
burgerMenu.style.display = 'none'
let closeBtn = document.getElementById('clBtn')
let burgerBtn = document.getElementById('burgerBtn')

if (burgerMenu.style.display=='none'){
    burgerBtn.addEventListener('click', ()=>{
        burgerBtn.style.display = 'none'
        burgerMenu.style.display = 'block'
    })
}
closeBtn.addEventListener('click', ()=>{
    burgerMenu.style.display = 'none'
    burgerBtn.style.display = 'block'
})

let logOut = document.getElementById('logoutBtn')
logOut.addEventListener('click', ()=>{
  window.location = 'homechauff.html'
})

let b = [];
fetch(`https://63c67422dcdc478e15c1bf8d.mockapi.io/users`)
.then((res)=>{
    return res.json()
})
.then((data)=>{
    b = data
    display(data)
    localStorage.setItem('users', JSON.stringify(b))
    console.log(b)
})

// window.onload = function(){
//     localStorage.setItem("users", JSON.stringify(a))
// }

// let a = JSON.parse(localStorage.getItem('users'))||[]
let allUserTable = document.getElementById('allUserTable')
function display(data){
    allUserTable.innerHTML = null;
    data.forEach((element, index) => {
        let tr = document.createElement('tr')

        let td1 = document.createElement('td')
        td1.innerHTML = element.firstname+' '+element.lastname
        td1.setAttribute('class', 'CD')

        let td2 = document.createElement('td')
        td2.innerHTML = element.email
        td2.setAttribute('class', 'CD')

        let td3 = document.createElement('td')
        td3.innerHTML = element.mobile
        td3.setAttribute('class', 'CD')

        let td4 = document.createElement('td')
        td4.innerHTML = element.gender
        td4.setAttribute('class', 'CD')

        let td5 = document.createElement('td')
        td5.innerHTML = element.DOB
        td5.setAttribute('class', 'CD')

        let td6 = document.createElement('td')
        td6.setAttribute('class', 'CD')
        let delBtn = document.createElement('button')
        delBtn.innerHTML = 'DELETE'
        delBtn.addEventListener('click', ()=>{
            del(element.id)
            localStorage.setItem('users', JSON.stringify(data))
            data.splice(index,1)
            display(data)
        })
        // a.push(data)
        // localStorage.setItem('users', JSON.stringify(a))
        td6.append(delBtn)
        tr.append(td1,td2,td3,td4,td5,td6)
        allUserTable.append(tr)
    });
}

function del(x){
    fetch(`https://63c67422dcdc478e15c1bf8d.mockapi.io/users/${x}`,{
        method:'DELETE'
    })
}

let userID = document.getElementById('userID')
let fName = document.getElementById('fName')
let lName = document.getElementById('lName')
let email = document.getElementById('email')
let mobile = document.getElementById('mobile')
let pass = document.getElementById('pass')
let dob = document.getElementById('dob')
let gender = document.getElementById('gender')

let carForm = document.getElementById('userForm')
carForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log(email.value)
    fetch('https://63c67422dcdc478e15c1bf8d.mockapi.io/users', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body:{
            id: userID.value,
            firstname: fName.value,
            lastname: lName.value,
            email: email.value,
            mobile: mobile.value,
            password: pass.value,
            DOB: dob.value,
            gender: gender.value
        }
    })
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        display(data)
    })
    // let exData = JSON.parse(localStorage.getItem('cars'))||[]
    // let obj = {
    //     id: userID.value,
    //     firstname: carImg.value,
    //     lastname: carCompany.value,
    //     email: carYr.value,
    //     mobile: carModel.value,
    //     password: carName.value,
    //     DOB: carRate.value,
    //     gender: carPrice.value
    // }
    // exData.push(obj)
    // localStorage.setItem('cars', JSON.stringify(exData))
})
