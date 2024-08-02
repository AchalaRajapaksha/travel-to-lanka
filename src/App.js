import './App.css';
import Home from './Pages/Home';
import { ChakraProvider } from "@chakra-ui/react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function App() {
  return (
   
      <ChakraProvider>
        <Home />
      </ChakraProvider>
  
  );
}

export default App;
