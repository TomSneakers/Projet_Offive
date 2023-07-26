import React from "react";

export const Context = React.createContext();

const FilterProvider = ({ children }) => {
    const categories = ["Women", "Men", "Kids", "Accessories"];
    const filters = ['Top', 'Bottom', 'Jacket'];
    const [category, setCategory] = React.useState(categories[0].toLocaleLowerCase());
    const [filtersChecked, setFiltersChecked] = React.useState({ Top: false, Bottom: false, Jacket: false });
    const updateCategory = (value) => setCategory(value);
    const updateFilters = (e) => setFiltersChecked(prevState => ({ ...prevState, [e.target.name]: e.target.checked }));

    const filtersKeys = () => {
        return Object.entries(filtersChecked).map(([key, value]) => value && key).filter((obj) => !!obj)

    }
    const value = React.useMemo(() => {
        return { categories, filters, updateCategory, category, updateFilters, filtersChecked: filtersKeys() };
    }, [category, filtersChecked]);

    return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const withContext = (WrappedComponent) => {
    return () => (
        <Context.Consumer>
            {(value) => <WrappedComponent value={value} />}
        </Context.Consumer>
    );
};

export default FilterProvider;
