import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SettingsPowerIconSvg from '../../assets/Action/settings_power_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SettingsPowerIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SettingsPowerIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SettingsPowerIcon.Style = SvgIcon;
SettingsPowerIcon.displayName = 'SettingsPowerIcon';

export default SettingsPowerIcon
