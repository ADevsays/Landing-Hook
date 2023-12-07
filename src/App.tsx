import { useEffect, useState } from "react";
import Home from "./components/Home/Home";
import Wrapper from "./components/Wrapper";
import GenerateInvoices from "./components/Invoices/GenerateInvoices";

function App() {
  const [route, setRoute] = useState(window.location.pathname);

  useEffect(() => {
    const handleRouteChange = () => {
      setRoute(window.location.pathname);
    };

    window.addEventListener('popstate', handleRouteChange);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  const RenderView = () => {
    switch (route) {
      case '/generar_facturas':
        return <GenerateInvoices/>;
      default:
        return <Home/>;
    }
  };

  return (
    <Wrapper>
      {RenderView()}
    </Wrapper>
  );
}

export default App;