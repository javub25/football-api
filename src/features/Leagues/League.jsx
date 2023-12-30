import getStandings from "@api/getStandings.jsx"

const League = (props) => 
{ 
    const showStandings = (id, StandingStatus) => 
    {
        StandingStatus(oldValue => !oldValue)
        getStandings(id, props.standings);
    }   
       
    return(
        <>
            <article className="p-8">
                <header>
                    <img src={props.league_logo} className="mx-auto w-28"/>
                </header>

                <section className={`flex items-center w-[100px] mx-auto mt-8`}>
                    <img src={props.country_logo} className={`${props.country_logo === "https://apiv3.apifootball.com/badges/logo_country/44_england.png" ? "h-[16px]": "h-none"} w-6 mr-[15px]`}/>
                    <h1 className="text-[19px]">{props.league_country}</h1>
                </section>
                <footer className="mt-4">
                    <button onClick={() => showStandings(props.league_id, props.StandingStatus)} className="text-[15px] bg-cyan-600 p-2 text-white w-[170px] tablets:w-full mobile:w-full block">
                        More Details
                    </button>
                </footer>
            </article>
        </>
    )
}
export default League;