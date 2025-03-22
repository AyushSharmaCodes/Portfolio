'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });


// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}

// navigationLinks.forEach((link) => {
//   link.addEventListener("click", function () {
//     const targetPage = this.innerHTML.toLowerCase();

//     pages.forEach((page) => {
//       if (page.dataset.page === targetPage) {
//         page.classList.add("active");
//       } else {
//         page.classList.remove("active");
//       }
//     });

//     navigationLinks.forEach((navLink) => {
//       navLink.classList.toggle("active", navLink === this);
//     });

//     window.scrollTo(0, 0);
//   });
// });

// mywork variables
const myworkItem = document.querySelectorAll("[data-mywork-item]");
const myworkModalContainer = document.querySelector("[data-mywork-model-container]");
const myworkModalCloseBtn = document.querySelector("[data-mywork-close-btn]");
const myworkOverlay = document.querySelector("[data-mywork-overlay]");

// modal variable
const myworkModalImg = document.querySelector("[data-mywork-modal-img]");
const myworkModalTitle = document.querySelector("[data-mywork-modal-title]");
const myworkModalText = document.querySelector("[data-mywork-message]");

const myworkNotesContent = document.querySelector("[data-mywork-notes-content]");
const myworkCodeSnippetsContent = document.querySelector("[data-mywork-code-snippets-content]");

// modal toggle function
const myworkModalFunc = function () {
  myworkModalContainer.classList.toggle("active");
  myworkOverlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < myworkItem.length; i++) {

  myworkItem[i].addEventListener("click", function () {
    myworkModalImg.src = this.querySelector("[data-mywork-img]").src;
    myworkModalImg.alt = this.querySelector("[data-mywork-img]").alt;
    myworkModalTitle.innerHTML = this.querySelector("[data-mywork-item-title]").innerHTML;
    myworkModalText.innerHTML = this.querySelector("[data-mywork-item-text]").innerHTML;
    myworkModalFunc();
  });
}

// add click event to modal close button
myworkModalCloseBtn.addEventListener("click", myworkModalFunc);
myworkOverlay.addEventListener("click", myworkModalFunc);

function openPopup(item) {
  if (item === "item2") {
    myworkNotesContent.style.display = "none";
    myworkCodeSnippetsContent.style.display = "block";
  }
  if (item === "item1") {
    myworkNotesContent.style.display = "block";
    myworkCodeSnippetsContent.style.display = "none";
  }
}

function downloadFile(filename, buttonSelector, btntext, buttonLoader) {
  const button = document.querySelector(buttonSelector);
  const buttonText = document.querySelector(btntext);
  const loader = document.querySelector(buttonLoader);

  // Start loading animation
  button.classList.add("loading");
  buttonText.innerText = "Downloading...";
  loader.style.display = "inline-block";

  // Construct file URL (Assuming GitHub Pages deployment)
  const fileUrl = window.location.origin + "/" + filename;
  const a = document.createElement("a");
  a.href = fileUrl;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

  // Stop loading animation after 3 seconds
  setTimeout(() => {
    button.classList.remove("loading");
    buttonText.innerText = "Download File"; // Reset text
    loader.style.display = "none"; // Hide loader
  }, 3000);
}