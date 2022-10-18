import {Navigate, Route, Routes} from "react-router-dom";
import {HomePage} from "./pages/HomePage";
import {NewPage} from "./pages/NewPage";
import {Header} from "./components/Header";
import {ApartmentPage} from "./pages/ApartmentPage";
import {apartments} from "./apartments";

function App() {

  return (
      <>
          <Header/>
          <Routes>
              <Route path="/" element={<HomePage />}/>
              <Route path="/new" element={<NewPage/>}/>
              <Route path="/apartment/:id" element={<ApartmentPage apartments={apartments}/>}/>
              <Route path="*" element={<Navigate to="/" replace/>}/>
          </Routes>
      </>
  );
}

export default App;
