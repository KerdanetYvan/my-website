import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About.js';
import Contact from './Pages/Contact/Contact.js';
import Error404 from './Pages/Error404/Error404.js';

function App() {

    return (<>
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
        </BrowserRouter>
    </>);
} export default App;