var app = angular.module('app', ['react']);

app.controller('mainCtrl', function($scope) {
    $scope.person = {
        firstName: 'Josh',
        lastName: 'Finnie'
    };
    $scope.people = [{
        firstName: 'Josh',
        lastName: 'Finnie'
    },{
        firstName: 'Josh',
        lastName: 'Finnie'
    },{
        firstName: 'Josh',
        lastName: 'Finnie'
    },{
        firstName: 'Josh',
        lastName: 'Finnie'
    },{
        firstName: 'Josh',
        lastName: 'Finnie'
    },{
        firstName: 'Josh',
        lastName: 'Finnie'
    }]
});

var Hello = React.createClass({
    propTypes: {
        firstName: React.PropTypes.string.isRequired,
        lastName: React.PropTypes.string.isRequired
    },

    render: function() {
        return (
            <div>
                <span>{ this.prop.firstName }</span> <span>{ this.prop.lastName }</span>
            </div>
        );
    }
});

var HelloList = React.createClass({
    render: function() {
        return (
            <div>
                { this.props.people.map(function(person) {
                    return (<Hello firstName=person.firstName lastName=person.lastName />)
                })}
            </div>
        );
    }
})

app.value("Hello", Hello);
app.value("HelloList", HelloList);

app.directive('hello', function(reactDirective) {
    return reactDirective(Hello);
});

app.directive('hello-list', function(reactDirective) {
    return reactDirective(HelloList);
});
