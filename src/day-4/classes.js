class Polygon{
    constructor( sides=[]){
        this.sides = sides;
        this.numberOfSides = sides.length;
    }
        
    perimeter(){
        let sum =0;
        this.sides.forEach(value=>{
          sum+=value;    
        });
        
        return sum;
    }
}