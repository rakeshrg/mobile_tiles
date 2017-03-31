 $("#tiles").css('display','block').css('opacity','0').animate({opacity:'1', display:'none'});
   $(".back").css('display','none').css('opacity','1').animate({opacity:'0'});
   $(".header").css('display','block').css('opacity','0').animate({opacity:'1', display:'none'});
   $("footer").css('display','block').css('opacity','0').animate({opacity:'1', display:'none'});
   $("body").css('background-color','#1f1f2e').animate({backgroundcolor:'# #80ffff'});
$("#gear").click(function(){  
  $("#tiles").css('display','none').css('opacity','1').animate({opacity:'0'});
  $(".back").css('display','block').css('opacity','0').animate({opacity:'1'});
  $(".header").css('display','none').css('opacity','1').animate({opacity:'0'});
  $("footer").css('display','none').css('opacity','1').animate({opacity:'0'});
  $("body").css('background-color','lightgrey');
});
$("#done").click(function(){
  $("#tiles").html("");
  var length=validJsonObject.length;
  var captionText;
  for (var i=0;i<length;i++) {                                
    if(validJsonObject[i].display==1){
      imgUrl=validJsonObject[i].value.TileProperties.HomeURL;
      captionText=validJsonObject[i].value.Caption;
      innerHtml=preDiv+preImg+imgUrl+postImg+preSpan+captionText+postSpan+postDiv;
      $("#tiles").append(innerHtml);
    }else{
     }
  }; 
  $("#tiles").css('display','block').css('opacity','0').animate({opacity:'1', display:'none'});
  $(".back").css('display','none').css('opacity','1').animate({opacity:'0'});
  $(".header").css('display','block').css('opacity','0').animate({opacity:'1', display:'none'});
  $("footer").css('display','block').css('opacity','0').animate({opacity:'1', display:'none'});
  $("body").css('background-color','#1f1f2e');
});

$(document).ready(function(){
  $(".check").click(function(){
    var index=$(this).parent().index();
    if(validJsonObject[index].display==1){
       $(this).attr('src', emptyIcon);
       validJsonObject[index].display=0;
    }
    else{
       $(this).attr('src', checkIcon);
       validJsonObject[index].display=1;
    }
  });

  $(".stack").mousedown(function(){   
     $("#tilesList").sortable({
          disabled: false,
        start: function(event, ui) {
            startIndex=ui.item.index();
          },
        stop: function(event, ui) {
            stopIndex=ui.item.index();
            var temp=validJsonObject[startIndex];
            if(startIndex<stopIndex){
              for(var i=startIndex;i<stopIndex;i++){
                validJsonObject[i]=validJsonObject[i+1];
              }
              validJsonObject[stopIndex]=temp;
            }else if(startIndex>stopIndex){
              for(var i=startIndex;i>stopIndex;i--){
                validJsonObject[i]=validJsonObject[i-1];
              }
              validJsonObject[stopIndex]=temp;
            }else{}
            $("#tilesList").sortable("disable");
        },
    }).disableSelection();
    });
});
