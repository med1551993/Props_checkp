import React from "react";
import PropTypes from "prop-types";
import { hover } from "@testing-library/user-event/dist/hover";

const Profile = (props) => {
    
    const styleObject = {color : '#fcfc', textAlign: 'center', border: '7px solid transparent', borderRadius:'10px',
                         backgroundColor: '#191919', width: '600px', margin:'120px auto'}

    const styleButton = {color : 'white', fontSize:'30px', backgroundColor: '#F9004D', border: 'transparent',
                         borderRadius:'10px', cursor:hover='pointer'}
    return(
        <div style = {styleObject}>
        {props.children}
        <br/>
        <button  onClick = {() => props.handleName(props.fullName)} style = {styleButton} > click me 🤔 !!! </button>        
        <h2> - Bio: {props.bio} </h2>
        <h2> - Profession: {props.profession} </h2>
        </div>
    );
};

Profile.defaultProps = {
    fulName: "jradim",
    bio: "Eng",
    profession: 'student'
};

Profile.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
    handleName: PropTypes.func
   };

 export default Profile;  
