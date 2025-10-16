import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Provider} from "./components/ui/provider";
import {Frontpage} from "./pages/Frontpage";
import {Resume} from "./pages/Resume";

function App() {
    return (
        <div className="App">
            <Provider>
                <Router>
                    <Routes>
                        <Route path="/" element={<Frontpage/>}/>
                        <Route path="/resume" element={<Resume/>}/>
                    </Routes>
                </Router>
            </Provider>
        </div>
    );
}

export default App;