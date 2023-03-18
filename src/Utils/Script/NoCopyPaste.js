//Disable cut copy paste
$('body').on('cut copy paste', function (e) {
    e.preventDefault();
});

//Disable mouse right click
$("body").on("contextmenu",function(e){
    return false;
});