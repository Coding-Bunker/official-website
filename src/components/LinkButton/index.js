import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { faCircle } from "@fortawesome/free-solid-svg-icons"

const LinkButton = ({ link, icon }) => (
        <Link to={link}>
                <span style={{
                        position: "relative",
                        display: "inline-block"
                }}>
                        <FontAwesomeIcon
                                textAnchor="middle" alignmentBaseline="middle"
                                icon={faCircle}
                                inverse
                                size={"2x"}
                        />
                        <FontAwesomeIcon
                                textAnchor="middle" alignmentBaseline="middle"
                                icon={icon}
                                size={"1x"}
                                style={{
                                        position: "absolute",
                                        left: "0.249em",
                                        top: "0.28em",
                                        fontSize: "1.3em",
                                }}

                        />
                </span>
        </Link>
);

export default LinkButton