import { Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { ContainerPage } from "./pages/ContainerPage";
import { Home, Projects } from "./pages";
import { ContainerContent } from "./pages/ContainerContent";

function App() {
  return (
    <ContainerPage>
      <NavBar />
      <ContainerContent>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="projects" element={<Projects />} />
        </Routes>
      </ContainerContent>
    </ContainerPage>
  );
}

export default App;
