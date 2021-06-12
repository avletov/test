import React, { useState } from 'react';
import {
    Container,
    Select,
    List,
    Item
} from './styles';

export const SelectUser = ({ userList, currentUser, setCurrentUser }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handlerOnClick = (i) => {
        setCurrentUser(i);
        setIsOpen(false);
    }

    return (
        <Container>
            <Select
                isOpen={isOpen}
                onClick={() => setIsOpen(!isOpen)}
            >{userList[currentUser].name}</Select>
            {isOpen ?
                <List>
                    {
                        userList.map(({ name }, i) => {
                            return (
                                <Item onClick={() => handlerOnClick(i)}
                                    key={`item_${i}`}
                                    isActive={currentUser === i}
                                >{name}</Item>
                            );
                        })
                    }
                </List> :
                ''}
        </Container>
    );
}