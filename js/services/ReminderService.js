takePillApp.factory('ReminderService', ['$timeout', function($timeout) {
    function reminder(interval, start, count) {
        this.interval = interval;
        this.start = start;
        this.count = count;
    }

    return {
        reminders : [],
        set : function(interval, start, count) {
            reminders.push(new reminder(interval, start, count));
            this.setTimeouts(this.getIntervalMilliseconds(interval, start, count));
            this.serialize();
        },
        setTimeouts : function(intervals) {
            for(var i = 0; i < intervals.length; i++) {
                $timeout(this.alarm, intervals[i]);
            }
        },
        getIntervalMilliseconds : function(interval, start, count) {
            var startMilliseconds = start.getTime();
            var intervalMilliseconds = interval * 60 * 60 * 1000;
            var intervals = [];
            var nextAlarmTime = startMilliseconds;
            for(var i = 0; i < count; i++) {
                nextAlarmTime = nextAlarmTime + intervalMilliseconds;
                intervals.push(nextAlarmTime);
            }
            return intervals;
        },
        serialize : function() {
            localStorage.set('reminders', JSON.stringify(this.reminders));
        },
        alarm : function() {
            alert('alarm went off');
        }
    }
}]);