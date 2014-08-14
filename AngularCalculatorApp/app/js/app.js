function Calculator($scope) {
    $scope.operators = ['+', '-', '*', '/'];
    $scope.selectedOperator = $scope.operators[0];

    $scope.calculate = function() {
        var A = parseInt($scope.firstNumber);
        var B = parseInt($scope.secondNumber);
        var C = 0;

        switch ($scope.selectedOperator) {
            case '+':
                C = A + B;
                break;
            case '-':
                C = A - B;
                break;
            case '*':
                C = A * B;
                break;
            case '/':
                C = A / B;
                break;
        }

        $scope.result = C;
    };
}
