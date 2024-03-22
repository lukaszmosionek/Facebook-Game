 window.fbAsyncInit = function() {
    FB.init({
      appId            : '287104065308741',
      autoLogAppEvents : true,
      xfbml            : true,
      version          : 'v3.2'
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/all.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));


function rand_img(ids){
		var rand = Math.floor(Math.random() * 3) + 1 ;
		var src = $('.'+ids+'>.img-result').attr('src').slice(0, -5);
		return src+rand+'.gif';
}

$('.box.card').click(function(){

	ids = $(this).attr('id');
	$('.box.wynik').hide();
	document.body.scrollTop = document.documentElement.scrollTop = 0;
	$('.'+ids).slideDown();
		$('.result').show();
	$('.img-result').hide();
	
	setTimeout(function(){ 
		$('.result').slideUp();
					
		
		$('.'+ids+'>.img-result').attr('src',rand_img(ids));
		$('.img-result').slideDown();

	}, 3000);
	
});






BASE_URL = 'http://januszowe.pl';
function try_again(ids){
	
	
	$('.box.wynik').hide();
	$('.'+ids).slideDown();
	$('.result').show();
	$('.img-result').hide();
	setTimeout(function(){ 
		$('.'+ids+'>.img-result').attr('src',rand_img(ids));
		$('.result').slideUp();
		$('.img-result').slideDown();
		
	}, 3000);
}
function share_imgOLD(mean){

	
	var hasztagi = $('.'+mean+'>.hasztagi').text();
	var text = $('.'+mean+'>.text').text();
	var img_result = $('.'+mean+'>.img-result').attr('src');
	
	
    FB.ui({
        method: 'share_open_graph',
        action_type: 'og.shares',
        action_properties: JSON.stringify({
            object : {
               'og:url': 'https://apps.facebook.com/287104065308741',
               'og:title': text,
               'og:description': hasztagi,
               'og:og:image:width': '2560',
               'og:image:height': '960',
               'og:image': 'http://januszowe.pl/test/graFacebook/'+img_result,
            }
        })
    });
 }
  
  
function toDataURL(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
    var reader = new FileReader();
    reader.onloadend = function() {
      callback(reader.result);
    }
    reader.readAsDataURL(xhr.response);
  };
  xhr.open('GET', url);
  xhr.responseType = 'blob';
  xhr.send();
}  
  
  
  
function share_img (mean) {
		//var img = "data:image/png;base64,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";
	$('.loading').show();
	var img_result = $('.'+mean+'>.img-result').attr('src');

toDataURL(img_result, function(dataUrl) {
  console.log('RESULT:', dataUrl)

		FBInstant.shareAsync({
			 intent: 'INVITE',
			 image: dataUrl, // base64Image code must be passed in img
			 text: 'Play this Awesome game',
			 data: {myReplayData: '...'},
		}).then(function() {
			 //location.reload();
			  $('.loading').hide();
		   });
		   
		  


})


}  

	
	
	
		///////////////////////// AD ///////////////////////////////

 // This demo won't run until you configure your app
    // and replace these constants with proper values.
    // Please see the README.md or go to 
    // https://developers.facebook.com/docs/games/instant-games/guides/ads-monetization 
    // for further instructions
    const INTERSTITIAL_PLACEMENT_ID = '765534990493526_771960879850937';
    const REWARDED_PLACEMENT_ID = '<YOUR REWARDED VIDEO PLACEMENT ID>';

    var watchedInterstitials = 0;
    var watchedRewardedVideos = 0;
    var preloadedRewardedVideo = null;
    var preloadedInterstitial = null;

    window.onload = function() {
      FBInstant.initializeAsync().then(function() {
        FBInstant.startGameAsync().then(function() {

          var supportedAPIs = FBInstant.getSupportedAPIs();
          if (supportedAPIs.includes('getInterstitialAdAsync') && supportedAPIs.includes('getRewardedVideoAsync')){
            //
            // Preload Interstitial
            //
            FBInstant.getInterstitialAdAsync(
              INTERSTITIAL_PLACEMENT_ID, // Your Ad Placement Id
            ).then(function(interstitial) {
              // Load the Ad asynchronously
              preloadedInterstitial = interstitial;
              return preloadedInterstitial.loadAsync();
            }).then(function() {
              showElement('btn-interstitial');
            }).catch(function(err){
              displayError('Interstitial failed to preload: ' + err.message);
            });

            //
            // Preload Rewarded
            //
            FBInstant.getRewardedVideoAsync(
              REWARDED_PLACEMENT_ID, // Your Ad Placement Id
            ).then(function(rewarded) {
              // Load the Ad asynchronously
              preloadedRewardedVideo = rewarded;
              return preloadedRewardedVideo.loadAsync();
            }).then(function() {
              showElement('btn-rewarded-video');
            }).catch(function(err){
              displayError('Rewarded video failed to preload:' + err.message);
            });

          } else {
            displayError('Ads not supported in this session');
          }
         
        });
      });
    };

    function showInterstitial() {      
      preloadedInterstitial.showAsync()
      .then(function() {
        // Perform post-ad success operation
        displayInterstitialAmount(++watchedInterstitials);        
      })
      .catch(function(e) {
        displayError(e.message);
      });
    }

    function showRewardedVideo() {
      preloadedRewardedVideo.showAsync()
      .then(function() {
        // Perform post-ad success operation
        displayRewardedAmount(++watchedRewardedVideos);
      }).catch(function(e) {
         displayError(e.message);
      });
    }

    function showElement(elmt) {
      document.getElementById(elmt).style.visibility = 'visible';
    }

    function displayError(message) {
      document.getElementById('error-messages').innerHTML = message
    }

    function displayInterstitialAmount(amount) {
      document.getElementById('interstitial-amount').innerHTML = amount;
    }

    function displayRewardedAmount(amount) {
      document.getElementById('rewarded-amount').innerHTML = amount;
    }


