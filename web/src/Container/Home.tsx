import { Container, Content } from "./style";

import { Header } from '../components/Header/Header'
import { SummaryTable } from "../components/SummaryTable/SummaryTable";

function App() {
  return (
    <Container>
      <Content>
        <Header />
        <SummaryTable />
      </Content>
    </Container>
  );
}

export default App;
