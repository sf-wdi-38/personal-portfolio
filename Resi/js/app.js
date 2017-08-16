let projects =[
{ name : "MTG Collage", description: "Mtg Colleage is my costom magic set project created from splicing together other MTG cards to create new ones. This new format has a webiste that will be launching soon."},
{ name: "Sweetness", description: "Sweetness was a short film I starred in durring college."},
{ name: "filmography", description: "I have worked on numerous films as well as have acted in many. You can see them in my IMDB page." }
]
$(document).on('ready', function() {
  for(i = 0; i < projects.length; i++) {
$('h4.dt').append(`<dt><a href="">${projects[i].name}<a/></dt><dl>${projects[i].description}</dl>`)
}
  });
