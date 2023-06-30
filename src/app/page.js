import 'bootstrap/dist/css/bootstrap.css';
import Nav_bar from "./components/navbar";
import Header from "./components/about";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="App">
      <Nav_bar />
      <Header />
      <Footer />
    </div>
  );
}
