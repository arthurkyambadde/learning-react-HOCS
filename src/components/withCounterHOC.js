import React from "react";

const withCounter = function (OriginalComponent) {
  class enhancedComponet extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    }

    increaseCounter = () => {
      this.setState((previousState) => {
        return {
          count: previousState.count + 1,
        };
      });
    };

    deccreaseCounter = () => {
      this.setState((previousState) => {
        return {
          count: previousState.count - 1,
        };
      });
    };

    render() {
      return (
        <OriginalComponent
          count={this.state.count}
          increaseCounter={this.increaseCounter}
          decreaseCounter={this.deccreaseCounter}
        />
      );
    }
  }
  return enhancedComponet;
};

export default withCounter;
