export class Rational {

  numerator : number ;
  denominator : number ; 


    constructor(numerator:number,denominator: number) {
        this.numerator=numerator ; 
        this.denominator=denominator ; 
    }


    //methods
    printRational() {
        // Write a method called printRational that prints the object in some reasonable format.
    }
    invert() {
        // Write a method called invert that inverts the number by swapping the numerator and denominator. This method should modify the instance variables.
    }
    toFloat() {
        // Write a method called toFloat that converts the rational number to a floating-point number and returns the result. This method is a pure function it does not modify the object.
    }
    reduce() {
        // Write method named reduce that reduces a rational number to its lowest terms by finding the greatest common divisor (GCD) of the numerator and denominator and dividing through. This method should modify the instance variables. To calculate the GCD you can search for Euclidian Algorithm: GCD.
    }






}