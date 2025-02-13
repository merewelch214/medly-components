import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import DiscFullIconSvg from '../../assets/Notification/disc_full_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const DiscFullIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <DiscFullIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

DiscFullIcon.Style = SvgIcon;
DiscFullIcon.displayName = 'DiscFullIcon';

export default DiscFullIcon
