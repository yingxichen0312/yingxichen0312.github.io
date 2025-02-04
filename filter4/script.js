
let faceMesh;
let faces = [];
let video;
let uvCoords;
let img;
//let bgImage;



function preload() {
  faceMesh = ml5.faceMesh({ maxFaces: 2 });
  img = loadImage("one.png");
 //bgImage = loadImage('background.png');
}

function mousePressed() {
  console.log(faces);
}

function gotFaces(results) {
  faces = results;
}

function setup() {
  const cnv = createCanvas(640, 480, WEBGL);
  cnv.style('display', 'block'); 
  cnv.style('margin', 'auto'); 
  cnv.position((windowWidth - width) / 2, (windowHeight - height) / 2)


  video = createCapture(VIDEO);
  video.hide();
  faceMesh.detectStart(video, gotFaces);
  triangles = faceMesh.getTriangles();
  uvCoords = faceMesh.getUVCoords();
}

function draw() {
  background(245, 245, 220);
  translate(-width / 2, -height / 2);
  image(video, 0, 0);
  //image(bgImage, 0, 0, width, height);

  if (faces.length > 0) {
    let face = faces[0];
    texture(img);
    textureMode(NORMAL);
    noStroke();
    beginShape(TRIANGLES);
    for (let i = 0; i < triangles.length; i++) {
      let tri = triangles[i];
      let [a, b, c] = tri;
      let pointA = face.keypoints[a];
      let pointB = face.keypoints[b];
      let pointC = face.keypoints[c];
      let uvA = uvCoords[a];
      let uvB = uvCoords[b];
      let uvC = uvCoords[c];

      vertex(pointA.x, pointA.y, uvA[0], uvA[1]);
      vertex(pointB.x, pointB.y,  uvB[0], uvB[1]);
      vertex(pointC.x, pointC.y,  uvC[0], uvC[1]);
    }
    endShape();
  }
}



let character = document.querySelector('.character');
let moveBy = 10;

window.addEventListener('load', () => {
  character.style.position = 'absolute';  
  character.style.left = '380px';  
  character.style.top = '30px';  
});

window.addEventListener('keyup', (e) => {  
    switch(e.key) {
        case 'ArrowLeft':
          character.style.left = parseInt(character.style.left) - moveBy + "px";
            break;
        case 'ArrowRight':
          character.style.left = parseInt(character.style.left) + moveBy + "px";
            break;
        case 'ArrowUp':
          character.style.top = parseInt(character.style.top) - moveBy + "px";
            break;
        case 'ArrowDown':
          character.style.top = parseInt(character.style.top) + moveBy + "px";
            break;
    }
});

document.addEventListener('DOMContentLoaded', function() {
  const body = document.querySelector('body');

  document.addEventListener('keydown', (event) => {
      console.log(event.key);
      if (event.key === 'a') {
          // Set the background to a random shade of cream
          body.style.background = getRandomCreamColor();
      } else if (event.key === 'b') {
          // Set the background to white
          body.style.background = 'white';
      }
  });

  function getRandomCreamColor() {
      let baseRed = 255;
      let baseGreen = 253;
      let baseBlue = 208;

      let red = Math.floor(baseRed - Math.random() * 10);
      let green = Math.floor(baseGreen - Math.random() * 10);
      let blue = Math.floor(baseBlue + Math.random() * 10);

      return `rgb(${red}, ${green}, ${blue})`;
  }
});
