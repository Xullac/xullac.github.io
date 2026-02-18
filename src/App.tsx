import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Provider} from "./components/ui/provider";
import {Frontpage} from "./pages/Frontpage";
import {Resume} from "./pages/Resume";
import {PokemonPage} from './pages/PokemonPage';

function App() {
    return (
        <div className="App">
            <Provider>
                <Router>
                    <Routes>
                        <Route path="/" element={<Frontpage/>}/>
                        <Route path="/resume" element={<Resume/>}/>
                        <Route path="/pokemon" element={<PokemonPage/>}/>
                    </Routes>
                </Router>
            </Provider>
        </div>
    );
}

export default App;