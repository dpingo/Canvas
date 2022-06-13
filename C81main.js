// mouse events-mousedown, mouseup, mouseleave, mousemove
// mousedown-when you click mousebutton.
//mouseup-When you realse the mousebutton after clicking.
//mouseleave(the definition is with respect to the canvas)-when our mouse pointer isnot on canvas.
//mousemove-When you move your cursour

var mouse_event="empty"
var last_position_of_x = 0 , last_position_of_y =0 
var count=0;
var myrect=false;
var mycircle=false;

function circle(){
    mycircle=true;
    myrect=false;
}
function draw(){
    mycircle=false;
    myrect=false;
}
function Rectangle(){
    mycircle=false;
    myrect=true;
}

canvas=document.getElementById("my_canvas")
ctx=canvas.getContext("2d")
var color="Blue"
var width_of_line=10;

canvas.addEventListener("mousedown",my_mousedown)
// the event listener checks if mousedown is being used or not by the user.
// mousedown event is mapped with my_mousedown function.
//Thus, round brackets are not used along the function
function my_mousedown(e){// (e) tells that it's  an event
    color=document.getElementById("color").value
    width_of_line=document.getElementById("line_width").value
    console.log(color)
    mouse_event="mousedown"
    console.log("Anmol_called_my_mousedown")

}
canvas.addEventListener("mousemove",my_mousemove)
function my_mousemove(e){ 
var recentpositionofX=e.clientX - canvas.offsetLeft
var recentpositionofY=e.clientY - canvas.offsetTop

//e.clientX and e.clientY will give the x and y coordinate of the cursor on the canvas when clicked.
 //○ As the canvas can be placed anywhere on the screen and by just using e.clientX and e.clientY  won’t give the actual x and y coordinate on the canvas.
// So to get the actual x coordinate on canvas with respect to the screen when clicked we do: e.clientX - canvas.offsetLeft and e.clientY - canvas.offsetTop.

console.log("whichbutton="+ e.which)
if(mouse_event=="mousedown" && e.which === 1 && mycircle == true) {
    console.log("HEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE")
    ctx.beginPath()
    //It works like a pen down
    ctx.strokeStyle=getRandomColor();//pen color
    ctx.lineWidth=2
    ctx.arc(recentpositionofX,recentpositionofY,10,0,2*Math.PI)
    //ctx.arc(200(x),200(y),40(r),0(start_angle),2(ending_angle*Math.PI)
    ctx.stroke()
} 
    else if(mouse_event=="mousedown" && e.which === 1 && myrect==true){   
    ctx.beginPath()
    ctx.strokeStyle=getRandomColor();//pen color
    ctx.lineWidth=2
    ctx.rect(recentpositionofX, recentpositionofY, 15,30)
    ctx.stroke()
}
else if (mouse_event=="mousedown" && e.which === 1){
        count++;
        console.log("count=" + count)
        ctx.beginPath()
        ctx.strokeStyle=getRandomColor();
        
        ctx.lineWidth=5
        console.log("last position of X= "+last_position_of_x+" , last position of Y="+last_position_of_y)
        ctx.moveTo(last_position_of_x, last_position_of_y)
        console.log("recent position of X= "+recentpositionofX+" , recent position of X="+recentpositionofY)
        ctx.lineTo(recentpositionofX, recentpositionofY)
        ctx.stroke()
    } else if(mouse_event=="mousedown" && e.which === 3){
        ctx.clearRect(recentpositionofX-5,recentpositionofY-5,recentpositionofX+5,recentpositionofY+5)
    }
    else if(mouse_event=="mousedown" && e.which === 2){
        ctx.fillStyle=getRandomColor();
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }


    last_position_of_x=recentpositionofX
    last_position_of_y=recentpositionofY
    //the recent position is being set to the last position.
    //in the start it is making recent position as last.
    console.log("Anmol_called_my_mousemove")
}  
canvas.addEventListener("mouseup",my_mouseup)
function my_mouseup(){
    mouse_event="mouseup"
    console.log("Anmol_called_my_mouseup")
}
canvas.addEventListener("mouseleave",my_mouseleave)
function my_mouseleave(){
    mouse_event="mouseleave"
    console.log("Anmol_called_my_mouseleave")
}

function clear_area(){
ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)
}

function getRandomColor() {
    var r = 255*Math.random()|0,
        g = 255*Math.random()|0,
        b = 255*Math.random()|0;
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}

canvas.addEventListener('keydown', logKey);
function logkey(e) {
    console.log("keyheeeeeeee = "+ e.keyCode)
}