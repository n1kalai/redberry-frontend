import styled from '@emotion/styled'
import { Box, Grid, Typography } from '@mui/material'
import { TableTag } from './TableTag'

const StyledGrid = styled(Grid)({
    borderBottom: 'solid 1px lightgray',
    padding: 20
})

const CellGrid = styled(Grid)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    '& b': {
        fontWeight: 'bold'
    },
    justifyContent: 'center'
})

export const TableBody = () => {
    return (
        <StyledGrid container>
            <CellGrid item sm={3} md={3} lg={3}>
                <Typography component="b" variant="body2">
                    Contact
                </Typography>
                <Typography variant="body2">gela var aoie</Typography>
            </CellGrid>
            <CellGrid item sm={2} md={2} lg={2}>
                <Typography component="b" variant="body2">
                    599999999
                </Typography>
                <Typography component="b" variant="body2">
                    gelaa@gmail.com
                </Typography>
            </CellGrid>
            <CellGrid item sm={2} md={2} lg={2}>
                <Typography component="b" variant="body2">
                    6 Years
                </Typography>
            </CellGrid>
            <CellGrid item sm={2} md={2} lg={2}>
                <Box component="ul" display="flex" flexWrap="wrap" pl={0}>
                    <TableTag text="Laravel" />
                    <TableTag text="MySQL" />
                    <TableTag text="PHP" />
                </Box>
            </CellGrid>
            <CellGrid item sm={1} md={1} lg={1}>
                2.2k - 3.2k
            </CellGrid>
            <CellGrid
                item
                sm={2}
                md={2}
                lg={2}
                style={{ alignItems: 'center' }}
            >
                <TableTag
                    backgroundColor="#dde5fe"
                    text="First Contact"
                    color="#9492f1"
                />
            </CellGrid>
        </StyledGrid>
    )
}
