import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Checkout Epic Options</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img10.png'
              text='Medical prescription for your Health issues'
              label='Prescription'
              path='/services'
            />
            <CardItem
              src='images/video.jpg'
              text='Book a Video Consultation'
              label='Video Consultation'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img11.png'
              text='Get your Medicines Delivered At your Door-Step'
              label='Delivery'
              path='/services'
            />
            <CardItem
              src='images/img12.jpg'
              text='Benefits of Moving Towards online Consultation'
              label='Uses'
              path='/services'
            />
            <CardItem
              src='images/prescription.jpg'
              text='Get your E-Prescription for your Issues.'
              label='E-Prescriptions'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;