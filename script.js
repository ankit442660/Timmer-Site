let end = document.getElementById("end-date");
let endDate;
let timmerEnd=new Audio("gameover.mp3");
let time=document.getElementById("time");
let date=document.getElementById("date");
const b=new Date()


document.getElementById("button").addEventListener( 'click' ,()=>{
let a=" ";


 if(time.value == " " ){
 a = date.value;
}

else {
    a=date.value+" " +time.value;
}



    if(localStorage.value == true   ){
       localStorage.remove();
       
       
       setitem(a);
       
    }
    else{
        setitem(a);

        
    }
   
        

        
       
    
    
 });


const indexes =document.querySelectorAll('input');
function clock(){
    const end =new Date(localStorage.getItem('data'));
    const now =new Date()
    const diff =(end-now)/1000;
    
    if(diff<0 ) return;
    if((diff >=0) && (diff <=3)){
        timmerEnd.play();
    }
    
    
    indexes[0].value= Math.floor(diff/24/3600)
    indexes[1].value= Math.floor((diff/3600)%24)
    indexes[2].value= Math.floor((diff/60) %60)
    indexes[3].value= Math.floor((diff)%60)
    
    
    
    


    
}
clock()

setInterval(()=>{
clock();
},1000)

function setitem(a){
    localStorage.setItem('data' , a )
    getitem();
    
}
function getitem(){
    end.innerHTML=localStorage.getItem('data');
    
}
getitem();







