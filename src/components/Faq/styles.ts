import { motion } from "framer-motion"
import { styled } from "styled-components"

const FaqSection = styled(motion.section).attrs({})`
  width: 100%;
  background: rgba(38, 6, 81, 0.9);
  backdrop-filter: blur(20px);
  padding: 120px 0;

  @media (max-width: 768px) {
    padding-left: 24px;
    padding-right: 24px;
  }
`

const FaqContainer = styled(motion.div).attrs({})`
  width: 100%;
  color: white;
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
  max-width: 900px;
  margin: 0 auto;
  margin-bottom: 20px;
  padding-block: 50px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);

  @media (max-width: 768px) {
    padding-block: 30px;
  }
`

const Question = styled(motion.div).attrs({})`
  cursor: pointer;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  color: white;

  p {
    font-family: "Inter", sans-serif !important;
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: 0;
    line-height: 1.2;
  }

  @media (max-width: 768px) {
    p {
      font-size: 12px;
    }
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
  p {
    font-size: 16px;
    color: rgba(255, 255, 255, 0.8);
    font-weight: 500;

    a {
      text-decoration: underline;
      color: white;
    }
  }
`

const Arrow = styled(motion.img).attrs<{ $isActive: boolean }>({})<{
  $isActive: boolean
}>`
  transition: all 0.3s ease-in-out;
  height: 24px;
  transform: ${(props) =>
    props.$isActive ? "rotate(0deg)" : "rotate(180deg)"};
`

export {
  FaqSection,
  FaqContainer,
  Title,
  QuestionContainer,
  Question,
  Answer,
  Arrow,
}
