// New York Times API
// Built by LucyBot. www.lucybot.com
// var url = "https://api.nytimes.com/svc/topstories/v2/home.json";
// url += '?' + $.param({
//   'api-key': "d88fc801606f4f28975b0a6761df23e7"
// });
// $.ajax({
//   url: url,
//   method: 'GET',
// }).done(function(result) {
//   console.log(result);
// }).fail(function(err) {
//   throw err;
// });

var itemCount = 0;
// API MENU - Select a section to access with New York Times API
$("#nyt-section").on("change", function() {
  $('.results').empty();
  var itemCount = 0;
  var selected = $(this).val();
  console.log(selected);
  //New York Times API
  // Built by LucyBot. www.lucybot.com
  var url = "https://api.nytimes.com/svc/topstories/v2/"+selected+".json";
  url += '?' + $.param({
    'api-key': "d88fc801606f4f28975b0a6761df23e7"
  });
  console.log(url);
  $.ajax({
    url: url,
    method: 'GET',
  })
  .done(function(data) {
    console.log(data.results);
    $.each(data.results,function(key,value){

     if (value.multimedia.length>0){
       console.log(value.short_url);
       itemCount++;
      

      //  $('.results').append(`<img src="${value.multimedia[4].url}">`);
      $('.results').append('<div class="box"><a href="'+value.short_url+'"><div class="story" style="background-image: url('+value.multimedia[4].url+')"><p>'+value.abstract+'</p></div></a></div>');
      // $(this).css('background-image','url(' + value.multimedia[4].url + ')');
     console.log(itemCount);
     return itemCount<12;
      }
        
      })

    });
});

   
// $("button").on("click", function() {
//   $('body').append(`<p class="loading">Loading...</p>`)
//     $('.repo-list li').remove('')
//     $.ajax({
//       method: 'GET',
//       url: 'https://api.github.com/users/octocat/repos?client_id=a37c6077034750f953fc&client_secret=8ff75658b21aa8c5830b7efeae85f559b4d36a02'
//     })
//       .done(function(data){
//       console.log(data);

//       $.each(data, function(key, dogs){
//           $('ul').append(`<li>${dogs.name}</li>`);
//         console.log(key, dogs.name);
//       })

//     })
//       .fail(function(error){
//           $('ul').append(`<li>Sorry, there was a problem, please try again.</li>`)
//       console.log('something went wrong');
//     })

//     .always(function(removeloading){
//         $('.loading').delay(5000).remove('');
//         console.log('yay');
//     });

//   }); // end of the click event

// $.ajax({

//   }).done(function(data) {
//     $.each(data, function(key, value) {
//       /* Append your list items here */
//     });
//   });
// });

//   $("button").on("click", function() {
//   var url = "https://api.nytimes.com/svc/topstories/v2/opinion.json";
//     url += '?' + $.param({
//     'api-key': "d88fc801606f4f28975b0a6761df23e7"
//     });

//     $.ajax({
//   url: url,
//   method: 'GET',
// })

//     .done(function(result) {
//         console.log(result);
// })

//     .fail(function(err) {
//         throw err;
// });
// });


// $('#get-weather').on("click",function(){
//     $('.post-results').remove('');

//     $.ajax({
//         method: 'GET',
//         url: 'http://api.openweathermap.org/data/2.5/weather?q=Vancouver,ca&appid=4a48e1e1428fd83889074671fbf259d9'
//     })
//     .done(function(data){
//         $('.post-results').append(`<img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png">`)
//         .append(`<h1>${data.weather[0].main}</h1>`)
//         console.log(data);
//         console.log(data.weather[0].main);
//         // console.log(data.weather);
//         $.each(data.weather,function(key,value){
//             console.log(value);
// $('.weatherpic').append(`<img src="http://openweathermap.org/img/w/${value.icon}.png">`)
// .append(`<h1>${value.main}</h1>`)
// .append(`<p>${value.description}</p>`)
// .append(`${value.icon}`);
//         })



//  });



// $.each(data,function(key,value){
//     console.log(value);
// }
// console.log(weather);
// $('.weather-widget').append(`<img>${weather.icon}</img>`)
// .append(`<p>${weather.main}</p>`)
// .append(`<p>${weather.description}</p>`);
// console.log('gottem');
//     });

// $('.getalbums').on("click",function(){
//     event.preventDefault();
// $.ajax({
//     method: 'GET',
//     url: 'https://itunes.apple.com/search?entity=album&limit=6&term=amy',
//     dataType:'jsonp'
//     // url: 'https://itunes.apple.com/search?entity=album&limit=6&term=PLUS+THE+ARTIST+NAME'
// })
// .done(function(data){
//     console.log(data);
//     $.each(data.results, function(key,value){
//         $('.album-list').append(`<img src="${value.artworkUrl100}">`)
//         .append(value.artistName);
//         console.log(value.artistName,value.artworkUrl100);
//     })
//     // $.each(data, function(key,value){
//     //     console.log(key,value);
// })
// })


// });
// });