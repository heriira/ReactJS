import React, { Component } from "react";

class CardProduct extends Component {
  state = {
    order: 4,
  };

  handlePlus = () => {
    this.setState(
      {
        order: this.state.order + 1,
      },
      () => {
        this.handleCounterChange(this.state.order);
      }
    );
  };

  handleCounterChange = (newValue) => {
    this.props.onCounterChange(newValue);
  };

  handleMinus = () => {
    if (this.state.order > 0) {
      this.setState(
        {
          order: this.state.order - 1,
        },
        () => {
          this.props.onCounterChange(this.state.order);
        }
      );
    }
  };

  render() {
    return (
      <div>
        <div className="card">
          <div className="img-thumb prod">
            <img
              src="https://res.cloudinary.com/dk0z4ums3/image/upload/v1533004929/attached_image/mengolah-daging-sapi-dengan-benar.jpg"
              alt=""
            />
          </div>
          <p className="product-title">Daging Sapi Kualitas Bagus</p>
          <p className="product-price">Rp 210.000</p>
          <div className="counter">
            <button className="minus" onClick={this.handleMinus}>
              -
            </button>
            <input type="text" value={this.state.order} />
            <button className="plus" onClick={this.handlePlus}>
              +
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CardProduct;
