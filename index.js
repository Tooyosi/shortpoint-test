const finishBtn = document.getElementById('finish')
const innerDivs = document.getElementsByClassName('inner')

// eventlistener for button click
finishBtn.addEventListener('click',function (e) {
    for (let i = 0; i < innerDivs.length; i++) {
        const element = innerDivs[i];
        element.style.width = '100%'
        element.innerHTML = "100%"
    }
})