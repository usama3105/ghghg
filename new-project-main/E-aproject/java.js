var details = document.getElementById("details")
var info = [{
        id: 0,
        img: "img/adapter.jpg",
        name: "Travel Adapter",
        price: "Rs.1,599",
        desc: "Maybe if all these heads of state and government just agree upon one shape of input/output plug, we'd have less international conflicts? Before then, grab one—or more—of these all-in-one travel adapters to IDK."
    },
    {
        id: 1,
        img: "img/AirFly.jpg",
        name: "Twelve South AirFly",
        price: "Rs.1,499",
        desc: "Simply put, it's a TikTok viral gadget that'll connect your AirPods—or any wireless headphones and earbuds—to the airplane TV. A godsend for your inevitably long, dull flight across the country, or the globe.."
    },
    {
        id: 2,
        img: "img/bottle.jpg",
        name: "Self-Cleaning Bottle",
        price: "Rs.2,599",
        desc: " LARQ's auto-bacterial-killing bottle will come in handy to purify 99 percent of bio-contaminants out of your water. (Or simply use it because different countries have different standards regarding tap water.)."
    },
    {
        id: 3,
        img: "img/glasses.jpg",
        name: "Alto Audio Sunglasses",
        price: "Rs.2,299",
        desc: " Bose's classic-cool smart sunglasses, with open-ear audio built in to play music only for you, will save you a pair of headphones at that, while letting you stay alert of those pickpockets."



    },
    {
        id: 4,
        img: "img/light.jpg",
        name: " Portable UV Light ",
        price: "Rs.999",
        desc: "Just in case your voyage takes place during the cusp of yet another pandemic, this handy sanitizing light wand you can fit in a pocket will be able to rapidly sterilize those surfaces frequented by many before you."
    },
    {
        id: 4,
        img: "img/camera.jpg",
        name: "I-Type Instant Camera",
        price: "Rs.19,999",
        desc: "For the true lifetime traveler who wants nothing but the excitement of capturing beautiful sights, retouch-not-needed instant camera will render perhaps the best film photographs with its own tools of saturation."
    },
    {
        id: 4,
        img: "img/flask-kit.jpg",
        name: "Adventure Flask Kit",
        price: "Rs.499",
        desc: "More than just a drinking vessel kit for passing around whiskey to your traveling mates during a makeshift happy hour, though that's definitely its main purpose. VSSL adds an LED light."
    },
    {
        id: 4,
        img: "img/speaker.jpg",
        name: "JBL 4 Portable Speaker",
        price: "Rs.2,999",
        desc: "Speaker convenient enough that you can clip onto your backpack or pant's belt loop is one that'll soundtrack your excursion. Not to mention JBL's Clip 4 is one with a durability rating of IP67 and surprisingly punchy audio."
    }

]

info.forEach((val) => {

    details.innerHTML += `<div class="card mx-2 mt-5 my-border" style="width: 18rem;height:72vh;border:red solid 3px;" data-aos="zoom-out-down">
        <img src="${val.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${val.name} <br> <span>${val.price}</span></h5>
          <p class="card-text">${val.desc}</p>
          <a href="#" class=" btn btn1 btn-primary">Go somewhere</a>
        </div>
      </div>`
        //   details.innerHTML += `<div class="col-3 container-fluid row-cols-sm-1" data-aos="zoom-out-down">
        // <div class="card mt-5 box" style="width: 18rem;height:72vh">
        //   <img src="${val.img}" class="card-img-top product image img-fluid" alt="...">
        //   <div class="card-body">
        //     <h5 class="card-title text-center product-name">${val.name} <br> <span class="rate"> ${val.price}</span></h5>
        //     <p class="card-text img-card">${val.desc}</p>
        //     <a href="#" class="btn btn-primary button">Visit</a>
        //   </div>
        // </div>
        // </div>`

});


var catagory = document.getElementById("catagory")
var catagoryinfo = [{

        id: 0,
        name1: "Mobile Accessories",
        img1: "img/mobile accessories.jfif"
    },
    {
        id: 1,
        name1: "Beach Gadgets",
        img1: "img/paddle board.webp"
    },
    {
        id: 2,
        name1: "Tour Gadgets",
        img1: "img/camp.jfif"
    },
    {
        id: 2,
        name1: "Influential Accessories",
        img1: "img/influential.jfif"
    }
]

catagoryinfo.forEach((cat) => {
    catagory.innerHTML += `<div class="card cat mx-2" style="width: 18rem; height: 60vh;"data-aos="zoom-out-down">
  <a " href="#"><img src="${cat.img1}" class="card-img-top cardimg" alt="..."></a>
  <div class="card-body card2">
    <h2 class="card-text ">${cat.name1}</h2>
  </div>
</div>`
});