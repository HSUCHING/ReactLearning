/**
 * Created by Hsuching on 15/9/6.
 */
var React = require('react');
console.log($.ajax);
var Hello = React.createClass({
    render: function(){
        return (
            <h1>Hello,Great {this.props.name}!</h1>
            );
    }
});
//class Hello extends React.Component {
//    render() {
//        return (
//            <h1>Hello {this.props.name}!</h1>
//            );
//    }
//}

module.exports=Hello;