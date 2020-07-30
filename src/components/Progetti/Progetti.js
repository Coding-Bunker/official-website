import React from "react";
import "./Progetti.scss"
import ProjectCard from "../ProjectCard/ProjectCard";


class Progetti extends React.Component{
    render() {
        return(
            <div className="main-container">
                <span className="titolo-progetti">Alcuni nostri progetti</span>
                <div className="container-fluid">
                    <div className="row justify-content-around">
                        <div className="col-md-auto">
                            <ProjectCard img={require("../../images/project.png")} title="Progetto 1" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit sodales nulla id" />
                        </div>
                        <div className="col-md-auto">
                            <ProjectCard img={require("../../images/test.png")} title="Progetto 1" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit sodales nulla id" />
                        </div>
                        <div className="col-md-auto">
                            <ProjectCard img={require("../../images/project.png")} title="Progetto 1" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit sodales nulla id" />
                        </div>
                    </div>
                </div>
                <div className="altri-progetti">
                    <span className="scopri-progetti">Scopri tutti i progetti</span>
                </div>

            </div>
        )
    }
}
export default Progetti