class Food
{
    constructor()
    {
      this.foodStock=0;
      this.image=loadImage("images/milk.png");
    }
    updateFoodStock(fs)
    {
      this.foodStock=fs;
      if(this.foodStock <= 0)
{
  this.foodStock=0;
}
if(this.foodStock > 10)
{
  this.foodStock=10;
}
    }

    deductFood()
    {
      if(this.foodStock>0){
        this.foodStock=this.foodStock-1;
       }

    }

    getFoodStock()
    {
      return this.foodStock;
    }

    bedroom()
    {
      background(bed,550,550);
    }
    washroom()
    {
      background(wash,550,550);
    }
    garden()
    {
      background(Gar,550,550);
    }

    display()
    {
      var x=80,y=100;
    
      imageMode(CENTER);
   
      
      if(this.foodStock!=0){
        for(var i=0;i<this.foodStock;i++){
          if(i%10==0){
            x=80;
            y=y+300;
          }
          image(this.image,x,y,50,50);
          x=x+30;
        }
      }
    }
   
   
}