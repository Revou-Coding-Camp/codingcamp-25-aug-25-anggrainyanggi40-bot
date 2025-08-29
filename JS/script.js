console.log("Hello, World!")

greet();

function greet()  {
    let username = prompt("Please enter your name:");
    document.getElementById('username').innerText = username ;
}

function validateForm() {
    let name = document.getElementById('name-input').value;
    if (name === "") {
        alert("Name must be filled out");
    } 

    let email = document.getElementById('email-input').value;
    if (email === "") {
        alert("Email must be filled out");
    }
    let message = document.getElementById('message-input').value;
    if (message === "") {
        alert("Message must be filled out");
    }  else {
        alert("Thank you for your message, " + name + "!");
    }
}
