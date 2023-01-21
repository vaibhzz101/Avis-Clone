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

fetch(`https://63c67422dcdc478e15c1bf8d.mockapi.io/users`)
.then((res)=>{
    return res.json()
})
.then((data)=>{
    display(data)
})

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
            data.splice(index,1)
            display(data)
        })
        td6.append(delBtn)
        tr.append(td1,td2,td3,td4,td5,td6)
        allUserTable.append(tr)
    });
}

let carForm = document.getElementById('carForm')
carForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    let exData = JSON.parse(localStorage.getItem('cars'))||[]
    let obj = {
        id: carID.value,
      image_url: carImg.value,
        company: carCompany.value,
        reg: carYr.value,
        model: carModel.value,
        name: carName.value,
        rate: carRate.value,
        price: carPrice.value,
        strikedoffprice: carOfr.value,
    }
    exData.push(obj)
    localStorage.setItem('cars', JSON.stringify(exData))
})

// function dl(){

// }