import styled from '@emotion/styled';

const SpendingButton = styled.button`
  height: 35px;

  background-color: ${props =>
    props.active ? props.theme.colors.background : props.theme.colors.backgroundprimary};
  border-radius: 10px;
  outline: none;
  border: none;
  margin: 3px 0px 3px 0px;
  text-align: center;
  padding: 4px;
`;

export default SpendingButton;
