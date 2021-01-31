var dog, happyDog, database, foodS, foodStock
var dogImg, dogHappyImg, sd;
var milk, milkImg;
var dh, dhi;
var zzz, zzzi;

function preload()
{
  dogImg = loadImage("Dog.png");
  dogHappyImg = loadImage("happydog.png");
  milkImg = loadImage("milk.png");
  dhi = loadImage("doghouse.png");
  sd = loadImage("download.jpg")
  zzzi = loadImage("zz.png");

}

function setup() {
  database = firebase.database();
  createCanvas(500, 500);
  
  
  dh = createSprite(320,275,10,10);
  dh.addImage(dhi)
  dh.scale = 0.75;

  dog = createSprite(250,300,10,10);
  dog.addImage(dogImg);
  dog.scale = 0.15;
  stroke(255,192,203);
  strokeWeight(3)

  zzz = createSprite(320,170,10,10);
  zzz.addImage(zzzi);
  zzz.scale = 0.30;

  emo = createSprite(200,200,1,1);
  
  foodStock = database.ref('food');
  foodStock.on("value",readStock);
  foodStock.set(20);
  
  milk = createSprite(140,435,10,10);
  milk.addImage(milkImg);
  milk.scale = 0.025;

  milk1 = createSprite(210,330,10,10);
  milk1.addImage(milkImg);
  milk1.scale = 0.025;
  milk1.visible = false;


  for (var i = 5; i < 500; i=i+10) 
{

var dot = createSprite(i, 5, 3, 3);
dot.shapeColor = "blue";

}
for (var i = 5; i < 500; i=i+10) 
{

var dot1 = createSprite(i, 495, 3, 3);
dot1.shapeColor = "blue";

}
for (var i = 5; i < 500; i=i+10) 
{

var dot1 = createSprite(495,i, 3, 3);
dot1.shapeColor = "blue";

}
for (var i = 5; i < 500; i=i+10) 
{

var dot1 = createSprite(5,i, 3, 3);
dot1.shapeColor = "blue";

}
}


function draw() {  
  background("pink")

  if(foodS !== 0){
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappyImg);
    milk1.visible = true;

   
  }

  if(keyWentUp(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogImg);
    milk1.visible = false;
    foodS = foodS - 1;
  }
  
  if(keyCode === RIGHT_ARROW){
    dog.visible = false;
    zzz.visible = true;
    }
    else{
      zzz.visible = false;
    }

  if(keyCode === LEFT_ARROW){
    dog.visible = true;
 
  }

  if(keyCode === 32){
    text("Press Up Arrow Key To Feed Your Pet Dog Shiro",50,50);
    fill("black");
    textSize(20)
    text("Press Right Arrow Key To Make Your Dog Rest",50,75);
    fill("black");
    textSize(20)
    text("Press Left Arrow Key To Make Your Dog Play With You",50,100);
    fill("black"); 
    textSize(20)
  
  }
  else{
    text("Press Space To Read The Information",50,75);
    textSize(20)
  }
   
  
}  

if(foodS == 0){
  
  dog.addImage(dogImg);
  foodS = 20;
  dog.scale = dog.scale + 0.01;
  milk.scale = milk.scale + 0.001;
}




  drawSprites();
  textSize(17);
  fill("black");
  text("I am your Puppy 🐶Shiro..😍",100,125);
  fill("black");
  
  text("Milk Bottles Remaining :"+foodS,170,440);
}

function readStock(data)
{
  foodS = data.val();
}

function writeStock(x){

  if(x<=0){
    x = 0;
  }else{
    x=x-1
  }

  database.ref('/').update({
    food:x
  })
}

