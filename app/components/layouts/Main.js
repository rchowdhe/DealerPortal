import React from 'react';
import Progress from '../common/Progress';
import Navigation from '../common/Navigation';
import Footer from '../common/Footer';
import TopHeader from '../common/TopHeader';
import { correctHeight, detectBody } from './Helpers';

class Main extends React.Component {

    render() {
        const pathname = this.props.location.pathname;
        let wrapperClass = "gray-bg " + pathname;
        if (pathname.indexOf('login') > -1) {
            return (
                <div id="wrapper">
                    <Progress />
                    {this.props.children}
                </div>
            )
        }
        else {
            return (
                <div id="wrapper">
                    <Progress />
                    <Navigation location={this.props.location} />
                    <div id="page-wrapper" className={wrapperClass}>
                        <TopHeader />
                        {this.props.children}
                        <Footer />
                    </div>
                </div>
            )
        }
    }
    componentDidMount() {
        // Run correctHeight function on load and resize window event
        $(window).bind("load resize", function () {
            correctHeight();
            detectBody();
        });
        // Correct height of wrapper after metisMenu animation.
        $('.metismenu a').click(() => {
            setTimeout(() => {
                correctHeight();
            }, 300)
        });
    }
}

export default Main