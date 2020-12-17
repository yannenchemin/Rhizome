let light_point = []; //Finger_Point 객체들의 배열
let x = 100;
let y = 100;
let v1;
let v2;
let v3;

function setup() {
  createCanvas(1000, 1000);
  background(220);
  noStroke();

  v1 = createVector(mouseX,mouseY);
  v2 = createVector(mouseX,mouseY);
  v3 = createVector(mouseX,mouseY);

for(let i = 0; i < 50; i++){
  light_point.push(new LED());
}

}

function draw() {
fill(v1, v2, v3, [alpha]);

if (random(10)>9) {
  rect(10,10,10,10);
  triangle(150,200, 200, 120, 250, 200);
  }
  for (let i = 0; i < light_point.length; i++){
    light_point[i].move();
    light_point[i].display();
  }
}

class LED_light{
constructor() {
  this.x = mouseX;
  this.y = mouseY;
  this.light_speed = 1;
  this.position = createVector(mouseX,mouseY);
}
move(){
  this.x += random(-this.spped, this.speed);
  this.y += random(-this.spped, this.speed);
}

display(){
ellipse(this.position.x, this.position.y, 12, 12);

}



//---------- 외부에서 받은 3개의 코드
/*
if (random(10)>9) {rect(10,10,10,10)}; //랜덤

sleepy = createVector(0,100); applyForce(sleepy); //클래스 만들

ellipse(this.position.x, this.position.y, 12, 12); // x,y를 사용한 원형

slider = createSlider(1,100,1); slider.style(‘width’,’100px’); //슬라이더 만들기

fill(v1, v2, v3, [alpha]); noStroke(); //색 채우기,선없음

triangle(150,200, 200, 120, 250, 200); //삼각형 만들기
*/
