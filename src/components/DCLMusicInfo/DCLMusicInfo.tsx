import { styled } from "styled-components"
import DclBullet from "../../img/about/bullet-icon.png"

const DCLMusicInfo = () => {
  return (
    <StyledHero id="about">
      <HeroContainer>
        <ContentWrapper>
          <LeftContent>
            <Title>
              EXPERIENCE
              <br />
              MUSIC FESTIVAL
            </Title>

            <Description>
              This year&rsquo;s theme, SUB/STREAM celebrates the rise of
              stream-native music. From VTubers and Twitch icons to
              digital-first musicians and virtual bands, Decentraland&rsquo;s
              Music Festival turns streaming into a full-scale performance
              experience.
            </Description>

            <BulletList>
              <BulletItem>
                <BulletIcon src={DclBullet} alt="" />
                <BulletText>
                  DISCOVER HEADLINE SETS FROM STREAM-NATIVE STARS ON THE MAIN
                  AND LIVE STAGES
                </BulletText>
              </BulletItem>

              <BulletItem>
                <BulletIcon src={DclBullet} alt="" />
                <BulletText>
                  CATCH 8 DIGITAL FASHION DROPS FROM THE SKY—COLLECTIBLE
                  WEARABLES RELEASED LIVE IN SYNC WITH EPIC LIGHT SHOWS.
                </BulletText>
              </BulletItem>

              <BulletItem>
                <BulletIcon src={DclBullet} alt="" />
                <BulletText>
                  EXPLORE 12 IMMERSIVE BUILDS INSPIRED BY MEME CULTURE, FANDOMS,
                  AND THE WILD SIDE OF STREAMING.
                </BulletText>
              </BulletItem>

              <BulletItem>
                <BulletIcon src={DclBullet} alt="" />
                <BulletText>
                  PARTY IN VIBRANT CREATOR-BUILT VENUES, HOSTED BY THE
                  INTERNET&rsquo;S MOST INNOVATIVE MUSIC COMMUNITIES.
                </BulletText>
              </BulletItem>
            </BulletList>
          </LeftContent>

          <RightBadge>
            <BadgeContent>SUB/STREAM</BadgeContent>
          </RightBadge>
        </ContentWrapper>
      </HeroContainer>
    </StyledHero>
  )
}

const StyledHero = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 80px 20px;
  background: rgba(26, 13, 62, 0.9);
  backdrop-filter: blur(20px);

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`

const HeroContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  position: relative;
`

const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  gap: 60px;
  padding: 60px;
  background: rgba(26, 13, 62, 0.8);
  backdrop-filter: blur(20px);
  border-radius: 32px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 40px 30px;
    gap: 40px;
  }
`

const LeftContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
`

const Title = styled.h2`
  font-family: "Ethnocentric", sans-serif;
  font-size: 40px;
  line-height: 1.2;
  letter-spacing: -1px;
  text-transform: uppercase;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 32px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`

const Description = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  line-height: 1.6;
  font-weight: 300;
  margin: 0;
  opacity: 0.95;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`

const BulletList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 2rem;
  gap: 20px;
  margin-top: 12px;
`

const BulletItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`

const BulletIcon = styled.img`
  width: 34px;
  height: 34px;
  flex-shrink: 0;
  margin-top: 4px;

  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
  }
`

const BulletText = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 12px;
  line-height: 1;
  font-weight: 400;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`

const RightBadge = styled.div`
  position: absolute;
  bottom: 40px;
  right: 40px;
  padding: 12px 32px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    position: relative;
    bottom: auto;
    right: auto;
    align-self: flex-end;
  }
`

const BadgeContent = styled.div`
  font-family: "Ethnocentric", sans-serif;
  font-size: 16px;
  letter-spacing: -0.5px;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`

export { DCLMusicInfo }
