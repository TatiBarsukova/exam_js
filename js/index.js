
//плавный скролл
const anchors = document.querySelectorAll('a[href*="#"');

for (let anchor of anchors) {
    anchor.addEventListener("click", function (event) {
        event.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start",
        }
        )
    })
};

// слайдер новостей
$(document).ready(function () {
    $('.news__content').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000
    });
});

//валидность почты
const errorLabel = document.getElementById('error_label');

const approv_label = document.getElementById('approv_label');


function userEmailChanged() {
    errorLabel.style.display = "none"
    approv_label.style.display = "none";

}

function buttonSubmitPressed() {
    const email = document.getElementById('email');
    if (!validateEmail(email.value)) {
        errorLabel.style.display = "inline"
        return;

    }
    const username = document.getElementById('username');
    username.value = '';
    email.value = '';
    approv_label.style.display = "inline";
}

function validateEmail(email) {
    if (isEmptyOrSpaces(email)) {
        return false;
    }
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function isEmptyOrSpaces(str) {
    return str === null || str.match(/^ *$/) !== null;
}

