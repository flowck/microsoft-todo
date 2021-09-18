import "@/common/styles/global.css";
import { AppContainer } from "./AppStyles";
import { BrowserRouter as Router } from "react-router-dom";
import { Sidebar } from "@/common/components/Sidebar/Sidebar";
import { Content } from "@/common/components/Content/Content";

function App() {
  return (
    <Router>
      <AppContainer>
        <Sidebar></Sidebar>
        <Content></Content>
      </AppContainer>
    </Router>
  );
}

export default App;
