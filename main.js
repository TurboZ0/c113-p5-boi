
function setup() {
    createCanvas(900, 900);
    video=createCapture(VIDEO)
    }
    
    function draw() {
      image(video, 120, 100, 450,320);
    rect(100,100, 500, 15);
      rect(100,420, 500, 15);
      rect(620, 100, 15, 330);
      rect(70, 100, 15, 330);
      fill("red");
      stroke("red");
    circle(80,107, 50, 50);
    circle(626, 108, 50, 50);
      circle(80,427, 50, 50);
    circle(626, 428, 50, 50);
      fill("blue");
     stroke("blue");
    
     
    }