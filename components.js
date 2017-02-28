import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  height: 100%;
  width: 100%;
  overflow: hidden;
  font-family: 'UnifrakturCook', cursive;
  color: #fff;
  min-height: 100%;
`

export const Countdown = styled.h1`
  font-size: 8rem;
  margin: 0;
`

export const Form = styled.form``

export const TextInput = styled.input`
  font-size: 8rem;
  border: 0;
  font-family: 'UnifrakturCook', cursive;
  text-align: center;
  width: 30rem;
`

export const Button = styled.button`
  font-family: 'UnifrakturCook', cursive;
  border: 0px;
  cursor: pointer;
  background: #fcad26;
  color: #fff;
  font-size: 3rem;
  font-weight: 800;
  transition: all 0.3s ease-out;
  padding: 0rem 3rem;

  &:hover {
  }

  &:active {
    transform: translateY(.8rem)
  }
`

export const GoldButton = styled(Button)`
  background: #FFCC77;
  &:hover {
    opacity: 0.8;
  }
`

export const RedButton = styled(Button)`
  background: #FF7777;
  &:hover {
    opacity: 0.8;
  }
`

export const Section = styled.section`
  width: 100%;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const BlackSection = styled(Section)`
  background: #000000;
`

export const RedSection = styled(Section)`
  background: #FF0000;
`

export const GoldSection = styled(Section)`
  background: #FFCC00;
`
