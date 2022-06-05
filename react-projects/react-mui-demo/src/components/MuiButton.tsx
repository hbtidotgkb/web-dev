import { Stack,Button} from "@mui/material";

export const MuiButton = () => {
    return (
        <div>
            <Stack spacing = {2} direction='row'>
            <Button variant="contained" href="https://google.com">Google</Button>
            <Button variant="outlined">Outlined</Button>
            </Stack>
        </div>
    )
}