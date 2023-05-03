import {
    List,
    ListItem,
    ListItemButton,
    ListDivider
} from '@mui/joy';
import DoneIcon from '@mui/icons-material/Done';

type optionProps = {
    options: Array<any>
    selected: boolean
    selectedValue: null | string
}

type FilterByProps = {
    filter: optionProps
    handleListFilter: (event: any) => void
}

export const SelectList = ({ filter, handleListFilter }: FilterByProps) => {
    const { options, selected, selectedValue } = filter;

    return (
        <List
            size='sm'
            data-testid="select-outer-sub-list">
            <ListDivider inset={'context'} />
            {options.length > 0
                && options.map((option: { value: string, label: string }, index: number) => {
                    return (
                        <span key={option.value}>
                            <ListItem
                                sx={{
                                    pl: 2,
                                    py: 0,
                                    m: 0
                                }}
                                data-testid="select-inner-sub-list"
                                key={option.value}
                                onClick={handleListFilter}>
                                <ListItemButton
                                    key={option.value}
                                    selected={selectedValue === option.value}
                                    sx={{
                                        textTransform: 'capitalize',
                                        '&:hover': {
                                            bgcolor: 'transparent'
                                        }
                                    }}>
                                    {option.label}
                                    {selectedValue === option.value
                                        && <DoneIcon
                                            fontSize='small'
                                            sx={{
                                                right: 10,
                                                position: 'absolute',
                                                color: selected ? '#4036ED' : 'inherit',
                                            }}
                                        />}
                                </ListItemButton>
                            </ListItem>
                            {options.length !== index + 1
                                && <ListDivider component={'div'} inset={'context'} />}
                        </span>
                    )
                })
            }
        </List>
    );
}
