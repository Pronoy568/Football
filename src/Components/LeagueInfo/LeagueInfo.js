import React from 'react';

const LeagueInfo = (props) => {

    const {strLeague,idAPIfootball,strBadge,strSport} = props.league;
    const imgStyle ={
        height: '200px',
        width:'200px',
    }
    return (
        <div>
            <img style={imgStyle} src={strBadge}/>
            <h2><small>Sports type :{strSport}</small></h2>
        </div>
    );
};

export default LeagueInfo;