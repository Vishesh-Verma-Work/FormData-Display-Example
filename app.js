let name = document.querySelector("#name");
let phone = document.querySelector("#phone");
let address = document.querySelector("#address");
let age = document.querySelector("#age");
let sex = document.querySelector("#sex");
let email = document.querySelector("#email");
let comments = document.querySelector("#comments");

let userForm = document.querySelector("#userForm");
let code = document.querySelector("#code");


let displayName = document.querySelector("#displayName");
let displayphone = document.querySelector("#displayphone");
let displayAddress = document.querySelector("#displayAddress");
let displayAge = document.querySelector("#displayAge");
let displaysex = document.querySelector("#displaysex");
let displayEmail = document.querySelector("#displayEmail");
let displaycomment = document.querySelector("#displaycomment");



userForm.addEventListener("submit", function(event){
    event.preventDefault();
    const data = {
        Name : name.value,
        Phone : phone.value,
        Address : address.value,
        Age : age.value,
        Sex : sex.value,
        Email : email.value,
        Comment :comments.value
    };
    console.log(data); 

    displayName.innerText = data.Name;
    displayphone.innerText = data.Phone;
    displayAddress.innerText = data.Address;
    displayAge.innerText = data.Age;
    displaysex.innerText = data.Sex;
    displayEmail.innerText = data.Email;
    displaycomment.innerText = data.Comment;

   
    const jsonString = JSON.stringify(data, null, 2);
    code.innerText = jsonString;
});

