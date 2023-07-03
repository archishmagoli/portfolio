import 'bootstrap/dist/css/bootstrap.css';
import Nav_bar from "../navbar";
import Footer from "../footer";
import Overview from "./overview";
import "../components/app.css";

export default function Project() {
    return (
      <div className="App">
        <Nav_bar />
        <Overview />
        <Footer />
      </div>
    );
}