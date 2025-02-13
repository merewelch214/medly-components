import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import ImageSearchIconSvg from '../../assets/Image/image_search_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ImageSearchIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ImageSearchIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ImageSearchIcon.Style = SvgIcon;
ImageSearchIcon.displayName = 'ImageSearchIcon';

export default ImageSearchIcon
