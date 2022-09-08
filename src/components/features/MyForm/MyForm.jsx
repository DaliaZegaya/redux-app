import "./MyForm.css";
import React, { useState } from "react";
import { connect } from "react-redux/es/exports";
import { addUser } from "../../../store/actions/usersActions";

// const mapStateToProps = (state)=>{
//   return { users: state.users }

// }

const mapDispatchToProps = (dispatch)=> ({
  addNewUser: (userObj) => dispatch(addUser(userObj))

})

function MyForm(props) {
  const [user, setUser] = useState({})
  const changeInput = (e)=>{
    user[e.target.name] = e.target.value
  }
  return (
    <div className="my-form">
    <h1>My-Form</h1>
    <label htmlFor="">First name:</label>
    <input name="fName" onChange={changeInput} type="text" />
    <br />
    <label htmlFor="">Last name:</label>
    <input name="lName" onChange={changeInput} type="text" />
    <br />
    <label htmlFor="">Age:</label>
    <input name="age" onChange={changeInput} type="number" />
    <br />
    <label htmlFor="">Email:</label>
    <input name="email" onChange={changeInput} type="email" />
    <br />
    <button onClick={() => props.addNewUser(user)}>ADD</button>
  </div>
  );
};

export default connect(null,mapDispatchToProps)(MyForm);
