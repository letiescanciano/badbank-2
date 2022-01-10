import React, { Component } from "react";

function Login () {
    const [show, setShow]             = React.useState(true);
    const [status, setStatus]         = React.useState('');
    const [email, setEmail]           = React.useState('');
    const [password, setPassword]     = React.useState('');
    // const ctx = React.useContext(UserContext);  
    // ctx.users.push(...firstName);
  
    function validate(field, label){
        if (!field) {
          alert ( 'Please fill in the ' + label);
          return false;
        }
        return true;
    }
  
    function handleSubmit(){
      console.log(email, password);
      if (!validate(email,    'email'))    return;
      if (!validate(password, 'password')) return;
      // ctx.users.push({firstName,lastName,email,password,balance:100});
      setShow(false);  
    }    
  
    function clearForm(){
      setEmail('');
      setPassword('');
      setShow(true);
    }

        return (
            <form>
                <h3>Log in</h3>

                <div className="form-group" style={{bg: 'secondary', width: '28rem'}}>
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group" style={{bg: 'secondary', width: '28rem'}}>
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
                <button type="submit" className="btn btn-dark btn-lg btn-block" onClick={handleSubmit}>Sign In</button>
              {/* </>
            ):(
              <>
              <h5>Success</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
              </>
            )} */}
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a></p><br></br>
                <p className="forgot-password text-right">
                    New to BadBank? <a href="http://localhost:3000/createAccount.js#/CreateAccount/">JOIN</a> today!
                </p>
            </form>
        )
        };

export default Login;