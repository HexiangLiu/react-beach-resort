import styled from 'styled-components';

const StyledHeader = styled.header`
  height: 60vh;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;

  /* render dynamic background-image  */
  background-image: url(${(props) => props.img});
`;

export default StyledHeader;
