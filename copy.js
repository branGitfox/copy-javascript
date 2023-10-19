//input field
const input = document.querySelector('input')
//button copy
const copyBtn = document.querySelector('button')

//function for copying the text
function copy (elementToCopy, copyBtn ){
    copyBtn.addEventListener('click', () => {
        elementToCopy.select()
        document.execCommand('copy')
        copyBtn.textContent = "copied"
    })
}

copy(input, copyBtn)

