nosex = 0;
nosey = 0;
dif = 0;
leftwristx = 0;
rightwristx = 0;
function setup(){
    video = createCapture(VIDEO);
    video.size(500,500);
    canvas = createCanvas(500,450);
    canvas.position(550,120);
    posenet = ml5.poseNet(video,ml);
    posenet.on("pose",gotposes);

}
function draw(){
    background("red");
    document.getElementById("width and length").innerHTML = "Length And Width Of A Square Will Be "+dif+" px";
    fill("yellow");
    stroke("orange");
    text("Shivam",nosex,nosey,100);
}
function ml(){
    console.log("Pose Net Is Loading")
}
function gotposes(result){
    if(result.length > 0){
        console.log(result);
        nosex = result[0].pose.nose.x;
        nosey = result[0].pose.nose.y;

        leftwristx = result[0].pose.leftWrist.x;
        rightwristx = result[0].pose.rightWrist.x;
        dif = floor(leftwristx-rightwristx);
    }
}