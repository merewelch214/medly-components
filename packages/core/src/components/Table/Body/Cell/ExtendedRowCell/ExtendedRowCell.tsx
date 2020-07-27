import { WithStyle } from '@medly-components/utils/src';
import React, { useCallback } from 'react';
import { RowActionsCellStyled } from '../RowActionsCell/RowActionsCell.styled';
import { ExtendedRowCellStyled, Wrapper } from './ExtendedRowCell.styled';
import { ExtendedRowCellProps } from './types';

export const ExtendedRowCell: React.FC<ExtendedRowCellProps> & WithStyle = React.memo(props => {
    const {
        rowId,
        rowData,
        tableSize,
        isRowSelected,
        isRowExpanded,
        isRowClickDisabled,
        showShadowAtRight,
        expandedRowComponent: ExpandedRowComponent
    } = props;
    const stopPropagation = useCallback((e: React.MouseEvent) => e.stopPropagation(), []);

    return (
        <>
            <RowActionsCellStyled onClick={stopPropagation} isRowSelected={isRowSelected} showShadowAtRight={showShadowAtRight} />

            <ExtendedRowCellStyled onClick={stopPropagation} tableSize={tableSize} isRowExpanded={isRowExpanded}>
                <Wrapper tableSize={tableSize}>
                    <ExpandedRowComponent rowId={rowId} rowData={rowData} disabled={isRowClickDisabled} />
                </Wrapper>
            </ExtendedRowCellStyled>
        </>
    );
});
ExtendedRowCell.displayName = 'ExtendedRowCell';
ExtendedRowCell.Style = ExtendedRowCellStyled;