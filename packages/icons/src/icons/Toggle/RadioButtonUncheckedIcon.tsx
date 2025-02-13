import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import RadioButtonUncheckedIconSvg from '../../assets/Toggle/radio_button_unchecked_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const RadioButtonUncheckedIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <RadioButtonUncheckedIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

RadioButtonUncheckedIcon.Style = SvgIcon;
RadioButtonUncheckedIcon.displayName = 'RadioButtonUncheckedIcon';

export default RadioButtonUncheckedIcon
