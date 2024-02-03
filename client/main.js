const form = document.getElementById("form");
const baseURL = `https://mytechatwallapi.onrender.com`;

// Generic function to fetch posts
async function fetchPosts() {
  const posts = await fetch(baseURL);
  let result = await posts.json();
  return result;
}

// Generic utility to loop through data and compose
async function displayPosts(data) {
  const postsCntr = document.getElementById("posts-container");
  // let username = data.body.username;
  // let message = data.body.message;

  let currentPosts = await fetchPosts();

  postsCntr.innerHTML = "";
  currentPosts.reverse().forEach((post) => {
    let h3Tag = document.createElement("h3");
    let pTag = document.createElement("p");

    let singlePost = document.createElement("div");

    h3Tag.textContent = post.username;
    pTag.textContent = post.message;
    singlePost.appendChild(h3Tag);
    singlePost.appendChild(pTag);
    postsCntr.appendChild(singlePost);
  });
}

displayPosts();

// Event handler for form submission
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  console.log("clicked");

  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  console.log(data);

  try {
    console.log("tried");
    const response = await fetch(baseURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      console.log("api response ok");
      displayPosts();
    } else {
      console.error("Failed to post message", response.status);
    }
  } catch (error) {
    console.error("Error during fetch", error);
  }
});
