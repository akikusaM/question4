$(function(){

    const button = $("#drop_menu_btn");
    const menu = $("#drop_menu");
  
    // プログラムを記述
    button.click(function()
    {
        menu.toggle("500", "swing")
  //	  menu.fadeToggle("500", "swing");
    });
  });