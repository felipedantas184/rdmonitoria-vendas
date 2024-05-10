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
    flex-direction: column;
  }
`
export const First = styled.div`
	flex: 6;
  padding: 8px;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
  gap: 8px;
`
export const Second = styled.div`
	flex: 4;
  padding: 8px;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
  gap: 8px;
`
export const BonusBox = styled.div`
	width: 100%;
	padding: 18px;
	border-radius: 30px 0 30px 0;

	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	gap: 4px;

	border: 1px solid #DFDFDF;
	box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
	
	>div:nth-child(odd) { 
 		background-color: #FFFFFF;
	}
	>div:nth-child(even) { 
		background-color: #EFEFEF;
	}
	>div:last-child {
		background-color: #FFFFFF;
	}

  @media screen and (max-width: 768px) {
    padding: 8px;
  }
`
export const Topic = styled.div`
  width: 100%;
	padding: 18px;
	border-radius: 10px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  
  @media screen and (max-width: 768px) {
    padding: 18px 8px;
  }
`
export const TopicGroup = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 8px;
`
export const TopicSpan = styled.span`
  flex: 30;
  color: #131313;
  font-size: 15px;
  font-weight: 500;

  @media screen and (max-width: 768px) {
    flex: 20;
    font-size: 14px;
  }
`
export const TopicSpanTitle = styled.span`
  flex: 30;
  color: #131313;
  font-size: 18px;
  font-weight: 700;

  @media screen and (max-width: 768px) {
    flex: 20;
    font-size: 16px;
  }
`
export const TopicBold = styled.span`
  color: #A48C42;
  font-size: 15px;
  font-weight: 700;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`
export const TopicPrice = styled.span`
  color: #131313;
  font-size: 15px;
  font-weight: 400;
	align-self: flex-end;
  white-space: nowrap;

  @media screen and (max-width: 768px) {
    margin: auto;
    font-size: 14px;
  }
`
export const TotalTopic = styled.div`
  width: 100%;
	padding: 18px;
	border-top: 1px dotted #DFDFDF;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`
export const OfferBox = styled.div`
	background-color: #ECDBCA;
	width: 100%;
	padding: 24px;
	border-radius: 0 30px 0 30px;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 4px;

	border: 1px solid #ECDBCA;
	box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
`
export const OfferTitle = styled.span`
	color: #444444;
  font-size: 24px;
  font-weight: 600;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`
export const OfferSubtitle = styled.span`
	color: #363636;
  font-size: 20px;
  font-weight: 500;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`
export const OfferBigPrice = styled.span`
	color: #363636;
  font-size: 60px;
  font-weight: 700;

  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
`
export const OfferCoin = styled.span`
	color: #363636;
  font-size: 24px;
  font-weight: 700;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`
export const PrimaryButton = styled.button`
  margin-top: 8px;
  margin-bottom: 8px;
  padding: 16px 12px;
  background-color: #B78836;
  background: linear-gradient(90deg, #B78836 0%, #FCEEA1 50%, #B78836 100%);
  color: #3A3A3A;
  border: none;
  font-size: 18px;
  font-family: "Poppins";
  text-transform: uppercase;
  border-radius: 0px 30px;
  font-weight: 600;
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
      color: #13131A;
    }
`
export const OfferSpan = styled.span`
	color: #363636;
  font-size: 16px;
  font-weight: 400;
	text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`