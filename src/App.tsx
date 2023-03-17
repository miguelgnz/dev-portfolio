import styled from 'styled-components';
import UnderConstruction from './components/UnderConstruction/UnderConstruction';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background: rgb(33, 33, 33);
  background: linear-gradient(
    0deg,
    rgba(33, 33, 33, 1) 0%,
    rgba(33, 33, 33, 1) 50%,
    rgba(33, 33, 33, 0.6) 100%
  );
`;


function App() {
  return (
    <Wrapper>
      <UnderConstruction/>
    </Wrapper>
  );
}

export default App;
