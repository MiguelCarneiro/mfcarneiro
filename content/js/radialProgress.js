/* Examples */
(function($) {
	
	/*
   * HTML5:
   */
  $('.HTML5.circle').circleProgress({
    value: 0.8,
	fill: {color: '#228b22'}
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').text('80' + '%');
  });


  /*
   * CSS3:
   */
  $('.CSS3.circle').circleProgress({
    value: 0.7,
	fill: {color: '#228b22'}
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').text('70' + '%');
  });
  
  /*
   * jQuery & JavaScript:
   */
  $('.jQuery_JS.circle').circleProgress({
    value: 0.6,
	fill: {color: '#ffd700'}
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').text('60' + '%');
  });
  
  /*
   * C-Sharp:
   */
  $('.csharp.circle').circleProgress({
    value: 0.8,
	fill: {color: '#228b22'}
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').text('80' + '%');
  });

  /*
   * PHP:
   */
  $('.PHP.circle').circleProgress({
    value: 0.4,
	fill: {color: '#FF0000'}
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').text('40' + '%');
  });
  
  /*
   * Java:
   */
  $('.Java.circle').circleProgress({
    value: 0.5,
	fill: {color: '#FF0000'}
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').text('50' + '%');
  });
  
  /*
   * C/C++:
   */
  $('.CPlusPlus.circle').circleProgress({
    value: 0.6,
	fill: {color: '#ffd700'}
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').text('60' + '%');
  });
  
  /*
   * SQL/PL-SQL:
   */
  $('.SQL_PLSQL.circle').circleProgress({
    value: 0.7,
	fill: {color: '#228b22'}
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').text('70' + '%');
  });
  
})(jQuery);
