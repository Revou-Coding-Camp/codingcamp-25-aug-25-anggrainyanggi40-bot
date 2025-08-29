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
const form = document.getElementById('myForm');
const hasilBox = document.getElementById('hasilBox');

form.addEventListener('submit', function(e) 
{
  e.preventDefault(); // cegah reload

  const nama = document.getElementById('nama').value;
  const tanggal = document.getElementById('tanggal').value;
  const jk = document.getElementById('jk').value;
  const pesan = document.getElementById('pesan').value;

  // Buat box hasil dengan Tailwind
  const box = document.createElement('div');
  box.className = "bg-white p-6 rounded-xl shadow border-l-4 border-blue-500";
  box.innerHTML = `
    <p><strong>Nama:</strong> ${nama}</p>
    <p><strong>Tanggal Lahir:</strong> ${tanggal}</p>
    <p><strong>Jenis Kelamin:</strong> ${jk}</p>
    <p><strong>Pesan:</strong> ${pesan}</p>`;

  // Tambahkan box ke container hasil
  hasilBox.appendChild(box);

  // Reset form setelah submit
  form.reset();
0});
