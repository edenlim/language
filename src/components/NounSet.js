import React from 'react';
import styled from 'styled-components'

class NounSet extends React.Component {
  render() {
    const {nounCase,updateState} = this.props
    return (
      <div>
        <p>{nounCase}: </p>
        <div>
          {'Article: '}
          <Input
            onChange={(e) => {
              updateState(
                e.target.value,
                nounCase,
                'article'
              )
            }}
          />
        </div>

        <div>
          {'Adjective: '}
          <Input
            onChange={(e) => {
              updateState(
                e.target.value,
                nounCase,
                'adjective'
              )
            }}
          />
        </div>

        <div>
          {'Noun: '}
          <Input
            onChange={(e) => {
              updateState(
                e.target.value,
                nounCase,
                'noun'
              )
            }}
          />
        </div>
      </div>
    )
  }
}

export default NounSet;

const Output = styled.div`
  height: 5vh;
  width: 80vw;
  border: 4px solid black;
  margin: 20vh auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
`

const Input = styled.input`
  height: 2vh;
  margin: 0 auto;
`
