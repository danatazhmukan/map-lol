
/* VARIABLES */
let enterButton;
let a1Button;
let a2Button;
let b1Button;
let b2Button;
let screen = 0;

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(600, 400);
  textAlign(CENTER);
  textSize(20);
  noStroke();

  // Set up the home screen
  displayHomeScreen();

  // Create buttons for all screens
  enterButton = createButton('START');
  enterButton.position(width / 2 - 30, height / 2);
  enterButton.mousePressed(() => {
    print("pressed");
    showScreen1();
    screen = 1;
  });

  a1Button = createButton('Go Left');
  a1Button.position(width / 4 - 30, height / 2 + 50);
  a1Button.mousePressed(() => {
    print("Display screen 2");
    showScreen2();
    screen = 2;
  });
  a1Button.hide();

  a2Button = createButton('Go Right');
  a2Button.position((3 * width) / 4 - 30, height / 2 + 50);
  a2Button.mousePressed(() => {
    print("Display screen 5");
    showScreen5();
    screen = 3;
  });
  a2Button.hide();

  b1Button = createButton('Swim Across');
  b1Button.position(width / 4 - 30, height / 2 + 50);
  b1Button.mousePressed(() => screen = 4);
  b1Button.hide();

  b2Button = createButton('Walk Along');
  b2Button.position((3 * width) / 4 - 30, height / 2 + 50);
  b2Button.mousePressed(() => screen = 5);
  b2Button.hide();
}

/* DRAW LOOP REPEATS */
function draw() {
  if (screen === 0) {
    displayHomeScreen();
    enterButton.show();
    a1Button.hide();
    a2Button.hide();
    b1Button.hide();
    b2Button.hide();
  } else if (screen === 1) {
    displayRound1();
    enterButton.hide();
    a1Button.show();
    a2Button.show();
    b1Button.hide();
    b2Button.hide();
  } else if (screen === 2) {
    displayRound2A();
    enterButton.hide();
    a1Button.hide();
    a2Button.hide();
    b1Button.show();
    b2Button.show();
  } else if (screen === 3) {
    displayRound2B();
    enterButton.hide();
    a1Button.hide();
    a2Button.hide();
    b1Button.show();
    b2Button.show();
  } else if (screen === 4) {
    displayRound3A();
    enterButton.hide();
    a1Button.hide();
    a2Button.hide();
    b1Button.hide();
    b2Button.hide();
  } else if (screen === 5) {
    displayRound3B();
    enterButton.hide();
    a1Button.hide();
    a2Button.hide();
    b1Button.hide();
    b2Button.hide();
  } else {
    displayEndScreen();
    enterButton.hide();
    a1Button.hide();
    a2Button.hide();
    b1Button.hide();
    b2Button.hide();
  }
}

/* FUNCTIONS TO DISPLAY SCREENS */
function displayHomeScreen() {
  background("pink");
  text("Let the journey begin!!!", width / 2, height / 2 - 100);
}

function displayRound1() {
  background("lightblue");
  text("You are in a forest. Do you go left or right?", width / 2, height / 2 - 100);
}

function displayRound2A() {
  background("lightgreen");
  text("You encounter a river. Do you swim across or walk along it?", width / 2, height / 2 - 100);
}

function displayRound2B() {
  background("lightyellow");
  text("You find a cave. Do you enter or continue walking?", width / 2, height / 2 - 100);
}

function displayRound3A() {
  background("lightgray");
  text("You safely swim across the river. The adventure continues...", width / 2, height / 2 - 100);
  text("You found a hidden treasure!", width / 2, height / 2);
}

function displayRound3B() {
  background("lightorange");
  text("You decide to walk along the river. The adventure continues...", width / 2, height / 2 - 100);
  text("You find a peaceful village and rest there.", width / 2, height / 2);
}

function displayEndScreen() {
  background("lightcoral");
  text("The End", width / 2, height / 2 - 100);
}

/* NEWLY REFACTORED FUNCTIONS */
function showScreen1() {
  enterButton.hide();
  a1Button.show();
  a2Button.show();
  b1Button.hide();
  b2Button.hide();
}

function showScreen2() {
  enterButton.hide();
  a1Button.hide();
  a2Button.hide();
  b1Button.show();
  b2Button.show();
}

function showScreen5() {
  enterButton.hide();
  a1Button.hide();
  a2Button.hide();
  b1Button.show();
  b2Button.show();
}