import styled from '@emotion/styled';
import light from '../../themes/light';
const InputField = styled.input`
  width: 100%;
  height: 35px;
  background-color: ${light.colors.backgroundPrimary};
  border-radius: 10px;
  color: ${light.colors.iconInactive};
  outline: none;
  border: none;
  font-size: 10px;
  text-align: left;
  padding: 10px;
  margin-bottom: 10px;
`;

export default InputField;
