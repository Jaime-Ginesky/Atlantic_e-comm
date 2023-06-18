import { createContext, useState, useEffect } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";


export const CategoriesContext = createContext({
    categoriesMap: {},

});


export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({});
   
    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            console.log(categoryMap);
        }
        getCategoriesMap();
        
    }, []);
 /*    useEffect(() => {
        addCollectionAndDocuments('categories', SHOP_DATA);
    }, []);
    console.log('done'); */
    const value = { categoriesMap };
    return (
        <CategoriesContext.Provider value ={value}> {children} </CategoriesContext.Provider>
    );
};