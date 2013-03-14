var $ = require('jquery');

module.exports = function(width, height) {
    var youku_embed = '<embed src="http://player.youku.com/player.php/sid/[vid]/v.swf" quality="high" width="'+ width +'" height="'+ height +'" align="middle" allowScriptAccess="sameDomain" allowFullscreen="true" type="application/x-shockwave-flash"></embed>';
    var youtube_embed = '<object width="'+ width +'" height="'+ height +'">'+
          '  <param name="movie" value="http://www.youtube.com/v/[vid]&amp;hl=en&amp;fs=1"></param>'+
          '  <param name="allowFullScreen" value="true"></param>'+
          '  <param name="allowscriptaccess" value="always"></param>'+
          '  <param name="wmode" value="transparent"></param>'+
          '  <embed src="http://www.youtube.com/v/[vid]&amp;hl=en&amp;fs=1" type="application/x-shockwave-flash" wmode="transparent" allowscriptaccess="always" allowfullscreen="true" width="'+ width +'" '+'height="'+ height +'"></embed>'+
          '</object>';
    var vimeo_embed = '<iframe src="http://player.vimeo.com/video/[vid]" width="'+ width +'" height="'+ height +'" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';

    $('a[href*="v.youku.com/v_show"]').each(function() {
        var that = $(this);
        var video = that.attr('href').match(/(id_)([\w]+)/g);
        if (video.length) {
            $.each(video, function(i) {
                that.replaceWith( youku_embed.replace(/\[vid\]/g, this.replace('id_', '')) );
            });
        }
    });

    $('a[href*="youtube.com/watch"]').each(function() {
        var that = $(this);
        var video = that.attr('href').match(/(?:v=)([\w\-]+)/g);
        if (video.length) {
            $.each(video, function(i){
                that.replaceWith( youtube_embed.replace(/\[vid\]/g, this.replace('v=','')) );
            });
        }
    });

    $('a[href*="vimeo.com/"]').each(function() {
        var that = $(this);
        var video = that.attr('href').mathch(/(com\/)([\d\-]+)/g);
        if (video.length) {
            $.each(video, function(i){
                that.replaceWith( vimeo_embed.replace(/\[vid\]/g, this.replace('com/','')) );
            });
        }
    });
};