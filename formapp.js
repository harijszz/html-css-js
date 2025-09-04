const myForm = document.getElementById("myForm");
myForm.addEventListener("submit", function(event){
event.preventDefault();
const fname=document.getElementById('fname').value;
const lname=document.getElementById('lname').value;
const email=document.getElementById('email').value;

const formData=new FormData(myForm);
console.log("First name: ",formData.get("fname"));
console.log("Last name: ", formData.get('lname'));
console.log("E-mail: ", formData.get('email'));
})
