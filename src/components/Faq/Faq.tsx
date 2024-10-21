import { useState } from "react"
import { styled } from "styled-components"
import faqData from "../../data/faqData.json"
import arrowDown from "../../img/music-festival/arrow-down.png"

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
              src={arrowDown}
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
  font-size: 42px;
  margin-bottom: 40px;
  letter-spacing: 0.1em;
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
  height: ${(props) => (props.$isActive ? "auto" : "0")};
  display: ${(props) => (props.$isActive ? "block" : "none")};
  opacity: ${(props) => (props.$isActive ? "1" : "0")};
  overflow: hidden;
  transition:
    height 0.3s ease-in-out,
    opacity 0.3s ease-in-out;
  color: white;
  text-align: justify;
  padding: 24px;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.8);
`

const Arrow = styled.img<{ $isActive: boolean }>`
  transition: all 0.3s ease-in-out;
  height: 24px;
  transform: ${(props) =>
    props.$isActive ? "rotate(180deg)" : "rotate(0deg)"};
`

export { Faq }
