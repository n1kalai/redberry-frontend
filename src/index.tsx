import ReactDOM from 'react-dom'
import { StrictMode } from 'react'
import App from './App'
import { ThemeProvider } from '@emotion/react'
import theme from './mui-customization/theme'
ReactDOM.render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </StrictMode>,
    document.getElementById('root')
)
