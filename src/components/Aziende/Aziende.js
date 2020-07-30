import React from "react";
import "./Aziende.scss"

class Aziende extends React.Component{
    render() {
        return(
            <div className="container-fluid">
                <div className="row justify-content-around h-100">
                    <div className="col-md-auto my-auto">
                        <img src={require("../../images/Image_3.png")} alt=""/>
                    </div>
                    <div className="col-md-auto my-auto">
                        <img src={require("../../images/Image_4.png")} alt=""/>
                    </div>
                    <div className="col-md-auto my-auto">
                        <img src={require("../../images/Image_5.png")} alt=""/>
                    </div>
                    <div className="col-md-auto my-auto">
                        <img src={require("../../images/Image_6.png")} alt=""/>
                    </div>
                </div>
            </div>
        )
    }
}
export default Aziende