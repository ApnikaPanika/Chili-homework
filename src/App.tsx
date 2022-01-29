import './Reset.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { Triangle } from 'react-loader-spinner';
import { CharacterType, WholeApiType } from './Data/Types/Types';
import { InputContainer } from './Components/Styles/Input.styled';
import Input from './Components/Input/InputClass';
import Character from './Components/Character/Character';
import { AllCharactersContainer } from './Components/Styles/Character.styled';
import Header from './Components/Header/Header';

const lower = (text: string) => text.toLowerCase();

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [secondValue, setSecondValue] = useState('');
  const [characterArray, setCharacterArray] = useState<CharacterType[]>([]);

  useEffect(() => {
    axios
      .get<WholeApiType>('https://rickandmortyapi.com/api/character')
      .then(({ data }) => setCharacterArray(data.results));
  }, []);

  useEffect(() => {
    const secondText = setTimeout(() => { setSecondValue(inputValue); }, 1000);

    return () => {
      clearTimeout(secondText);
    };
  }, [inputValue]);

  let filteredArray:CharacterType[] = [];

  if (inputValue === secondValue) {
    filteredArray = characterArray
      .filter(({ name }) => lower(name).indexOf(lower(inputValue)) > -1);
  }

  return (
    <div>
      <Header />

      <InputContainer>
        <Input text={inputValue} setValue={setInputValue} />
      </InputContainer>

      <AllCharactersContainer>
        {inputValue === secondValue
          ? filteredArray.map(({ id, name, image }) => (
            <Character name={name} image={image} key={id} />
          ))
          : <Triangle color="#ff3a46" height={200} width={200} />}
      </AllCharactersContainer>
    </div>
  );
};
export default App;
