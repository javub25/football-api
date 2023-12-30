import axiosInstance from "@api/axiosInstance.jsx";
import apiKey from "@api/apiKey.jsx"

const getStandings = (leagueID, setStandings) => 
{
    axiosInstance.get(`?action=get_standings&league_id=${leagueID}&APIkey=${apiKey()}`)
        .then(res => 
        {
            setStandings(res.data)
        })
        .catch(err => 
        {
            throw new Error(err)
        })   
}

export default getStandings;