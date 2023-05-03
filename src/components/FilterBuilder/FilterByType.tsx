import { useContext } from 'react';
import { Badge } from '@mui/material';
import {
    Box,
    List,
    ListItem,
    IconButton,
    Typography,
    ListDivider
} from '@mui/joy';
import {
    KeyboardArrowDown,
    KeyboardArrowLeft
} from '@mui/icons-material';

import { FilterContext } from 'src/context/FilterContext';
import { SelectList } from 'src/components/FilterBuilder/FilterTypes/SelectList';
import { LinearSlider } from 'src/components/FilterBuilder//FilterTypes/LinearSlider';

type FilterByTypeProps = {
    filter: any
}

export const FilterByType = ({ filter }: FilterByTypeProps) => {
    const { id, value, selected, selectedValue, questionType } = filter;
    const { resetDepth, prevDepth, nextDepth, updateValue } = useContext(FilterContext)

    const handleListFilter = (e: Event) => {
        // handle list type filters

        const target = e.target as HTMLInputElement;
        const selectValue = target.innerText.toLowerCase()
        updateValue(id, selectValue)
    }

    const handleSliderChange = (value: number | number[]) => {
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
                    endAction={
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
                    }
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
                                    right: 58,
                                    top: 5
                                }}>
                                <Badge
                                    badgeContent={1}
                                    data-testid='inner-badge'
                                    componentsProps={{ root: { style: { width: '100%' } } }}>
                                </Badge>
                            </Box>
                        }
                    </Typography>
                </ListItem>

                {selected && (
                    questionType === 'SelectList'
                        ? <SelectList
                            filter={filter}
                            handleListFilter={handleListFilter}
                        />
                        : <LinearSlider
                            filter={filter}
                            handleSliderChange={handleSliderChange}
                        />
                )}
            </List>
            <ListDivider component="div" inset={'context'} />
        </Box >
    );
}
