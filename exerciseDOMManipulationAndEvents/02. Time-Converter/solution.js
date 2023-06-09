function attachEventsListeners() {

    let days = document.getElementById('days');
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');

    let timeData = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400,
    };

    document.getElementById('daysBtn').addEventListener('click', onConvert);
    document.getElementById('hoursBtn').addEventListener('click', onConvert);
    document.getElementById('minutesBtn').addEventListener('click', onConvert);
    document.getElementById('secondsBtn').addEventListener('click', onConvert);

    function convert(value, id) {
        let days = value / timeData[id];
        
        return {
            days:days,
            hours:days*timeData.hours,
            minutes:days*timeData.minutes,
            seconds:days*timeData.seconds,
        };
    }

    function onConvert(event) {
        let input = event.target.parentElement.querySelector('input[type="text"]') ;
        
        let time = convert(Number(input.value), input.id);
        
        days.value = time.days;
        hours.value = time.hours;
        minutes.value = time.minutes;
        seconds.value = time.seconds;
    }
}