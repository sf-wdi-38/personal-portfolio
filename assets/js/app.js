// sanity check
console.log("app.js linked.");

var projectsDictionary = {};

function fetchData() {
 var rawTemplate = $('#my-template').html();
  $.get('https://portfolio-2df2b.firebaseio.com/projects.json', function(projects) {

    for (var i =0; i< projects.length; i++) {
      var currentProject = projects[i];
    var stampedTemplate = Mustache.render(rawTemplate,currentProject);
    $('#featured-work .row').append(stampedTemplate);

    };

   buildDictionary(projects);
   bindEventListeners();
 });
}

function bindEventListeners(){
$('#featured-work .col-md-4').click(function(e){
      var targetId = e.target.attributes[4].value;
      var info = (projectsDictionary[targetId]);
      var rawTemplate = $('#lightbox-template').html();

      var stampedTemplate = Mustache.render(rawTemplate, info);
      $('#lightbox-container').html(stampedTemplate);
       $('#lightbox-container').fadeIn();
       $('.modal').fadeIn();
       $('#mask').fadeIn();
       $('button').click(function(e){
         $('.modal').fadeOut();
         $('#lightbox-container').fadeOut();
         $('#mask').fadeOut();

       });
     });
}

function buildDictionary(projects) {
  for (var i = 0; i < projects.length; i++) {
    var currentProject = projects[i];
    projectsDictionary[currentProject.id] = currentProject;
  }
}

fetchData();
