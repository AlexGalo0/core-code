"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Time = void 0;
class Time {
    constructor(hour, minute, second) {
        this.hour = hour;
        this.minute = minute;
        this.second = second;
    }
    // Write a method called getInSeconds that returns a number representing the actual time in the instance represented in seconds.
    getInSeconds() {
        var totalSeconds;
        var HOUR_TO_SECOND = 3600;
        var MINUTE_TO_SECOND = 60;
        totalSeconds = (HOUR_TO_SECOND * this.hour) + (MINUTE_TO_SECOND * this.second) + this.second;
        return totalSeconds;
    }
    printTime() {
        console.log(`Hours : ${this.hour},Minutes: ${this.minute}, Seconds : ${this.second} `);
    }
}
exports.Time = Time;
