takePillApp.controller('main', [ "$scope", "ReminderService", function($scope, ReminderService) {

    $scope.startTimeSet = new Date();

    $scope.intervalSet = 4;
    $scope.numIntervalsSet = 4;

    $scope.minuteStep = 15;

    $scope.createReminder = function() {
        ReminderService.set($scope.startTimeSet, $scope.intervalSet, $scope.numIntervalsSet);
    };
}]);

takePillApp.controller('Settings', [ "$scope", function($scope) {
    $scope.name = "test";
}]);