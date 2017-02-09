$(document).ready(function(){

  var arr;
  $("#getQuote").click(function(){
    $.getJSON("http://quotes.stormconsultancy.co.uk/quotes.json", function (json) {
      arr = json[Math.floor(Math.random()*json.length)];

      $(".quote").html("\""+arr.quote+"\"");
      $(".author").html("-"+arr.author);

  });
});

  $("#tweet").click(function(){
    window.open("https://twitter.com/intent/tweet?text="+ "\""+arr.quote+"\"" + "\b"+"-"+arr.author);
  });
});
