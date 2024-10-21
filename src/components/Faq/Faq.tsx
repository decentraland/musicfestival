import { useState } from "react"
import { styled } from "styled-components"
import { questions } from "../../data/faqData.jsx"
import arrowDown from "../../img/music-festival/arrow-down.png"

type Question = {
  question: string
  answer: () => React.ReactNode
}

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <FaqContainer id="faq">
      <Title>Frequently Asked Questions</Title>
      {questions.map((item: Question, index: number) => (
        <QuestionContainer key={index}>
          <Question onClick={() => toggleAnswer(index)}>
            <p>{item.question}</p>
            <Arrow
              src={arrowDown}
              alt="arrow"
              $isActive={activeIndex === index}
            />
          </Question>
          <Answer $isActive={activeIndex === index}>{item.answer()}</Answer>
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
  padding-block: 50px;
  border-bottom: 1px solid #00bfff;
`

const Question = styled.div`
  cursor: pointer;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  color: white;

  p {
    font-family: "Inter", sans-serif !important;
    max-width: 500px;
    font-size: 22px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    line-height: 1.2;
  }
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
  margin-top: 20px;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.8);

  a {
    background: linear-gradient(90deg, #56a7ff, #fb01ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

const Arrow = styled.img<{ $isActive: boolean }>`
  transition: all 0.3s ease-in-out;
  height: 24px;
  transform: ${(props) =>
    props.$isActive ? "rotate(180deg)" : "rotate(0deg)"};
`

export { Faq }
