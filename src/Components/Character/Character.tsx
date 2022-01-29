import { FC } from 'react';
import { CharacterContainer, CharacterPhoto, CharacterName } from '../Styles/Character.styled';

type CardProps = {
    name: string
    image: string
}

const Character:FC<CardProps> = ({ name, image }) => (
  <CharacterContainer>
    <CharacterPhoto src={image} alt={name} />
    <CharacterName>{name}</CharacterName>
  </CharacterContainer>
);

export default Character;
