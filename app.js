
function getInputValue() {
    const inputValue = document.querySelector(".input-feild input").value
    const memoryTop = document.querySelector(".momery-top")

    const memoryTriangle = document.querySelector(".memory-tringle-body")
    memoryTriangle.style.width = `${100 - inputValue}%`

    let memoryTopUpdate = (180 / 50) * inputValue
    if(+inputValue && inputValue >= 1 && inputValue <= 100) {
        if(inputValue <= 50) {
            memoryTop.style.backgroundColor = `#f5134b`
            memoryTop.style.transform = `rotate(${memoryTopUpdate}deg)`

            document.querySelector(".available").innerHTML = `${inputValue} % Available`
            document.querySelector(".loaded").innerHTML = `${100 - inputValue} % Loaded`
            document.querySelector(".error").innerHTML = ""
        }else {
            let memoryBottomUpdate = memoryTopUpdate - 180
            memoryTop.style.backgroundColor = `#9af803`
            memoryTop.style.transform = `rotate(${memoryBottomUpdate}deg)`

            document.querySelector(".available").innerHTML = `${inputValue} % Available`
            document.querySelector(".loaded").innerHTML = `${100 - inputValue} % Loaded`
            document.querySelector(".error").innerHTML = ""
        }
    }else {
        document.querySelector(".error").innerHTML = "Please, input any number (1-100) !"
    }
}


const btn = document.querySelector(".btn")
btn.addEventListener("click", () => {
    const inputValue = document.querySelector(".input-feild input").value

    const text = `your memory available is ${+inputValue ? inputValue : '10'} % and loaded is ${+inputValue ? 100 - inputValue : '90'} %`
    const voice = new SpeechSynthesisUtterance(text)
    speechSynthesis.speak(voice)
})
