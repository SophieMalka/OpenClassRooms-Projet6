import Banner from "../../components/banner";
import Collapse from "../../components/collapse";
import aboutData from "../../assets/data/about.json";
import "./style.css";

function About() {
    return (
        <main>
            <Banner page="about" />
            <section className="collapse">
                {aboutData.map(({ title, description }, index) => (
                    <Collapse
                        key={`${title}-${index}`}
                        collapseTitle={<h2>{title}</h2>}
                        collapseDescription={description}
                    />
                ))}                       
            </section>
        </main>
    )
};

export default About