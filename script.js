// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];
//slect elements
let author = document.querySelector("#author");
let job = document.querySelector("#job");
let info = document.querySelector("#info");
let img = document.querySelector("#person-img");

let prevBtn = document.querySelector(".prev-btn");
let nextBtn = document.querySelector(".next-btn");
let randomBtn = document.querySelector(".random-btn");

//set starting item
let currentItem = 0;

//load initial item

window.addEventListener("DOMContentLoaded", function() {
    showPerson(currentItem)
})

const showPerson = (person) => {
    const item = reviews[person];
    img.src = item.img
    author.textContent = item.name
    info.textContent = item.text
    job.textContent = item.job
}
//increase and decrease funtions
const increase = () => (currentItem > reviews.length)?currentItem=0:++currentItem;
const decrease = () => (currentItem < 0)?currentItem=4:--currentItem;

nextBtn.addEventListener("click", function() {
    
    
    (currentItem > reviews.length-2)?currentItem=0:currentItem++;
    console.log(currentItem)
   showPerson(currentItem)
})
prevBtn.addEventListener("click", function() {

    (currentItem <= 0)?currentItem=reviews.length-1:currentItem--;
    console.log(currentItem)
   showPerson(currentItem)
})

randomBtn.addEventListener("click", function() {
    currentItem = Math.round(Math.random() * 3);
    console.log(currentItem)
    showPerson(currentItem)
})



