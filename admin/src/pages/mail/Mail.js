import {
    CalendarToday,
    LocationSearching,
    MailOutline,
    PermIdentity,
    PhoneAndroid,
    Publish,
  } from "@material-ui/icons";
  import { Link, useHistory } from "react-router-dom";
  import "./mail.css";
  import { useLocation } from "react-router-dom";
  import { useState } from "react";
  import { useDispatch, useSelector } from "react-redux";
  import { updateUsers } from "../../redux/apiCalls";
  import Spinner from "../../components/Spinner/Spinner";
  
  export default function Mail() {
    const [inputs, setInputs] = useState();
  
    const handleChange = (e) => {
      setInputs((prev) => {
        return { ...prev, [e.target.name]: e.target.value };
      });

      console.log(inputs)
    };
  
    const handleClick =  (e)  => {
      e.preventDefault();
    };
  
    return (
      <div className="user">
        <div className="userTitleContainer">
          <h1 className="userTitle">Send NewsLetter</h1>
        </div>
        <div className="userContainer">
          <div className="userUpdate">
            <span className="userUpdateTitle">Email</span>
            <form className="userUpdateForm">
              <div className="userUpdateLeft">
                <div className="userUpdateItem">
                  <label>Subject</label>
                  <input
                    type="text"
                    placeholder=""
                    name="subject"
                    onChange={handleChange}
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Email</label>
                  <textarea
                    type="text"
                    placeholder=""
                    name="email"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="userUpdateRight">
                <div className="userUpdateUpload"></div>
                <button className="userUpdateButton" onClick={handleClick}>Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
  