import { memo, useState } from "react"
import {
  Answer,
  Arrow,
  FaqContainer,
  FaqSection,
  Question,
  QuestionContainer,
  Title,
} from "./styles"
import arrowDown from "../../img/icons/arrow-up-s-line.svg"

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
    <FaqSection id="faq">
      <FaqContainer>
        <Title>FAQs</Title>
        {[
          {
            question: "What is Decentraland?",
            answer: () => (
              <p>
                Decentraland is a social virtual world where you can connect,
                explore, and create.
              </p>
            ),
          },
          {
            question:
              "How do I access the SUB/STREAM Music Festival in Decentraland?",
            answer: () => (
              <p>
                The SUB/STREAM Music Festival takes place November 19-22 inside
                Decentraland. On those dates, a &lsquo;Jump In&rsquo; button
                will appear on this page—just click it to enter, provided
                you&apos;ve already downloaded Decentraland. Download ahead of
                time so you&apos;re ready.
              </p>
            ),
          },
          {
            question: "Do I need a headset to join?",
            answer: () => (
              <p>
                No—Decentraland runs on desktop. Just download, log in, and
                you&apos;re ready to party as your avatar.
              </p>
            ),
          },
          {
            question: "Do I need cryptocurrency or a wallet?",
            answer: () => (
              <p>
                No. You can sign up with just an email. If you want to buy
                Wearables or other items later, you can use crypto, card, or
                bank transfer—your choice.
              </p>
            ),
          },
          {
            question: "When will the full lineup and schedule be available?",
            answer: () => (
              <p>
                The full schedule will be released in early November, giving you
                time to plan your festival experience.
              </p>
            ),
          },
          {
            question: "How do I keep up to date?",
            answer: () => (
              <p>
                Follow{" "}
                <a
                  href="https://twitter.com/decentraland"
                  target="_blank"
                  rel="noreferrer"
                >
                  @Decentraland
                </a>{" "}
                and check out our own on Decentraland Events for live updates.
                You can also subscribe to{" "}
                <a
                  href="https://decentraland.beehiiv.com/?utm_org=dcl&utm_source=decentraland&utm_medium=musiclanding&utm_campaign=musicfestival24"
                  target="_blank"
                  rel="noreferrer"
                >
                  Decentraland&apos;s weekly newsletter
                </a>{" "}
                for all of the latest news.
              </p>
            ),
          },
        ].map((item: Question, index: number) => (
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
    </FaqSection>
  )
}

memo(Faq)
export { Faq }
