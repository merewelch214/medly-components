import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import DeleteSweepIconSvg from '../../assets/Content/delete_sweep_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const DeleteSweepIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <DeleteSweepIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

DeleteSweepIcon.Style = SvgIcon;
DeleteSweepIcon.displayName = 'DeleteSweepIcon';

export default DeleteSweepIcon
