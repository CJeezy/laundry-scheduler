import React, { useState } from 'react';
import LoginForm from './components/LoginForm'
import {DateTimePickerComponent} from '@syncfusion/ej2-react-calendars';


function App() {

  //THIS SHOULD BE CHANGED TO VALUES INSIDE DATABASE
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123"
  }
  //DATABASE SHOULD HOLD ALL USER INFO
  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);

    //THIS SHOULD BE CHANGED TO VALUES INSIDE DATABASE
    if(details.email === adminUser.email && details.password === adminUser.password){
      console.log("Logged In")
      
      setUser({
        name: details.name,
        email: details.email
      });
    }else{
      console.log("Incorrect username or password")
      setError("Incorrect username or password!")
    }
  }

  const Logout = () => {
    console.log("Logout");

    setUser({
      name: "",
      email: ""
    });
  }

  return (
    <div className="Login">
      {(user.email !== "") ? (
        <div className="welcome">
          <h2>Welcome, <span>{user.name}</span></h2>
          <div className="buttons">
            <button>Add Reservation</button>
            {/* DATE AND TIME PICKER */}

            <div>
      <DateTimePickerComponent placeholder="Choose a date and time"
      value={dateValue}
      min={minDate}
      max={maxDate}
      format="dd-MMM-yy HH:mm"
      step={60}></DateTimePickerComponent>
    </div>


            <div class="divider"/>
            <button>Delete Reservation</button>
            <div class="divider"/>
            <button onClick={Logout}>Logout</button>
          </div>
        </div>
      ) : (
        <LoginForm Login={Login} error={error}/>
      )}
    </div>
  );
}

export default App;
