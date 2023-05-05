import React, { Component } from 'react';
import accomodations from '../../data/accomadations.json';
import Card from '../Card/Card';
import './CardList.css';

export class CardList extends Component {
  render() {
    return (
      <div className='cardList'>
        {accomodations.map(({id, title, cover}) =>
        (
            <Card 
            key={id}
            title={title}
            id={id}
            cover={cover}
            ></Card>
        ))}
      </div>
    )
  }
}

export default CardList