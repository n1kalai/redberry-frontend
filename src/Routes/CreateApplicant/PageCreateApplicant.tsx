import { Box, Grid, styled } from '@mui/material'
import { ApplicantInfo } from './ApplicantInfo'
import { Header } from './components/Header'
import { Hgroup } from './components/Hgroup'
import { TimeLine } from './TimeLine'

const WrapperBox = styled(Box)({
    margin: '0 auto',
    '& .sec__wrapper': {
        borderLeft: 'solid 1px lightgray',
        borderRight: 'solid 1px lightgray'
    }
})

const PageCreateApplicant = () => {
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

export default PageCreateApplicant
