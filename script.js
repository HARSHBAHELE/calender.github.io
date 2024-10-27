let monthb = document.querySelector("#month")
let dayb = document.querySelector("#day");
let dateb = document.querySelector("#date");
let yearb = document.querySelector("#year");
let hindi = document.querySelector(".Hindi");
let english = document.querySelector(".English")

let date = new Date();
let month = date.getMonth();

monthb.innerText = date.toLocaleString("en", {
    month: "long",
});

dayb.innerText = date.toLocaleString("en", {
    weekday: "long",
});

dateb.innerText = date.getDate();
yearb.innerText = date.getFullYear();

hindi.addEventListener("click",()=> {
    monthb.innerText = date.toLocaleString("hi", {
        month: "long",
    });
    
    dayb.innerText = date.toLocaleString("hi", {
        weekday: "long",
    });
});
english.addEventListener("click",()=> {
    monthb.innerText = date.toLocaleString("en", {
        month: "long",
    });
    
    dayb.innerText = date.toLocaleString("en", {
        weekday: "long",
    });
})