import { Typography, Box, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export const Header = () => {
    const navigate = useNavigate()
    return (
        <Box component="header" display="flex" flexDirection="column">
            <Typography variant="h4">Recruitment Pipeline</Typography>
            <Button
                variant="contained"
                color="error"
                size="large"
                style={{ alignSelf: 'flex-end', textTransform: 'none' }}
                onClick={() => navigate('/add')}
            >
                Add New Candidate
            </Button>
        </Box>
    )
}
