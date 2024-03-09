import styled from "styled-components";

export const Section = styled.section`
  background-color: #FFFFFF;
  padding: 42px 0;
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
export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 250px;

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