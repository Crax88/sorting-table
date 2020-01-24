import React, { useState } from "react";
import style from "./addForm.module.css";
import { connect } from "react-redux";
import { addNewData } from "../../store/dataReducer";

const AddForm = props => {
  const [state, setstate] = useState({});

  const handleChange = e => {
    setstate({ ...state, [e.target.name]: e.target.value });
    console.log(state);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const fields = [
      "firstName",
      "lastName",
      "email",
      "phone",
      "streetAddress",
      "city",
      "state",
      "zip"
    ];
    fields.forEach(field => {
      if (!state[field] || state[field] === "") {
        setstate({ ...state, error: `Please fill in ${field} field` });
      }
    });
    if (!state.error) {
      //   setstate({
      //     ...state,
      //     id: Math.floor(Math.random() * (5000 - 1000)) + 1000
      //   });
      props.addNewData(state);
      props.openHandler(false);
    }
  };
  return (
    <div className={style.wrapper}>
      <div className={style.row}>
        <div className={style.container}>
          {state.error && <p>{state.error}</p>}
          <form onSubmit={e => handleSubmit(e)}>
            <div className={style.row}>
              <div className={style.col50}>
                <h3>Add Client</h3>
                <label htmlFor="fname">First Name</label>
                <input
                  type="text"
                  id="fname"
                  name="firstName"
                  onChange={e => handleChange(e)}
                ></input>
                <label htmlFor="lname">Last Name</label>
                <input
                  type="text"
                  id="lname"
                  name="lastName"
                  onChange={e => handleChange(e)}
                ></input>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={e => handleChange(e)}
                ></input>
                <label htmlFor="phone">Phome number</label>
                <input
                  placeholder="(000)000-0000"
                  type="tel"
                  id="phone"
                  name="phone"
                  onChange={e => handleChange(e)}
                ></input>
              </div>
              <div className={style.col50}>
                <h3>Address</h3>
                <label htmlFor="address">Street Address</label>
                <input
                  type="text"
                  id="address"
                  name="streetAddress"
                  onChange={e => handleChange(e)}
                ></input>
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  onChange={e => handleChange(e)}
                ></input>
                <label htmlFor="state">state</label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  onChange={e => handleChange(e)}
                ></input>
                <label htmlFor="zip">ZIP</label>
                <input
                  type="text"
                  id="zip"
                  name="zip"
                  onChange={e => handleChange(e)}
                ></input>
              </div>
            </div>
            <input type="submit" value="Submit" className={style.btn}></input>
            <button
              type="submit"
              className={style.cancel}
              onClick={() => props.openHandler(false)}
            >
              Close
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { addNewData })(AddForm);
