
var ready;
ready = function() {

  // if ($('.top-projects').length) {
  //   $('.top-projects').tagsInput();
  // }

  // HOME
  if ($(".top-projects").length) {
    var github = new Github({
      username: "cassioscabral",
      password: "cas.235689",
      auth: "basic"
    });

    var options = null;
    var search = github.getSearch("pushed:>2015-01-02");

    search.repositories(options, function (err, repositories)
      { $(repositories.items).each( function (index, item) {
        console.log(item);
        if (item.language) {
          $( ".top-projects" ).append("<div class='round-issue " + item.language.toLowerCase().replace("++", "pp") + "-color" + "'>"+ item.name +"</div>");
        } else {
          console.log("nao tem language");
          $( ".top-projects" ).append("<div class='round-issue not-a-language-color'>"+ item.name +"</div>")
        }
      })
    });
  }

};

$(document).ready(ready);
$(document).on('page:load', ready);