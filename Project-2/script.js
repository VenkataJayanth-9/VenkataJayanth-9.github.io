const users = [];
const user = {};



const loginForm = () => {
    const str = `
    <h3>Login Form</h3>
    <p><input type="text" placeholder="username" id="formName"/></p>
    <p><input type="password" placeholder="password" id="formPassword"/></p>
    <p><button type="button" onclick="validationForm()">Login</button></p>
    <p><button type="button" onclick="createAccount()">Sign Up</button></p>
    `;
    root.innerHTML = str
};

const createAccount = () => {
    const str = `
    <h3>Sign Up</h3>
    <p><input type="text" placeholder="First Name" id="createFirstName"/></p>
    <p><input type="text" placeholder="Last Name" id="createLastName"/></p>
    <p><input type="password" placeholder="password" id="createPassword"/></p>
    <p><button type="submit" onclick>Sign Up</button></p>
    <p><button type="button" onClick='loginForm()'>Go back to login page</p>
    `;
    root.innerHTML = str
}

