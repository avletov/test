import styled from 'styled-components';

import {
    arrowUp,
    arrowDown
} from '../../datasets';

export const Container = styled.div`
    position: absolute;
    right: 0px;
    top: -100px;
    display: flex;
    margin: 30px 0px;
`;

export const Select = styled.div`
    position: relative;
    display: inline-flex;
    height: 50px;
    padding: 0px 50px 0px 27px;
    align-items: center;
    border-radius: 30px;
    font-size: 18px;
    color: #FFFFFF;
    background-color: #303030;
    cursor: pointer;

    &:before {
        content: '';
        position: absolute;
        right: 13px;
        top: 50%;
        width: 18px;
        height: 10px;
        transform: translateY(-50%);
        background-image: ${({ isOpen }) => isOpen ? arrowUp : arrowDown};
    }
`;

export const List = styled.ul`
    position: absolute;
    top: 45px;
    padding: 0;
    list-style-type: none;
`;

export const Item = styled.li`
    display: flex;
    min-width: 200px;
    height: 50px;
    padding: 0px 5px;
    align-items: center;
    color: ${({ isActive }) => isActive ? '#19191B' : '#FFFFFF'};
    background-color: ${({ isActive }) => isActive ? '#FFFFFF' : '#22222B'};
    cursor: pointer;

    &:first-child {
        position: relative;

        &:after {
            content: ''; 
            position: absolute;
            left: 25px; 
            top: -20px;
            border: 10px solid transparent;
            border-bottom: 10px solid ${({ isActive }) => isActive ? '#FFFFFF' : '#22222B'};
        }
    }

    &:hover {
        background-color: ${({ isActive }) => isActive ? '#FFFFFF' : '#323239'}
    }
`;