import { useContext, useState } from 'react';
import {
    InputLabel,
    FormControl,
    Select,
    Badge,
    OutlinedInput
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import 'src/assets/scss/filter.scss';
import { ListFactory } from 'src/components/FilterBuilder/ListFactory';
import { FilterContext } from 'src/context/FilterContext';

export const FilterBuilder = () => {
    const { filters, resetDepth } = useContext(FilterContext)
    const [openFilter, setOpenFilter] = useState(false);
    const totalBadgeCount = filters.category.filter((item: any) => item.selectedValue).length

    const badgeStyle = () => ({
        '& .MuiBadge-badge': {
            top: 10,
            right: 50,
            color: '#4036ED',
            backgroundColor: '#F3EEFF'
        }
    })

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
                    <Badge
                        badgeContent={totalBadgeCount}
                        sx={badgeStyle()}
                        data-testid='inner-badge'
                        componentsProps={{ root: { style: { width: '100%' } } }}>
                        {'Filters'}
                    </Badge>
                }
            />
            <Select
                value=''
                label="Filters"
                open={openFilter}
                onClick={(e: React.MouseEvent) => {
                    const target = e.target as HTMLInputElement;

                    if (target.id === 'mui-component-select-Filters' ||
                        target.classList.contains('MuiBackdrop-invisible')) {
                        setOpenFilter(!openFilter)
                        resetDepth()
                    }
                }}
                IconComponent={KeyboardArrowDownIcon}
                input={<OutlinedInput name="Filters" />}
                data-testid="select-outer-list">
                {ListFactory()}
            </Select>
        </FormControl>
    )
}
