import styled from '@emotion/styled';

const FormContainer = styled.div`
  padding: 20px 5px 20px 5px;
  margin-bottom: 200px;
  position: fixed;
  top: 0vh;
  left: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(5px);
  animation: zoomIn 0.5s;
`;

export default FormContainer;
