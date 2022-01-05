
      window.addEventListener("DOMContentLoaded", () => {
        let navIcons = document.querySelectorAll(".icon1 a")
        navIcons.forEach(icon => {
          if(icon.href == window.location.href) {
            icon.classList.add("active")
          } else {
            icon.classList.remove("active")
          }
        })

        console.log("hello")
      })


      