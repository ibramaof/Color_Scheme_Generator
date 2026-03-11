
const selectedColor = document.getElementById('color-selector')
const getColorBtn = document.getElementById('get-color')
const mode = document.getElementById('mode')
const hexCodes = document.getElementById('hex-code')
const colorBox = document.getElementById('colors-box')
const color1 = document.getElementById('color-1')
const color2 = document.getElementById('color-2')
const color3 = document.getElementById('color-3')
const color4 = document.getElementById('color-4')
const color5 = document.getElementById('color-5')
const baseUrl = "https://www.thecolorapi.com/"


fetchColors()
function fetchColors() {
    let colorsArr = []
    fetch(baseUrl + `scheme?hex=${selectedColor.value.slice(1)}&mode=${mode.value}`)
        .then(response => response.json())
        .then(data => {
            data.colors.forEach(color => {
                colorsArr.push(color.hex.value)
            })
            color1.style.backgroundColor = `${colorsArr[0]}`
            color2.style.backgroundColor = `${colorsArr[1]}`
            color3.style.backgroundColor = `${colorsArr[2]}`
            color4.style.backgroundColor = `${colorsArr[3]}`
            color5.style.backgroundColor = `${colorsArr[4]}`

            hexCodes.innerHTML = `
                <p id="hex-1" class="hex">${colorsArr[0]}</p>
                <p id="hex-2" class="hex">${colorsArr[1]}</p>
                <p id="hex-3" class="hex">${colorsArr[2]}</p>
                <p id="hex-4" class="hex">${colorsArr[3]}</p>
                <p id="hex-5" class="hex">${colorsArr[4]}</p>
        `
        }
        )
        .catch(error => console.log(error))
}

getColorBtn.addEventListener('click', (e) => {
    e.preventDefault()
    fetchColors()
})


