import styled from 'styled-components';

const HeaderLogo = styled.img`
 border-radius: 6px;
 width: 100px;
`;

const HeaderText = styled.h2`
    font-size: 40px;
    font-weight: bold;
    color: white;
    text-align: center;
`;

const HeaderContainer = styled.div`
display: flex;
margin: 10px 5px;
justify-content: space-around;
align-items: center;
flex-wrap: wrap;
gap: 10px;
`;

export { HeaderLogo, HeaderContainer, HeaderText };
