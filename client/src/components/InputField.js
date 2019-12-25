import styled from '@emotion/styled';
import light from '../themes/light.js';

const InputField = styled.input`
  width: 281px;
  height: 35px;
  background-color: ${light.colors.backgroundprimary};
  border-radius: 10px;
  color: ${light.colors.iconinactive};
  outline: none;
  border: none;
  font-size: 10px;
  text-align: left;
  padding: 10px;
  margin: 5px;
  margin-bottom: 10px;
`;

export default InputField;
