const loginForm = () => {
  const str = `
    <div>
      <h3>Login Form</h3>
      <label>Username</label>
      <input type="text" />
      <label>Password</label>
      <input type="password" />
      <p><button onclick="showHome()">Submit</button></p>
      <p><button onclick="registerForm()">Create Account</button></p>
    </div>
  `;
  document.getElementById("root").innerHTML = str;
};

const registerForm = () => {
  const str = `
    <div>
      <h3>Registration Form</h3>
      <label>First Name:</label>
      <input type="text" />
      <label>Last Name:</label>
      <input type="text"/>
      <label>Password</label>
      <input type="password" placeholder="Password"/>
      <p><button onclick="loginForm()">Submit</button></p>
      <p><button onclick="loginForm()">Already a member? Login here...</button></p>
    </div>
  `;
  document.getElementById("root").innerHTML = str;
};

const showHome = () => {
  const str = `
    <div>
      <h3>Welcome</h3>
      <p><button onclick="loginForm()">Logout</button></p>
    </div>
  `;
  document.getElementById("root").innerHTML = str;
};
