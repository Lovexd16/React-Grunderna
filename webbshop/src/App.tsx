import { useEffect, useState } from "react";
import "./App.css";
import Start from "./Components/Start";
import About from "./Components/About";
import Products from "./Components/Products";
import Admin from "./Components/Admin";
import Menu from "./Components/Menu";

function App() {
  const [admin, setAdmin] = useState<boolean>(false);
  const [page, setPage] = useState<string>("");

  useEffect(() => {
    setAdmin(true);
  }, []);

  useEffect(() => {
    let pageUrl = page;

    if (!pageUrl) {
      const queryParameters = new URLSearchParams(window.location.search);
      const getUrl = queryParameters.get("page");

      if (getUrl) {
        pageUrl = getUrl;
        setPage(getUrl);
      } else {
        pageUrl = "start";
      }
    }

    window.history.pushState(null, "", "?page=" + pageUrl);
  }, [page]);

  return (
    <>
      <h1>Webbshop</h1>
      <Menu admin={admin} setPage={setPage} />

      {{
        start: <Start />,
        about: <About />,
        products: <Products />,
        admin: <Admin />,
      }[page] || <Start />}
    </>
  );
}

export default App;
