import {Navigate, Route, Routes} from "react-router-dom";
import {HomePage} from "./pages/HomePage";
import {BasketPage} from "./pages/BasketPage";
import {Header} from "./components/Header";
import {ApartmentPage} from "./pages/ApartmentPage";
import {useSelector} from "react-redux";

function App() {
const {authorized} = useSelector(store=>store.user)
  return (
      <>
          <Header/>
          <Routes>
              <Route path="/" element={<HomePage />}/>
              {authorized && <Route path="/basket" element={<BasketPage/>}/>}
              <Route path="/apartment/:id" element={<ApartmentPage />}/>
              <Route path="*" element={<Navigate to="/" replace/>}/>
          </Routes>
      </>
  );
}

export default App;
