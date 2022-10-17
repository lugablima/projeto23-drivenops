import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Random from './Random';
import Students from './Students';

function App() {
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Random />} />
      <Route path="/students" element={<Students />} />
    </Routes>
  </BrowserRouter>
}

export default App;
