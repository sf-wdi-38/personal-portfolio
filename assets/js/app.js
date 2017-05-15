/*jshint esversion: 6 */

// sanity check
console.log("thisapp.js linked.");

var data = {

  "projects": [
    {
      "name": "Bottles of Beer Song",
      "description": "Script where a user enters a number and the console would display the lyrics of this song until 0.",
      "project_url": "https://github.com/umichdoe/problem-set-js-basics/tree/master/challenges",
      "photo_url": "assets/imgs/completed/bottle.png"
    },
    {
      "name": "Personal Website",
      "description": "This was one of my first projects as a GA student. We were required to build a website for ourselves that would showcase our portfolio.",
      "project_url": "https://umichdoe.github.io",
      "photo_url": "assets/imgs/completed/website.png"
    },
    {
      "name": "Shakespearean Insult Game",
      "description": "Script where a user enters his or her name and a number and an alert window pops up with an insult that is complete nonsense.",
      "project_url": "https://github.com/umichdoe/problem-set-js-basics/tree/master/challenges",
      "photo_url": "assets/imgs/completed/shakespeare.png"
    },
    {
      "name": "Memory Game",
      "description": "This was a project I completed before enrolling in GA. It involved creating a memory game where the user would flip over 2 cards and see if they matched.",
      "project_url": "https://github.com/umichdoe/wdi-fundamentals-memorygame",
      "photo_url": "assets/imgs/completed/memory.png"
    },
    {
      "name": "Palindrome Detector",
      "description": "Script where a user enters a phrase and it determines whether or not the phrase is a palindrome.",
      "project_url": "https://github.com/umichdoe/problem-set-js-basics/tree/master/challenges",
      "photo_url": "assets/imgs/completed/palindrome.png"
    },
    {
      "name": "Prime Numbers",
      "description": "Script where a user enters a number and it returns all the prime numbers up until the number entered.",
      "project_url": "https://github.com/umichdoe/problem-set-js-basics/tree/master/challenges",
      "photo_url": "assets/imgs/completed/prime.png"
    }
  ],
};

function listProjects() {
  for (var i = 0; i < data.projects.length; i++) {
    $(".projects-completed").append(`<div class="container-fluid projects-icons"><div class="row"><img src="${data.projects[i].photo_url}"><li class="project-numbers">${data.projects[i].name}</li><p>${data.projects[i].description}</p><a class="project-photos" href="${data.projects[i].project_url}">Project link</a></div></div>`);
  }
}
