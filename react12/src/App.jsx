import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home , CharacterInfo } from "./pages";

const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<CharacterInfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
