import { defaultTheme, IconSizes, IconTheme } from '@medly-components/theme';
import { color, select } from '@storybook/addon-knobs';
import React from 'react';
import IconContainer from './IconContainer';
import { AccountIcon } from './icons/AccountIcon';
import { AddIcon } from './icons/AddIcon';
import { BugIcon } from './icons/BugIcon';
import BurgerIcon from './icons/BurgerIcon';
import { CheckCircleIcon } from './icons/CheckCircleIcon';
import { CheckIcon } from './icons/CheckIcon';
import { ClearIcon } from './icons/ClearIcon';
import { ClipboardIcon } from './icons/ClipboardIcon';
import { ContractIcon } from './icons/ContractIcon';
import { DeleteIcon } from './icons/DeleteIcon';
import { DownArrowIcon } from './icons/DownArrowIcon';
import { DownloadIcon } from './icons/DownloadIcon';
import { DropDownIcon } from './icons/DropDownIcon';
import { EditIcon } from './icons/EditIcon';
import { ExclamationCircleIcon } from './icons/ExclamationCircleIcon';
import { ExclamationTriangleIcon } from './icons/ExclamationTriangleIcon';
import { ExpandLessIcon } from './icons/ExpandLessIcon';
import { ExpandMoreIcon } from './icons/ExpandMoreIcon';
import { FileIcon } from './icons/FileIcon';
import { FileUploadIcon } from './icons/FileUploadIcon';
import { GearIcon } from './icons/GearIcon';
import { HomeIcon } from './icons/HomeIcon';
import { InfoCircleIcon } from './icons/InfoCircleIcon';
import { SearchIcon } from './icons/SearchIcon';
import { SliderIcon } from './icons/SliderIcon';
import { SyncIcon } from './icons/SyncIcon';
import { UpArrowIcon } from './icons/UpArrowIcon';
import { Props, SVGProp } from './SvgIcon/types';

const size: IconSizes[] = ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'];
const defaultColor = defaultTheme.icon.defaultColor;

export const ThemeInterface = (props: IconTheme): any => null;

export const Basic = (props: Omit<Props, keyof SVGProp>) => (
    <IconContainer>
        <AddIcon key="add" size={select('Size', size, 'M')} color={color('Color', defaultColor)} />
        <AccountIcon key="account" size={select('Size', size, 'M')} color={color('Color', defaultColor)} />
        <BugIcon key="bug" size={select('Size', size, 'M')} color={color('Color', defaultColor)} />
        <BurgerIcon key="bug" size={select('Size', size, 'M')} color={color('Color', defaultColor)} />
        <ClearIcon key="clear" size={select('Size', size, 'M')} color={color('Color', defaultColor)} />
        <ClipboardIcon key="clipboard" size={select('Size', size, 'M')} color={color('Color', defaultColor)} />
        <CheckIcon key="check" size={select('Size', size, 'M')} color={color('Color', defaultColor)} />
        <ContractIcon key="contract" size={select('Size', size, 'M')} color={color('Color', defaultColor)} />
        <CheckCircleIcon key="checkcircle" size={select('Size', size, 'M')} color={color('Color', defaultColor)} />
        <DownloadIcon key="download" size={select('Size', size, 'M')} color={color('Color', defaultColor)} />
        <DeleteIcon key="delete" size={select('Size', size, 'M')} color={color('Color', defaultColor)} />
        <GearIcon key="gear" size={select('Size', size, 'M')} color={color('Color', defaultColor)} />
        <InfoCircleIcon key="infocircle" size={select('Size', size, 'M')} color={color('Color', defaultColor)} />
        <DownArrowIcon key="downarrow" size={select('Size', size, 'M')} color={color('Color', defaultColor)} />
        <DropDownIcon key="drpdown" size={select('Size', size, 'M')} color={color('Color', defaultColor)} />
        <EditIcon key="editicon" size={select('Size', size, 'M')} color={color('Color', defaultColor)} />
        <ExclamationTriangleIcon key="exclamationTriangle" size={select('Size', size, 'M')} color={color('Color', defaultColor)} />
        <ExclamationCircleIcon key="exclamationCircle" size={select('Size', size, 'M')} color={color('Color', defaultColor)} />
        <HomeIcon key="home" size={select('Size', size, 'M')} color={color('Color', defaultColor)} />
        <ExpandLessIcon key="expandLess" size={select('Size', size, 'M')} color={color('Color', defaultColor)} />
        <ExpandMoreIcon key="expandMore" size={select('Size', size, 'M')} color={color('Color', defaultColor)} />
        <FileIcon key="file" size={select('Size', size, 'M')} color={color('Color', defaultColor)} />
        <UpArrowIcon key="upArrow" size={select('Size', size, 'M')} color={color('Color', defaultColor)} />
        <FileUploadIcon key="fileUpload" size={select('Size', size, 'M')} color={color('Color', defaultColor)} />
        <SearchIcon key="search" size={select('Size', size, 'M')} color={color('Color', defaultColor)} />
        <SliderIcon key="slider" size={select('Size', size, 'M')} color={color('Color', defaultColor)} />
        <SyncIcon key="sync" size={select('Size', size, 'M')} color={color('Color', defaultColor)} />
    </IconContainer>
);