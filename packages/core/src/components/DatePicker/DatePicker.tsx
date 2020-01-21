import { parseToDate, WithStyle } from '@medly-components/utils';
import { format } from 'date-fns';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Calendar from '../Calendar';
import FieldWithLabel from '../FieldWithLabel';
import { Popover, PopoverWrapper } from '../Popover';
import * as Styled from './DatePicker.styled';
import { Props } from './types';

export const DatePicker: React.SFC<Props> & WithStyle = React.memo(props => {
    const { value, onChange, displayFormat, label, labelPosition, fullWidth, minWidth, required, popoverPlacement, ...restProps } = props,
        id = props.id || 'medly-datepicker',
        date: Date | null = useMemo(
            () => (value instanceof Date ? value : typeof value === 'string' ? parseToDate(value, displayFormat) : null),
            [value, displayFormat]
        );

    const [isCalendarVisible, setCalendarVisibilityState] = useState(false),
        [formatedDate, setFormatedDate] = useState('');

    useEffect(() => {
        if (date) {
            setFormatedDate(format(date, displayFormat));
            setCalendarVisibilityState(false);
        }
    }, [date]);

    const hideCalendar = useCallback(() => setCalendarVisibilityState(false), []),
        showCalendar = useCallback(() => !restProps.disabled && setCalendarVisibilityState(true), [restProps.disabled]),
        handleInputOnChange = useCallback(() => {
            return;
        }, []);

    return (
        <FieldWithLabel id={`${id}`} {...{ labelPosition, fullWidth, minWidth }}>
            {label && (
                <FieldWithLabel.Label {...{ required, labelPosition }} htmlFor={id}>
                    {label}
                </FieldWithLabel.Label>
            )}
            <PopoverWrapper
                interactionType="click"
                placement={popoverPlacement}
                showPopover={isCalendarVisible}
                onClick={showCalendar}
                onOuterClick={hideCalendar}
            >
                <Styled.Input {...restProps} required={required} id={`${id}-input`} value={formatedDate} onChange={handleInputOnChange} />
                <Popover id={`${id}-popover`}>
                    <Calendar id={`${id}-calendar`} date={date} onChange={onChange} />
                </Popover>
            </PopoverWrapper>
        </FieldWithLabel>
    );
});

DatePicker.defaultProps = {
    value: null,
    placeholder: 'Select Date',
    displayFormat: 'MM/dd/yyyy',
    disabled: false,
    required: false,
    label: '',
    labelPosition: 'left',
    fullWidth: false,
    popoverPlacement: 'bottom-start'
};
DatePicker.displayName = 'DatePicker';
DatePicker.Style = PopoverWrapper.Style;
