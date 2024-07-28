import './App.css';
import Home from './Pages/Home';
import { ChakraProvider } from "@chakra-ui/react";


function App() {
  return (
   
      <ChakraProvider>
        <Home />
      </ChakraProvider>
  
  );
}

export default App;
