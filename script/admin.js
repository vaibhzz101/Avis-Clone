// BURGER JS
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
//******************

let logOut = document.getElementById('logoutBtn')
logOut.addEventListener('click', ()=>{
  window.location = 'homechauff.html'
  
})

let cars = JSON.parse(localStorage.getItem('cars'))||[]
let t_car = document.getElementById('totalCar');
t_car.innerHTML = cars.length;

let t_booking = document.getElementById('totalBooking');
let bookings = JSON.parse(localStorage.getItem('bookings'))||[]
t_booking.innerHTML = 5;


let t_user = document.getElementById('totalUser');
// let users = JSON.parse(localStorage.getItem('users'))||[];
fetch(`https://63c67422dcdc478e15c1bf8d.mockapi.io/users`)
.then((res)=>{
    return res.json()
})
.then((data)=>{
    t_user.innerHTML = data.length
})




google.charts.load('current',{packages:['corechart']});
google.charts.setOnLoadCallback(drawChart);
type="text/javascript"
google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["Element", "Density", { role: "style" } ],
    ["2019", 8.94, "dodgerblue"],
    ["2020", 10.49, "dodgerblue"],
    ["2021", 19.30, "dodgerblue"],
    ["2022", 21.38, "dodgerblue"]
  ]);

  var view = new google.visualization.DataView(data);
  view.setColumns([0, 1,
                   { calc: "stringify",
                     sourceColumn: 1,
                     type: "string",
                     role: "annotation" },
                   2]);

  var options = {
    title: "Sales Every Year (Lakhs)",
    width: 600,
    height: 400,
    bar: {groupWidth: "95%"},
    legend: { position: "none" },
  };
  var chart = new google.visualization.BarChart(document.getElementById("barchart_values"));
  chart.draw(view, options);
}


window.onpopstate = ()=>{
  window.location.href = "carAdmin.html"
}