function getCount(objects) {
    
    let count = 0;
    objects.forEach((value)=>{
       
       if(value.x === value.y) 
        count++; 
    });
    
    return count;
    
}