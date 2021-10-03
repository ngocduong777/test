import React from 'react';
import { Link } from 'react-router-dom';
import './CardItem.css';

function CardItem() {
    return (
        <>
            <div className="How">
                <h2>how to play</h2>
                <p>プレイヤーは、障害を乗り越えるための武器や能力を手に入れることができます。
                    ただし、1回しか使用できません。武器は出現回数は無制限です。
                    走っている間、武器はランダムに出現します。
                </p>
            </div>


        </>
    )
}

export default CardItem;
