async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="post-title"]').value;
    //See if we will change post-url - post text idea
    const post_url = document.querySelector('input[name="post-url"]').value;
  
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        post_url
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);

  fetch(
    "https://api.giphy.com/v1/gifs/search?api_key=SfVN49dAUpJEJ6wmHG0eQN1Y7D2LTH0M&q=fall-apart-car"
  )
    .then(function (response) {
      //general response from HTTP request
      console.log(response);
      return response.json();
    })
    //response in JSON format - shows arrays
    .then(function (data) {
      console.log(data);
      // displaygify(data)
    

    var responseContainerEl = document.getElementById("gify-container");
    responseContainerEl.innerHTML = "";
    var gifImg = document.createElement("img");
    // gifImg.setAttribute("src", data.data.images.fixed_height.url);
    gifImg.setAttribute("src", data.data[0].images.downsized.url);
    responseContainerEl.appendChild(gifImg);
  });

  // function displaygify(data) {
  //   const gify = data.data[0];
  //   const gifyDiv = document.getElementById("gify-container");
  //   const gifyImg = document.createElement("img");
  //   gifyImg.src = gify.car
  //   ...
  // }
    