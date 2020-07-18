function setActiveStyle(colorName){
    $(".alternate-style").attr("disabled","true");
    $(".alternate-style[title="+colorName+"]").removeAttr("disabled");
    console.log(colorName)
}
$(".toggle-style-switcher").click(function(){
    $(".style-switcher").toggleClass("open");
})