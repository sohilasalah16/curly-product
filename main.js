let sideBar = document.querySelector('aside')
let cartCount = document.querySelector('.cart-count')
let closeIcone = document.querySelector('.close')
// open and close side bar
cartCount.addEventListener("click",function(e){
    e.preventDefault();
    sideBar.classList.toggle('open')
})
closeIcone.addEventListener("click",e=>{
    e.preventDefault()
    sideBar.classList.toggle('open')
})
//data entry
const product =[{
    id :0 ,
    title:"shampoo and condition",
    price: 550,
    img: 'Photo/pruduct4.webp',
    amount:1
},
{
    id :1 ,
    title:"Leave in condition",
    price: 250,
    img: 'Photo/pruduct5.webp',
    amount:1
},
{
    id :2 ,
    title:"Flexy gel",
    price: 250,
    img: 'Photo/pruduct6.webp',
    amount:1
},
{
    id :3 ,
    title:"Leave in condition",
    price: 200,
    img: 'Photo/pruduct1.webp',
    amount:1
},
{
    id :4 ,
    title:"Leave in condition",
    price: 290,
    img: 'Photo/pruduct2.jpg',
    amount:1
},
{
    id :5 ,
    title:"Folical poster oil",
    price: 200,
    img: 'Photo/pruduct3.jpg',
    amount:1
},
{
    id :6 ,
    title:"Shampoo and condition",
    price: 620,
    img: 'Photo/pruduct7.jpg',
    amount:1
},
{
    id :7 ,
    title:"Shampoo ",
    price: 350,
    img: 'Photo/pruduct8.jpg',
    amount:1
},
{
id :8 ,
title:"Hair mask",
price: 350,
img: 'Photo/pruduct9.png',
amount:1
}
]
const tool =[{
    id :0 ,
    title:"Flex bruch",
    price: 70,
    img: 'Photo/tool1.webp',
    amount:1
},
{
    id :1 ,
    title:"stan buckle",
    price: 20,
    img: 'Photo/tool2.webp',
    amount:1
},
{
    id :2 ,
    title:"Brush",
    price: 70,
    img: 'Photo/tool3.jpg',
    amount:1
},
{
    id :3 ,
    title:" spray bottle",
    price: 150,
    img: 'Photo/tool4.jpg',
    amount:1
},
{
    id :4 ,
    title:"Bonnet",
    price: 70,
    img: 'Photo/tool5.jpg',
    amount:1
},
{
    id :5 ,
    title:"Pillowslip",
    price: 100,
    img: 'Photo/tool6.webp',
    amount:1
}
]
// render data to home page
let products = document.querySelector('.items');
let item =""
function renderItems(){
    product.forEach(e=>{
        item +=`
            <div class="box">
                <div class="photo"><img src="${e.img}" alt=""></div>
                
                    <p>${e.title}</p>
                <h3>${e.price}$</h3>
                <div class="cart" data-id="${e.id}">
        <i class="fa-solid fa-cart-shopping"></i>  
    </div>
                
                
            </div>
            </div>`
    products.innerHTML= item
    })
}
renderItems()
let tools = document.querySelector('.item')
let cotact = ""
function renderTool(){
    tool.forEach(e=>{
        cotact += `<div class="box">
        <div class="photo">
            <img src="${e.img}" alt="">
        </div>
        <p>${e.title}</p>
        <h3>${e.price}$</h3>
        <div class="cart" data-id="${e.id}">
        <i class="fa-solid fa-cart-shopping"></i>  
    </div>
    </div>`
    })
    tools.innerHTML = cotact
}
renderTool()
//render item to cart
let cart = document.querySelectorAll(".cart")
let body =document.querySelector('tbody')
let cartClick = []
cart.forEach(btn=>{
    btn.addEventListener('click',e=>{
        let id = btn.dataset.id
        product.find(item=>{
            if(item.id==id){
                if(cartClick.some(check=> check.id==id)){
                    alert('This Product already Added')

                }else{
                cartClick.push(item)
                productt()
                }
    }
    })
    })
    
})
function productt(){
    let cartAll =""
cartClick.forEach(items=>{
    cartAll +=`<tr>
    <td>${items.id}</td>
    <td><img src="${items.img}" alt="" width="50px"></td>
    <td>${items.title}</td>
    <td>
    <span class="btn plus" onclick="updateItem('increase',${items.id})" >+</span>
    ${items.amount}
    <span class="btn min" onclick="updateItem('decrease',${items.id})">-</span>
    </td>
    <td>${items.price}</td>
    <td>${items.price*items.amount}</td>
    <td><button onclick="deleteCart(${items.id})" >Delete</button></td>
    </tr>`

})
document.querySelector('.cart-count span').innerHTML= cartClick.length
body.innerHTML= cartAll
}
    //Delete all button
    function deleteAll(){
        cartClick = []
        productt()
    }
    // delete item button
function deleteCart(id){
    cartClick =cartClick.filter(item=> item.id != id)
    productt()
    }
// decrease and increase items
function updateItem(action,id){
    cartClick.find(item =>{ 
        if(item.id == id){
    if(action == 'increase'){
    item.amount +=1
    }else{
        if(item.amount>1){
        item.amount -=1
        }
    }
    productt()
        }
    })
    }
