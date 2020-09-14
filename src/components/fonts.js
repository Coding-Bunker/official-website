import React from "react"
import { Helmet } from "react-helmet"
import { GoogleFont, TypographyStyle } from "react-typography"

import TypograpyInstance from "../utils/typography"

const Fonts = () => (
        <Helmet>
                <TypographyStyle typography={TypograpyInstance} />
                <GoogleFont typography={TypograpyInstance} />
        </Helmet>
);

export default Fonts;