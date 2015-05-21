var app = angular.module('app', ['react']);

app.controller('mainCtrl', function($scope) {
    $scope.person = {
        firstName: 'Josh',
        lastName: 'Finnie'
    };
});

var Hello = React.createClass({
    propTypes: {
        firstName: React.PropTypes.string.isRequired,
        lastName: React.PropTypes.string.isRequired
    },

    render: function() {
        return React.DOM.span(null,
        'Hello ' + this.props.firstName + ' ' + this.props.lastName
        );
    }
});

app.value("Hello", Hello);

app.directive('hello', function(reactDirective) {
    return reactDirective(Hello);
});
