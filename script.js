var body           = document.getElementById("body");
var header         = document.getElementById("header");
var welcome_text   = document.getElementById("welcome-text");
var header_texts   = document.getElementsByClassName("nav-text");
var project_images = document.getElementsByClassName("project-image");
var project_infos  = []

document.addEventListener("DOMContentLoaded", () => {
  for (let index = 0; index < project_images.length; index++) {
    const element = project_images[index];
    element.addEventListener("mouseover", (event) => {
        element.parentElement.lastElementChild.style.opacity = 1.0
    })
    element.addEventListener("mouseleave", (event) => {
        element.parentElement.lastElementChild.style.opacity = 0.0
    })
    element.addEventListener("click", (event) => {
        let split_strings = element.src.split("/")
        let file_name = element.src.split("/")[split_strings.length - 1].split(".").slice(0, -1) + ".html"
        document.location.href = "sub_pages/" + file_name
    })

    project_infos.push(element.parentElement.lastElementChild)
  }

    check_window_size()
});

document.addEventListener("scroll", (event) => {
    let scroll_y   = window.scrollY
    
    if (scroll_y == 0) {
        welcome_text.style.opacity = 1
    }
    else {
        welcome_text.style.opacity = 0
    }
})

addEventListener("resize", (event) => {
    check_window_size()
})

function check_window_size() {
    if (window.innerWidth < 1100) {
        var path = window.location.pathname;
        var page = path.split("/").pop();
        if (page == "index.html") {
            window.location.href = "sub_pages/too_narrow_screen.html";
        }
        else {
            window.location.href = "../sub_pages/too_narrow_screen.html";
        }
    }
}
