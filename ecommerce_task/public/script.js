const products=[
    {id:1,name:"Desktop",price:599,image:"https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=500&auto=format&fit=crop"},
    {id:2,name:"Mechanical Keyboard",price:30,image:"https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500"},
    {id:3,name:"Boom Headset",price:60,image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"},
    {id:4,name:"Ultra-Wide Monitor",price:300,image:"https://images.unsplash.com/photo-1551645120-d70bfe84c826?w=500"}];
let cart=[];
function displayProducts(){
    const productList=document.getElementById('product-list');
      productList.innerHTML=products.map(product=>
        `<div class="product-card"><img src="${product.image}"alt="${product.name}"
        style="width:100%;height:150px;object-fit:cover;border-radius:5px;margin-bottom:10px;">
        <h3>${product.name}</h3>
        <p>$${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button></div>
        `).join('');   
}
window.addToCart=(productId)=>{const product=products.find(p=>p.id===productId);
    cart.push(product);
    updateCartUI();
};
function updateCartUI()
{
    document.getElementById('cart-count').innerText=cart.length;
    const cartItemsElement=document.getElementById('cart-items');
    cartItemsElement.innerHTML=cart.map((item,index)=>`<li><span>${item.name}</span>
        <span>$${item.price}</span>
        </li>`).join('');
    const total=cart.reduce((sum,item)=>sum+item.price,0);
    document.getElementById('cart-total').innerText=total;
}
displayProducts();
document.getElementById('checkout-btn').addEventListener('click',()=>{
    if(cart.length===0){alert("Your cart is empty!");}
else{
    alert("Thank You for your purchase!Order Confirmed.");
    cart=[];
    updateCartUI();
}
}); 
document.getElementById('chekout-btn').addEventListener('click',()=>{
    if(cart.length===0){alert("Your cart is empty!");}
else{
    alert("Thank You for your purchase!Order Confirmed.");
    cart=[];
    updateCartUI();
}
}); 
