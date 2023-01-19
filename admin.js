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

let cars = JSON.parse(localStorage.getItem('cars'))||[]
let t_car = document.getElementById('totalCar');
t_car.innerHTML = cars.length;

let t_booking = document.getElementById('totalBooking');
let bookings = JSON.parse(localStorage.getItem('bookings'))||[]
t_booking.innerHTML = bookings.length;

let t_user = document.getElementById('totalUser');
let users = JSON.parse(localStorage.getItem('users'))||[];
t_user.innerHTML = users.length

let t_sale = document.getElementById('totalSale');
let sales = JSON.parse(localStorage.getItem('sales'))||[];
t_sale.innerHTML = sales.length

let 