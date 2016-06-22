src='javascripts/jQuery-3.0.0.min.js'
$(document).ready(function(e) {
  $.ajax({
    type: "GET",
    url : "/api/users",
    dataType : "json",
    success : users
  }).fail(function(){
    console.log("failed");
  });
function users(data){
    data.forEach(function(elem,index) {
      var me = this;
      var $ul = $('<ul>');
          for(p in elem) {
            var elemLI = $('<li>');
            elemLI.text(p + " : " + elem[p]);
            $ul.append(elemLI);
          }
              $(elem.games).each(function(key,value) {
                  console.log("inside nested loop");
                var gameUL = $('<ul>');
                    for(a in value) {
                      console.log("inside for loop");
                      var gameLI = $('<li>');
                      gameLI.text(value[a]);
                      gameUL.append(gameLI);
                    }
              $ul.append(gameUL);
            });
      $('#content').append($ul);
    });
}
});
