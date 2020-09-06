import React from 'react';
import styled from 'styled-components'
import NounSet from '../components/NounSet'
import VerbSet from '../components/VerbSet'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.updateState = this.updateState.bind(this)
  }

  updateState(value, set, type){
    this.setState({
      ...this.state,
      [set]: {
        ...this.state[set],
        [type]: value
      }
    })
    console.log('hi', {
      ...this.state,
      [set]: {
        ...this.state[set],
        [type]: value
      }
    })
  }

  render() {
    const {result} = this.state
    return (
      <div>
        <Output>
          {result}
        </Output>
        <NounSet
          nounCase = 'nominativ'
          updateState = {this.updateState}
        />
        <VerbSet
          updateState={this.updateState}
        />
        <NounSet
          nounCase='dativ'
          updateState={this.updateState}
        />
        <NounSet
          nounCase='akkusativ'
          updateState={this.updateState}
        />
        <NounSet
          nounCase='genitiv'
          updateState={this.updateState}
        />
        <Submit
          onClick={() => {
            const nominativSet = this.state.nominativ ? `${this.state.nominativ.article} ${this.state.nominativ.adjective} ${this.state.nominativ.noun}` : ''

            const verbSet = this.state.verbset ? `${this.state.verbset.verb} ${this.state.verbset.adverb}` : ''

            const dativSet = this.state.dativ ? `${this.state.dativ.article} ${this.state.dativ.adjective} ${this.state.dativ.noun}` : ''

            const akkusativSet = this.state.akkusativ ? `${this.state.akkusativ.article} ${this.state.akkusativ.adjective} ${this.state.akkusativ.noun}` : ''

            const genitivSet = this.state.genitiv ? `${this.state.genitiv.article} ${this.state.genitiv.adjective} ${this.state.genitiv.noun}` : ''

            const result = `${nominativSet} ${verbSet} ${dativSet} ${akkusativSet} ${genitivSet}`

            this.setState({
              ...this.state,
              result
            })
          }}
        >
          Submit
        </Submit>
      </div>
    )
  }
}

export default Home;

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

const Submit = styled.div`
  height: 25px;
  width: 75px;
  border: 2px solid #30dbf2;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  cursor: pointer;

  :hover {
    background-color: #30dbf2;
  }
`
