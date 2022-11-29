






$(".date").html(moment().format('MMMM Do YYYY, h:mm:ss a'));






// 0 1  2   3  4  5 6  7  8  9 
let times=[9,10,11,12,13,14,15,16,17,18]
let index=times.indexOf(moment().hour())

if(index==-1){///checking outside the bussiness hours
for(let i=0;i<10;i++){

$("#bl"+i).css("background-color","yellow")

}

}else{///checking during  the bussiness hours


for(let i=0;i<index;i++){

$("#bl"+i).css("background-color","red")

}

$("#bl"+index).css("background-color","green")

for(let i=index+1;i<10;i++){

$("#bl"+i).css("background-color","blue")

}


}




///saving the items
for(let i=0;i<10;i++){
$("#bl"+i+" img").click(function(){
window.localStorage.setItem("save"+i ,$("#bl"+i+" textarea").val())
})
}

///loading the items from the local storage

for(let i=0;i<10;i++){
$("#bl"+i+" textarea").val(window.localStorage.getItem("save"+i) )

}







for(let i=0;i<10;i++){

$(`#bl${i} img`).click(function(){
const val=$.trim($(`#bl${i} textarea`).val());
window.localStorage.setItem("saved"+i,val);  
})

}

for(let i=0;i<10;i++){

if(window.localStorage.getItem("saved"+i) !=null){
const val =window.localStorage.getItem("saved"+i);
$(`#bl${i} textarea`).val(val)


}  


}

  
  
  

