import { HeaderContainer, HeaderLogo, HeaderText } from '../Styles/Header.styled';
import logo from '../../Images/ChiliLogo.png';

const Header = () => (
  <HeaderContainer>
    <HeaderLogo src={logo} alt="logo" />
    <HeaderText> Find Rick & Morty character</HeaderText>
  </HeaderContainer>
);

export default Header;
