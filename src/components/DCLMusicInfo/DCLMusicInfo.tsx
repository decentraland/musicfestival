import {
  BadgeContent,
  BulletIcon,
  BulletItem,
  BulletList,
  BulletText,
  ContentWrapper,
  Description,
  HeroContainer,
  LeftContent,
  RightBadge,
  StyledHero,
  Title,
} from "./styles"
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

export { DCLMusicInfo }
