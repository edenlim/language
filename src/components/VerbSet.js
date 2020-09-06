import React from 'react';
import styled from 'styled-components'

class VerbSet extends React.Component {
  render() {
    const { updateState } = this.props
    return (
      <div>
        <p>Verb Set: </p>
        <div>
          {'Verb: '}
          <Input
            onChange={(e) => {
              updateState(
                e.target.value,
                'verbset',
                'verb'
              )
            }}
          />
        </div>

        <div>
          {'Adverb: '}
          <Input
            onChange={(e) => {
              updateState(
                e.target.value,
                'verbset',
                'adverb'
              )
            }}
          />
        </div>
      </div>
    )
  }
}

export default VerbSet;

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
