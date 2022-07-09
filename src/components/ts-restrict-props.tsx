import React from 'react';

const RestrictProps = () => {
    const number = Math.round(Math.random() * 100);
    const isOver20 = number > 20;
    const isUnder80 = number < 80;
    return <RandomNumber number={number} isOver20={isOver20} isUnder80={isUnder80} />;
}

type RandomNumberProps = {
    number: number;
    isOver20?: boolean;
    isUnder80?: boolean;
}

const RandomNumber = ({ number, isOver20, isUnder80 }: RandomNumberProps) => {
    return <>
        <h1>RestrictProps</h1>
        <h4>Typescript - when we want to pass only 1 prop to a component (isOver20 | isUnder80) we can restrict the props</h4>
        <div>
            {number} {isOver20 && <span>over 20 - Yes! im reach!</span>} {isUnder80 && <span>under 80 - ohh! I'm poor :(</span>}
        </div>
    </>;
}

/* VS Restricted 


const RestrictProps = () => {
    const number = Math.round(Math.random() * 100);
    const isOver20 = number > 20;
    const isUnder80 = number < 80; // cant pass isUnder80 with isOver20 together
    return <>
    <RandomNumber number={number} isOver20={isOver20} />
    </>;
}

type RandomNumberTypeProps = {
    number: number;
}
type Over20 = RandomNumberTypeProps & { 
    isOver20: boolean; isUnder80?: never; 
};
type Over50 = RandomNumberTypeProps & { 
    isOver20?: never; isUnder80: boolean; 
};
type RandomNumberRestictProps = Over20 | Over50;

const RandomNumber = ({ number, isOver20, isUnder80 }: RandomNumberRestictProps) => {
    return <div>
        {number} {isOver20 && <span>over 20 - Yes! im reach!</span>} {isUnder80 && <span>under 80 - ohh! I'm poor :(</span>}
    </div>;
}
*/
export default RestrictProps;