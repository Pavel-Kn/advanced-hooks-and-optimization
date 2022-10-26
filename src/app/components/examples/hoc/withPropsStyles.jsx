import React from "react";
import CardWrapper from "../../common/Card";

const withPropsStyles = function (Component) {
    return function (props) {
        return (
            <CardWrapper>
                <Component {...props} name="new Name" />
            </CardWrapper>
        );
    };
};

export default withPropsStyles;
