import MainContentSolution from "../Components/MainContentSolution";
import ContactSolution from "../Components/MainContentSolution/ContactSolution"; 

export default function Solution(){
    return <div class = "">
        <img class = "w-full h-2/6"
        src = 'https://scontent.xx.fbcdn.net/v/t1.15752-9/410648940_703391631885798_5626342737657457557_n.jpg?stp=dst-jpg_p403x403&_nc_cat=101&ccb=1-7&_nc_sid=510075&_nc_eui2=AeEXKoqPXYuiQo13C2Iz8gWRITbkmtmutJkhNuSa2a60mbSF8gWNUwtzpTBd3BqGZYGXa2WQ5f2YntmtdPmyqUl-&_nc_ohc=pe1bq_i8SDcAX8T8qGJ&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdS4F9oBlVfNcJL2Y9JTF1u-zANrfb_eO7CzqJ4zqko_7w&oe=65A85CA5'/>
        <MainContentSolution />
        <ContactSolution/>
    </div>
}