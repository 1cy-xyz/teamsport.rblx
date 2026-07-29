// ==========================
// TEAMSPORT STAFF PORTAL JS
// ==========================


// STAFF CLOCK SYSTEM

const clockButtons = document.querySelectorAll(".staff-card button");


clockButtons.forEach(button => {

    button.addEventListener("click", () => {


        if(button.innerText === "Clock In") {

            button.innerText = "Clock Out";

            button.style.background = "#e74c3c";


            const status = button.parentElement.querySelector(".offline");


            if(status) {

                status.innerText = "● Clocked In";
                status.className = "online";

            }


        } else {


            button.innerText = "Clock In";

            button.style.background = "#00aeef";


            const status = button.parentElement.querySelector(".online");


            if(status) {

                status.innerText = "● Off Duty";
                status.className = "offline";

            }

        }


    });

});




// ==========================
// KART STATUS SYSTEM
// ==========================


const kartButtons = document.querySelectorAll(".kart-card button");


kartButtons.forEach(button => {


    button.addEventListener("click", () => {


        const card = button.parentElement;


        const status = card.querySelector(".online, .offline, .warning");


        if(status) {


            if(status.innerText.includes("Available")) {


                status.innerText = "● Maintenance";
                status.className = "warning";


            } else {


                status.innerText = "● Available";
                status.className = "online";


            }


        }


    });


});





// ==========================
// ANNOUNCEMENT POPUP
// ==========================


const announcements = document.querySelectorAll(".announcement-card");


announcements.forEach(card => {


    card.addEventListener("click", () => {


        const title = card.querySelector("h2").innerText;


        alert(
            "Announcement:\n\n" + title
        );


    });


});





// ==========================
// TRACK POSTS
// ==========================


const posts = document.querySelectorAll(".post");


posts.forEach(post => {


    post.addEventListener("click", () => {


        alert(
            post.innerText +
            "\n\nMarshal post selected."
        );


    });


});

// ==========================
// LOGIN SYSTEM
// ==========================


function login(){


const username =
document.getElementById("username").value;


const password =
document.getElementById("password").value;



// Temporary accounts

const users = [

{
username:"manager",
password:"teamsport123",
role:"Manager"
},


{
username:"marshal",
password:"marshal123",
role:"Staff"
}

];



const account = users.find(user =>

user.username === username &&
user.password === password

);



if(account){


localStorage.setItem(
"loggedIn",
"true"
);


localStorage.setItem(
"role",
account.role
);



window.location.href =
"dashboard.html";



}else{


document.getElementById(
"login-message"
).innerHTML =
"Incorrect login details";


}



}

// ==========================
// PAGE PROTECTION
// ==========================


const protectedPages = [
    "staff.html",
    "track.html",
    "live.html",
    "karts.html",
    "statistics.html",
    "announcements.html",
    "dashboard.html"
];


let currentPage = window.location.pathname.split("/").pop();


// If URL is just / use index.html
if(currentPage === ""){
    currentPage = "index.html";
}


if(protectedPages.includes(currentPage)){

    let loggedIn = localStorage.getItem("loggedIn");


    if(loggedIn !== "true"){

        window.location.replace("login.html");

    }

}



// ==========================
// LOGOUT
// ==========================


function logout(){

    localStorage.removeItem("loggedIn");
    localStorage.removeItem("role");

    window.location.replace("login.html");

}
