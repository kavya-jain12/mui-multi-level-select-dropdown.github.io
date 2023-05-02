import { useContext } from 'react';
import MenuItem from '@mui/material/MenuItem';

import { FilterContext } from 'src/context/FilterContext';
import { FilterByType } from 'src/components/FilterBuilder/FilterByType';
import { filterTypes } from 'src/reducer/InitialStateType';

export const ListFactory = () => {
    const { filters: { category, depth } } = useContext(FilterContext)

    const generateMenu = (filter: filterTypes) => {
        return <MenuItem
            key={filter.value}
            value={filter.value}
            sx={{
                p: 0,
                m: 0,
                textTransform: 'capitalize'
            }
            }>
            <FilterByType filter={filter} />
        </MenuItem>
    }
    return (
        <span>
            {depth === 0 ?
                category.length > 0 &&
                category.map((filter: any) => generateMenu(filter))
                : category.filter((item: any) => item.selected).map((filter: any) => generateMenu(filter))
            }
        </span >
    )
}
