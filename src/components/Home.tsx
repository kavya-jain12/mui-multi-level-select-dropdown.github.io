import { Box } from '@mui/material';
import { FilterBuilder } from 'src/components/FilterBuilder';

export const Home = () => {
    return (
        <Box minHeight={'100vh'}>
            <FilterBuilder />
        </Box>
    );
}

