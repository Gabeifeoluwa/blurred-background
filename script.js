// let bg = document.querySelector('.bg-img')
// let text = document.querySelector('.text')

// let loader = 0;
// let int = setInterval(load, 30)

// function load(){
//     loader ++ 
//     if(loader > 99){
//         clearInterval(int)
//     }
//     text.innerHTML = `${loader}%`
//     text.style.opacity = scale(loader, 0, 100, 1, 0)
//     bg.style.filter = `blur(${scale(loader, 0, 100, 30, 0)}px)`
// }

// function scale (number, inMin, inMax, outMin, outMax) {
//     return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
// }


let bg = document.querySelector('.bg-img')
let text = document.querySelector('.text')
let btn = document.querySelector('.btn')
let rnm = document.querySelector('.rnm')

// function load() {
//     loader++
//     if(loader > 99){
//         clearInterval(int)
//     }
//     text.innerHTML = `${loader}%`
//     text.style.opacity = scale(loader, 0, 100, 1, 0)
//     bg.style.filter = `blur(${scale(loader, 0, 100, 30, 0)}px)`
// }

// function scale (number, inMin, inMax, outMin, outMax) {
//     return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
// }



function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

btn.addEventListener('click', unblur)
let loader = 0;

function unblur(){
    let int = setInterval(load, 30)

    function load() {
        loader++;
        if(loader > 99){
            clearInterval(int)
        }
        text.innerHTML = `${loader}%`;
        text.style.opacity = scale(loader, 0, 100, 1, 0);
        btn.style.opacity = scale(loader, 0, 100, 1, 0);
        rnm.style.opacity = scale(loader, 0, 100, 0, 1);
        bg.style.filter = `blur(${scale(loader, 0, 100, 30, 0)}px)`
    }
}

let loader2 = 100

rnm.addEventListener('click', blur)

function blur(){
    let int2 = setInterval(reblur, 30)

    function reblur(){
        loader2--
        if(loader2 < 1){
            clearInterval(int2)
        }
        text.innerHTML = `${loader2}%`
        text.style.opacity = scale(loader2, 100, 0, 0, 1)
        bg.style.filter = `blur(${scale(loader2, 100, 0, 0, 30)}px)`
        rnm.style.opacity = scale(loader2, 100, 0, 1, 0)
        btn.style.opacity = scale(loader2, 100, 0, 0, 1);
    }
}