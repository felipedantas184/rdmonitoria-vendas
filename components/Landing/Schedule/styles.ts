import styled from "styled-components";

export const Section = styled.section`
  background-color: #FBF8F4;
  padding: 48px 0;
`
export const Wrapper = styled.div`
  background-color: #FBF8F4;
  max-width: 1280px;
	margin-left: auto;
	margin-right: auto;
  padding: 8px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`
export const Topline = styled.span`
  padding: 0 8px;
  color: #A48C42;
  font-size: 14px;
  font-weight: 600;
  align-self: flex-start;
  text-transform: uppercase;
`
export const SectionTitle = styled.h2`
  padding: 0 8px;
  color: #1A1A1A;
  font-size: 32px;
  font-weight: 600;
  align-self: flex-start;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`
export const CardsWrapper = styled.div`
  margin-top: 16px;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;

  @media screen and (max-width: 960px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`
export const Card = styled.div`
  background-color: #FFFFFF;
  padding: 24px;
  border-radius: 24px 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`
export const CardTitle = styled.h1`
  color: #1A1A1A;
  font-size: 22px;
  font-weight: 600;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`
export const CardSubtitle = styled.h4`
  color: #1A1A1A;
  font-size: 16px;
  font-weight: 400;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`
export const PrimaryButton = styled.a`
  width: 100%;
  margin-top: 16px;
  padding: 16px 12px;
  background-color: #B78836;
  background: linear-gradient(90deg, #B78836 0%, #FCEEA1 50%, #B78836 100%);
  color: #13131A;
  border: none;
  font-size: 18px;
  font-family: "Poppins";
  text-transform: uppercase;
  border-radius: 0px 30px;
  font-weight: 700;
  text-align: center;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: transform 0.5s ease-in-out;

  &:hover {
      transform: scale(1.05);
      color: #000;
    }
`