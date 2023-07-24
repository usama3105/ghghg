
var details= document.getElementById("details")
var info=[{
  id:0,
  img:"mobile accessories.jfif",
  name:"mobile accessories",
  desc:"Mobile accessories include any hardware that is not integral to the operation of a mobile smartphone as designed by the manufacturer."
},


]

info.forEach((val) => {
  details.innerHTML +=`<div class="card" style="width: 18rem;">
  <img src="${val.img}" class="card-img-top image" alt="...">
  <div class="card-body">
    <h5 class="card-title"> ${val.name}</h5>
    <p class="card-text">${val.desc}</p>
    <a href="#" class="btn btn-primary">visit</a>
  </div>
</div>`
  
});

