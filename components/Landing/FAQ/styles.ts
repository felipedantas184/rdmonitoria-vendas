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
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
  gap: 8px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`
export const First = styled.div`
	flex: 2;
  padding: 26px;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
  gap: 8px;
  align-self: flex-start;
`
export const Second = styled.div`
	flex: 6;
  padding: 8px;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
  gap: 8px;
`
export const Topline = styled.span`
  color: #A48C42;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
`
export const SectionTitle = styled.h2`
  color: #1A1A1A;
  font-size: 32px;
  font-weight: 600;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`
export const SectionSubtitle = styled.h4`
  color: #131313;
  font-size: 16px;
  font-weight: 400;

  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`
export const PrimaryButton = styled.button`
  margin-top: 8px;
  padding: 16px;
  background-color: #B78836;
  background: linear-gradient(90deg, #B78836 0%, #FCEEA1 50%, #B78836 100%);
  color: #3A3A3A;
  border: none;
  font-size: 16px;
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
export const QuestionsBox = styled.div`
	width: 100%;
	padding: 18px;
	

	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	gap: 16px;

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`
export const Topic = styled.div`
  background-color: #FFFFFF;
  width: 100%;
	padding: 18px;
	border-radius: 10px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`
export const TopicGroup = styled.div`
  flex: 9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
`
export const TopicQuestion = styled.h5`
  color: #131313;
  font-size: 16px;
  font-weight: 600;

  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`
export const TopicAnswer = styled.p`
  color: #4C4C4C;
  font-size: 14px;
  font-weight: 400;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`