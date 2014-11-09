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
            this.serialize();
        },
        serialize : function() {
            localStorage.set('reminders', JSON.stringify(this.reminders));
        },
        alarm : function() {
            alert('alarm went off');
        }
    }
}]);