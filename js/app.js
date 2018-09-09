$(document).ready(function () {


    const firm = $("ul li").eq(0)
    const grayBlock = $(".gray")
    const clair = $(".clair")
    const margarita = $(".margarita")
    var lista = $(".list div")
   // list:
    firm.on("mouseover", function(){

        console.log($(this).find("div"))
        
        $(this).find("div").css("display", "block")
    
    })
    // firm.on("mouseout", function(){

    //     console.log($(this).find("div"))
        
    //     $(this).find("div").css("display", "none")
    
    // })
    lista.on("mouseout", function(){

        $(this).css("display", "none")
    })

    //divs:


    margarita.on("mouseover", function(){

        $(this).find("div").toggle();
    
    
    })

    margarita.on("mouseout", function(){

        $(this).find("div").toggle();
    
    
    })

    clair.on("mouseover", function(){

        $(this).find("div").toggle();
    
    
    })

    clair.on("mouseout", function(){

        $(this).find("div").toggle();
    
    
    })
//slider:


const images = ["images/black_chair.png", "images/red_chair.png" ];
var i = images.length -1;
const sliderContent = $(".left img");
const next = $(".arrow_right");
const prev = $(".arrow");
console.log("teraz jest: "+i)
function nextImage(){
    
    if(i < images.length){
       i=i+1;
       
    }
   else{
    //    console.log(i+" jep")
       i=1;
   }
    sliderContent.attr("src", images[i-1 ])
    console.log(i +" now is")
}

console.log(i)
function prevImage(){
     if(i < images.length + 1 && i>1){
        i=i-1;
        
     }
    else if (i < 1){
        console.log(i+" jep")
        i= 2;
    }
     sliderContent.attr("src", images[i-1 ])
     console.log(i)
}
next.on("click", function () {
    nextImage()
})

prev.on("click", function(){
    prevImage()
})



})