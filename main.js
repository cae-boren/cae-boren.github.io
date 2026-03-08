const welcome_card     = document.getElementById('welcome-card')
const project_images   = document.getElementsByClassName("project-image")
const section_contents = document.querySelectorAll('.section-content')
const project_contents = document.querySelectorAll('.m0ther, .entropy, .slip-up-n-slide, .terrain-tool, .personal-project, .about-me')

Array.from(project_images).forEach(img => {
    img.addEventListener("dragstart", (e) => e.preventDefault())
})

const header_iframe = document.querySelector('iframe')
header_iframe.addEventListener("load", () => {
    header_iframe.contentWindow.postMessage({ type: 'page-context', is_index: true }, '*')
})

window.addEventListener("message", (event) => {
    const { type, target } = event.data
    if (type !== 'nav-click') return
    showSection(target)
})

document.addEventListener("DOMContentLoaded", () => {
    const params  = new URLSearchParams(window.location.search)
    const section = params.get('section')
    if (section) {
        showSection(section)
        history.replaceState(null, '', window.location.pathname)
    }

    for (let index = 0; index < project_images.length; index++) {
        const element = project_images[index]

        element.addEventListener("mouseover", () => {
            element.parentElement.lastElementChild.style.opacity = 1.0
        })
        element.addEventListener("mouseleave", () => {
            element.parentElement.lastElementChild.style.opacity = 0.0
        })
        element.addEventListener("click", () => {
            let split_strings = element.src.split("/")
            let content_class = element.src.split("/")[split_strings.length - 1].split(".").slice(0, -1)
            content_class = content_class[0].replace("_", "-").replace("_", "-").replace("_", "-")
            window.location.href = content_class + '.html'
        })
    }
})

function showSection(target) {
    if (target === "home") {
        hide_all_section_contents()
        welcome_card.classList.add('visible')
        welcome_card.classList.remove('hidden')
        return
    }

    welcome_card.classList.add('hidden')
    hide_all_section_contents()

    if (target === "about-me") {
        window.location.href = 'about-me.html'
    } else {
        document.getElementById(target).classList.add('visible')
        document.getElementById(target).classList.remove('hidden')
    }
}

function hide_all_section_contents() {
    window.scrollTo(0, 0)
    section_contents.forEach(s => s.classList.remove('visible'))
    section_contents.forEach(s => s.classList.add('hidden'))
    project_contents.forEach(s => s.classList.remove('visible'))
    project_contents.forEach(s => s.classList.add('hidden'))
}