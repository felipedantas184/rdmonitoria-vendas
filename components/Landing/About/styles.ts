import styled from "styled-components";

export const Section = styled.section`
  background-color: #FFFFFF;
  padding: 24px 0;
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
    flex-direction: column-reverse;
  }
`
export const First = styled.div`
	flex: 1;
  padding: 8px;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
  gap: 8px;
`
export const Second = styled.div`
	flex: 1;
  padding: 8px;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
  gap: 8px;
`
export const Topline = styled.span`
  color: #A48C42;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`
export const SectionTitle = styled.h2`
  color: #1A1A1A;
  font-size: 32px;
  font-weight: 600;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`
export const SectionParagraph = styled.p`
  color: #131313;
  font-size: 16px;
  font-weight: 400;

  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`
export const Topic = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
`
export const TopicSpan = styled.span`
  color: #131313;
  font-size: 15px;
  font-weight: 400;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`
export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 350px;

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
export const PrimaryButton = styled.button`
  padding: 8px 16px;
  background-color: #765D19;
  color: #FFFFFF;
  border: none;
  font-size: 16px;
  font-family: "Poppins";
  text-transform: uppercase;
  border-radius: 10px;
  font-weight: 500;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`
export const WrapperTwo = styled.div`
  margin-top: 24px;
	max-width: 1280px;
	margin-left: auto;
	margin-right: auto;
  padding: 8px;

	display: flex;
	flex-direction: row-reverse;
	justify-content: space-between;
	align-items: center;
  gap: 8px;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`