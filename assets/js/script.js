let count = 1;

document.getElementById("radio1").checked = true;

setInterval(function(){
    mudaimg();
}, 2000)
  
function mudaimg(){
    count++;
    if(count >3){
        count = 1;
    }
    document.getElementById("radio"+count).checked = true;
}