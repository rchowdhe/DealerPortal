import React, { Component } from 'react';

class Login extends Component {

    onLogin() {
        var values = {
            username: this.refs.username.value,
            password: this.refs.password.value
        }
        localStorage.setItem('username', values.username);
        if (values.username == 'Rajiv' || values.username == 'Jai' || values.username == 'Vikarsh' || values.username == 'Admin') {
            if (values.password == values.username) {
                this.context.router.replace('/main');
            }
            else {
                alert('Username or password are incorrect');
            }
        }
        else {
            alert('Username is not registered yet, Please signup for login');
        }
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
                            <input ref="username" type="username" className="form-control" placeholder="username" required="" />
                        </div>
                        <div className="form-group">
                            <input ref="password" type="password" className="form-control" placeholder="Password" required="" />
                        </div>
                        <button type="submit" className="btn btn-primary block full-width m-b">Login</button>
                        <a href="#"><small>Forgot password?</small></a>
                    </form>
                    <p className="m-t"> <small><strong>Copyright</strong> STERIS corporation &copy; 2015-2017</small> </p>
                </div>
            </div>
        )
    }

}
Login.contextTypes = {
    router: React.PropTypes.object.isRequired
};
export default Login