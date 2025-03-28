import "./App.css";
import Header from './components/header/Header';
import AnimatedCursor from "react-animated-cursor";
import HomePage from "./components/home/HomePage.tsx";
// import QualificationPage from "./components/qualifications/QualificationsPage.tsx";
import Footer from "./components/footer/Footer.tsx";
import Contact from "./components/contact/ContactPage.tsx";
import About from "./components/about/AboutPage.tsx";
import Projects from "./components/projects/Projects.tsx";
import TechnologiesPage from "./components/technologies/TechnologiesPage.tsx";
import QualificationPage from "./components/qualifications/QualificationsPage.tsx";

const App = () => {

    return (
        <>
            <Header/>
            <main className='main'>
                <AnimatedCursor/>
                {/*<AnimeBackground/>*/}
                <HomePage/>
                <About/>
                <QualificationPage/>
                <TechnologiesPage/>
                <Projects/>
                <Contact/>
                <Footer/>
            </main>
        </>
    )
}

export default App