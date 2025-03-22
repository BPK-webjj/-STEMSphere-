document.addEventListener("DOMContentLoaded", function () {
    // Swiper initialization
    try {
      const swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        grabCursor: true,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 25,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        },
      });
    } catch (error) {
      console.error("Swiper initialization failed:", error);
    }
  
    // Store about text in an object, keyed by name
    const aboutTextData = {
      "Zin Lynn Thant": "As Chairman, I lead STEMSphere's mission to inspire and educate the next generation of STEM innovators with over 10 years of experience in educational leadership.",
      "Ei Ei Chaw": "As Academic Director, I oversee curriculum development and ensure our programs meet the highest educational standards in STEM fields.",
      "Ei Ei Phyo": "As Operation Director, I manage daily operations and coordinate between departments to keep STEMSphere running smoothly.",
      "Wai Thown Hnin": "As Marketing Director, I develop strategies to promote STEMSphere’s initiatives and engage our community.",
      "Shwe Phoo Eain": "As Creative Director, I bring innovative ideas to life through design and creative projects that enhance STEM education.",
      "Shoon Lae Oo": "As Financial Director, I ensure the fiscal health of STEMSphere through strategic planning and budgeting.",
      "Bhone Pyae Ko": "As Technology Director, I lead the development of cutting-edge tools to support STEM learning.",
      "Shwe Yi Phuu Wai": "As Dean of Science, I foster scientific curiosity and research among our members.",
      "Aung Wai Phyo": "As Dean of Technology, I guide tech-focused initiatives to advance our mission.",
      "Hein Htet Oo": "As Dean of Engineering, I oversee engineering projects that inspire practical innovation.",
      "Naing Khant Aung": "As Dean of Mathematics, I promote mathematical excellence and problem-solving skills.",
      "Ye Man Oo": "As General Secretary, I keep our team organized and communication flowing smoothly.",
      "Zay Phyo Naing": "As Coordination Lead, I connect teams and ensure seamless collaboration across STEMSphere."
    };
  
    // Create modal elements
    const modalOverlay = document.createElement("div");
    modalOverlay.classList.add("modal-overlay");
    document.body.appendChild(modalOverlay);
  
    const modalContent = document.createElement("div");
    modalContent.classList.add("modal-content");
    modalOverlay.appendChild(modalContent);
  
    const modalClose = document.createElement("button");
    modalClose.classList.add("modal-close");
    modalClose.textContent = "×";
    modalContent.appendChild(modalClose);
  
    const modalTitle = document.createElement("h3");
    modalContent.appendChild(modalTitle);
  
    const modalText = document.createElement("p");
    modalContent.appendChild(modalText);
  
    // Close modal when clicking the close button
    modalClose.addEventListener("click", function() {
      modalOverlay.classList.remove("show");
    });
  
    // Close modal when clicking outside the modal content
    modalOverlay.addEventListener("click", function(e) {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove("show");
      }
    });
  
    // About Me button functionality
    const aboutButtons = document.querySelectorAll(".aboutMe");
  
    aboutButtons.forEach(button => {
      button.addEventListener("click", function() {
        const cardContent = this.closest(".card-content");
        const nameElement = cardContent.querySelector(".name");
        const professionElement = cardContent.querySelector(".profession");
  
        if (nameElement && professionElement) {
          const name = nameElement.textContent;
          const profession = professionElement.textContent;
  
          // Set modal content
          modalTitle.textContent = `${name} - ${profession}`;
          modalText.textContent = aboutTextData[name] || "No information available.";
  
          // Show modal
          modalOverlay.classList.add("show");
        } else {
          console.error("Name or profession element not found in card:", cardContent);
        }
      });
    });
  });