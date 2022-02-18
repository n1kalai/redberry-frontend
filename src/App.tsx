import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PageApplicantsList from 'Routes/ApplicantsList/PageApplicantsList'
import PageCreateApplicant from 'Routes/CreateApplicant/PageCreateApplicant'
import PageEditApplicant from 'Routes/EditApplicant/PageEditApplicant'
import './styles.css'

const queryClient = new QueryClient()

function App() {
    return (
        <div>
            <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<PageApplicantsList />} />
                        <Route path="/add" element={<PageCreateApplicant />} />
                        <Route
                            path="/edit/:id"
                            element={<PageEditApplicant />}
                        />
                        <Route path="*" element={<PageApplicantsList />} />
                    </Routes>
                </BrowserRouter>
                <ReactQueryDevtools />
            </QueryClientProvider>
        </div>
    )
}

export default App
