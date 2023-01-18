
const login = document.querySelector(".login");
const loginPage = document.querySelector(".loginPage");
const close = document.querySelector(".close");

login.addEventListener("click" , ()=>{
    loginPage.style.display = "flex";
});

close.addEventListener("click" , ()=>{
    loginPage.style.display = "none";

});


