import React from "react";
import axiosInstance from "@api/axiosInstance.jsx";
import apiKey from "@api/apiKey.jsx"

const getLeagues = () =>
{
    const [leagues, setLeagues] = React.useState([]);

    React.useEffect(() => {
        axiosInstance.get(`?action=get_leagues&APIkey=${apiKey()}`)
            .then(res => 
            {
                setLeagues(res.data);
            })
            .catch(err => 
            {
                throw new Error(err);
            })
    }, [])

    return leagues;
}

export default getLeagues;