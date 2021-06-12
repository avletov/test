import styled from 'styled-components';

export const List = styled.dl`
    margin-top: 90px;
    font-size: 18px;
    font-weight: 400;
`;

export const Term = styled.dt`
    width: 270px;
    height: 35px;
    opacity: ${({ opacity }) => opacity ? opacity : '1'};
    float: left;
	clear: both;
`;

export const Definition = styled.dd`
    height: 35px;
    color: ${({ color }) => color === 'danger' ? '#DF2828' :
        color === 'success' ? '#4CAA3C' : ''};
`;