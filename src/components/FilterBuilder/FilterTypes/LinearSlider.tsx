import { useState } from 'react';
import { Box, Slider } from '@mui/material';
import { ListDivider } from '@mui/joy';

type optionProps = {
    options: Array<any>
    selectedValue: number | number[]
}

type FilterByProps = {
    filter: optionProps
    handleSliderChange: (value: number | number[]) => void
}

export const LinearSlider = ({ filter, handleSliderChange }: FilterByProps) => {
    const { options, selectedValue } = filter
    const [value, setValue] = useState<number | number[]>(0)

    return (
        <Box onMouseUp={() => value >= options[0].value ? handleSliderChange(value) : null}>
            <ListDivider inset={'context'} />
            <Slider
                sx={{
                    mx: 3,
                    my: 4,
                    maxWidth: 200
                }}
                step={1}
                marks={options}
                min={options[0].value}
                max={options[1].value}
                key={`slider-${selectedValue}`}
                defaultValue={selectedValue}
                data-testid="select-inner-list-slider"
                valueLabelDisplay={selectedValue ? 'on' : 'auto'}
                onChange={(event: Event, newValue: number | number[]) => setValue(newValue)}
            />
        </Box>
    );
}

