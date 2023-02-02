var btn = document.querySelector(".btn");
var span = document.querySelector(".onoff");
var img = document.querySelector(".light");
 
flag = 0;
btn.addEventListener("click", function(){
    if(flag == 0){
        btn.style.backgroundColor = "green";
        span.style.marginLeft = "1.8vmax";
        span.innerHTML = "ON"
        img.style.opacity = "1";
        flag = 1;
    }else{
        btn.style.backgroundColor = "white";
        span.style.marginLeft = "0";
        span.innerHTML = "OFF"
        img.style.opacity = "0";
        flag = 0;
    }

    
    
})