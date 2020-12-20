class Mango extends MainClass{
    constructor(x,y){
        var options ={
            isStatic: true 
        }
        super(x,y,30,30);
        this.body = Bodies.rectangle(x,y,width,height,options);
   
    this.image = loadImage("Plucking mangoes/mango.png");
    }
}