const Standing = (props) => 
{
    return(
         /*It's important to note that pop-up is displayed when showStandings is true (block)*/
         <section className={`standingsContainer overflow-y-auto fixed h-full bg-blue-600 absolute w-full z-10 top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 ${props.ShowStandings ? "block" : "hidden"}`}>
            {/*We're gonna manage whenever pop-up window has to be displayed through cross icon using setShowStandings*/}
            <svg width="38" height="38" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-auto mr-2 cursor-pointer mt-2.5 mb-5" 
                 onClick={() => props.StandingStatus(oldValue => !oldValue)}>
                <path fillRule="evenodd" clipRule="evenodd" d="M14.4175 16.8419L8.51467 10.9391C7.8452 10.2696 7.8452 9.18422 8.51467 8.51475C9.18414 7.84528 10.2696 7.84528 10.939 8.51475L16.8418 14.4176L22.7446 8.51475C23.4141 7.84528 24.4995 7.84528 25.169 8.51475C25.8385 9.18422 25.8385 10.2696 25.169 10.9391L19.2662 16.8419L25.169 22.7447C25.8385 23.4142 25.8385 24.4996 25.169 25.1691C24.4995 25.8386 23.4141 25.8386 22.7446 25.1691L16.8418 19.2663L10.939 25.1691C10.2696 25.8386 9.18414 25.8386 8.51467 25.1691C7.8452 24.4996 7.8452 23.4142 8.51467 22.7447L14.4175 16.8419Z" fill="#BFDBFE"></path>
            </svg>
            {
        
                props.StandingLeague.map((item) => 
                {
                return (
                    <div key={item.team_id} className="flex justify-around items-center mb-5 w-[700px] mobile:w-full tablets:w-full mx-auto">
                        <span className="text-sm py-0.5 px-2 rounded-2xl bg-black text-white">{item.overall_league_position}</span>
                        <img src={item.team_badge} className="w-10"/>
                        <h1 className="text-white text-sm w-[80px]">{item.team_name}</h1>
                        <h3 className="text-white font-semibold">GF <br/><span className="font-normal">{item.overall_league_GF}</span></h3>
                        <h3 className="text-white font-semibold">GA <br/><span className="font-normal">{item.overall_league_GA}</span></h3>
                        <h3 className="text-white font-semibold">PTS <br/><span className="font-normal">{item.overall_league_PTS}</span></h3>                                
                    </div>
                )
                })
            }
        </section>
     )
}
    
export default Standing;