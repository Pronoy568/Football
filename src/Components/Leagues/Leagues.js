import React, { useEffect, useState } from 'react';
import LeagueInfo from '../LeagueInfo/LeagueInfo';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Leagues = (props) => {
    const {idLeague,strLeague,strLeagueAlternate} = props.leagues;
    const [leagues,setLeagues] = useState([]);
    const history = useHistory();
        const showDetails = idLeague => {
        const url = `/leagues/${idLeague}`;
        history.push(url);
    }

    useEffect(()=>{
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`)
        .then(response => response.json())
        .then(data =>{
            setLeagues(data.leagues)})       
    },[])
    const midStyle ={
      border: '3px solid gray',
      padding: '10px',
      margin : '10px',
      backgroundColor: 'gray',
      borderRadius: '10px',
    }
    return (
        <div style={midStyle}>
        {
            leagues.map(league=> <LeagueInfo league={league}></LeagueInfo>)
        }
            <h2>{strLeagueAlternate}</h2>
            <Button onClick={() => showDetails(idLeague)} variant="info">Explore</Button>
        </div>
    );
};

export default Leagues;