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
        this.setState({ showCard: true, showForm: false });
        e.preventDefault();
      };
      handleBack = (e) => {
        this.setState({
          imageFile:null,
          title: "",
          name: "",
          content: "",
          showCard: false,
          showForm: true,
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
