let btn = document.querySelector(".btn");
let h1 = document.querySelector("h1");
let p1 = document.querySelector(".p1");
let p2 = document.querySelector(".p2");
let img = document.querySelector("img");
let div = document.createElement("div");
let body = document.querySelector("body");
div.classList = "div"
body.appendChild(div);
div.appendChild(img);
div.appendChild(h1);
div.appendChild(p1);
div.appendChild(p2);
div.appendChild(btn);
div.style.display = "flex";
div.style.flexDirection = "column";
div.style.alignItems = "center";
div.style.marginTop = "50px";
div.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
div.style.width = "350px";
div.style.borderRadius = "50px";
div.style.padding = "20px";

async function getRandomUser() {
  try {
    let response = await fetch(
      "https://random-data-api.com/api/users/random_user"
    );
    let data = await response.json();
    h1.textContent = data.first_name;
    p1.textContent = data.phone_number;
    p2.textContent = data.subscription.status;
    img.src = data.avatar;
    img.alt = "User Avatar";
  } catch (error) {
    console.log(error);
  }
}
getRandomUser();

btn.addEventListener("click", getRandomUser);
