import styled from '@emotion/styled';
import light from '../../themes/light';

const FormElement = styled.form`
  width: 100%;
  box-shadow: 0px 3px 20px #00000029;
  background-color: ${light.colors.basic};
  height: 550px;
  padding: 20px 30px 20px 30px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default FormElement;
