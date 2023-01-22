let burgerMenu = document.getElementById('burgerMenu_2')
burgerMenu.style.display = 'none'
let closeBtn = document.getElementById('clBtn_2')
let burgerBtn = document.getElementById('burgerBtn_2')

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

let carTable = document.getElementById('carTable')
// let carData = [
//     {
//         id:1,
//         image_url:
//         "https://avis.co.in/upload/model/1010dzire.png",
//         company: "Maruti Suzuki",
//         reg: 2018,
//         model: "DZIRE",
//         name: "DZIRE / ETIOS / AMAZE OR SIMILAR",
//         rate: `${18.50} / km`,
//         price:  11370,
//         strikedoffprice: 2599,
//     },
//     {   id:2,
//         image_url:
//             "https://avis.co.in/upload/model/10121012Honda-City.png",
//         company: "Honda",
//         reg: 2016,
//         model: "CITY",
//         name: "CITY OR SIMILAR",
//         rate: `${22.00} / km`,
//         price: 14699,
//         strikedoffprice: 999,
//     },
//     {   id:3,
//         image_url:
//             "https://avis.co.in/upload/model/1013corolla.png",
//             company: "Toyota",
//         reg: 2017,
//         model: "COROLLA ALTIS",
//         name: "COROLLA ALTIS OR SIMILAR",
//         rate: `${27} / km`,
//         price: 20000,
//         strikedoffprice: 2099,
//     },
//     {
//         id:5,
//         image_url:
//             "https://avis.co.in/upload/model/12786Crystasimilar_nav.png",
//             company: "Toyota",
//         reg: 2021,
//         model: "INNOVA CRYSTA",
//         name: "INNOVA CRYSTA",
//         rate: `${39} / km`,
//         price: 20000,
//         strikedoffprice: 799,
//     },
//     {   id:6,
//         image_url:
//             "https://avis.co.in/upload/model/1014camry1.png",
//             company: "Toyota",
//         reg: 2022,
//         model: "CAMRY",
//             name: "CAMRY / ACCORD OR SIMILAR",
//             rate: `${65} / km`,
//         price: 26240,
//         strikedoffprice: 3599,
//     },
//     {
//         id:7,
//         image_url:
//             "https://avis.co.in/upload/model/10151022BMW5series.png",
//             company: "BMW",
//         reg: 2020,
//         model: "BMW 5 SERIES",
//         name: "BMW 5 SERIES OR SIMILAR",
//         rate: `${102} / km`,
//         price: 51200,
//         strikedoffprice: 3199,
//     },
//     {   id:8,
//         image_url:
//             "https://avis.co.in/upload/model/MERCEDES-E-CLASS10878400-40e3-48fd-8c78-2eef8c9f0d05%20(2).png",
//             company: "MERCEDES",
//         reg: 2023,
//         model: "E CLASS",
//         name: "MERCEDES E CLASS OR SIMILAR",
//         rate: `${95} / km`,
//         price: 63200,
//         strikedoffprice: 3199,
//     },
//     {
//         id:9,
//         image_url:
//         "https://avis.co.in/upload/model/2010Merc-Benz---S---350-New-Shape.png",
//         company: "MERCEDES",
//         reg: 2021,
//         model: "S 350",
//         name: "MERCEDES- S 350",
//         rate: `${99} / km`,
//         price: 174080,
//         strikedoffprice: 1099,
//     },
   
//     {
//         id:11,
//         image_url:
//         "https://avis.co.in/upload/model/2018Merc-Benz-S-500.png",
//         company: "MERCEDES",
//         reg: 2020,
//         model: "S 500",
//         name: "MERCEDES-S 500",
//         rate: `${120} / km`,
//         price: 291680,
//         strikedoffprice: 1440,
//     },

//     {
//        id:12,
//       image_url:
//         "https://avis.co.in/upload/model/2017Merc-Benz-S-500-Maybach.png",
//         company: "MERCEDES",
//         reg: 2023,
//         model: "S 500",
//         name: "MAYBACH-S 500",
//         rate: `${120} / km`,
//         price: 354560,
//         strikedoffprice: 1440,
//     },
//  ];
// display(carData)


let car = []
fetch('http://localhost:3000/cars')
.then((res)=>{
    return res.json()
})
.then((data)=>{
    car = data
    display(data);
    localStorage.setItem('cars', JSON.stringify(car))
})

function display(data){
    carTable.innerHTML = null
    data.forEach((element,index) => {
        let tr = document.createElement('tr')

        let td1 = document.createElement('td')
        td1.innerHTML = element.company
        td1.setAttribute('class', 'CD')

        let td2 = document.createElement('td')
        td2.innerHTML = element.model
        td2.setAttribute('class', 'CD')

        let td3 = document.createElement('td')
        td3.innerHTML = element.reg
        td3.setAttribute('class', 'CD')

        let td4 = document.createElement('td')
        td4.innerHTML = element.rate
        td4.setAttribute('class', 'CD')

        let td5 = document.createElement('td')
        td5.setAttribute('class', 'CD')
        let delBtn = document.createElement('button')
        delBtn.innerHTML = 'DELETE'
        delBtn.addEventListener('click', ()=>{
            data.splice(index,1)
            display(data)
        })
        td5.append(delBtn)
        tr.append(td1,td2,td3,td4,td5)
        carTable.append(tr)
    });
}

let carID = document.getElementById('carID')
let carImg = document.getElementById('carImg')
let carCompany = document.getElementById('carCompany')
let carYr = document.getElementById('carYr')
let carModel = document.getElementById('carModel')
let carName = document.getElementById('carName')
let carRate = document.getElementById('carRate')
let carPrice = document.getElementById('carPrice')
let carOfr = document.getElementById('carOfr')

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
    carData.push(obj)
    localStorage.setItem('cars', JSON.stringify(exData))
    display(carData)
})
