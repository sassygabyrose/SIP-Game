//Press a button to choose your path
//See the README file for more information

/* VARIABLES */
let enterButton;
let a1Button;
let a2Button;
let b1Button;
let b2Button;
let c1Button;
let c2Button;
let screen = 0;
let bg;
let mario;
let candy;
let zombies;
let skeleton;
let ldeath;
let undertale;
let win;
let pacman;
let score = 0;
let target;
let not_won = true;


/* SETUP RUNS ONCE */
function setup() {
  bg = loadImage("glitch 1.jpg");
  mario = loadImage("mario with more options.jpg");
  candy = loadImage("candy crush 2.png");
  zombies = loadImage("last of us background.jpg");
  ldeath = loadImage("game over.jpg");
  undertale = loadImage("undertale background.png");
  win = loadImage("win screen.jpg");
  pacman = loadImage("pacman background.jpg");
  
  createCanvas(2000, 1000);
  textAlign(CENTER);
  textSize(20);
  noStroke();

  // Set up the home screen
  

  // Create buttons for all screens and set position off screen
  enterButton = new Sprite(width / 2, height / 2 + 100);
  a1Button = new Sprite(-200, -200);
  a2Button = new Sprite(-50, -50);
  b1Button = new Sprite(-100, -100);
  b2Button = new Sprite(-150, -150);
  c1Button = new Sprite(-300, -300);
  c2Button = new Sprite(-350, -350);

  
  
  
}

/* DRAW LOOP REPEATS */
function draw() {
  

  if (screen == 0){
    background(bg);
    showShapes1();

  fill(0);
  text(
    "Gaby's Game \n Help! I got trapped in my computer while making my slides! \n Can you help me get back to my slides and out of my computer?",
    width / 2,
    height / 2 - 100
  );
    //Draw enter button
  enterButton.w = 100;
  enterButton.h = 50;
  enterButton.collider = "k";
  enterButton.text = "Yes";
  enterButton.color = "plum";
  }
    // Check enter button
  if (enterButton.mouse.presses()) {
    
    showScreen1();
    screen = 1;
  }
  else{
    if (screen == 1) {
    if (a1Button.mouse.presses()) {
      showScreen2();
      screen = 2;
    } else if (a2Button.mouse.presses()) {
      showScreen3();
      screen = 3;
    }
  } else if (screen == 2) {
    if (b1Button.mouse.presses()) {
      showScreen9();
      screen = 9;
    } else if (b2Button.mouse.presses()) {
      showfinal();
      screen = 10;
    }
  }
    else if (screen == 3){
      if (c1Button.mouse.presses()){
        showScreen5();
        screen = 5;
      }
      else if (c2Button.mouse.presses()){
        showScreen7();
        screen = 7;
      }
    }
    else if (screen == 7){
      if (b1Button.mouse.presses()){
        miniGame();
        if (target.mouse.presses()) {
          score = score + 1;
        }
        screen = 15;
      }
      else if (b2Button.mouse.presses()){
        showScreen4();
        screen = 4;
      }
    }
    
    }
  

  print(screen);
}

/* FUNCTIONS TO DISPLAY SCREENS */
function showScreen1() {
  // This is the Mario screen that leads to Candy Crush and The Last of Us
  //print("Enter the game")
  background(mario);
  showShapes2();
  fill(0);
  text(
    "I begin in Super Mario Bros! I need to get out when I hear this super jumpy guy say 'Let's a go!' \n I could either follow him to the castle or go down the pipe.",
    width / 2,
    height / 2 - 200
  );
  // Move extra buttons off screen
  enterButton.pos = { x: -100, y: -100 }; //do with x and y together first
  b1Button.pos = { x: -100, y: -100 };
  b2Button.pos = { x: -150, y: -150 };
  c1Button.pos = { x: -300, y: -300 };
  c2Button.pos = { x: -350, y: -350 };

  // Add a1 button
  a1Button.pos = { x: width / 2 - 70, y: height / 2 + 100 };
  a1Button.w = 100;
  a1Button.h = 50;
  a1Button.collider = "k";
  a1Button.color = "plum";
  a1Button.text = "Castle";

  // Add a2 button
  a2Button.pos = { x: width / 2 + 70, y: height / 2 + 100 };
  a2Button.w = 100;
  a2Button.h = 50;
  a2Button.collider = "k";
  a2Button.color = "plum";
  a2Button.text = "Pipe";
}

function showScreen2() {
  // Candy Crush leads to 
  background(candy);
  showShapes3();
  fill(0);
  text(
    "After I went through the castle, I ended up in a new game. \n It smelled of sweets and candy I think. \n I can ask the girl for help or wander into the distance.",
    width / 4,
    height / 2 + 180
  );
  // Move extra buttons off screen
  //enterButton.pos = { x: -100, y: -100 };
  a1Button.pos = { x: -200, y: -200 };
  a2Button.pos = { x: -50, y: -50 };
  // Add b1 Button
  b1Button.pos = { x: width / 2 - 50, y: height / 2 + 100 };
  b1Button.w = 80;
  b1Button.h = 50;
  b1Button.collider = "k";
  b1Button.color = "plum";
  b1Button.text = "Girl";
  // Add b2 Button
  b2Button.pos = { x: width / 2 + 50, y: height / 2 + 100 };
  b2Button.w = 100;
  b2Button.h = 50;
  b2Button.collider = "k";
  b2Button.color = "plum";
  b2Button.text = "Distance";
}

function showScreen3() {
  // Last of us leads to Undertale and death
  background(zombies);
  showShapes4();
  fill(0);
  text("I come out of the pipe to find my worst nightmare. I hear clicking noises and can't decide whether to run toward them \n or away.", width / 2, height / 2 - 100);
  // Move extra buttons off screen
  b1Button.pos = { x: -100, y: -100 };
  b2Button.pos = { x: -150, y: -150 };
  a1Button.pos = { x: -200, y: -200 };
  a2Button.pos = { x: -50, y: -50 };
  

  //put new buttons in
  c1Button.pos = { x: width / 2 - 100, y: height / 2 + 100 };
  c1Button.w = 150;
  c1Button.h = 50;
  c1Button.collider = "k";
  c1Button.color = "plum";
  c1Button.text = "Towards Noises";
  // Add b2 Button
  c2Button.pos = { x: width / 2 + 100, y: height / 2 + 100 };
  c2Button.w = 150;
  c2Button.h = 50;
  c2Button.collider = "k";
  c2Button.color = "plum";
  c2Button.text = "Away From";
  
}

function showScreen7() {
  // Undertale leads to death or the end
  background(undertale);
  showShapes7();
  fill(0);
  text("I survive and end up in Undertale! I can either go into the castle or talk to the weird Skeleton next to me.", width / 2, 210);
  // Move extra buttons off screen
  c1Button.pos = { x: -300, y: -300 };
  c2Button.pos = { x: -350, y: -350 };
  a1Button.pos = { x: -200, y: -200 };
  a2Button.pos = { x: -50, y: -50 };
  

  //put new buttons in
  b1Button.pos = { x: width / 2 - 100, y: height / 2 - 200 };
  b1Button.w = 150;
  b1Button.h = 50;
  b1Button.collider = "k";
  b1Button.color = "plum";
  b1Button.text = "Castle";
  // Add b2 Button
  b2Button.pos = { x: width / 2 + 100, y: height / 2 - 200 };
  b2Button.w = 150;
  b2Button.h = 50;
  b2Button.collider = "k";
  b2Button.color = "plum";
  b2Button.text = "Skeleton";
  
}

function showScreen6() {
  // Candy Crush leads to 
  background(candy);
  showShapes4();
  fill(0);
  text(
    "After I went through the castle, I ended up in a new game. \n It smelled of sweets and candy I think. ",
    width / 2,
    height / 2 - 100
  );
  // Move extra buttons off screen
  //enterButton.pos = { x: -100, y: -100 };
  a1Button.pos = { x: -200, y: -200 };
  a2Button.pos = { x: -50, y: -50 };
  c1Button.pos = { x: -300, y: -300 };
  c2Button.pos = { x: -350, y: -350 };
  // Add b1 Button
  b1Button.pos = { x: width / 2 - 50, y: height / 2 + 100 };
  b1Button.w = 50;
  b1Button.h = 50;
  b1Button.collider = "k";
  b1Button.color = "plum";
  b1Button.text = "B1";
  // Add b2 Button
  b2Button.pos = { x: width / 2 + 50, y: height / 2 + 100 };
  b2Button.w = 50;
  b2Button.h = 50;
  b2Button.collider = "k";
  b2Button.color = "plum";
  b2Button.text = "B2";
}

function showScreen4() {
  background(ldeath);
  showShapes8();
  fill(0);
  text("I ended up talking to the Skeleton for too long and didn't leave. He's very charasmatic.", width / 2, height / 2 - 300);
  // Move extra buttons off screen
  a1Button.pos = { x: -200, y: -200 };
  a2Button.pos = { x: -250, y: -250 };
  b1Button.pos = { x: -100, y: -100 };
  b2Button.pos = { x: -150, y: -150 };
  c1Button.pos = { x: -300, y: -300 };
  c2Button.pos = { x: -350, y: -350 };
}

function showScreen5() {
  // Create background
  background(ldeath);
  showShapes5();
  fill(0);
  text("I could never take on a Clicker. Sadly I am unable to get out of the game...", width / 2, height / 2 - 300);
  // Move extra buttons off screen
  a1Button.pos = { x: -200, y: -200 };
  a2Button.pos = { x: -50, y: -50 };
  c1Button.pos = { x: -300, y: -300 };
  c2Button.pos = { x: -350, y: -350 };

}

function showScreen9() {
  // Death from Last of us
  background(ldeath);
  showShapes5();
  fill(0);
  text("I ask the girl and she takes me to some Candy King. \n Now I'm stuck pushing candy around forever...", width / 2, height / 2 - 300);
  // Move extra buttons off screen
  a1Button.pos = { x: -200, y: -200 };
  a2Button.pos = { x: -50, y: -50 };
  b1Button.pos = { x: -100, y: -100 };
  b2Button.pos = { x: -150, y: -150 };
  c1Button.pos = { x: -300, y: -300 };
  c2Button.pos = { x: -350, y: -350 };

}

function showfinal() {
  background(win);
  
  
  // Move extra buttons off screen
  a1Button.pos = { x: -200, y: -200 };
  a2Button.pos = { x: -250, y: -250 };
  b1Button.pos = { x: -100, y: -100 };
  b2Button.pos = { x: -150, y: -150 };
  c1Button.pos = { x: -300, y: -300 };
  c2Button.pos = { x: -350, y: -350 };
}

function miniGame() {
  background(pacman);
  fill(0, 0, 0);
  rect(20, 100, 300, 100);
  fill("white");
  textAlign(LEFT);
  textSize(20);
  text('Score = ' + score, 10, 30);
  target = new Sprite(-500, -500, 10);
  target.img = "pac.png";
  target.scale = .1;
  //setTimeout(moveTarget, 1000);
  setInterval(moveTarget, 1000);
  
  
  // Move extra buttons off screen
  a1Button.pos = { x: -200, y: -200 };
  a2Button.pos = { x: -250, y: -250 };
  b1Button.pos = { x: -100, y: -100 };
  b2Button.pos = { x: -150, y: -150 };
  c1Button.pos = { x: -300, y: -300 };
  c2Button.pos = { x: -350, y: -350 };
}


function moveTarget() {
  //Move target to random locations
  //Make mini game sprite
  
  
  target.x = random(300, 1500);
  target.y = random(100, 800);


}



function showShapes1(){
  fill("lavender");
  rect(605, 350, width / 2 - 200, height / 2 - 300, 20)
}

function showShapes2(){
  fill("lavender");
  rect(550, 250, width / 2 - 100, height / 2 - 400, 20)
}

function showShapes3(){
  fill("lavender");
  rect(190, 650, width / 2 - 400, height / 2 - 400, 20)
}

function showShapes4(){
  fill("white");
  rect(400, 350, width - 800, height / 2 - 400, 20)
}

function showShapes5(){
  fill("lavender");
  rect(640, 150, 750, height / 2 - 400, 20)
}

function showShapes7(){
  fill("white");
  rect(400, 150, width - 800, height / 2 - 400, 20)
}

function showShapes8(){
  fill("lavender");
  rect(500, 150, 900, height / 2 - 400, 20)
}
