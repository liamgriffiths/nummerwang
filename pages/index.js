import React, { Component } from 'react'
import { Container, Countdown, BlackSection, RedSection, GoldSection, TextInput, Form, GoldButton, RedButton } from '../components'
import { wait, random, say } from '../utils'

const ONE_SECOND = 1000

export default class Main extends Component {
  state = {
    time: 60 * ONE_SECOND,
    playing: false,
    number: '',
    guess: '',
    correct: [],
    incorrect: [],
    score: null
  }

  static InputForm = ({ onSubmit, value, onChange }) => (
    <Form onSubmit={onSubmit}>
      <TextInput value={value} onChange={onChange} />
    </Form>
  )

  start = async () => {
    this.setState({ playing: true, number: random() }, this.sayNumber)
    const score = await this.tick()
    this.setState({ playing: false, score })
  }

  tick = async () => {
    await wait(ONE_SECOND)
    this.setState({ time: this.state.time - ONE_SECOND })
    if (this.state.time > 0) {
      return await this.tick()
    } else {
      const correct = this.state.correct.length
      const total = correct + this.state.incorrect.length
      return Promise.resolve(`${correct}/${total}`)
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { number, guess, correct, incorrect } = this.state
    const newState = { number: random(), guess: '' }

    if (+guess === +number) {
      say('wunderbar')
      this.setState({ ...newState, correct: [number, ...correct] }, this.sayNumber)
    } else {
      say('scheisse')
      this.setState({ ...newState, incorrect: [number, ...incorrect] }, this.sayNumber)
    }
  }

  handleChange = (e) => {
    this.setState({ guess: e.target.value.trim() })
  }

  sayNumber = () => say(this.state.number)

  render() {
    const { InputForm } = Main
    const { playing, time, number, score } = this.state
    const timeLeft = time / ONE_SECOND

    return (
      <Container>
        <BlackSection>
          { playing && <Countdown>{timeLeft}</Countdown> }
        </BlackSection>
        <RedSection>
          { playing && <InputForm onChange={this.handleChange} onSubmit={this.handleSubmit} value={this.state.guess} /> }
          { !playing && !score && <RedButton onClick={this.start}>Start</RedButton> }
          { !playing && score && <Countdown>{score}</Countdown> }
        </RedSection>
        <GoldSection>
          { playing && <GoldButton onClick={this.sayNumber}>Sprechen</GoldButton> }
        </GoldSection>
      </Container>
    )
  }
}
