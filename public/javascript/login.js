
/* Login submission */
async function loginFormHandler(event) {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'post',
      body: JSON.stringify({
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
  }
}
//NHTSA code
// const getdata = ()=> {

//   fetch("https://api.nhtsa.gov/complaints/complaintsByVehicle?make=acura&model=rdx&modelYear=2012",{
//     mode:"no-cors"
//   })
//   .then(response => {
//       return response.json();
//       }).then(carData => {
//         console.log(carData)
//       })
//   }
//   getdata()

// //Event Listener - need to modify to Button/ on click method for radio utton
// document.addEventListener('DOMContentLoaded', ()=>{ 
// function fetchData(){
// //Part 1: Fetch request to Gify API 
// fetch(
//   "https://api.giphy.com/v1/gifs/search?api_key=SfVN49dAUpJEJ6wmHG0eQN1Y7D2LTH0M&q=brokencar"
// )
//   .then(function (response) {
//     console.log(response);
//     return response.json();
//   })
//   .then(function (gifydata) {
//     console.log(gifydata);

//     document.getElementById('gify').src = URL.createObjectURL(gifydata);

//     // // part 2: Find Container to attatch everything
//     var responseContainerEl = document.getElementById("gify-data");
//     responseContainerEl.innerHTML = "";
//     var gifImg = document.createElement("img");
//     gifImg.setAttribute("src", data.data.images.fixed_height.url);
//     responseContainerEl.appendChild(gifImg);
//   });
// }
// //calling wraping function
// fetchData();
// })

async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (username && email && password) {
    const response = await fetch('/api/users', {
      method: 'post',
      body: JSON.stringify({
        username,
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);