import styled from "styled-components";

export const Section = styled.section`
  background-color: #020024;
  padding: 24px 0 150px 0;
`
export const Wrapper = styled.div`
	max-width: 1280px;
	margin-left: auto;
	margin-right: auto;
  padding: 8px;

	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
  gap: 8px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`
export const First = styled.div`
	flex: 1;
  padding: 8px;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
  gap: 8px;
`
export const Second = styled.div`
	flex: 1;
  padding: 8px;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
  gap: 8px;
`
export const HeroTitle = styled.h1`
  color: #F5F5F5;
  font-size: 32px;
  font-weight: 600;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`
export const HeroSubtitle = styled.h4`
  color: #F5F5F5;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 16px;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`
export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;

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
export const PrimaryButton = styled.button`
  padding: 16px 24px;
  background-color: #B78836;
  background: linear-gradient(90deg, #B78836 0%, #FCEEA1 50%, #B78836 100%);
  color: #3A3A3A;
  border: none;
  font-size: 18px;
  font-family: "Poppins";
  text-transform: uppercase;
  border-radius: 0px 30px;
  font-weight: 600;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: transform 0.5s ease-in-out;

  &:hover {
      transform: scale(1.05);
      color: #13131A;
    }
`
export const LogoWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 200px;

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