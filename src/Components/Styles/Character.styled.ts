import styled from 'styled-components';

const CharacterContainer = styled.div`
padding: 7px;
background-color: white;
border-radius: 6px;
`;

const CharacterPhoto = styled.img`
border-radius: 6px;
`;

const CharacterName = styled.h2`
text-align: center;
font-size: 24px;
padding: 5px 0;
`;

const AllCharactersContainer = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
gap: 20px;
margin: 0px 20px;
`;

const NoCharactersFound = styled.h1`
font-size: 40px;
font-weight: bold;
color: white;
text-align: center;
margin-top: 50px;
`;

export {
  CharacterContainer, AllCharactersContainer, CharacterPhoto, CharacterName, NoCharactersFound,
};
