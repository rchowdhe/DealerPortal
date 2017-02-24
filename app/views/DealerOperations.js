import React, { Component } from 'react';

class DealerOperations extends Component {

    iframe() {
        return {
            __html: '<iframe src="https://www.mycommerce.com/order-search.html" frameborder="0" width="100%" height="100%"></iframe>'
        }
    }
    render() {
        return (
            <div className="wrapper wrapper-content animated fadeInRight">
                <div className="row">
                    <div width="100%" height="100%" dangerouslySetInnerHTML={this.iframe()} />
                </div>
            </div>
        )
    }
}

export default DealerOperations