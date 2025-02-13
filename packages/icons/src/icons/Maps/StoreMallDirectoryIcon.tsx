import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import StoreMallDirectoryIconSvg from '../../assets/Maps/store_mall_directory_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const StoreMallDirectoryIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <StoreMallDirectoryIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

StoreMallDirectoryIcon.Style = SvgIcon;
StoreMallDirectoryIcon.displayName = 'StoreMallDirectoryIcon';

export default StoreMallDirectoryIcon
