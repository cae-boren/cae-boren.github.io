const name_button = document.getElementById('name-button')
const nav_buttons = document.querySelectorAll('header nav a')

let is_index = false

window.addEventListener("message", (event) => {
    if (event.data.type === 'page-context') {
        is_index = event.data.is_index
    }
})

function handleNav(target) {
    if (is_index) {
        window.parent.postMessage({ type: 'nav-click', target: target }, '*')
    } else {
        window.parent.location.href = 'index.html' + (target === 'home' ? '' : '?section=' + target)
    }
}

if (name_button) {
    name_button.addEventListener("click", () => handleNav('home'))
}

nav_buttons.forEach(button => {
    if (button.innerHTML == "LINKEDIN" || button.innerHTML == "EMAIL" || button.innerHTML == "CV") {
        return
    }
    button.addEventListener("click", () => handleNav(button.dataset.target))
})