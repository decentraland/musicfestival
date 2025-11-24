import { styled } from "styled-components"
import { breakpoints, theme } from "../../utils/theme"

const InstallationsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  width: 100%;
  padding-block: 100px;

  background-color: rgba(10, 9, 44, 1);

  * {
    color: ${theme.white};
  }

  .installations__inner-container {
    width: 100%;
    max-width: 1240px;
    padding: 20px 24px;

    h2 {
      font-size: 40px;
      font-weight: 700;
      line-height: 1.2;
      margin-bottom: 20px;
    }

    .installations__filters {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      flex-wrap: wrap;
      gap: 20px;

      @media (min-width: ${breakpoints.md}) {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        align-items: flex-end;
      }

      > div:is(:first-child) {
        width: 100%;
        max-width: 400px;
      }

      div:is(:last-child) {
        width: 100%;
        max-width: 200px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        gap: 20px;

        &.installations__filters__search {
          position: relative;
        }

        input {
          width: 100%;
          background-color: rgba(255, 255, 255, 0.3);
          color: ${theme.white};
          border: none;
          padding: 10px 16px;
          font-size: 14px;
          border-radius: 12px;
          outline: none;
          color: ${theme.white};

          &::placeholder {
            color: ${theme.white};
            opacity: 1;
          }
        }

        .search-icon {
          position: absolute;
          right: 10px;
          top: 50%;
          font-size: 20px;
          transform: translateY(-50%);
          fill: ${theme.white};
        }

        @media (min-width: ${breakpoints.md}) {
          justify-content: flex-end;
        }
      }
    }

    /* GRID */
    .installations__grid {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 20px;
      grid-row-gap: 20px;
      margin-top: 24px;

      @media (min-width: ${breakpoints.s}) {
        grid-template-columns: repeat(3, 1fr);
      }

      @media (min-width: ${breakpoints.md}) {
        grid-template-columns: repeat(4, 1fr);
      }

      @media (min-width: ${breakpoints.l}) {
        grid-template-columns: repeat(7, 1fr);
      }

      .installations__grid-item {
        width: 100%;
        height: 100%;

        img {
          width: 100%;
          aspect-ratio: 1 / 1;
          object-fit: cover;
          object-position: center;
          display: block;
          border-radius: 10px;
          background-color: rgba(46, 52, 148, 1);
        }

        h6 {
          font-size: 16px;
          font-family: "Inter", sans-serif;
          line-height: 1.2;
          color: ${theme.white};
          margin-top: 10px;
        }
      }
    }

    .installations__no-results {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      margin-top: 24px;

      h2 {
        color: ${theme.white};
      }

      p {
        color: ${theme.white};
      }
    }
  }
`

const ArtistModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 100%;

  .top {
    margin: 0 auto;
    text-align: left;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 4px;
    margin-bottom: 24px;

    h2 {
      font-size: 2rem;
    }

    p {
      font-size: 1.2rem;
      font-weight: 400;
      opacity: 0.8;
      text-transform: uppercase;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      max-height: 200px;
      border-radius: 4px;
      margin-bottom: 12px;
      background-color: rgba(46, 52, 148, 1);
    }
  }

  .middle {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 12px;

    p {
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5;
    }
  }

  .bottom {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 30%;

    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 4px;
    }

    h6 {
      font-size: 0.7rem;
      font-weight: 600;
      opacity: 0.8;
      text-transform: uppercase;
      color: ${theme.white};
    }

    p {
      font-size: 1rem;
      font-weight: 400;
      color: ${theme.white};
    }
  }

  .actions {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    gap: 12px;
    margin-top: 16px;
    font-family: "Inter", sans-serif;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      outline: none;
      border: none;
      padding: 12px 24px;
      border-radius: 40px;
      cursor: pointer;
      font-size: 1rem;
      font-weight: 400;
      transition: all 0.3s ease;
      text-transform: uppercase;
      gap: 6px;
      color: #000;
      font-weight: 600;

      svg {
        font-size: 1.2rem;
      }
    }

    button:first-child {
      background-color: rgba(255, 255, 255, 0.4);
      backdrop-filter: blur(10px);
      color: ${theme.white};
    }

    button:last-child {
      background-color: ${theme.white};
      color: ${theme.black};
      svg {
        fill: ${theme.black};
      }
    }
  }

  hr {
    width: 100%;
    height: 0.5px;
    opacity: 0.5;
    background-color: ${theme.black};
    margin: 12px 0;
  }
`

export { InstallationsContainer, ArtistModalContainer }
