import { useState } from "react"
import { styled } from "styled-components"
import faqData from "../../data/faqData.json"
import arrowDown from "../../img/music-festival/arrow-down.png"
import arrowUp from "../../img/music-festival/arrow-up.png"

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
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
              $isActive={activeIndex === index}
            />
          </Question>
          <Answer $isActive={activeIndex === index}>{item.answer}</Answer>
        </QuestionContainer>
      ))}
    </FaqContainer>
  )
}

const FaqContainer = styled.div`
  margin-top: 120px;
  width: 100%;
  color: white;
`

const Title = styled.h2`
  width: 30%;
  font-size: 36px;
  margin-bottom: 40px;
  text-transform: uppercase;
  font-weight: bold;
  font-family: "Inter", sans-serif !important;
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
  align-items: center;
  padding: 20px;
  font-size: 18px;
  color: white;
`

const Answer = styled.div<{ $isActive: boolean }>`
  max-height: ${(props) => (props.$isActive ? "1000px" : "0")};
  overflow: hidden;
  transition:
    max-height 0.3s ease-in-out,
    padding 0.3s ease-in-out;
  color: white;
  text-align: justify;
  padding: ${(props) => (props.$isActive ? "24px" : "0")};
  font-size: 16px;
  color: rgba(255, 255, 255, 0.8);
`

const Arrow = styled.img<{ $isActive: boolean }>`
  transition: transform 0.3s ease-in-out;
  transform: ${(props) => (props.$isActive ? "rotate(180deg)" : "rotate(0)")};
`

export { Faq }
