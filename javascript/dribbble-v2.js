// Set the Access Token
var accessToken = '1a7f86a5252d6730031e7240df441df949128adebd06c16f4fdab8b053e37d6a';

// Call Dribble v2 API
$.ajax({
    url: 'https://api.dribbble.com/v2/user/shots?per_page=8&access_token='+accessToken,
    dataType: 'json',
    type: 'GET',
    success: function(data) {  
      if (data.length > 0) { 
        $.each(data.reverse(), function(i, val) {                
          $('.dribbble-list').prepend(
            '<li><a class="shot" target="_blank" href="'+ val.html_url +'" title="' + val.title + '" target="_blank"><img src="'+ val.images.hidpi +'"/></a></li>'
            )
        })
      }
      else {
        $('.dribbble-list').append('<li>Loading...</li>');
      }
    }
});