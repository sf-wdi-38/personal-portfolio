// sanity check
console.log("app.js linked.");

let myProjects = [
  {
    title: "Hiking Website",
    description: "Site exploring the hiking trails around the Seattle area.",
    link: "http://www.wta.org/",
    image: "assets/imgs/Mountains.jpg"
  },
  {
    title: "MonkeyBone",
    description: "iOS app developed",
    link: "https://en.wikipedia.org/wiki/Monkey",
    image: "assets/imgs/SF Skyline4.jpg"
  },
  {
    title: "Pets that want to kill themselves",
    description: "A humorous look at pets that are dressed ridiculously by their owners.",
    link: "https://petswhowanttokillthemselves.com"
  }
];

$(document).on('ready', function(){



for (let i = 0; i < myProjects.length; i++) {
  $(".work-stuff").append(`<div class="col-md-4"><div class="projects"><div class="card"><img class="card-img-top" src="${myProjects[i].image}" alt="Card image cap"><div class="card-block"><h4 class="card-title">${myProjects[i].title}</h4><p class="card-text">${myProjects[i].description}</p><a href="#" class="btn btn-primary">Check it Out!</a></div></div></div></div>`);
}

















});
