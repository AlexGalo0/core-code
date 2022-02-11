export class Time {

    hour: number;
    minute: number ;
    second: number

    constructor(hour: number, minute: number,second: number) {
        this.hour=hour ; 
        this.minute= minute ;
        this.second = second ; 
    }
    // Write a method called getInSeconds that returns a number representing the actual time in the instance represented in seconds.
    getInSeconds() {
        var totalSeconds:number ;
        var HOUR_TO_SECOND = 3600 ; 
        var MINUTE_TO_SECOND = 60 ; 

        totalSeconds =  (HOUR_TO_SECOND*this.hour) +(MINUTE_TO_SECOND*this.second) + this.second ; 

        return totalSeconds  ; 
    }

    printTime() {
        console.log(`Hours : ${this.hour},Minutes: ${this.minute}, Seconds : ${this.second} `);
    }

}