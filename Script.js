taskbar = document.getElementsByClassName("taskbar")[0]
startmenu = document.getElementsByClassName("startmenu")[0]

console.log("Clicked");
// taskbar.addEventListner("click",() =>{
//     if(startmenu.style.bottom == "50px"){
//         startmenu.style.bottom = "-710px"
//     }
//     else{
//         startmenu.style.bottom = "50px"
//     }
// }

// )

taskbar.addEventListener('click',handleButtonClick)

function handleButtonClick() {
    if(startmenu.style.bottom == "50px"){
        startmenu.style.bottom = "-710px"
    }
    else{
        startmenu.style.bottom = "50px"
    }
  }