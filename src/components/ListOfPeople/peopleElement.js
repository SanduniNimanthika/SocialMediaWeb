import styled from 'styled-components';

export const PeopleContainer = styled.div`
  /* width: 100vw; */
  min-height: 100vh;
  
  background: #150f0f;
  color: #fff;
`;

export const PeopleWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  padding:1.5rem
  
`;

export const PeopleCard = styled.div`
  margin: 0 3rem;
  line-height: 2;
  width: 300px;
`;

export const PeopleImg = styled.img`
  height: 250px;
  min-width: 300px;
  max-width: 100%;
  box-shadow: 8px 8px #fdc500;
  
`;



export const PeopleTitle = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
`;



export const PeopleEmail = styled.p`
  margin-bottom: 1rem;
`;

export const PeopleInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`;

export const PeopleButton = styled.button`
  font-size: 1rem;
  padding: 1rem 4rem;
  border: none;
  background: #e31837;
  color: #fff;
  margin:1.5rem;
  
  transition: 0.2 ease-out;
  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;



export const SinglePeopleImg = styled.img`
  height: 450px;
  min-width: 300px;
  max-width: 100%;
  box-shadow: 8px 8px #fdc500;
 
  
`;
export const ButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  padding:1.5rem
  
`;