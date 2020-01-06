import styled from '@emotion/styled';

const SubmitButton = styled.button`
  width: 100%;
  height: 35px;
  background-color: ${props => props.theme.colors.action};
  border-radius: 10px;
  color: ${props => props.theme.colors.basic};
  outline: none;
  border: none;
  font-size: 12px;
  margin-top: 10px;
`;

export default SubmitButton;
