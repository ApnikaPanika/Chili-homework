/* eslint-disable react/prefer-stateless-function */
import { Component } from 'react';
import { InputStyled } from '../Styles/Input.styled';

type InputProps = {
    text: string
    setValue: (value: string) => void
 };

export class Input extends Component<InputProps> {
  render() {
    const { text, setValue } = this.props;
    return (
      <InputStyled
        type="text"
        value={text}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Character name"
      />
    );
  }
}

export default Input;
