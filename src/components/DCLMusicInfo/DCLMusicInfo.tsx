import {
  BulletItem,
  BulletList,
  BulletText,
  ContentWrapper,
  Description,
  HeroContainer,
  LeftContent,
  LightStickImage,
  RightContent,
  StyledHero,
  Title,
  TitleWrapper,
} from "./styles"
import lightstickImageSrc from "../../img/about/light-stick.webp"

const DCLMusicInfo = () => {
  return (
    <StyledHero id="about">
      <HeroContainer>
        <ContentWrapper>
          <LeftContent>
            <LightStickImage src={lightstickImageSrc} alt="Light Stick" />
          </LeftContent>

          <RightContent>
            <TitleWrapper>
              <Title>
                INSIDE MUSIC
                <br />
                FESTIVAL
              </Title>
              {/* <TitleLightStick src={lightstickImageSrc} alt="Light Stick" /> */}
            </TitleWrapper>

            <Description>
              SUB/STREAM celebrates the rise of stream-native music, uniting
              Twitch icons, digital-first musicians, and virtual bands in a
              full-scale performance experience.
            </Description>

            <BulletList>
              <BulletItem>
                <BulletText>
                  Discover headline sets from stream-native stars on the Main
                  and Live stages.
                </BulletText>
              </BulletItem>

              <BulletItem>
                <BulletText>
                  Catch 8 digital fashion drops, from the sky—collectible
                  Wearables released live in sync with epic light shows.
                </BulletText>
              </BulletItem>

              <BulletItem>
                <BulletText>
                  Explore 12 immersive builds, inspired by meme culture,
                  fandoms, and the wild side of streaming.
                </BulletText>
              </BulletItem>

              <BulletItem>
                <BulletText>
                  Party in vibrant creator-built venues, hosted by the
                  internet&apos;s most innovative music communities.
                </BulletText>
              </BulletItem>
            </BulletList>
          </RightContent>
        </ContentWrapper>
      </HeroContainer>
    </StyledHero>
  )
}

export { DCLMusicInfo }
