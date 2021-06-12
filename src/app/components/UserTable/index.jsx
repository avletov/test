import React, { useEffect, useState } from 'react';

import { summaryTableData, summaryTableHeader } from '../../datasets';

import { getColor } from '../../utils';

import { getURLByUserId } from '../../api';

import { SelectUser } from '../SelectUser';

import {
  Wrapper,
  Container,
  TableWrapper,
  Table,
  Head,
  Body,
  Row,
  Cell
} from './styles';

export const UserTable = (props) => {
  const {
    userData,
    setUserData,
    userList,
    isRecentUpdate,
    setIsRecentUpdate,
  } = props;

  const [currentUser, setCurrentUser] = useState(0);
  const [loop, setLoop] = useState();

  useEffect(() => {
    setLoop(setInterval(() => {
      getUserData();
    }, 10000));

    return function () {
      clearInterval(loop);
    }
  }, []);

  useEffect(() => {
    clearInterval(loop);
    setIsRecentUpdate(false);
    console.log('Новый пользователь');
    getUserData('new');

    if (loop) {
      setLoop(setInterval(() => {
        getUserData();
      }, 10000));
    }

    return function () {
      clearInterval(loop);
    }
  }, [currentUser]);

  const getUserData = (user) => {
    console.log(new Date());
    fetch(getURLByUserId(userList[currentUser].id_user).href)
      .then(response => response.json())
      .then(result => {
        setUserData((prev) => {
          return {
            prev: user === 'new' ? [] : prev.current,
            current: result
          }
        });
      });
  }

  return (
    <Wrapper>
      <Container>
        <SelectUser
          userList={userList}
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
        />
        <TableWrapper>
          <Table>
            <Head>
              <Row>
                {summaryTableHeader.map((item, i) => <Cell key={`cell_${i}`} color={'disable'} fontSize={'14px'}>{item}</Cell>)}
              </Row>
            </Head>
            <Body>
              {userData.current.map((item, i) => {
                const {
                  coin,
                  coin_name,
                  coin_img
                } = item;

                return (
                  <Row key={`row_${i}`}>
                    <Cell
                      width={200}
                      color={'warning'}
                      paddingLeft={'50px'}
                      coinImg={coin_img}
                    >{`${coin_name} (${coin})`}</Cell>
                    {summaryTableData.map(({ width, field }, i) => {
                      return (
                        <Cell
                          key={`field_${i}`}
                          width={width}
                          color={getColor(userData, i, field, isRecentUpdate)}
                        >{item[field]}</Cell>
                      );
                    })}
                  </Row>
                );
              })}
            </Body>
          </Table>
        </TableWrapper>
      </Container>
    </Wrapper>
  )
}