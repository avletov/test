import React from 'react';

import { selectColor, getSum } from '../../utils';

import {
    List,
    Term,
    Definition,
} from './styles'

export const SumList = (props) => {
    const {
        userData,
        coinList,
        isRecentUpdate
    } = props;

    const { prev, current } = userData;

    return (
        <List>
            {coinList.map(({ name, field, currency }, i) => {
                const sumCurrent = getSum(current, field);
                const sumPrev = getSum(prev, field);

                return (
                    <React.Fragment key={`term_${i}`}>
                        <Term
                            opacity={0.5}
                        >{name}</Term>
                        <Definition
                            color={prev[i] && isRecentUpdate ? selectColor(sumPrev, sumCurrent) : ''}
                        >{`${sumCurrent.toFixed(5)} ${currency}`}</Definition>
                    </React.Fragment>
                );
            })}
        </List>
    );
}