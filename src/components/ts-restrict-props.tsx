import React from 'react';

// when we want to pass only 1 prop to a component (isOver20 | isOver50) we can restrict the props

const RestrictProps = () => {
    const number = Math.round(Math.random() * 100);
    const isOver20 = number > 20;
    const isOver50 = number > 50;
    return <RandomNumber number={number} isOver20={isOver20} isOver50={isOver50} />;
}

type RandomNumberProps = {
    number: number;
    isOver20?: boolean;
    isOver50?: boolean;
}

const RandomNumber = ({ number, isOver20, isOver50 }: RandomNumberProps) => {
    return <div>
        {number} {isOver50 && <span>Yes! im reach!</span>} {isOver20 && <span>ohh! I'm poor :(</span>}
    </div>;
}

/* VS Restricted 

const RestrictProps = () => {
    const number = Math.round(Math.random() * 100);
    const isOver20 = number > 20;
    const isOver50 = number > 50;
    return <RandomNumber number={number} isOver20={isOver20}/>;
}

type RandomNumberTypeProps = {
    number: number;
}
type Over20 = RandomNumberTypeProps & { 
    isOver20: boolean; isOver50?: never; 
};
type Over50 = RandomNumberTypeProps & { 
    isOver20?: never; isOver50: boolean; 
};
type RandomNumberRestictProps = Over20 | Over50;

const RandomNumber = ({ number, isOver20, isOver50 }: RandomNumberRestictProps) => {
    return <div>
        {number} {isOver50 && <span>Yes! im reach!</span>} {isOver20 && <span>ohh! I'm poor :(</span>}
    </div>;
}
*/
export default RestrictProps;