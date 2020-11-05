import React from "react";
import loginImg from "../../login.svg";

export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: {},
            errors: {}
        }

        this.handleChange = this.handleChange.bind(this);
        this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
        this.handleFormReset = this.handleFormReset.bind(this);

    }
    handleChange(e) {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
            fields
        });

    }

    submituserRegistrationForm(e) {
        e.preventDefault();
        // console.log(e);
        console.log(this.state.fields);

        if (this.validateForm()) {
            let fields = {};
            fields["username"] = "";
            fields["password"] = "";
            this.setState({ fields: fields });


        }

    }

    handleFormReset() {
        let fields = {};
        fields["username"] = "";
        fields["password"] = "";
        this.setState({ fields: fields });
    }

    validateForm() {

        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if (!fields["username"]) {
            formIsValid = false;
            errors["username"] = "*Please enter your username.";
        }

        // if (typeof fields["username"] !== "undefined") {
        //     if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
        //         formIsValid = false;
        //         errors["username"] = "*Please enter alphabet characters only.";
        //     }
        // }


        if (!fields["password"]) {
            formIsValid = false;
            errors["password"] = "*Please enter your password.";
        }

        // if (typeof fields["password"] !== "undefined") {
        //     if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
        //         formIsValid = false;
        //         errors["password"] = "*Please enter secure and strong password.";
        //     }
        // }

        this.setState({
            errors: errors
        });
        return formIsValid;


    }


    render() {
        return (
            <form method="post" name="userRegistrationForm" onSubmit={this.submituserRegistrationForm} onReset={this.handleFormReset}>
                <div className="base-container">
                    <div className="header">Login</div>
                    <div className="content">
                        <div className="image">
                            <img alt="" src={loginImg} />
                        </div>

                        <div className="form">
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input type="text" className="mb-0 mt-2" name="username" value={this.state.fields.username || ''} onChange={this.handleChange} placeholder="Name" />
                                <div className="errorMsg mr-0 mt-0 ml-0">{this.state.errors.username}</div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input name="password" className="mb-0 mt-2" value={this.state.fields.password || ''} onChange={this.handleChange} placeholder="Password" />
                                <div className="errorMsg mr-0 mt-0 ml-0" >{this.state.errors.password}</div>
                            </div>
                        </div>
                    </div>
                    <div className="footer">
                        <button type="submit" className="btn">
                            Login
          </button>&nbsp;&nbsp;&nbsp;
                        <button type="reset" onClick={this.handleFormReset} className="btn">
                            Reset
          </button>
                    </div>
                </div>
            </form >
        );
    }
}