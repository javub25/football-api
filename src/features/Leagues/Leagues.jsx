import getLeagues from "@api/getLeagues.jsx";
import League from "@features/Leagues/League.jsx";
import Standing from "@features/Standing/Standing.jsx"
//Generate unique id for each component instance
import { v4 as uuidv4 } from 'uuid';
import React from "react";

const Leagues = () =>
{
    //State to store all standings regarding league ID
    const [standingsLeague, setStandingsLeague] = React.useState([]);
    //State to manage when standings would be show to user interface
    const [showStandings, setShowStandings] = React.useState(false);
    const LeaguesList = getLeagues();
    const LeaguesToFind = [
        {
            id: uuidv4(),
            name: "Serie A",
            country: "Italy"
        },
        {
            id: uuidv4(),
            name: "La Liga",
            country: "Spain"
        },
        {
            id: uuidv4(),
            name: "Premier League",
            country: "England"
        },
        {
            id: uuidv4(),
            name: "Ligue 1",
            country: "France"
        },
        {
            id: uuidv4(),
            name: "Bundesliga",
            country: "Germany"
        }
    ]

    return(
        <>
            <h1 className="text-[40px] font-bold my-8 mobile:text-[30px] relative text-white">LEAGUES</h1>
            <main className="bg-white shadow-2xl shadow-black rounded-md pb-5">
                {/*Leagues container would be erase whenever standing pop-up window is opened, otherwise it will be displayed*/}
                <section className={`grid grid-cols-5 items-center mobile:grid-cols-1 tablets:grid-cols-3 leagues ${showStandings ? "hidden" : "block"}`}>
                    {LeaguesList.map((item) => 
                        {
                            const leaguefound = LeaguesToFind.find((league => item.league_name === league.name && item.country_name === league.country))

                            if(leaguefound)
                            {
                                return(
                                    <League 
                                        key={leaguefound.id}
                                        league_logo={item.league_logo}
                                        league_id = {item.league_id}
                                        league_country={item.country_name}
                                        country_logo = {item.country_logo}
                                        standings = {setStandingsLeague}
                                        StandingStatus = {setShowStandings}
                                    />   
                                )
                            }            
                        })
                    }   
                </section>
                {/*When we have standings to show the following pop-up window will appear*/}
                {standingsLeague.length!==0 &&
                    <Standing 
                        StandingStatus = {setShowStandings}
                        ShowStandings = {showStandings}
                        StandingLeague = {standingsLeague}
                    />
                }
            </main>
        </>
    )   
}

export default Leagues;
