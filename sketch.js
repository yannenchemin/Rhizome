let x,y;

function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background(220);

ellipse(this.position.x, this.position.y, 12, 12);
triangle(150,200, 200, 120, 250, 200)
}


//---------- 외부에서 받은 3개의 코드
/*
if (random(10)>9) {rect(10,10,10,10)}; //랜

sleepy = createVector(0,100); applyForce(sleepy); //클래스 만들

ellipse(this.position.x, this.position.y, 12, 12); // x,y를 사용한 원형

slider = createSlider(1,100,1); slider.style(‘width’,’100px’); //슬라이더 만들기

fill(v1, v2, v3, [alpha]); noStroke(); //색 채우기,선없음

triangle(150,200, 200, 120, 250, 200); //삼각형 만들기
*/
