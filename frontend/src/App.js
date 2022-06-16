import {Routes, Route, BrowserRouter} from "react-router-dom"

//components
import Container  from "./components/Container";
import Grid from "./components/Grid"
import Form from "./components/Form"
import Message from "./components/Message";

function App() {

  return (

    <BrowserRouter>
      <Container>
      <Message/>
        <Routes>
            <Route path="/edit" element={<Form/>}/>
            <Route path="/delete" element={<Form/>}/>
            <Route path="/create" element={<Form/>}/>
            <Route path="/" element={<Grid/>}/>
        </Routes>
      </Container>
    </BrowserRouter>
    
      
  );
}

export default App;
