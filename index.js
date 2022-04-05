let cartContainer=document.getElementById("cart")

let cartCount=document.getElementById("cartCount");
function addToCart(product){
    let prevCount=cartCount.textContent;
    console.log(prevCount)
    let currentCount=parseInt(prevCount)+1;
    cartCount.textContent=currentCount;

    let productCard=document.createElement("div");
    productCard.style.height='700px'
    productCard.classList.add("watch-card","mb-2",'p-5','w-100');

    let imageEle=document.createElement("img");
    imageEle.classList.add('w-50')
    imageEle.src=product.children[0].src;

    let descEle=document.createElement("p");
    descEle.textContent=product.children[1].textContent;

    let priceEle=document.createElement("h5");
    priceEle.textContent=product.children[2].textContent;

    let colorEle=document.createElement("del");
    colorEle.textContent=product.children[3].textContent;

    
    

    let buyNowBtn=document.createElement("button");
    buyNowBtn.classList.add("btn", "btn-danger","d-block", "w-75","mx-auto");
    buyNowBtn.textContent="Buy Now";

    let removeBtn=document.createElement("button");
    removeBtn.classList.add("btn","btn-warning","d-block","w-75","mx-auto","mt-3")
    removeBtn.textContent="Remove Item";

    removeBtn.onclick=function(){

        cartCount.textContent=parseInt(cartCount.textContent)-1;
        cartContainer.removeChild(productCard)
    }


    productCard.append(imageEle,descEle,priceEle,colorEle,buyNowBtn,removeBtn);
    cartContainer.append(productCard)
}