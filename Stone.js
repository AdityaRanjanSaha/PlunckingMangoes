class Stone extends MainClass {
    constructor(x,y){
        var options ={
            isStatic: true 
        }
      super(x,y,50,50);
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.image = loadImage("Plucking mangoes/stone.png");
    }

  }
  