function rem(){
    document.documentElement.style.fontSize = document.documentElement.clientWidth/6.4+'px'
}
window.onresize = rem;
rem()