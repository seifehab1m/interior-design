let images =Array.from( document.querySelectorAll(".images img"));
let imageSelected = document.querySelector(".imageSelected");
let imageBackground = document.querySelector(".imageBackground");
let btnNext=document.getElementById("btnNext");
let btnPrev=document.getElementById("btnPrev");
let btnClose=document.getElementById("btnClose");
let selectedImageIndex=0

console.log(btnNext);
for (let i = 0; i < images.length; i++) {
        images[i].addEventListener("click", function (e) {
        let imgSrc=e.target.getAttribute("src");
        imageBackground.style.cssText = "display:flex !important;"
        imageSelected.style.backgroundImage = `url('${imgSrc}')`;
        selectedImageIndex=images.indexOf(e.target)
    })
}

document.addEventListener("click",function(e){
    if(e.target.getAttribute("id")=="itemSelected"){
        closeImage()
      }
})
function closeImage()
{
    imageBackground.style.cssText = "display:none !important;"
}

btnNext.addEventListener("click",function(e){
    
    if(selectedImageIndex==images.length-1)
    {
        selectedImageIndex=0;
    }
    else
    {
        selectedImageIndex++
    }
    let nextImage=images[selectedImageIndex].getAttribute("src");
    imageSelected.style.backgroundImage = `url('${nextImage}')`;
    console.log(selectedImageIndex);
})


btnPrev.addEventListener("click",function(e){
    
    if(selectedImageIndex==0)
    {
        selectedImageIndex=5;
    }
    else
    {
        selectedImageIndex--;
    }
    let nextImage=images[selectedImageIndex].getAttribute("src");
    imageSelected.style.backgroundImage = `url('${nextImage}')`;
    console.log(selectedImageIndex);
})
btnClose.addEventListener("click",function(){
    closeImage()
})