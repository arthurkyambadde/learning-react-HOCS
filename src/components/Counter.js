import React from "react";
import withCounter from "./withCounterHOC";
import styled from "styled-components";

const CounterContainer = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  flex-direction: row;
  border: 3px solid #432345;
  padding: 50px;
  border-radius: 8px;
`;

const CounterButton = styled.button`
  box-shadow: inset 0px 1px 0px 0px #dcecfb;
  background: linear-gradient(to bottom, #bddbfa 5%, #80b5ea 100%);
  background-color: #bddbfa;
  border-radius: 6px;
  border: 1px solid #84bbf3;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  width: 200px;
  font-family: Arial;
  font-size: 36px;
  font-weight: bold;
  padding: 6px 24px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #528ecc;

  &:hover {
    background: linear-gradient(to bottom, #80b5ea 5%, #bddbfa 100%);
    background-color: #80b5ea;
  }

  &:active {
    position: relative;
    top: 1px;
  }
`;

const CounterDisplay = styled.span`
  color: #346;
  font-size: 24px;
  font-weight: 700;
`;

class Counter extends React.Component {
  render() {
    const { count, increaseCounter, decreaseCounter } = this.props;

    return (
      <CounterContainer>
        <CounterButton onClick={decreaseCounter}>-</CounterButton>
        <CounterDisplay>Counter: {count} </CounterDisplay>
        <CounterButton onClick={increaseCounter}>+</CounterButton>
      </CounterContainer>
    );
  }
}

export default withCounter(Counter);
