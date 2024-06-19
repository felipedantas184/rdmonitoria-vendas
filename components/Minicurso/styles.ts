import styled from "styled-components";

export const Section = styled.section`
  background-color: #020024;
  padding: 25px 0;
  min-height: 100vh;
`
export const Wrapper = styled.div`
  width: 100%;
  max-width: 1080px;
  padding: 0 16px;
	margin-left: auto;
	margin-right: auto;
  margin-top: auto;
  margin-left: auto;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
  gap: 32px;
  margin-bottom: 48px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }
`
export const First = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`
export const Second = styled.div`
  width: 100%;
  background-color: #FFFFFF;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding: 8px;
`
export const TextWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
export const Title = styled.h1`
  color: #FFFFFF;
  font-size: 42px;
  line-height: 60px;
  font-weight: 600;
  text-transform: uppercase;
  text-shadow: 1px 1px 2px white;
`
export const Subtitle = styled.h3`
  color: #E2E2E2;
  font-size: 12px;
  text-transform: uppercase;
  margin-bottom: 24px;
  text-align: center;
  font-family: "Brice Regular SemiExpanded", sans-serif;
  font-weight: 700;
  text-align: center;
`
export const Topline = styled.span`
  color: #A334CB;
  font-size: 22px;
  font-weight: 600;
  text-transform: uppercase;
  text-shadow: 1px 1px 2px black;
`
export const Teachers = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 16px;
`
export const TeacherWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
`
export const LogoWrapper = styled.div`
  position: relative;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  > div {
    position: unset !important;
  }

  .image {
    object-fit: contain;
    width: 100% !important;
    position: relative !important;
    height: unset !important;
    transition: transform 0.5s ease-in-out;

    &:hover {
      transform: scale(1.025);
      transition: transform 0.5s ease-in-out;
    }
  }
`
export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 270px;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;    
  > div {
    position: unset !important;
  }

  .image {
    object-fit: contain;
    width: 100% !important;
    position: relative !important;
    height: unset !important;
    transition: transform 0.5s ease-in-out;

    &:hover {
      transform: scale(1.1);
      transition: transform 0.5s ease-in-out;
    }
  }
`
export const TeacherName = styled.h3`
  color: #FFFFFF;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  font-family: "Brice Regular SemiExpanded", sans-serif;
  text-align: center;
`
export const TeacherAchieves = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  list-style: none;
`
export const Achieve = styled.li`
  color: #E2E2E2;
  font-size: 12px;
  text-align: center;
  font-family: "Brice Regular SemiExpanded", sans-serif;
  text-align: center;
`
export const TimeWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;

  padding: 8px;
  text-align: center;
`
export const ToplineGreen = styled.span`
  color: #00bf63;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 700;
  font-family: "Brice Regular SemiExpanded", sans-serif;
`
export const ToplineRed = styled.span`
  color: #FF5757;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 700;
  font-family: "Brice Regular SemiExpanded", sans-serif;
`
export const TitleWhite = styled.h1`
  color: #1C0936;
  font-size: 15px;
  font-weight: 700;
  text-transform: uppercase;
  font-family: "Brice SemiBold SemiExpanded", sans-serif;
`
export const WhatsAppButtom = styled.a`
  width: 100%;
  margin: 0;
  padding: 16px 12px;

  background-color: #5A189A;
  background-clip: padding-box;

  border: none;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;

  color: #fff;
  font-family: "Brice SemiBold SemiExpanded", sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.25;
  text-decoration: none;
  cursor: pointer;
  text-transform: uppercase;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;

  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  -webkit-tap-highlight-color: transparent;

  &:hover, &:focus {
    background-color: #13131A;
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  }

  &:hover {
    transform: translateY(-1px);
  }

  &:active {
    background-color: #13131A;
    box-shadow: rgba(0, 0, 0, .06) 0 2px 4px;
    transform: translateY(0);
  }
`
export const ProgressBar = styled.div`
width: 100%;
  box-sizing: content-box;
  height: 20px; /* Can be anything */
  position: relative;
  background: #13131A;
  border-radius: 8px;
  box-shadow: inset 0 -1px 1px rgba(255, 255, 255, 0.3);

  > span {
    width: 70%;
  display: block;
  height: 100%;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  box-shadow: inset 0 2px 9px rgba(255, 255, 255, 0.3),
    inset 0 -2px 6px rgba(0, 0, 0, 0.4);
  position: relative;
  overflow: hidden;

  background: rgb(253,29,29);
  background: linear-gradient(270deg, rgba(253,29,29,1) 0%, rgba(9,76,113,1) 80%);
  }

  > span::after {
    content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-image: linear-gradient(
    -45deg,
    rgba(255, 255, 255, 0.2) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.2) 50%,
    rgba(255, 255, 255, 0.2) 75%,
    transparent 75%,
    transparent
  );
  z-index: 1;
  background-size: 50px 50px;
  animation: move 4s linear infinite;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  overflow: hidden;
  }

  @keyframes move {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 50px 50px;
  }
}
`
