document.addEventListener('DOMContentLoaded', ()=>{
  document.getElementById('year').textContent = new Date().getFullYear();
  const menuBtn=document.querySelector('.menu-btn');const nav=document.querySelector('.nav');
  menuBtn.addEventListener('click',()=>{const expanded=menuBtn.getAttribute('aria-expanded')==='true';
    menuBtn.setAttribute('aria-expanded',(!expanded).toString());
    nav.style.display=expanded?'none':'flex';
  });
  const cartBody=document.getElementById('cart-body');const cartTotal=document.getElementById('cart-total');let total=0;
  document.querySelectorAll('.add-to-cart').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const name=btn.dataset.name;const price=parseFloat(btn.dataset.price);
      const row=document.createElement('tr');
      row.innerHTML=`<td>${name}</td><td>${price}</td><td><button class='remove'>✕</button></td>`;
      cartBody.appendChild(row);
      total+=price;cartTotal.textContent=total;
      row.querySelector('.remove').addEventListener('click',()=>{row.remove();total-=price;cartTotal.textContent=total;});
    });
  });
});