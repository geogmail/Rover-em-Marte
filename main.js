canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
list= ["mars.png", "mars1.png", "mars2.png", "mars3.png"]
var number= Math.floor(Math.random()*4)
roverwidth=100
roverheigth=90
backgroundimage=list[number]
roverimage="rover.png"
roverX=10
roverY=10
function add(){
    backgroundimgtag=new Image()
    backgroundimgtag.onload=uploadbackground
    backgroundimgtag.src=backgroundimage
    roverimgtag=new Image()
    roverimgtag.onload=uploadrover
    roverimgtag.src=roverimage
}
function uploadbackground(){
    ctx.drawImage(backgroundimgtag,0,0,canvas.width,canvas.heigth)
}
function uploadrover(){
    ctx.drawImage(roverimgtag,roverX,roverY,roverwidth,roverheigth)
}