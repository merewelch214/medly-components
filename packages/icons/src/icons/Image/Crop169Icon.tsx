import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Crop169IconSvg from '../../assets/Image/crop_16_9_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Crop169Icon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Crop169IconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Crop169Icon.Style = SvgIcon;
Crop169Icon.displayName = 'Crop169Icon';

export default Crop169Icon
