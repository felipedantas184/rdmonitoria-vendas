import Link from "next/link";
import styled from "styled-components";

export const Section = styled.section`
  background-color: #1C0936;
  padding: 25px 0;
  min-height: 100vh;
`
export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1080px;
  padding: 0 16px;
	margin-left: auto;
	margin-right: auto;
  margin-top: auto;
  margin-left: auto;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
  gap: 16px;

  >iframe {
    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 8px 2px;
  }
`
export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`
export const LogoWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 100px;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  overflow: hidden;

  > div {
    position: unset !important;
  }

  .image {
    object-fit: contain;
    width: 100% !important;
    position: relative !important;
    height: unset !important;
    transition: transform 0.5s ease-in-out;
  }
`
export const HeroTitle = styled.h1`
  color: #FFF;
  font-size: 32px;
  font-weight: 500;
  text-align: center;
  text-transform: uppercase;
  font-family: "Alfa Slab One", serif;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`
export const HeroSubtitle = styled.h4`
  color: #E6E6E6;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 16px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`
export const CardsWrapper = styled.div`
  width: 100%;
  max-width: 1080px;

	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
  gap: 8px;
`
export const Card = styled(Link)`
  padding: 16px;
  border-radius: 24px 0;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 8px 0px;

  display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;

  background-color: #3c005a;
  background: linear-gradient(45deg, #3c005a 0%);

  @media screen and (max-width: 768px) {
    border-radius: 16px 0;
    padding: 8px;
  }
`
export const Span = styled.span`
  color: #E6E6E6;
  font-size: 20px;
  font-weight: 700;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`
export const Title = styled.h3`
  color: #FFFFFF;
  font-size: 18px;
  font-weight: 600;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`
export const VideoWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  overflow: hidden;
`
export const FooterCards = styled.div`
  width: 100%;

	display: flex;
	flex-direction: row;
  flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
  gap: 32px;

  @media screen and (max-width: 768px) {
    gap: 16px;
  }
`
export const FooterCard = styled.a`
  flex: 1;
  min-height: 80px;
  padding: 16px;
  border-radius: 24px 0;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 8px 0px;

  display: flex;
	flex-direction: row-reverse;
	align-items: flex-start;
	justify-content: space-between;
  gap: 4px;

  background-color: #0b0416;
  background: linear-gradient(45deg, #0b0416 0%);
`