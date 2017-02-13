let React = require('react');
let ReactDOM = require('react-dom');
let {browserHistory, Route, Router, IndexRoute} = require('react-router');
let GmailBox = require('./components/GmailBox');
let NavBar = require('./components/NavBar');
let About = require('./components/About');
let Home = require('./components/clientapp');
let Favourites = require('./components/sample/favourites');
let MainComp = React.createClass({
    render: function() {
        return (
            <div>
                <NavBar/>
                <br/><br/><br/><br/> {this.props.children}
            </div>
        );
    }
});
ReactDOM.render(
    <Router history={browserHistory}>
    <Route path="/" component={MainComp}>
        <IndexRoute component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/gmailbox" component={GmailBox}/>
        <Route path='/favourites' component={Favourites}/>
    </Route>

</Router>, document.getElementById('mountapp'));
