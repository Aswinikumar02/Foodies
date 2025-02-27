let React = require('react');
let Home = React.createClass({

    render: function() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="jumbotron">
                            <h2>
                                Home
                            </h2>
                            <p>
                                This is Gmail Box. It is using gmail API to extract your emails.
                            </p>
                            <p>
                                <a className="btn btn-primary btn-large" href="#">Learn more</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Home;
