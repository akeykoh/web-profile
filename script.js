// untuk membuat menu responsive
const bars = document.querySelector('.bar')
const barsIcon = document.querySelector('.bar i')
const dropDownMenu = document.querySelector('.dropdown_menu')

bars.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    barsIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'
}

// untuk membuat title tab about us responsive
var titletabs = document.getElementsByClassName("titleAbout_tabs");
var contenttabs = document.getElementsByClassName("about_tabContents");

function opentab(tabtitle) {
    for (var i = 0; i < titletabs.length; i++) {
        titletabs[i].classList.remove("active");
    }
    for (var j = 0; j < contenttabs.length; j++) {
        contenttabs[j].classList.remove("active_tab");
    }
    event.currentTarget.classList.add("active")
    document.getElementById(tabtitle).classList.add("active_tab")
}
