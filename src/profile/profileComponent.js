import PropTypes from 'prop-types';
import React from 'react';

export default class Profile extends React.Component {
    
    constructor(props) {
      super(props);
    }
    
    render() {
        console.log(this.props.image)
        const styleName={color:"red", padding: "10px",
        fontFamily: "Arial",fontSize: 50}
        const styleBio={padding: "10px",
        fontFamily: "Arial",fontSize: 40}
        const styleBtn={backgroundColor: "#4CAF50",
        border: "none",
        color: "white",
        padding: 15,
        textAlign: "center",
        textDecoration: "none",
        fontSize: 30,}
        const styleImage={width:100, height:100}
        return (
        <div>
       <img style={styleImage} src={this.props.img}/>
       <h1 style={styleName}>{this.props.FullName}</h1>
        <h2 style={styleBio}>{this.props.bio}</h2>
        <h3>{this.props.profession}</h3>
        <button style={styleBtn} onClick={()=> this.props.alertMyinput("the user name is Yasmine")}>Click me</button>
          </div>
      );
    }
    
    }
    Profile.propTypes={
        FullName:PropTypes.string
  };



