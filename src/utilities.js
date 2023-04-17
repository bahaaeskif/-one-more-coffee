import SearchInput from "./components/search/SearchInput"


/* Search Section */
export const filterArray = (FilterArray, filter) => {
    var newFilterArray = FilterArray.filter((filterItem) => {
        return filter.filterByName ? filterItem.title?.includes(filter.filterByName) : true
    }).filter((filterItem) => {
        return filter.filterByDesc ? filterItem.descreption?.includes(filter.filterByDesc) : true
    }).filter((filterItem) => {
        return filter.filterByPriceLow ? +filterItem?.price >= filter.filterByPriceLow : true
    }).filter((filterItem) => {
        return filter.filterByPriceHigh ? +filterItem?.price <= filter.filterByPriceHigh : true
    }).filter((filterItem) => {
        return filter.filterByCategory.value ? filterItem?.category === filter.filterByCategory.value : true
    })
    return newFilterArray
}

// export const returnSearchInput = (htmlFor, type, name, hundelChange, value, inputStyle, label, placeholder) => {
//     return <SearchInput htmlFor={htmlFor} type={type} name={name} hundelChange={hundelChange} value={value} inputStyle={inputStyle} label={label} placeholder={placeholder} />
// }
