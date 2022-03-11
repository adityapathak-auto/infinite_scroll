let cont = document.getElementById("container");

let num = 1;

function load(){
    //let div = document.getElementById("container");
    let i = 0;
    for(i = 0; i<25;i++){
       let h3 = document.createElement("h3");
       h3.textContent = `Masai Student ${num}`;
       cont.append(h3);
       num++;

    }
}
load();
// cont.addEventListener("scroll", ()=>{
//     if(cont.scrollY + cont.innerHeight >= document.documentElement.scrollHeight){
//         setTimeout(load,5000)
//     }
// })

cont.onscroll = () => {
    const scrollY = cont.scrollHeight - cont.scrollTop;
    const height = cont.offsetHeight;
    const offset = height - scrollY;

    if (offset>=0) {
        setTimeout(load,1000)
    //   load();
    }
};
// window.onload = load();
