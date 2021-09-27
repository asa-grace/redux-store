import React from "react";
import reducer  from "./reducers";
import Store from "./Store";


export const Provider = ({ value = [], ...props }) => {
    
    const [state, dispatch] = reducer({
        products: [],
        cart: [],
        carOpen: false,
        categories: [],
        currentCategory: '',
    });
    // use this to confirm it works!
    console.log(state);
    return <Provider Store={Store} value={[state, dispatch]} {...props} />;
};

