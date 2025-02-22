import styled from "styled-components";

export const Section = styled.section`
  background-color: #020024;
  padding: 48px 0;
`
export const Wrapper = styled.div`
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
  color: #F6F6F6;
  font-size: 14px;
  font-weight: 600;
  align-self: flex-start;
  text-transform: uppercase;
`
export const SectionTitle = styled.h2`
  padding: 0 8px;
  color: #FFF;
  font-size: 32px;
  font-weight: 600;
  align-self: flex-start;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`
export const TestimonialsWrapper = styled.div`
  background-color: #020024;
	max-width: 1280px;
	margin-left: auto;
	margin-right: auto;
  padding: 8px;

	display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;


  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`
export const ImageWrapper = styled.div`
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
      transform: scale(1.05);
      transition: transform 0.5s ease-in-out;
    }
  }
`
export const Perk = styled.div`
  flex: 1;
  background-color: #FFFFFF;
  padding: 24px;
  border-radius: 24px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`
export const PerkTitle = styled.h1`
  color: #1A1A1A;
  font-size: 22px;
  font-weight: 600;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`
export const PerkTopline = styled.span`
  color: #A48C42;
  font-size: 13px;
  font-weight: 500;
`
export const PerkSubtitle = styled.h4`
  color: #1A1A1A;
  font-size: 16px;
  font-weight: 400;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`
export const PrimaryButton = styled.a`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
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