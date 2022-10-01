// items
const menu = [
    {
        id: 1,
        titel:"panacakes",
        category:"breakfast",
        price:15.99,
        img:"https://www.foodiesfeed.com/wp-content/uploads/2022/07/salted-caramel-dessert-with-coffee-1024x768.jpg.webp",
        desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit ducimus natus dignissimos tempora porro vel!",
    },
    {
        id: 2,
        titel:"diener double",
        category:"lunch",
        price:14.99,
        img:"https://www.foodiesfeed.com/wp-content/uploads/2022/07/salted-caramel-dessert-with-coffee-1024x768.jpg.webp",
        desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit ducimus natus dignissimos tempora porro vel!",
    },
    {
        id: 3,
        titel:"buttermilk panacakes",
        category:"breakfast",
        price:13.99,
        img:"https://www.foodiesfeed.com/wp-content/uploads/2022/07/salted-caramel-dessert-with-coffee-1024x768.jpg.webp",
        desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit ducimus natus dignissimos tempora porro vel!",
    },
    {
        id: 4,
        titel:"salted-caramel-dessert-with-coffee",
        category:"shakes",
        price:12.99,
        img:"https://www.foodiesfeed.com/wp-content/uploads/2022/07/salted-caramel-dessert-with-coffee-1024x768.jpg.webp",
        desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit ducimus natus dignissimos tempora porro vel!",
    },
    {
        id: 5,
        titel:"coffee",
        category:"shakes",
        price:11.99,
        img:"https://www.foodiesfeed.com/wp-content/uploads/2022/07/salted-caramel-dessert-with-coffee-1024x768.jpg.webp",
        desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit ducimus natus dignissimos tempora porro vel!",
    },
    {
        id: 6,
        titel:"milch",
        category:"shakes",
        price:11.99,
        img:"https://www.foodiesfeed.com/wp-content/uploads/2022/07/salted-caramel-dessert-with-coffee-1024x768.jpg.webp",
        desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit ducimus natus dignissimos tempora porro vel!",
    },
]


const sectionCenter=document.querySelector('.section-center');
const container=document.querySelector(".btn-container");

//load items
window.addEventListener('DOMContentLoaded',()=>{
    displaMenuItems(menu); 
    displaMenuBtns();
   
});
//function menuItem
function displaMenuItems(menuItems){
    let displaMenu = menuItems.map(function(item){
        
        return `<article class="menu-item">
        <img src="${item.img}" alt="" class="photo">
        <div class="item-info">
            <header>
                <h4>${item.titel}</h4>
                <h4 class="preice">${item.price}</h4>
            </header>
            <p class="item-text">${item.desc}</p>
        </div>
    </article>`;
     })
     displaMenu=displaMenu.join("\n")
     sectionCenter.innerHTML=displaMenu; 
}
//function menu button
function displaMenuBtns(){
    let catygories=menu.reduce(
        function(values, item){
        if(!values.includes(item.category)){
            values.push(item.category);
        }
        return values;
    },["all"])  
    const catygorysBtns=catygories.map(function(catygories){
return `<button class="filter-btn" type="button" data-id="${catygories}">${catygories}</button>`
    }).join("\n");
    container.innerHTML= catygorysBtns;
    const filterBtns=container.querySelectorAll('.filter-btn');


    // filter items
filterBtns.forEach(function(btn) {
    btn.addEventListener('click',(e)=>{
        let catigorys=e.currentTarget.dataset.id;
        const menuCtegory = menu.filter(function(menuItems){
            if(menuItems.category === catigorys){
                return menuItems;
            }
        });
            if(catigorys === "all"){
                displaMenuItems(menu);
            }else{
                displaMenuItems(menuCtegory);
            }  
    });
    
});
}
