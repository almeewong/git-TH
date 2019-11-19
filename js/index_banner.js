$(function () {
    $('#content-slider .th').on('click', function () {
        var $that = $(this);
        var $thatId = $that.attr('id');                 //按鈕ID
        var $inset = $('#content-slider .inset');
        // 設定inset偏移
        switch ($thatId) {
            case 'b-1':
                $inset.css('margin-left', '0');
                break;
            case 'b-2':
                $inset.css('margin-left', '-100%');
                break;
            case 'b-3':
                $inset.css('margin-left', '-200%');
                break;
            case 'b-4':
                $inset.css('margin-left', '-300%');
                break;
        }
    })
    //螢幕尺寸小於991時，inset歸零
   $(window).on('resize', function () {
        var $window_W = $(this).outerWidth();
        if ($window_W <= 991) {
            $('#content-slider .inset').css('margin-left', '0');
        }
    })
}) 
    
      /*  $(window).resize(function () {
        var $window_W = $(this).outerWidth();
        if ($window_W <= 991) {
            $('#content-slider .inset').css('margin-left', '0');
        }
    })
})  */    // 也可以這樣寫 ?