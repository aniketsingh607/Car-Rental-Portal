
var cars = [
  { name: "Maruti Swift", seats: 5, fuel: "Petrol", rate: 1800, ok: true },
  { name: "Tata Tiago", seats: 5, fuel: "Petrol", rate: 1500, ok: true },
  { name: "Hyundai Creta", seats: 5, fuel: "Diesel", rate: 3200, ok: true },
  { name: "Mahindra Thar", seats: 4, fuel: "Diesel", rate: 3600, ok: false },
  { name: "Toyota Innova", seats: 7, fuel: "Diesel", rate: 4200, ok: true },
  { name: "Tata Nexon EV", seats: 5, fuel: "Electric", rate: 2800, ok: true }
];

function g(id) { return document.getElementById(id).value; }


function showCars() {
  var cards = "", options = '<option value="0">-- Select a car --</option>';
  for (var i = 0; i < cars.length; i++) {
    var c = cars[i], status = '<span class="no">Not Available</span>';
    if (c.ok) {
      status = '<span class="yes">Available</span>';
      options += '<option value="' + c.rate + '">' + c.name + '</option>';
    }
    cards += '<div class="card"><h3>' + c.name + '</h3>Seats: ' + c.seats + '<br>Fuel: ' + c.fuel +
             '<br><b>Rs ' + c.rate + ' / day</b><br>' + status + '</div>';
  }
  document.getElementById("cards").innerHTML = cards;
  document.getElementById("car").innerHTML = options;
}


function bookCar() {
  var name = g("name"), phone = g("phone"), email = g("email");
  var rate = g("car"), pickup = g("pickup"), dropoff = g("dropoff");
  var car = document.getElementById("car");

  
  var error = "";
  if (name == "") error += "Enter your name.<br>";
  if (phone.length != 10 || isNaN(phone)) error += "Phone must be 10 digits.<br>";
  if (email.indexOf("@") == -1 || email.indexOf(".") == -1) error += "Enter a valid email.<br>";
  if (rate == 0) error += "Select a car.<br>";
  if (pickup == "" || dropoff == "") error += "Select both dates.<br>";
  else if (dropoff <= pickup) error += "Return date must be after pickup date.<br>";

  document.getElementById("message").innerHTML = error;
  var box = document.getElementById("summary");
  box.style.display = "none";
  if (error != "") return;

 
  var days = (new Date(dropoff) - new Date(pickup)) / (1000 * 60 * 60 * 24);
  box.style.display = "block";
  box.innerHTML = "<h3>Booking Summary</h3>Name: " + name + "<br>Phone: " + phone + "<br>Email: " + email +
    "<br>Car: " + car.options[car.selectedIndex].text + "<br>Pickup: " + pickup + "<br>Return: " + dropoff +
    "<br>Days: " + days + "<br>Rate per day: Rs " + rate + "<br><b>Total Cost: Rs " + days * rate + "</b>";
}

showCars();