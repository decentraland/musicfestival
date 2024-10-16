import { useState } from "react"
import { styled } from "styled-components"
import faqData from "../../data/faqData.json"
import arrowDown from "../../img/music-festival/arrow-down.png"
import arrowUp from "../../img/music-festival/arrow-up.png"

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleAnswer = (index: number) => {
    console.log("Clicked question index:", index)
    setActiveIndex(activeIndex === index ? null : index)
    console.log("Active index after toggle:", activeIndex)
  }

  return (
    <FaqContainer id="faq">
      <Title>Frequently Asked Questions</Title>
      {faqData.map((item, index) => (
        <QuestionContainer key={index}>
          <Question onClick={() => toggleAnswer(index)}>
            {item.question}
            <Arrow
              src={activeIndex === index ? arrowUp : arrowDown}
              alt="arrow"
            />
          </Question>
          {activeIndex === index && <Answer>{item.answer}</Answer>}
        </QuestionContainer>
      ))}
    </FaqContainer>
  )
}

const FaqContainer = styled.div`
  margin-top: 150px;
  height: 100vh;
  width: 100%;
  padding: 40px;
  color: white;
`

const Title = styled.h2`
  width: 30%;
  font-size: 36px;
  margin-bottom: 40px;
  text-transform: uppercase;
  font-weight: bold;
`

const QuestionContainer = styled.div`
  margin-bottom: 20px;
  border-bottom: 1px solid #00bfff;
`

const Question = styled.div`
  cursor: pointer;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  font-size: 18px;
  color: white;
`

const Answer = styled.div`
  padding: 20px;
  background-color: #333;
  color: white;
  font-size: 16px;
`

const Arrow = styled.img`
  width: 20px;
  height: 62px;
`
export { Faq }
