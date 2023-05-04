import { useContext } from 'react';
import {
    Box,
    List,
    ListItem,
    Typography,
    ListDivider
} from '@mui/joy';

import { CustomBadge } from '../shared/CustomBadge';
import { ArrowButton } from '../shared/ArrowButton';
import { FilterContext } from 'src/containers/FilterContext';
import { SelectList } from 'src/components/shared/SelectList';
import { LinearSlider } from 'src/components/shared/LinearSlider';


type FilterByTypeProps = {
    filter: any
}

export const FilterByType = ({ filter }: FilterByTypeProps) => {
    const { id, value, selected, selectedValue, questionType } = filter;

    const { resetDepth, prevDepth, nextDepth, updateValue } = useContext(FilterContext)

    const listFilterHandler = (e: Event) => {
        // handle list type filters
        const target = e.target as HTMLInputElement;
        const selectValue = target.innerText.toLowerCase()
        updateValue(id, selectValue)
    }

    const sliderChangeHandler = (value: number | number[]) => {
        updateValue(id, value)
    }

    return (
        <Box
            sx={{
                width: '100%',
                bgcolor: '#FFF',
            }}
            className={selected ? 'display-block' : 'display-none'}>
            <List
                size="sm"
                data-testid="select-inner-list">
                <ListItem
                    nested
                    onClick={() => {
                        if (selected)
                            prevDepth(id)
                        else {
                            resetDepth()
                            nextDepth(id)
                        }
                    }}
                    endAction={<ArrowButton selected={selected} />}
                    className={selected ? 'Mui-list-item-head' : ''}
                    sx={{
                        py: 0.5
                    }}>
                    <Typography
                        level="inherit"
                        sx={{
                            pt: 0.5,
                            pl: 0.5,
                            width: 'auto',
                            fontWeight: selected ? '500' : undefined,
                            color: selected ? '#4036ED' : 'inherit',
                        }}>
                        {value}
                        {selectedValue
                            &&
                            <Box
                                component='span'
                                sx={{
                                    float: 'right',
                                    position: 'absolute',
                                    right: 10,
                                    bottom: 15
                                }}>
                                <CustomBadge count={1} />
                            </Box>
                        }
                    </Typography>
                </ListItem>

                {selected && (
                    questionType === 'SelectList'
                        ? <SelectList
                            filter={filter}
                            listFilterHandler={listFilterHandler}
                        />
                        : <LinearSlider
                            filter={filter}
                            sliderChangeHandler={sliderChangeHandler}
                        />
                )}
            </List>
            <ListDivider component="div" inset={'context'} />
        </Box>
    );
}
