import styled from '@emotion/styled';
import light from '../themes/light.js';

const InputFieldSmall = styled.input`
  width: 40%;
  height: 35px;
  background-color: ${light.colors.basic};
  border-radius: 10px;
  color: ${light.colors.iconinactive};
  outline: none;
  border: none;
  font-size: 10px;
  text-align: left;
  padding: 10px;
  margin: 5rem;
  margin-bottom: 10px;
`;

export default InputFieldSmall;
