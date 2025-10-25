import { motion } from "framer-motion"
import { styled } from "styled-components"

const FaqContainer = styled(motion.div).attrs({})`
  padding-top: 120px;
  padding-bottom: 120px;
  width: 100%;
  color: white;
  background: rgba(38, 6, 81, 0.9);
  backdrop-filter: blur(20px);
`

const Title = styled(motion.h2).attrs({})`
  font-size: 42px;
  margin-bottom: 40px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  font-family: "Ethnocentric", sans-serif !important;
`

const QuestionContainer = styled(motion.div).attrs({})`
  max-width: 1240px;
  margin: 0 auto;
  margin-bottom: 20px;
  padding-block: 50px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`

const Question = styled(motion.div).attrs({})`
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
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    line-height: 1.2;
  }
`

const Answer = styled(motion.div).attrs<{ $isActive: boolean }>({})<{
  $isActive: boolean
}>`
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

const Arrow = styled(motion.img).attrs<{ $isActive: boolean }>({})<{
  $isActive: boolean
}>`
  transition: all 0.3s ease-in-out;
  height: 24px;
  transform: ${(props) =>
    props.$isActive ? "rotate(180deg)" : "rotate(0deg)"};
`

export { FaqContainer, Title, QuestionContainer, Question, Answer, Arrow }
