import { React } from './common_imports.ts';
import { BubbleProps } from './props.ts';
const Bubble = (props: BubbleProps) => {
    const { children, theme, borderRadius, padding, margin } = props;
    return React.createElement('div', {
        style: {
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.background.default,
            borderRadius: borderRadius,
            padding: padding,
            margin: margin,
        },
    }, children);
};

export default Bubble;