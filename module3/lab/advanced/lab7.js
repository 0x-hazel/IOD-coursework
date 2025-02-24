class DigitalClock {
    constructor(prefix) {
        this.prefix = prefix;
    }
    display() {
        let date = new Date();
        //create 3 variables in one go using array destructuring
        let [hours, mins, secs] = [
            date.getHours(),
            date.getMinutes(),
            date.getSeconds(),
        ];

        if (hours < 10) hours = "0" + hours;
        if (mins < 10) mins = "0" + mins;
        if (secs < 10) secs = "0" + secs;
        console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
    }
    stop() {
        clearInterval(this.timer);
    }
    start() {
        this.display();
        this.timer = setInterval(() => this.display(), 1000);
    }
}

class PrecisionClock extends DigitalClock {
    constructor(prefix, precision = 1000) {
        super(prefix)
        this.precision = precision
    }
    start() {
        this.display()
        this.timer = setInterval(() => this.display(), this.precision)
    }
}

class AlarmClock extends DigitalClock {
    constructor(prefix, wakeupTime = "07:00") {
        super(prefix)
        this.wakeupHour = Number(wakeupTime.split(':')[0])
        this.wakeupMinute = Number(wakeupTime.split(':')[1])
    }
    display() {
        super.display()

        let date = new Date();
        let [hours, mins] = [
            date.getHours(),
            date.getMinutes()
        ];

        if (this.wakeupHour == hours && this.wakeupMinute == mins) {
            console.log("Wake Up!")
            this.stop()
        }
    }
}

const myClock = new AlarmClock("my clock:", '20:07');
myClock.start();
