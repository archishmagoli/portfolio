import 'bootstrap/dist/css/bootstrap.css';
import Nav_bar from "./components/navbar";
import Fader from "./components/header";
import Project_Overview from './components/projects';

export default function Home() {
  return (
    <>
      <Nav_bar />
      <Fader />
      <Project_Overview />
    </>
  );
}
