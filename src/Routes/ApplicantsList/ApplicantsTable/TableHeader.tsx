import styled from '@emotion/styled'
import { Grid } from '@mui/material'
import { memo } from 'react'

const StyledGrid = styled(Grid)({
    backgroundColor: '#f9fafb',
    padding: 20,
    textTransform: 'uppercase',
    borderBottom: 'solid 1px lightgray'
})

export const TableHeader = memo(() => {
    return (
        <StyledGrid container>
            <Grid item sm={3} md={3} lg={3}>
                Candidate
            </Grid>
            <Grid item sm={2} md={2} lg={2}>
                Contact
            </Grid>
            <Grid item sm={2} md={2} lg={2}>
                Experience
            </Grid>
            <Grid item sm={2} md={2} lg={2}>
                Skills
            </Grid>
            <Grid item sm={1} md={1} lg={1}>
                Salary Range
            </Grid>
            <Grid item sm={2} md={2} lg={2} style={{ textAlign: 'center' }}>
                Status
            </Grid>
        </StyledGrid>
    )
})
