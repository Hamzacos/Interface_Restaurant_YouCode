// not a good practice but It works right now (testing stat)
      window.addEventListener("DOMContentLoaded", () => {
        let navIcons = document.querySelectorAll(".icon1 a")
        navIcons.forEach(icon => {
          console.log(icon.href)
          if(icon.href == window.location.href + '#') {
            icon.classList.add("active")
          } else {
            icon.classList.remove("active")
          }
        })

        console.log("hello")
      })


      