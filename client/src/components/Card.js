
import React, { Component } from "react";
//import Popup from "reactjs-popup";
import './Card.css'

class Card extends Component {
    
    handleClick = () => {
      this.props.closew();
    };

    render() {
      return (
        <div className = "card-container">
            <div className = "card-model">
              
                  <span className="closewindow" onClick={this.handleClick}>
                    &times;
                  </span>
             
                  <div className = "card-content">
                      <div className = 'card-img'>
                          <img alt = {this.props.eng} src={this.props.img} width = "200" height="200"/>
                      </div>

                      <div className = 'card-eng'>
                          {this.props.practice?  null:<font color = "white">{this.props.eng}</font> }
                      </div>
                  </div>

             
                  <div className = "bottoms">
                      <div className = "bottm-prev"> 
                          <button className="b1" onClick={() => this.props.prevCard()}>
                            Prev
                          </button>
                      </div>

             
                      <div className = "bottom-next">
                          <button className="b2" onClick={() => this.props.nextCard()}>
                            Next
                          </button>
                      </div>
                  </div>

              </div> 
           </div> 
        );
    }
}

export default Card;

