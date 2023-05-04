import { Badge } from '@mui/material';

import { badgeStyle } from './Styled';

type customBadgeProps = {
    count: number
    text?: string
}

export const CustomBadge = ({ count, text }: customBadgeProps) => {
    return (
        <Badge
            sx={badgeStyle()}
            badgeContent={count}
            data-testid='inner-badge'
            componentsProps={{ root: { style: { width: '100%' } } }}>
            {text}
        </Badge>
    )
}
