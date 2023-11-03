

function cls() {
    let search_query = document.getElementById("search-box")
    search_query.value = "";
}

function root() {
    window.open("C:/")
}

// ===========================
function show(id) {
    let hiddenSection = document.getElementById(id)
    hiddenSection.style.display = "block"
    hiddenSection.style.zIndex = "10"
}

function hide(id) {
    let hiddenSection = document.getElementById(id)
    hiddenSection.style.display = "none"
    hiddenSection.style.zIndex = "initial"
}

// ===========================