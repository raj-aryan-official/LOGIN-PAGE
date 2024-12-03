let loginbtn=document.getElementById("login_btn");
let SignUpPage=document.getElementById("signup");
let loginPage=document.getElementById("login");
let signupbtn=document.getElementById("signup_btn");
let signupbttn=document.getElementById("signupbttn");

loginbtn.addEventListener('click',(e)=>{
    SignUpPage.style.display='none';
    loginPage.style.display='block';
})
signupbtn.addEventListener('click',(e)=>{
    SignUpPage.style.display='block';
    loginPage.style.display='none';
})
signupbttn.addEventListener('click',(e)=>{
   let email=document.getElementById("email").value;
   let password=document.getElementById("password").value;

  if(localStorage.getItem(email) === password){
    alert("user registerd already");
    return;
  }
  (localStorage.setItem(email,password))
  alert("new user registerd")
})
