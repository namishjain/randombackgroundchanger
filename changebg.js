document.addEventListener('mousemove', function(){
    let rand1 = Math.floor(Math.random() * 255);
    let rand2 = Math.floor(Math.random() * 255);
    let rand3 = Math.floor(Math.random() * 255);

    document.querySelector("body").setAttribute("style", `background-color:rgb(${rand1}, ${rand2}, ${rand3})`);
})
