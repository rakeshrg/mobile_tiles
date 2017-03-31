var validJsonObject=[];
var preDiv='<div class="content">';
var postDiv='</div>';
var preImg='<img class="contentImg" src="';
var postImg='">';
var preSpan='<span class="contentText">';
var postSpan='</span>';
var checkIcon="images/icons/check.png";
var emptyIcon="images/icons/empty.png";
var stackIcon="images/icons/stack.png";
var preList='<li class="list">';
var postList='<hr></li>';
var preCheckIcon='<img class="check" src="';
var preStackIcon='<img class="stack" src="';

$.ajax({
  url: "json/tiles.json",
  dataType: "json",
  success: function(result){
        var length=result.Tiles.length;
        var j=0;
        var imgUrl;
        var captionText;
      for(var i=0;i<length;i++) {
      if((typeof result.Tiles[i].SubCategory != "undefined")
        &&(result.Tiles[i].TileProperties.Dimensions.Width == 1)
        &&(result.Tiles[i].TileProperties.HomeTileStatus == true)){
        validJsonObject[j]={value: result.Tiles[i], display: 1};
        j++;
        imgUrl=result.Tiles[i].TileProperties.HomeURL;
        captionText=result.Tiles[i].Caption;
        innerHtml=preDiv+preImg+imgUrl+postImg+preSpan+captionText+postSpan+postDiv;
        $("#tiles").append(innerHtml);
      }
    }
    length=validJsonObject.length;
    for(var i=0;i<length;i++){
      captionText=validJsonObject[i].value.Caption;
      if(validJsonObject[i].display == 1){
        innerHtml=preList+preCheckIcon+checkIcon+postImg+captionText+preStackIcon+stackIcon+postImg+postList;
      }else{
        innerHtml=preList+preCheckIcon+emptyIcon+postImg+captionText+preStackIcon+stackIcon+postImg+postList;
      }
      $("#tilesList").append(innerHtml);
    }
    }
});
  

