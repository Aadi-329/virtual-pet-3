class food{

constructor(){
this.image=loadImage("Milk.png");




}
display(){
var x=80,y=100

imageMode(CENTER);
//image(this.image,720,220,70,70);


    for(var i=0;i<getFood;i++){
        if(i%15===0){
            x=80
            y=y+50

            
        
   



    }

    
    image(this.image,x,y,50,50);
    
    x+=30

}
        }

getFoodStock(){
    database.ref("food").on("value",function(data){
      getFood=  data.val();

    })

}



AddFood(){
 getFood=getFood+1

 database.ref('/').update({
    food:getFood})

}

deduct(){

    getFood=getFood-1
    if(getFood<=0){
      getFood=0
    }
    
}

updateFoodStock(){
    
 
  
   
    database.ref('/').update({
    food:getFood})

    
}


}