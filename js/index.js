
$("form").submit(function(e){
    e.preventDefault();
   var out = ""; 
   var input = $("#sBox").val();
$.ajax({
  type: "POST",
  url: '//en.wikipedia.org/w/api.php',
  data: { action: 'query', list: 'search', srsearch: input, format: 'json' },
  dataType: 'jsonp',
  error: function (jqXHR, textStatus, errorThrown) { console.log(errorThrown)},
  success: function (x) {
    var i;
    var url= 'https://en.wikipedia.org/wiki/';
    if(x.query.search.length > 0) {
    for(i = 0; i < x.query.search.length; i++) {
      var title_link = x.query.search[i].title.replace(/ /g,"_");
      console.log(title_link);
        out +=   "<div id='result'>" + "<a target='_blank' href=" + url + title_link + ">" +  x.query.search[i].title +
        "</a></br>" + "<div id='content'>" +
       x.query.search[i].snippet +
        "</div></div>";
    }
  }
    else {
   out +=   "<div id='result'> No Results Found!</div>";
    }
     $("#tb1").html(out);

  }
});
  });