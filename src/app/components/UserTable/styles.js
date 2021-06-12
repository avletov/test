import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Container = styled.div`
    display: inline-block;
    position: relative;
    margin-top: 80px;
`;

export const TableWrapper = styled.div`
    display: inline-block;
    padding: 0px 16px;
    border-radius: 16px;
    background-color: #303030;
`;

export const Table = styled.table`
    table-layout: fixed;
    border-collapse: collapse;
    font-family: 'Rubik';
`;

export const Head = styled.thead``;

export const Body = styled.tbody``;

export const Row = styled.tr`
    border-bottom: 1px solid rgb(255, 255, 255, 0.1);

    &:first-child {
        border-bottom: 1px solid rgb(255, 255, 255, 0.1) !important;
    }

    &:last-child {
        border-bottom: none;
    }
`;

export const Cell = styled.td`
    padding: 20px 20px;
    padding-left: ${({ paddingLeft }) => paddingLeft ? paddingLeft : ''};
    box-sizing: border-box;
    text-align: center;
    font-size: ${({ fontSize }) => fontSize ? fontSize : '16px'};
    color: ${({ color }) => color === 'danger' ? '#DF2828' :
        color === 'success' ? '#4CAA3C' :
            color === 'disable' ? 'rgb(255, 255, 255, 0.5)' : ''};
    background-color: #303030;        
}

    &:first-child {
        text-align: left;
    }

    &:nth-child(even) {
        background-color: rgba(255, 255, 255, 0.05);
    }

    ${({ coinImg }) => {
        return (
            coinImg ?
                `position: relative;

                &:before {
                    content: '';
                    display: block;
                    position: absolute;
                    width: 20px;
                    height: 20px;
                    left: 15px;
                    top: 50%;
                    transform: translateY(-50%);
                    background-image: url(${coinImg});\
                    background-repeat: no-repeat;
                    background-size: contain;
                }` : ''
        );
    }}

    ${({ color }) => color === 'warning' ? `
        color: transparent;    
        -webkit-background-clip: text;
        background-clip: text;
        background-image: linear-gradient(to right, #FFCB44, #F89521);
        `: ''};
`;