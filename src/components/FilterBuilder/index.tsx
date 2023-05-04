import { useContext, useState } from 'react';
import {
    InputLabel,
    FormControl,
    Select,
    OutlinedInput
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import 'src/assets/scss/filter.scss';
import { ListFactory } from 'src/components/FilterBuilder/ListFactory';
import { FilterContext } from 'src/context/FilterContext';
import { CustomBadge } from '../shared/CustomBadge';

export const FilterBuilder = () => {
    const [openFilter, setOpenFilter] = useState(false);
    const { filters, resetDepth } = useContext(FilterContext)

    const totalBadgeCount = filters.category.filter((item: any) => item.selectedValue).length

    const selectClickHandler = (e: React.MouseEvent) => {
        const target = e.target as HTMLInputElement;

        if (target.id === 'mui-component-select-Filters' ||
            target.classList.contains('MuiBackdrop-invisible')) {
            setOpenFilter(!openFilter)
            resetDepth()
        }
    }

    return (
        <FormControl sx={{ m: 10, minWidth: 250 }}>
            <InputLabel
                shrink={false}
                sx={{
                    width: '100%',
                    color: '#071948',
                }}
                classes={{
                    root: 'InputLabel-root'
                }}
                children={
                    <CustomBadge count={totalBadgeCount} text={'Filters'} />
                }
            />
            <Select
                value='Filters'
                label="Filters"
                open={openFilter}
                onClick={selectClickHandler}
                IconComponent={KeyboardArrowDownIcon}
                input={<OutlinedInput name="Filters" />}
                data-testid="select-outer-list">
                {ListFactory()}
            </Select>
        </FormControl>
    )
}
