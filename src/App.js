import "./App.css";

import HomePage from "./pages/home/HomePage";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <HomePage />
    </div>
  );
}

export default App;
