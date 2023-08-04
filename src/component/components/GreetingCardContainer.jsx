import React, { PureComponent } from 'react'
import GreetingCardComponent from './GreetingCardComponent'
import "../style/index.scss"

export default class GreetingCardContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
          imageFile: "",
          title: "",
          name: "",
          content: "",
          showCard: false,
          showForm: true,
          error:"",
        };
      }
      handleChange = (e) => {
   
      const { name, value, type } = e.target;
      if (type === "file") {
        this.setState({
          [name]: e.target.files[0],
        });
      } else {
        this.setState({
          [name]: value,
        });
      }
    };
    
      handleSubmit = (e) => {
        const { title, name,content, imageFile} = this.state;
        e.preventDefault();
        if ( imageFile!==null||title.trim() === "" || content.trim() === "" ||name.trim() === "") {
          this.setState({
            error: "Please enter the required fields",
          });
          return;
        }
        this.setState({
          showForm: false,
          showCard: true,
          error: '',
        });
    
      };
      handleBack = (e) => {
        this.setState({
          imageFile:null,
          title: "",
          name: "",
          content: "",
          showCard: false,
          showForm: true,
          error:""
        });
        e.preventDefault();
      };
  render() {

    return (
      <div>
        <GreetingCardComponent
         {...this.state}
         handleSubmit={this.handleSubmit}
         handleBack={this.handleBack}
         updateState={this.handleChange}
         />
      </div>
    )
  }
}
