import { IconButton } from "@mui/joy"
import {
    KeyboardArrowDown,
    KeyboardArrowLeft
} from '@mui/icons-material';

type IconButtonProps = {
    selected: boolean
}

export const ArrowButton = ({ selected }: IconButtonProps) => {
    return (
        <IconButton
            size="sm"
            variant="plain"
            color="neutral"
            sx={{
                '&:hover, &:active': {
                    bgcolor: 'transparent'
                },
            }}>
            {selected ?
                <KeyboardArrowLeft
                    sx={{
                        transform: selected ? 'initial' : 'rotate(-90deg)',
                        color: selected ? '#4036ED' : 'inherit',
                    }}
                />
                :
                <KeyboardArrowDown
                    sx={{
                        transform: selected ? 'initial' : 'rotate(-90deg)',
                        color: selected ? '#4036ED' : 'inherit',
                    }}
                />}
        </IconButton>
    )
}