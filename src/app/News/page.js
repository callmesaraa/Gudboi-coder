import Banner from "../../components/news/Banner";
import AllNews from "../../components/news/AllNews";
import LastestNews from "../../components/news/LastestNews";
import Footer from "../../components/footer/Footer";

export default function News() {
  return (
    <div>
      <Banner />
      <div className="mx-auto container">
        <LastestNews />
        <div className="h-[1px] bg-black mx-24"></div>
        <AllNews />
      </div>
    </div>
  );
}
