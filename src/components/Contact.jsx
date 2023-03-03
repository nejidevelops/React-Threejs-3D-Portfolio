import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 50px;
  height: 100%;
  width: 100%;
`
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Title = styled.h1`
  font-weight: 200;
`
const Form = styled.form`
  width: 580px;
  display: flex;
  flex-direction: column;
  gap: 25px;

`
const Input = styled.input`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
`
const TextArea = styled.textarea`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
`
const Button = styled.button`
  background-color: #da4ea2;
   color: white;
   border: none;
   font-weight: bold;
   cursor: pointer;
   border-radius: 5px;
   padding: 20px;
`
const Right = styled.div`
  flex: 1;
`
const Contact = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Form>
            <Title>Contact Us</Title>
            <Input placeholder='Enter your Name' />
            <Input placeholder='Enter your Email' />
            <TextArea placeholder='Write your message' />
            <Button>Send</Button>
          </Form>
        </Left>
        <Right></Right>
      </Container>
    </Section>
  )
}

export default Contact