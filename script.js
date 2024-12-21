var reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://randomuser.me/api/portraits/women/4.jpg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://randomuser.me/api/portraits/women/1.jpg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://randomuser.me/api/portraits/women/2.jpg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst racvarte post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://randomuser.me/api/portraits/women/3.jpg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];
var itemIndex = 0;
var containerElement = document.querySelector(".container");

function render() {
  containerElement.innerHTML = reviews
    .map(function (review, index) {
      var position = "next";
      if (index === itemIndex) {
        position = "active";
      }
      if (
        index === itemIndex - 1 ||
        (itemIndex === 0 && index === reviews.length - 1)
      ) {
        position = "last";
      }
      return (
        '<div class="item ' +
        position +
        '"><img src="' +
        review.img +
        '"/><h1 class="name">' +
        review.name +
        '</h1><h2 class="position">' +
        review.job +
        '</h2><p class="description">' +
        review.text +
        "</p></div>"
      );
    })
    .join("");
}

function nextItem() {
  itemIndex = (itemIndex + 1) % reviews.length;
  render();
}

function prevItem() {
  itemIndex = (itemIndex - 1 + reviews.length) % reviews.length;
  render();
}

function randomResult() {
  var currentIndex;

  do {
    currentIndex = Math.floor(Math.random() * reviews.length);
  } while (currentIndex === itemIndex);

  itemIndex = currentIndex;

  render();
}

document.getElementById("next").addEventListener("click", nextItem);
document.getElementById("prev").addEventListener("click", prevItem);
document.getElementById("random").addEventListener("click", randomResult);

render();
