namespace objects {
  export class Label extends createjs.Text {
    // Private member

    // Public member

    // Constuctor
    constructor(
      labelString: string,
      fontSize: string,
      fontFamily: string,
      fontColor: string,
      x: number = 0,
      y: number = 0,
      isCentered: boolean = false
    ) {
      super(labelString, fontSize + " " +fontFamily, fontColor);
      this.x = x;
      this.y = y;
        if(isCentered){
            this.regX = this.getMeasuredWidth() * 0.5;
            this.regY = this.getMeasuredHeight() * 0.5;
            
        }
    }

    // Private Method

    // Public Method
  }
}
