import styled from 'styled-components';

const PersonCardContainer = styled.div`
padding: 7px;
background-color: white;
border-radius: 6px;
`;

const PersonCardPhoto = styled.img`
border-radius: 6px;
`;

const PersonCardName = styled.h2`
text-align: center;
font-size: 24px;
padding: 5px 0;
`;

const AllCardsContainer = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
gap: 20px;
margin: 0px 20px;
`;

export {
  PersonCardContainer, AllCardsContainer, PersonCardPhoto, PersonCardName,
};
