import React, { Component } from 'react';
import accomodations from '../../data/accomadations.json';
import Card from '../Card/Card';
import './CardList.css';

export class CardList extends Component {
  render() {
    return (
      <div className='cardList'>
        {accomodations.map(({id, title}) =>
        (
            <Card 
            key={id}
            title={title}
            ></Card>
        ))}
      </div>
    )
  }
}

export default CardList