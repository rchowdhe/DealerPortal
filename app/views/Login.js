import React, { Component } from 'react';

class Login extends Component {

    onLogin() {
        this.context.router.replace('/main');
    }
    render() {
        return (
            <div className="middle-box text-center loginscreen animated fadeInDown">
                <div>
                    <div>
                        <div className="logo-name"><img src="img/STERIS-Logo.png" width="100%" /></ div>
                    </div>
                    <h3>Welcome to DEALER PORTAL</h3>
                    <p>Login in. To manage dealer operations.</p>
                    <form onSubmit={this.onLogin.bind(this)} className="m-t" role="form">
                        <div className="form-group">
                            <input type="email" className="form-control" placeholder="Email" required="" />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Password" required="" />
                        </div>
                        <button type="submit" className="btn btn-primary block full-width m-b">Login</button>

                        <a href="#"><small>Forgot password?</small></a>
                        <p className="text-muted text-center"><small>Do not have an account?</small></p>
                    </form>
                    <p className="m-t"> <small>Inspinia we app framework base on Bootstrap 3 &copy; 2014</small> </p>
                </div>
            </div>
        )
    }

}
Login.contextTypes = {
    router: React.PropTypes.object.isRequired
};
export default Login