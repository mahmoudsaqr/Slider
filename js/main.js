let images = document.querySelectorAll("img");
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let text = document.querySelector(".slide-number");
let indicators = document.querySelector(".indicators");

//Create ul and add 5 li in it
let Create_ul = function () {
  let Ul = document.createElement("ul"); // عملنا ul
  for (let i = 0; i < images.length; i++) {
    // هنعمل 5 li
    Ul.appendChild(document.createElement("li"));
    Ul.children[i].innerHTML = `${i + 1}`;
    Ul.children[i].setAttribute(
      "style",
      `padding : 10px;position : absolute;left : calc(${
        i + 1
      } *40px); top : 305px ;background-color: #008789; color:white;cursor: pointer;border-radius: 10px;`
    );
    li_click(Ul.children[i], Ul); //when li clicked it shows the image related to this li
  }
  Ul.children[0].style.opacity = "50%"; // first li is selected by default
  Ul.setAttribute("style", "display : flex;position : absolute;left : 29%"); // make css to ul
  return Ul;
};

//click on li and show the image that related to that li
let li_click = function (li, Ul) {
  li.onclick = function (e) {
    let active = document.querySelectorAll(".active"); // all selectors that has active class
    for (let j = 0; j <= images.length; j++) {
      if (parseInt(li.innerHTML) === j + 1) {
        // if the text number of li === number of image
        active.forEach((e) => {
          //remove all active class
          e.classList.remove("active");
        });
        images[j].classList.add("active"); //add active to the image number that equal to the li text number
        if (images[j].className === "active") {
          let my_li = document.querySelectorAll("li"); // all selectors of li
          my_li.forEach((e) => {
            e.style.opacity = "100%"; // make opacity = 100% to all li
          });
          Ul.children[j].style.opacity = "50%"; // make the li opacity that was selected = 50%
          text.innerHTML = `Slider ${j + 1} of #${images.length}`; // write the selected li text in the slider text
        }
      }
    }
    next.setAttribute("style", "opacity:100%;cursor: pointer;"); // make next button opacity = 100%
    prev.setAttribute("style", "opacity:100%;cursor: pointer;"); // make prev button opacity = 100%
    if (images[0].className === "active") {
      // if first image is active then make the prev button opacity = 50%
      prev.setAttribute("style", "opacity:50%;cursor: no-drop;");
    }
    if (images[images.length - 1].className === "active") {
      // if first image is active then make the next button opacity = 50%
      next.setAttribute("style", "opacity:50%;cursor: no-drop;");
    }
  };
};

let ul = Create_ul(); // دي عشان تستخدم نفسها مره واحده فالمشروع وتعدل عالمتغير ده بس براحتك
text.innerHTML = `Slider 1 of #${images.length}`; // write the intialized li text in the slider text
indicators.appendChild(ul); // add ul to indicators
if (images[0].className === "active") {
  prev.setAttribute("style", "opacity:50%;cursor: no-drop;"); // make prev button opacity = 50% at default
}

// Handle Click on Previous and Next Buttons


next.addEventListener("click", () => {nextSlide()});
prev.addEventListener("click", () => {prevSlide()});



// Next Button
let nextSlide = function () {
  for (let i = 0; i < images.length; i++) {
    // بنعمل لوب على كل الصور
    if (images[i].className === "active") {
      // لو فيه صورة فيها كلاس اكتيف
      if (i === images.length - 1) {
        // لو وصلت لاخر صورة خلي زرار النيكست ميعملش حاجه
        break;
      } else {
        images[i].classList.remove("active"); // بنشيل الاكتيف من الصورة دي
        images[i + 1].classList = "active"; // بنضيف اكتيف عالصورة اللي بعدها
        next.setAttribute("style", "opacity:100%;cursor: pointer;"); // make next button opacity = 100%
        prev.setAttribute("style", "opacity:100%;cursor: pointer;"); // make prev button opacity = 100%
        if (images[images.length - 1].className === "active") {
          // لو وصلنا لاخر صورة بنخلي زرار النيكست خمسين فالميه شفافية
          next.setAttribute("style", "opacity:50%;cursor: no-drop;");
        }
        ul.children[i].style.opacity = "100%"; // make the before li opacity = 100% related to the image that i was in it
        ul.children[i + 1].style.opacity = "50%"; // make the selected li opacity = 50% related to the image that iam in it
        text.innerHTML = `Slider ${i + 2} of #${images.length}`; // write the selected image number in the slider text
        break;
      }
    }
  }
};

// Previous Button زي اللي فوق بس العكس
let prevSlide = function () {
  for (let i = images.length - 1; i > 0; i--) {
    if (images[i].className === "active") {
      if (i === 0) {
        break;
      }
      images[i].classList.remove("active");
      images[i - 1].classList = "active";
      next.setAttribute("style", "opacity:100%;cursor: pointer;");
      prev.setAttribute("style", "opacity:100%;cursor: pointer;");
      if (images[0].className === "active") {
        prev.setAttribute("style", "opacity:50%;cursor: no-drop;");
      }
      ul.children[i].style.opacity = "100%";
      ul.children[i - 1].style.opacity = "50%";
      text.innerHTML = `Slider ${i} of #${images.length}`;
      break;
    }
  }
};
