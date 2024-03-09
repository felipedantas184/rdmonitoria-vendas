import styled from "styled-components";

export const Section = styled.section`
  background-color: #FFFFFF;
  padding: 48px 0 24px 0;
`
export const Wrapper = styled.div`
  margin-top: -132px;
  max-width: 1280px;
	margin-left: auto;
	margin-right: auto;
  padding: 8px;

	display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;


  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }
`
export const Perk = styled.div`
  background-color: #FFFFFF;
  padding: 24px;
  border-radius: 24px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
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
export const PerkSubtitle = styled.h4`
  color: #1A1A1A;
  font-size: 16px;
  font-weight: 400;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`