function argument(r1,r2){
    if (r1.x-r2.x<r1.width/2+r2.width/2 &&
      r2.x-r1.x<r1.width/2+r2.width/2 && 
      r1.y-r2.y<r1.width/2+r2.width/2 &&
      r2.y-r1.y<r1.width/2+r2.width/2 ){
        return true;
       
   
    }
     
   else{
     
  return false;
  }
  }