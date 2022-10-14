
let bg = document.querySelector('.bg-img')
let text = document.querySelector('.text')
let btn = document.querySelector('.btn')
let rnm = document.querySelector('.rnm')


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
            clearInterval(int);
        }

        text.innerHTML = `${loader}%`;
        text.style.opacity = scale(loader, 0, 100, 1, 0);
        btn.style.opacity = scale(loader, 0, 100, 1, 0);
        rnm.style.opacity = scale(loader, 0, 100, 0, 1);
        bg.style.filter = `blur(${scale(loader, 0, 100, 30, 0)}px)`
    }
}