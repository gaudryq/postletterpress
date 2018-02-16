

$( document ).ready(function() {

  var debouce;

  function drawPoster(){

    var content = $("#content").val();

    var lines = content
      .split(' ')
      .join('_')
      .toLowerCase()
      .match(/[^\r\n]+/g)
      .map(line => line.split(''));

    var lineHeight = 100 / lines.length;

    $(".poster").empty();

    lines.forEach(line => {

      var letters = line.map(l => {

        // pick glyph variant
        var param = params[l][Math.floor(Math.random()*params[l].length)];

        var letter = {
          "char":l,
          "width":Object.values(param)[0],
          "height":lineHeight,
          "src":"images/"+Object.keys(param)[0]
        }

        return letter;
      });

      var totalWidth = letters
      .map(l => l.width)
      .reduce((p, c) => p+c, 0);

      var coef = 100 / totalWidth;
      letters.map(l => {
        l.width = l.width * coef + "%";
        l.height = l.height + "%";
      })

      letters.forEach(l => {
        $('<img />')
        .attr(l)
        .appendTo($('.poster'));
      })

    });

  }

  // draw on start
  drawPoster();

  $( "#content" ).keyup(event => {
    clearTimeout(debouce);
    debouce = setTimeout(drawPoster, 500 );
  });

});
