import "./Home.css";
import {useState} from "react";
import { connect } from "react-redux/es/exports";
import MyForm from "../../features/MyForm";

const mapStateToProps = (state)=>{
  return { users: state.users }

}

function Home(props) {
  return (
    <div className="home">
      <h1>Home</h1>
      <MyForm user={props}/>
    </div>
  );
};

export default connect(mapStateToProps)(Home);
