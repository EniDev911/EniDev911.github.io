// path static
const relativePathImage = "assets/img/";
const relativePathMedia = "assets/media/"

const toggleTheme = document.getElementById('toggle-theme');
const skillSection = document.getElementById('skill-software');
const toggleIcon = document.getElementById("toggle-icon");
const toggleText = document.getElementById("toggle-text");
const nav = document.getElementById('navbar');
const card = document.querySelector('.card');
const progress = document.querySelectorAll(".progress");
const progressBar = document.querySelectorAll(".progress-bar");
const navbarButtonIcon = document.querySelector('.navbar-toggler');
const groupButtonVertical = document.getElementById('group-btn-sm');


navbarButtonIcon.addEventListener('click', () => {
    groupButtonVertical.classList.toggle("collapse");
})


const changeLang = async section => {
    const requestJSON = await fetch(`../json/${section}.json`),
        data = await requestJSON.json();
    textsToChange.forEach(textToChange => {
        const section = textToChange.dataset.section,
            value = textToChange.dataset.value;
        textToChange.innerHTML = data[section][value];
    })
}


toggleTheme.addEventListener('click', () => {
    localStorage.setItem('theme', localStorage.getItem('theme') === 'dark' ? '' : 'dark');
    document.body.classList.toggle('dark');

    if (toggleIcon.src.includes('moon.svg')) {
        toggleIcon.src = "assets/img/logo/sun.svg";
        toggleText.textContent = "Light Side";
        toggleTheme.classList.add('bg-warning', 'text-dark');
        for (let pro of progress) {
            pro.classList.add('bg-secondary');
        }
        progressBar.forEach((i) => {
            i.classList.add('bg-danger');
        })
    } else {
        toggleIcon.src = "assets/img/logo/moon.svg";
        toggleText.textContent = "Dark Side";
        toggleTheme.classList.remove('bg-warning', 'text-dark');
        for (let pro of progress) {
            pro.classList.remove('bg-secondary');
        }
        progressBar.forEach((i) => {
            i.classList.remove('bg-danger');
        })
    }
});

window.onload = () => {
    if (localStorage.getItem('theme')) {
        document.body.classList.add(localStorage.getItem('theme'));
    }

}

window.addEventListener('scroll', () => {
    const carousel = document.getElementById('carouselVideo');
    nav.classList.remove('move', 'navbar-light');
    if (window.pageYOffset > 30) {
        nav.classList.add('move', 'shadow');
        if (window.pageYOffset > carousel.clientHeight - 20) {
            nav.classList.add('navbar-light');
        }
    } else {
        nav.classList.remove('move', 'navbar-light');
    }
});


function showMessage(title, image, message) {
    this.image = relativePathImage + 'software/' + image;
    this.message = message;
    let background = "#373a3c";
    let color = "#fff";
    if (toggleIcon.src.includes("moon.svg")) {
        background = "#222";
        color = "#ccc";
    }
    Swal.fire({
        title: title,
        imageUrl: this.image,
        imageWidth: "140px",
        html: this.message,
        background: background,
        color: color,
        grow: 'column',
        confirmButtonColor: "#EF5350",
        confirmButtonText: "entendido",
        showClass: {
            backdrop: 'swal2-noanimation', // disable backdrop animation
            popup: '',                     // disable popup animation
            icon: ''                       // disable icon animation
        },
        hideClass: {
            popup: '',                     // disable popup fade-out animation
        },
    })
}
function showAvatar() {
    let background = "#373a3c";
    if (toggleIcon.src.includes("moon.svg")) {
        background = "";
        color = "";
    }
    Swal.fire({
        title: "<h2 class='text-center'><code class='fs-1 text-center' style='color: #f50;'><i class='fas fa-user-secret fs-1'></i> {EniDev911}</code></h2>",
        // imageUrl: relativePathImage + "logo/logo_con_bg.png",
        imageUrl: "https://raw.githubusercontent.com/EniDev911/enidev911_guides/main/assets/png/practice.png",
        imageWidth: "200px",
        background: background,
        showConfirmButton: false,
        showCloseButton: true,
        closeButtonHtml: "<i class='fas fa-times'></i>",
    })
}


function showContactForm() {
    Swal.fire({
        title: "<h2 class='text-center'><code class='fs-1 text-center'><i class='fas fa-user-secret fs-1'></i> {EniDev911}</code></h2>",
        imageUrl: relativePathImage + "logo_sin_bg.png",
        imageWidth: "200px",
        showConfirmButton: false,
        showCloseButton: true,
        closeButtonHtml: "<i class='fas fa-times'></i>",
        input: 'password',
        inputLabel: 'Password'
    })
}

function playSound(filename = "lofi-beat-chill") {
    /**
      * Plays a sound using the HTML5.
      * @param {string} filename The name of the file.!
      */
    this.filename = relativePathMedia + filename
    var mp3Source = '<source src="' + this.filename + '.mp3" type="audio/mpeg">';
    var oggSource = '<source src="' + this.filename + '.ogg" type="audio/ogg">';
    var embedSource = '<embed hidden"true" autostart="true" loop="false" src="' + this.filename + '.mp3>"';
    if (this.filename.includes("lofi-beat-chill")) {
        document.getElementById("music").innerHTML = '<audio autoplay="autoplay" controls>' + mp3Source + oggSource + embedSource + '</audio>';
    } else {
        document.getElementById("sound").innerHTML = '<audio autoplay="autoplay" controls>' + mp3Source + oggSource + embedSource + '</audio>';
    }
}

function showTyped(e) {
    e.target.removeEventListener(e.type, showTyped);
    let arrString = ['EniDev911', "'Marco Antonio'", 31, "'Chile'", true]
    // Typed
    let typed = new Typed('.typed', {
        strings: [
            `<i class='coding-typed'><spam style='color: darkorange;'>${arrString[0]}</spam> = <spam style='color: #fa9;'>{<br>&nbsp;&nbsp;fullname:</spam> ${arrString[1]},<br>&nbsp;&nbsp;<spam style='color: #fa9;'>age:</spam> ${arrString[2]},<br>&nbsp;&nbsp;<spam style='color: #fa9;'>country:</spam> ${arrString[3]},<br>&nbsp;&nbsp;<spam style='color: #fa9;'>availability:</spam> <spam style='color: peru; font-style: italic;'>true</spam>,<br>&nbsp;&nbsp;<spam style='color: #fa9;'>profile:</spam> 'fullstack',<br>&nbsp;&nbsp;<spam style='color: #fa9;'>stack:</spam>[<br>&nbsp;&nbsp;&nbsp;&nbsp;'mern','mean', 'mevn'<br>&nbsp;&nbsp;&nbsp;&nbsp;'lamp', 'wamp', 'mamp'<br>&nbsp;&nbsp;]<spam style='color: #fa9;'>}</spam></i>`,
        ],
        typeSpeed: 50,
        startDelay: 340,
        backend: 75,
        backDelay: 1500,
        loopCount: 1,
        contentType: "html",
        cursorChar: "|",
        showCursor: true,
    });
}

document.getElementById("aboutMe").addEventListener("click", showTyped);

// Enable popover bootstrap
let popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle=""]'));
let popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverList);
});
// Enable tooltip bootstrap
let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});