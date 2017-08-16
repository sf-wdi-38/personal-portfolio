let projects =[
{ name : "Vagabond STEPS", href: "https://vagabond-steps.herokuapp.com/", description: "A Ruby on Rails based project to get seniors excited about traveling and sharing their stories. Our client was a cruise ship company that wanted us to create that site to get seniors excited about sharing their experiences around travel. I was responsible for the design of the welcome emails, controller logic, and the user landing page."},
{ name: "My Landlord Sucks", href:"https://boiling-earth-58583.herokuapp.com/", description: "A web app for complaining about how terrible your landlord/living situation is. It was made with HTML, CSS, Node.js, Express.js, MongoDB, JQuery."},
{ name: "Reliable Supply", href: "http://www.reliable.supply/", description: "Reliably Supply is an easy way for producers that have materials that would normally be considered waste to users that can find a use for those items." },
{ name: "Meme Wars", href: "https://radiant-hollows-54824.herokuapp.com/", description: " Meme Wars is a fun social sharing site for users to post funny memes. I modeled the design of the site after Reddit." },
{ name: "Zen GM API", href: "https://protected-retreat-76331.herokuapp.com/", description: "This app was built on JSON data from the popular free to play online sports game Zen GM. Users were able to post their player data and have it listed in the index of players, similar to pro-baseball reference." }
]
$(document).on('ready', function() {
  for(i = 0; i < projects.length; i++) {
$('h4.dt').append(`<dt><a href=${projects[i].href}>${projects[i].name}<a/></dt><dl>${projects[i].description}</dl>`)
}
  });
