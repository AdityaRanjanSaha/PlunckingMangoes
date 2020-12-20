class Boy extends MainClass{
    constructor(x,y){
        var options ={
            isStatic: true 
        }
    super(x,y,200,200);
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.image = loadImage("Plucking mangoes/boy.png");
    }
}