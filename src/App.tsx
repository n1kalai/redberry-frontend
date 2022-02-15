import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PageApplicantsList from 'Routes/ApplicantsList/PageApplicantsList'
import PageCreateApplicant from 'Routes/CreateApplicant/PageCreateApplicant'
import './styles.css'
function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PageApplicantsList />} />
                    <Route path="/add" element={<PageCreateApplicant />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
