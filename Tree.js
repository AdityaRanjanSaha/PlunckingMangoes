class Tree extends MainClass{
    constructor(x,y){
        var options ={
            isStatic: true 
        }
        super(x,y,400,400);
        this.body = Bodies.rectangle(x,y,width,height,options);
   
    this.image = loadImage("Plucking mangoes/tree.png");
    }
}