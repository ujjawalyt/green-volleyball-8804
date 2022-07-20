const url=`https://orbitz-ujjawal-api.herokuapp.com/hotel`
async function getData() {
    try {
        let res = await fetch(url);
        let data=await res.json();
        append(data)
     console.log(data)
    }
catch (err){
    console.log(err)
}

}

getData()

function append(data){
let box=document.getElementById("box");
// let details=document.getElementById("divdetails");
// data.sort(function(a,b){
//     return a.price-b.price;
// })

// data=data.filter(function(el){
    
// })

data.forEach(function(el){
    let div=document.createElement("div")
    div.setAttribute("class", "dflex")
    let div1=document.createElement("div")
let image=document.createElement("img");
image.src=el.url;


let div2=document.createElement("div")
let price=document.createElement("p");
price.innerText=el.price;

let hotel=document.createElement("h1")
hotel.innerText=el.hotel;

let rating=document.createElement("p");
rating.innerText=el.rating;

let direction=document.createElement("p")
direction.innerText=el.direction;

div1.setAttribute("class","dimage")   
 div2.setAttribute("class","details")    
 document.querySelector("#box").append(div)
 div.append(div1,div2)
div1.append(image)
div2.append(hotel,price,direction,rating);





})




}