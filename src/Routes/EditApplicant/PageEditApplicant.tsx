import { Box, Grid, styled, LinearProgress, Typography } from '@mui/material'
import { ApplicantInfo } from './ApplicationInfo'
import { Header } from '../CreateApplicant/components/Header'
import { Hgroup } from '../CreateApplicant/components/Hgroup'
import { TimeLine } from './components/TimeLine'

import { useParams } from 'react-router-dom'
import { getApplicant } from 'service/endPoints'

const WrapperBox = styled(Box)({
    margin: '0 auto',
    '& .sec__wrapper': {
        borderLeft: 'solid 1px lightgray',
        borderRight: 'solid 1px lightgray'
    }
})

const PageEditApplicant = () => {
    const { id } = useParams()
    const { isLoading, isError } = getApplicant(id)

    if (isLoading) return <LinearProgress />
    if (isError)
        return <Typography variant="h4">Something went wrong</Typography>

    return (
        <Box component="section">
            <Header />
            <WrapperBox component="main" px={6}>
                <Box className="sec__wrapper">
                    <Hgroup />
                    <Grid container>
                        <Grid item sm={6}>
                            <ApplicantInfo />
                        </Grid>
                        <Grid item sm={6}>
                            <TimeLine />
                        </Grid>
                    </Grid>
                </Box>
            </WrapperBox>
        </Box>
    )
}

export default PageEditApplicant
