// sanity check
console.log("app.js linked.");

// store array of projects
var projects = [
  {
    name: "Andon",
    description: "The term 'andon' comes from an old Japanese word for paper lantern.  These modern andon stack lights alert technicians to down, idle and active states in order to prevent lost capacity on critical capital equipment (20+ semiconductor test systems).  They are connected and controlled through the network with custom middleware software (.NET based), test software interfaces, and a simple operator user interface.",
    imgSrc: "assets/imgs/project-andon.jpg",
    linkUrl: "placeholder"
  },
  {
    name: "Sequencer",
    description: "The Sequencer is a tool that answers the question, \"What should I work on next?\", when there are many different options with various due dates, priorities, level of effort, etc.  It ensures that the right products will be produced according to customer demand.  It consists of an Excel based model, constraint-based code written in VBA, and a third party optimization engine.",
    imgSrc: "assets/imgs/project-sequencer.jpg",
    linkUrl: "placeholder"
  },
  {
    name: "Jarvis",
    description: "Jarvis is Just a Rather Very Informative System and was designed to help kill terrifying spreadsheets.  Answers such as \"When will my parts be delivered, and will I receive the quantity I requested?\" could now be answered with a simple search, instead of manually hunting for the information via e-mails, phone calls and meetings.  It uses MS Access for the front-end and MS SQL Server for the back-end.",
    imgSrc: "assets/imgs/project-jarvis.jpg",
    linkUrl: "placeholder"
  },
  {
    name: "BUPL",
    description: "The Button Up Pick List is a simple MS Access based application that generates a dynamic list of accessories such as power cords and user manuals, based on the product's model number and options inputted.  Barcodes attached to the parts are scanned as they are picked and packed, and a report is printed once all parts are picked.  This application also uses a web service API to get the parts list from the enterprise system (Oracle).",
    imgSrc: "assets/imgs/project-bupl.jpg",
    linkUrl: "placeholder"
  }
]

var navEls = document.querySelectorAll('.nav-arrow');

for (i = 0; i < navEls.length; i++) {
  navEls[i].addEventListener('click', scrollProjects);
}

function scrollProjects() {
  var currentProject = $(".project-name").text();
  var clickDirection = this.getAttribute("dir");
  var currentIndex = getProjectIndex(currentProject);
  //console.log(`clicked on navbar element ${clickDirection}, current project is ${currentProject}, current index is ${currentIndex}`)
  var changeContent = false;
  if (clickDirection === "right" && currentIndex < projects.length - 1) {
    currentIndex++;
    changeContent = true;
  } else if (clickDirection === "left" && currentIndex > 0) {
    currentIndex--;
    changeContent = true;
  }
  if (changeContent) {
    $(".project-name").text(projects[currentIndex].name);
    $(".project-description").text(projects[currentIndex].description);
    $(".project-image").attr("src", projects[currentIndex].imgSrc);
  }
}

function getProjectIndex(projectName) {
  for (var i = 0; i < projects.length; i++) {
    if (projects[i].name === projectName) {
      return i;
    }
  }
}

$(document).ready(function() {
  console.log("jquery document ready is working");
  $(".project-name").text(projects[0].name);
  $(".project-description").text(projects[0].description);
  $(".project-image").attr("src", projects[0].imgSrc);
});
