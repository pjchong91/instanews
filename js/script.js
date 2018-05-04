$(document).ready(function () {

  // API MENU - Select a section to access with New York Times API
  $('#nyt-section').on('change', function () {
    $('.results').empty();
    $('header').addClass('active');

    var selected = $(this).val();

    $('body').css('height', 'auto');
    $('.loading').css('display', 'block')

    //New York Times API from: https://developer.nytimes.com/top_stories_v2.json
    // Built by LucyBot. www.lucybot.com
    var url = 'https://api.nytimes.com/svc/topstories/v2/' + selected + '.json';
    url += '?' + $.param({
      'api-key': 'd88fc801606f4f28975b0a6761df23e7'
    }); //Closes $.param

    $.ajax({
      url: url,
      method: 'GET',
    }) //closes .ajax

      .done(function (data) {
        var goodResults = data.results.filter(function (value) {
          return value.multimedia.length > 0;
        })
          .slice(0, 12);

        $.each(goodResults, function (key, value) {
          $('.results').append('<a class="box" href="' + value.short_url + '"><div class="story" style="background-image: url(' + value.multimedia[4].url + ')"><p class="abstract hidden" style="width: 100%">' + value.abstract + '</p></div></a>');
        }) //end of $.each
      }) //end of .done

      .fail(function () {
        $('.results').append('<p>Sorry, it appears there is a problem with the page.</p>');
      }) //end of .fail

      .always(function () {
        $('.loading').css('display', 'none');
      })//end of .always
  }); //end of on'change'

  //Selectric:
  $(function () {
    $('#nyt-section').selectric();
  });
});
