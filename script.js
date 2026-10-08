// ================= MOBILE MENU =================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


// Close mobile menu after clicking a link

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function (item) {

    item.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


// ================= SELECT SERVICE =================

function selectService(serviceName) {

    const serviceDropdown =
        document.getElementById("service");

    serviceDropdown.value = serviceName;

    document.getElementById("booking")
        .scrollIntoView({
            behavior: "smooth"
        });

}


// ================= BOOKING FORM =================

const bookingForm =
    document.getElementById("bookingForm");

const popup =
    document.getElementById("popup");

const popupMessage =
    document.getElementById("popupMessage");


bookingForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    const service =
        document.getElementById("service").value;

    const date =
        document.getElementById("date").value;

    const time =
        document.getElementById("time").value;


    popupMessage.innerHTML =
        `Thank you, <strong>${name}</strong>!<br><br>
        Your <strong>${service}</strong> service has been
        requested for <strong>${date}</strong> at
        <strong>${time}</strong>.`;


    popup.style.display = "flex";


    bookingForm.reset();

});


// ================= CLOSE POPUP =================

function closePopup() {

    popup.style.display = "none";

}


// Close popup when clicking outside

popup.addEventListener("click", function (event) {

    if (event.target === popup) {

        closePopup();

    }

});


// ================= DATE VALIDATION =================

// Prevent selecting past dates

const dateInput =
    document.getElementById("date");

const today =
    new Date().toISOString().split("T")[0];

dateInput.setAttribute("min", today);