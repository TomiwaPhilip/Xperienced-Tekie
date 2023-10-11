import Button from "../../../components/shared/Button";
import Card from "../../../components/shared/Card";

const Home = () => (
    <section>
        <div className="mt-[100px] max-sm:mt-[50px]">
            <div className="text-center main mx-auto">
                <h1 className="px-6 text-[70px] max-sm:text-[50px] font-[900] gradient_text">
                    <span className="">Build. </span>
                    <br className="md:hidden"/>
                    <span className="">Collaborate. </span>
                    <br className="md:hidden"/>
                    <span>Xperience.</span>
                </h1>
                <p className="px-6 text-[30px] max-sm:text-[20px] leading-9 flex mx-6 font-[700]">
                    Build what we build in Real World, receive mentorship and guidance by
                    collaborating on projects that mirror real world for six weeks! 
                </p>
                <br />

                <p className="px-6 text-[30px] max-sm:text-[20px] leading-9 flex mx-6 font-[400]">
                     Don't go to the real world unprepared!
                     Our goal is to get every Tekie to become Xperienced, Bold, and 
                     Sharp by building projects that is bigger than their capacity.  
                </p>
                <br /> <br />
                
                <Button 
                    params={"font-semibold p-4 btn mt-5 text-[24px] cursor-pointer gradient_dark rounded-full drop-shadow-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 duration-300"}
                    name={"Join Us Build"}
                    svg={<svg className="inline" width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

                    <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                    
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                    
                    <g id="SVGRepo_iconCarrier"> <path d="M6.5 12H17" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M12.9117 8L17.5 12L12.9117 16" stroke="#007bff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> </g>
                    
                    </svg>}
                    link={"/sign-up"}
                />
            </div>


            <div className="">
                <h1>
                    Here are our programs...
                </h1>
                <Card />
            </div>
        </div>


    </section>
)

export default Home;