$(document).on('turbolinks:load', function() {

  var icon = $('.fa-heart');
  icon.on('click', function(){

    // クリックされた配列要素を取得
    var index = icon.index(this);
    var content = $(icon[index]);
    
    // 「いいね」されているかでアイコンを変える
    // 「いいね」→ classにcheck付与
    if (content.hasClass('check')) {
      
      content.addClass('far');
      content.removeClass('fas check');
  
    } else {
  
      content.addClass('fas check ');
      content.removeClass('far');
  
    }
  
  });

});
