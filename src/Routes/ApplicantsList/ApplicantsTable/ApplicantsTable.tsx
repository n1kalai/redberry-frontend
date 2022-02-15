import { Paper } from '@mui/material'
import { TableBody } from './TableBody'
import { TableHeader } from './TableHeader'

export const ApplicantsTable = () => {
    return (
        <Paper
            style={{ display: 'flex', flexDirection: 'column', width: '100%' }}
        >
            <TableHeader />
            <TableBody />
        </Paper>
    )
}
