//variables
  let skinColors = [];
  let features = [];
  let clothes = [];
  let hair = [];
  let accessories = [];
  let skinIndex = 0;
  let featureIndex = 0;
  let hairIndex = 0;
  let clothesIndex = 0;
  let accessoriesIndex = 0;


function setup() {
  var canvas = createCanvas(500, 600);
  background("#d0f5c4");
  //displayLook();
  canvas.parent("sketchHolder")
  rectMode(CORNERS);
  
  
  
  //buttons
  var button = createButton("Skin Color");
  button.parent("buttonHolder");
  button.mousePressed(humanSkins);
  
  var button2 = createButton("Accessories");
  button2.parent("buttonHolder");
  button2.mousePressed(changeAccessories);
  
  var button3 = createButton("Hair");
  button3.parent("buttonHolder");
  button3.mousePressed(changeHair);
  
  var button4 = createButton("Features");
  button4.parent("buttonHolder");
  button4.mousePressed(changeFeatures);
  
  var button5 = createButton("Clothes");
  button5.parent("buttonHolder");
  button5.mousePressed(changeClothes);
  
  var button6 = createButton("Save")
  button6.parent("buttonHolder");
  button6.mousePressed(saveImage);
}

function preload() {
  //human skins
  skinColors[0] = loadImage("skins/Human1.png");
  skinColors[1] = loadImage("skins/Human2.png");
  skinColors[2] = loadImage("skins/Human3.png");
  skinColors[3] = loadImage("skins/Human4.png");
  skinColors[4] = loadImage("skins/Human5.png");
  skinColors[5] = loadImage("skins/Human6.png");
  skinColors[6] = loadImage("skins/Human7.png");
  
  //features
  features[0] = loadImage("features/Atennas.png");
  features[1] = loadImage("features/BunnyEars.png");
  features[2] = loadImage("features/CatEars.png");
  features[3] = loadImage("features/Halo.png");
  features[4] = loadImage("features/Horns.png");
  features[5] = loadImage("features/Wings.png");
  features[6] = loadImage("features/FishEars.png");
  
  //clothes
  clothes[0] = loadImage("clothes/Clothes1.png");
  clothes[1] = loadImage("clothes/Clothes2.png");
  clothes[2] = loadImage("clothes/Clothes4.png");
  clothes[3] = loadImage("clothes/Clothes5.png");
  
  //hair
  hair[0] = loadImage("hairs/Hair2.png");
  hair[1] = loadImage("hairs/Hair3.png");
  hair[2] = loadImage("hairs/Hair4.png");
  hair[3] = loadImage("hairs/Hair5.png");
  hair[4] = loadImage("hairs/Hair6.png");
  hair[5] = loadImage("hairs/Hair7.png");
  hair[6] = loadImage("hairs/Hair8.png");
  hair[7] = loadImage("hairs/Hair9.png");
  hair[8] = loadImage("hairs/Hair10.png");
  
  //accessories
  accessories[0] = loadImage("accessories/Access1.png");
  accessories[1] = loadImage("accessories/Access2.png");
  accessories[2] = loadImage("accessories/Access3.png");
  accessories[3] = loadImage("accessories/Access4.png");
  accessories[4] = loadImage("accessories/Access5.png");
  accessories[5] = loadImage("accessories/Access6.png");
  accessories[6] = loadImage("accessories/Access7.png");
  
}


function draw() {
}

function humanSkins() {
  drawScene();
  image(skinColors[skinIndex], 150, 250, 200, 200)
  
  skinIndex = (skinIndex + 1) % skinColors.length
}

function displayLook() {
  rect(0, 75, 497, 520)
  fill("#d0f5c4")
  strokeWeight(7)
}


function changeFeatures() {
  drawScene();
  image(features[featureIndex], 200, 150, 100, 100)
  
  
  featureIndex = (featureIndex + 1) % features.length
}

function changeClothes() { 
  drawScene();
  image(clothes[clothesIndex], 170, 340, 160, 110)
  
  clothesIndex = (clothesIndex + 1) % clothes.length
}

function changeHair() {
  drawScene();
  image(hair[hairIndex], 160, 185, 180, 125)
  
  hairIndex = (hairIndex + 1) % hair.length
}

function changeAccessories() {
  drawScene();
  image(accessories[accessoriesIndex], 190, 220, 80, 80)
  
  accessoriesIndex = (accessoriesIndex + 1) % accessories.length
}

function drawScene() {
  background("#d0f5c4");

  image(skinColors[skinIndex], 150, 250, 200, 200); 
  image(clothes[clothesIndex], 170, 340, 160, 110); 
  image(features[featureIndex], 200, 150, 100, 100)
  image(hair[hairIndex], 160, 185, 180, 125);
  
}

function saveImage() {
  saveCanvas("MyCharacter")
}
