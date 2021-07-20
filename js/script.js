// リロード時
$(function() {
  // ウィンドウサイズ768px以下の場合、クラスを削除
  if (window.matchMedia( '(max-width: 768px)' ).matches) {
  $(function(){
    $('.step-7').removeClass('col-5');
  });
  //768px以上の場合なにもしない
    } else {
  };
});

$(window).resize(function(){
  let x = $(window).width();
  let y = 768;
  if (x <= y) {
    $('.step-7').removeClass('col-5');
  }
  else {
    $('.step-7').addClass('col-12');
  }
});
