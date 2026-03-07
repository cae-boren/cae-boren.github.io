const name_button      = document.getElementById('name-button')
const welcome_card     = document.getElementById('welcome-card')
const nav_buttons      = document.querySelectorAll('header nav a')
const project_images   = document.getElementsByClassName("project-image")
const section_contents = document.querySelectorAll('.section-content')
const project_contents = document.querySelectorAll('.m0ther, .entropy, .slip-up-n-slide, .terrain-tool, .personal-project, .about-me')

Array.from(project_images).forEach(img => {
    img.addEventListener("dragstart", (e) => e.preventDefault())
})

name_button.addEventListener("click", () => {
    hide_all_section_contents()

    welcome_card.classList.add('visible')
    welcome_card.classList.remove('hidden')
})

nav_buttons.forEach(button => {
    if (button.innerHTML == "LINKEDIN" || button.innerHTML == "EMAIL" || button.innerHTML == "CV") {
        return
    }
    
    button.addEventListener("click", () => {
        welcome_card.classList.add('hidden')
        hide_all_section_contents()

        const target = button.dataset.target
        if (target == "about-me") {
            document.querySelectorAll('.about-me').forEach(s => {
                s.classList.add('visible')
                s.classList.remove('hidden')
            })
        } else {
            document.getElementById(target).classList.add('visible')
            document.getElementById(target).classList.remove('hidden')
        }
    })
})

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
            hide_all_section_contents()
            let split_strings = element.src.split("/")
            let content_class = element.src.split("/")[split_strings.length - 1].split(".").slice(0, -1)
            content_class = content_class[0].replace("_", "-").replace("_", "-").replace("_", "-")

            document.querySelectorAll('.' + content_class).forEach(s => s.classList.add('visible'))
            document.querySelectorAll('.' + content_class).forEach(s => s.classList.remove('hidden'))
        })
    }
})

function hide_all_section_contents() {
    window.scrollTo(0, 0)

    section_contents.forEach(s => s.classList.remove('visible'))
    section_contents.forEach(s => s.classList.add('hidden'))
    project_contents.forEach(s => s.classList.remove('visible'))
    project_contents.forEach(s => s.classList.add('hidden'))
}
