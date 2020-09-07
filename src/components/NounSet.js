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
          <select name="article"
            onChange={(e) => {
              updateState(
                e.target.value,
                nounCase,
                'article'
              )
            }}
          >
            <option value=''>None</option>
            <option value="definite">Definite</option>
            <option value="indefinite">Indefinite</option>
            <option value="negative">Negative</option>
          </select>
          {/* <Input
            onChange={(e) => {
              updateState(
                e.target.value,
                nounCase,
                'article'
              )
            }}
          /> */}
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

        <div
          onClick={(e) => {
            updateState(
              e.target.value,
              nounCase,
              'gender'
            )
          }}
        >
          <input type="radio" id="male" name="gender" value="male" />
          <label>Male</label>
          <input type="radio" id="female" name="gender" value="female" />
          <label>Female</label>
          <input type="radio" id="neutral" name="gender" value="neutral" />
          <label>Neutral</label>
        </div>
      </div>
    )
  }
}

export default NounSet;

const Input = styled.input`
  height: 2vh;
  margin: 0 auto;
`
