import { memo, useState } from "react"
import { styled } from "styled-components"
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
      {[
        {
          question: "What is Decentraland?",
          answer: () => (
            <p>
              Decentraland is a community-driven virtual world where you can
              connect, explore, and create.
            </p>
          ),
        },
        {
          question: "How do I access the music festival?",
          answer: () => (
            <p>
              The Decentraland Music Festival will be taking place in
              Decentraland&apos;s Music Festival Plaza. Download the{" "}
              <a
                href="https://decentraland.org/download?utm_source=decentraland&utm_medium=musiclanding&utm_campaign=musicfestival24"
                target="_blank"
                rel="noreferrer"
              >
                Desktop Client
              </a>{" "}
              to get started.
              <br />
              <br />
              Easily attend any festival event by clicking the Jump In link.
              This will take you in-world where you can explore as your avatar.
            </p>
          ),
        },
        {
          question:
            "Where can I find special Wearables and Emotes for my avatar?",
          answer: () => (
            <p>
              There are many free Wearables and Emotes throughout the festival
              grounds. You will find them in special dispensing machines. Click
              the button on each machine to claim yours. Have fun exploring!
              <br />
              <br />
              To customize your digital identity beyond the free Wearables and
              Emotes, you can explore hundreds of unique community-made items in
              the{" "}
              <a
                href="https://decentraland.org/marketplace/?utm_source=decentraland&utm_medium=musiclanding&utm_campaign=musicfestival24"
                target="_blank"
                rel="noreferrer"
              >
                Decentraland Marketplace
              </a>
              , all waiting to be discovered by you!
            </p>
          ),
        },
        {
          question:
            "Do I need cryptocurrency or a digital wallet to use Decentraland?",
          answer: () => (
            <p>
              You don&apos;t need cryptocurrency to enjoy Decentraland—it&apos;s
              free to explore. If you want to buy a community-made creation from
              the Marketplace, you can use a credit/debit card, bank transfer,
              or a variety of cryptocurrencies.
              <br />
              <br />
              As for a{" "}
              <a
                href="https://docs.decentraland.org/player/blockchain-integration/get-a-wallet/?utm_source=decentraland&utm_medium=musiclanding&utm_campaign=musicfestival24"
                target="_blank"
                rel="noreferrer"
              >
                digital wallet
              </a>
              , if you already have one, great!
              <br />
              <br />
              If you don&apos;t already have one, when you sign up for
              Decentraland with your email or a social account, a digital wallet
              will be automatically created for you. It&apos;s part of your
              account and stores any assets you collect, like free Wearables you
              might claim in-world or a fun Emote you purchase in the
              Marketplace.
              {/* As for a{" "}
              <a
                href="https://docs.decentraland.org/player/blockchain-integration/get-a-wallet/?utm_source=decentraland&utm_medium=musiclanding&utm_campaign=musicfestival24"
                target="_blank"
                rel="noreferrer"
              >
                digital wallet
              </a>
              , if you already have one, great!
              <br />
              <br />
              If you don&apos;t already have one, when you sign up for
              Decentraland with your email or a social account, a digital wallet
              will be automatically don&apos;t already have one, when you sign
              up for Decentraland with your email or a social account, a digital
              wallet will be automatically created for you. It&apos;s part of
              your account and stores any assets you collect, like free
              Wearables you might claim in-world or a fun Emote you purchase in
              the Marketplace. purchase in the Marketplace. */}
            </p>
          ),
        },
        {
          question: "How do I keep up to date with Music Festival News?",
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
              on Twitter and keep an eye on the{" "}
              <a
                href="https://twitter.com/search?q=%23DCLMF24"
                target="_blank"
                rel="noreferrer"
              >
                #DCLMF24
              </a>{" "}
              hashtag for live updates. You can also subscribe to
              Decentraland&apos;s{" "}
              <a
                href="https://decentraland.beehiiv.com/?utm_org=dcl&utm_source=decentraland&utm_medium=musiclanding&utm_campaign=musicfestival24"
                target="_blank"
                rel="noreferrer"
              >
                weekly newsletter
              </a>{" "}
              for all of the latest news.
            </p>
          ),
        },
        {
          question: "I want to create in Decentraland, where can I learn more?",
          answer: () => (
            <p>
              Anyone can become a Decentraland creator, all it takes is a little
              knowhow and endless creative ideas! Everything you need to know to
              start your creative journey can be found at{" "}
              <a
                href="https://decentraland.org/create/?utm_org=dcl&utm_source=decentraland&utm_medium=musiclanding&utm_campaign=musicfestival24"
                target="_blank"
                rel="noreferrer"
              >
                decentraland.org/create
              </a>
              .
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
memo(Faq)
export { Faq }
