import { FC } from 'react';
import { PersonCardContainer, PersonCardPhoto, PersonCardName } from '../Styles/PersonCard.styled';

type CardProps = {
    name: string
    image: string
}

const PersonCard:FC<CardProps> = ({ name, image }) => (
  <PersonCardContainer>
    <PersonCardPhoto src={image} alt={name} />
    <PersonCardName>{name}</PersonCardName>
  </PersonCardContainer>
);

export default PersonCard;
