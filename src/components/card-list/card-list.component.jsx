import React from 'react'
import Card from '../card/card.component'
import classes from './card-list.module.css'

export const CardList = (props) => {

    return (
        <div className={classes.cardList}>     
        {
            props.monsters.map(monster => (
                    <Card key={monster.id} monster={monster}/>
            ))
        }
        </div>)


}