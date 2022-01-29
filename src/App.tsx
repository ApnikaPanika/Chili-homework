import './Reset.scss';
import './App.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { Triangle } from 'react-loader-spinner';
import { CharacterType } from './Data/Types/Types';
import { InputContainer } from './Components/Styles/Input.styled';
import Input from './Components/Input/InputClass';
import PersonCard from './Components/PersonCard/PersonCard';
import { AllCardsContainer } from './Components/Styles/PersonCard.styled';
import Header from './Components/Header/Header';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [afterSecondValue, setAfterSecondValue] = useState('');
  const [characterArray, setCharacterArray] = useState<CharacterType[]>([]);

  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/character')
      .then((res) => setCharacterArray(res.data.results));
  }, []);

  useEffect(() => {
    setTimeout(() => { setAfterSecondValue(inputValue); }, 1200);
  }, [inputValue]);

  let filteredArray:CharacterType[] = [];

  if (inputValue === afterSecondValue) {
    filteredArray = characterArray
      .filter((person) => person.name.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);
  }

  return (
    <div>

      <Header />

      <InputContainer>
        <Input text={inputValue} setValue={setInputValue} />
      </InputContainer>

      {inputValue === afterSecondValue
        ? (
          <AllCardsContainer>
            {filteredArray.map(({ id, name, image }) => (
              <PersonCard name={name} image={image} key={id} />
            ))}
          </AllCardsContainer>
        )
        : <AllCardsContainer><Triangle color="#ff3a46" height={200} width={200} /></AllCardsContainer>}

    </div>
  );
};
export default App;
