let React = require('react');
let About = React.createClass({

    render: function() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="jumbotron">
                            <h2>
                                Helping people discover great places around them.
                            </h2>
                            <p>
                                Our team gathers information from every restaurant on a regular basis to ensure our data is fresh. Our vast community of food lovers share their reviews and photos, so you have all that you need to make an informed choice.
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

module.exports = About;
