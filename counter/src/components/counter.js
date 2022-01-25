import React from "react";

class Counter extends React.Component {

  render() {
    return (
      <div className="container-fluid d-flex align-items-center justify-content-center">
        <div className="box shadow p-4  d-flex align-items-center justify-content-center">
          <button
            className="btn btn-outline-danger "
            onClick={this.props.substract}
          >
            -
          </button>
          <div className="d-flex">
            <h1 className="d-inline-flex mx-4">Counter : </h1>
            <h2 className="d-inline-flex mx-4 ">{this.props.count}</h2>
          </div>
          <button
            className="btn btn-outline-success"
            onClick={this.props.increment}> 
            +
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;