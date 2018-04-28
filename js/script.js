// API MENU - Select a section to access with New York Times API
$('#nyt-section').on('change', function() {
    $('.results').empty();
    $('header').addClass('active');
 
    var itemCount = 0;
    var selected = $(this).val();
  
    $('body').css('height','auto');

    setTimeout(function(){ //allows for user to view 'loader img' - can be removed for performance after marking
    $('.loading').css('display','block'),2000});
 
    setTimeout(function(){

  //New York Times API from: https://developer.nytimes.com/top_stories_v2.json
  // Built by LucyBot. www.lucybot.com
    var url = 'https://api.nytimes.com/svc/topstories/v2/'+selected+'.json';
      url += '?' + $.param({
      'api-key': 'd88fc801606f4f28975b0a6761df23e7'
      }); //Closes $.param

      $.ajax({
        url: url,
        method: 'GET',
        }) //closes .ajax

      .done(function(data) {
        $.each(data.results,function(key,value){
          if (value.multimedia.length>0){
            itemCount++;
            $('.results').append('<a class="box" href="'+value.short_url+'"><div class="story" style="background-image: url('+value.multimedia[4].url+')"><p class="abstract hidden">'+value.abstract+'</p></div></a>');
          return itemCount<12; 
          }
        }) //end of $.each
      }) //end of .done

      .fail(function(){
        $('.results').append('<p>Sorry, it appears there is a problem with the page.</p>');
      }) //end of .fail
      
      .always(function(){
        $('.loading').css('display','none');
      })//end of .always
    }, 1000) //end of timeout
});

//Selectric:

$(function() {
  $('#nyt-section').selectric();
});
