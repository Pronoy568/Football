import React, { useEffect, useState } from 'react';
import Leagues from '../Leagues/Leagues';
import './Middle.css';

const Middle = () => {
    const [team , setTeam] = useState([]);

    useEffect(()=>{
        const url=`https://www.thesportsdb.com/api/v1/json/1/all_leagues.php`;
        fetch(url)
        .then(res => res.json())
        .then(data =>setTeam(data.leagues))
    },[])
    const team15 = team.slice(0,15);

    // const midStyle ={
    //     display: 'grid',
    //     gridTemplateColumns: 'repeat(3,490px)',
    //     gridGap:'10px',
    //     backgroundColor: 'green',
    //   }
    return (
        <div className="midStyle" >
         {
             team15.map(leagues =><Leagues leagues={leagues}></Leagues>)
         }
        </div>
    );
};

export default Middle;