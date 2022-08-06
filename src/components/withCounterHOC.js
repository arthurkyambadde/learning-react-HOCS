import React from "react";

const withCounter = function (originalComponent) {
  class enhancedComponet extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    }

    increaseCounter() {
      this.setState((previousState) => {
        return {
          count: previousState.count + 1,
        };
      });
    }

    deccreaseCounter() {
      this.setState((previousState) => {
        return {
          count: previousState.count - 1,
        };
      });
    }

    render() {
      return <originalComponent />;
    }
  }
  return enhancedComponet;
};
