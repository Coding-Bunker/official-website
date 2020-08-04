import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { faCircle } from "@fortawesome/free-solid-svg-icons"

const LinkButton = ({ link, icon }) => (
        <Link to={link}>
                <span style={{
                        position: "relative",
                        display: "block",
                        height: "32px"
                }}>
                        <FontAwesomeIcon
                                inverse
                                textAnchor="middle"
                                alignmentBaseline="middle"
                                icon={faCircle}
                                size={"2x"}
                        />
                        <FontAwesomeIcon
                                textAnchor="middle"
                                alignmentBaseline="middle"
                                icon={icon}
                                size={"1x"}
                                style={{
                                        position: "absolute",
                                        left: "50%",
                                        top: "50%",
                                        fontSize: "1.3em",
                                        width: "1em",
                                        height: "1em",
                                        transform: "translate(-50%, -50%)"
                                }}

                        />
                </span>
        </Link>
);

export default LinkButton