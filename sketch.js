//Create variables here
var dog,happydog,Food,database,dog_sprite,getFood,giveFood,time,hour1,hr,hour_c,datetime_c,lsft,c_h,bg,input,nameeeee,named;

var GameState,bedRoom,background,Garden

function preload()
{
  dog=loadImage("Dog.png")
 happydog= loadImage("happydog.png")
 bedRoom=loadImage("virtual pet images/Bed Room.png")
washroom=loadImage("virtual pet images/Wash Room.png")
 Garden=loadImage("virtual pet images/Garden.png")
}

function setup() {
  database= firebase.database();
	createCanvas(1280,720);
  dog_sprite=createSprite (750,250)
  
  dog_sprite.addImage(dog)
  
  dog_sprite.scale=0.1

  Food=new food();


  giveFood=createButton("feed the dog")


  
  giveFood.position(760,95)

  addFood=createButton("add food")
  addFood.position(850,95)


 addName= createButton("play")
 addName.position(700,600)

 reset= createButton("reset")
 reset.position(1200,50)


  input = createInput("dog's name ");
  
  input.position(700,500)

     
      
  
 
}


function draw() {  
//console.log(getFood)




background("#FFB6C1")
//console.log(GameState)

database.ref("gameState").on("value",function (data) {

  GameState=data.val()
  
})


if(GameState==="bedRoom"||GameState==="Garden"||GameState==="washroom"){
  giveFood.hide()
addFood.hide()
}

if(named===""){
addName.show()
input.show();

}else{

  input.hide()
  addName.hide()

}


Food.getFoodStock();

//background(Garden);

if(GameState==="bedRoom"){

 // bg=bedRoom

  background(bedRoom)
  dog_sprite.remove()
  

  }


  

  if(GameState==="Garden"){

    background(Garden)

    dog_sprite.remove()

  }

  if(GameState==="washroom"){

    background(washroom)

    dog_sprite.remove() 

  }


getcurrentTime()
//console.log(hour_c)
//console.log(hour);

//if(GameState!==null||GameState!==undefined){


//console.log()

 lsft=hr/hr*hr
 c_h= hour_c/hour_c*hour_c 

if(lsft+2===c_h){
  
  GameState="Garden"}

else if(lsft+3===c_h){

  GameState="bedRoom"


}
else if(lsft+4===c_h){



  GameState="washroom"






}
else{GameState="hungry"}

if(GameState!==null&&GameState!==undefined){
setGameState()}

if(getFood!==null&&getFood!==undefined){

  addFood.mousePressed(()=>{
    
    Food.AddFood()

  }



  )

  
  giveFood.mousePressed(()=>{
   
   

   Food.deduct();
   Food.updateFoodStock();
    getfeedTime();

    dog_sprite.addImage(happydog)

    
  }

  

  );
  fed(); 

 }

 if(GameState==="hungry"){
 Food.display();}


// imageMode(CENTER)

 

// console.log(bg)
  
 addName.mousePressed(()=>{

  nameeeee  = input.value()
  input.hide()
  addName.hide()

database.ref('/').update({
  dogName:nameeeee
  
  })





 }) 

 reset.mousePressed(()=>{

 
  database.ref('/').update({
    dogName:""
    
    })
  

 })

 
 drawSprites();

textSize(25)
fill("red")




database.ref("dogName").on("value",function(data){

   named = data.val()



})




 if(named!==undefined){
 text("your virtual pet 🐕‍🦺🐎 "+named,640,50)
 }
  
}






 
  //add styles here
  

 

  




  async function getcurrentTime(){
    var response_c = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON_c = await response_c.json();
  
   // console.log(responseJSON_c)
    var datetime_c = responseJSON_c.datetime;
    hour_c = datetime_c.slice(11,13);
    

  

    
     
     
      
      } 
   
    
    


async function getfeedTime(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
 hour1 = datetime.slice(11,13);

 
 database.ref('/').update({
  time:hour1})
 
 
  
  } 


  function fed(){
    database.ref("time").on("value",function(data){
     hr=data.val();

    })


if(hr>=12){
text("Last Feed : "+hr%12+"PM",350,30);

}
else{ 
  text("last feed : "+hr+"Am",350,30)
}

}

function setGameState(){

  



database.ref('/').update({
  gameState:GameState
  
  })


 
}

function setNameee(){


}