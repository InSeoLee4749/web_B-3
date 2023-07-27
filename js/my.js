$(document).ready(function(){
    setInterval(function(){
        $(".swiper-wrapper").animate({"margin-Left" : -1200},400, function(){
            $(this).find("div").eq(0).appendTo($(this))
            $(this).css("margin-left",0)
        })
    },3000)

    $(".notice1 li").eq(0).click(function(){
        $(".pop").addClass("show")
    })
    $(".pop button").click(function(){
        $(".pop").removeClass("show")
    })
    
})