// sanity check
console.log("app.js linked.");

let projectsList = [
  { name: "Internet the Al Gore story",
    info: "Built the internet, me and Al Gore"
  },
  { name: "Aliens",
    info: "Saved the planets from Aliens"
  },
  { name: "Seinfeld",
    info: "Created the sitcom Seinfeld"
  }
]

function listTheProjects() {
  for (let i = 0; i < projectsList.length; i++) {
    let allInfo = projectsList[i].name + projectsList[i].info;
    $("div.col-md-4.h3").text(allInfo);
  }
}

listTheProjects();
