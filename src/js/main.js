const helloButton = document.querySelector(".hello-button")
const helloConsole = function () {
    console.log("Hello Console")
}

helloButton.addEventListener('click', helloConsole);