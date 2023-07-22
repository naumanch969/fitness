import { Stack, CircularProgress } from "@mui/material"

const Loader = () => {
    return (
        <Stack direction="row" justifyContent="center" alignItems="center" width="100%" >
            <CircularProgress style={{ color: '#ff2625' }} />
        </Stack>
    )
}

export default Loader