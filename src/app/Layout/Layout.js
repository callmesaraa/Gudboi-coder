import MainNavigation from "./MainNavigation";
import Footer from "../../components/footer/Footer";
function Layout(props) {
  return (
    <div>
      <MainNavigation className="fixed z-10" />
      <main className="w-full">{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
