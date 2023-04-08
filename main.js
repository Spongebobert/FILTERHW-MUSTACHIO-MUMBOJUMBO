nose_x =""
nosey = ""
function preload(){
  mustache = loadImage('https://i.postimg.cc/J0XK0LcY/moustache-PNG38.png')
}

function setup(){
    canvas = createCanvas(540,480);
    canvas.position(710,250);
   video = createCapture(VIDEO)
   video.size(350,300);
   video.hide();
   posenet = ml5.poseNet(video,modelloaded);
   posenet.on('pose', gotPosults);
  }
  function modelloaded(){
    console.log("model has bean loaded,see what I did there what I did with beans hahhaha")
  }
  function draw(){
    image(video,0,0,540,480)
    image(mustache,nose_x,nosey,30,30)
  }
  function gotPosults(results){
    if(results.length>0){
        console.log(results);
nose_x = results[0].pose.nose.x;
        nosey = results[0].pose.nose.y;
        console.log("nose x ="+ results[0].pose.nose.x)
        console.log("nose y ="+ results[0].pose.nose.y)
    }
}
  function take_snapshot(){
  save("SpongebobSpongebobSpongebobSpongebobSpongebobSpongebobSpongebobSpongebobSpongebobSpongebobSpongebobSpongebobSpongebobSpongebobSpongebobSpongebobSpongebobSpongebobSpongebobSpongebobSpongebobSpongebobSpongebobSpongebobSpongebobSpongebobSpongebobSpongebobSpongebobSpongebobSpongebobSpongebobSpongebobSpongebobSpongebobSpongebobSpongebobSpongebobSpongebobSpongebobSpongebobSpongebobSpongebobSpongebobSpongebobSpongebobSpongebobSpongebobSpongebobSpongebobSpongebobSpongebobSpongebobSpongebobSpongebobSpongebobSpongebobSpongebobSpongebobSpongebobSpongebobSpongebobSpongebobSpongebobSpongebobSpongebobSpongebobSpongebob.png")
  }
  