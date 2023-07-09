export const selectCategoriesMap = (state) => {
console.log('selector fired')
return state.selectCategories.categories.reduce((acc,docSnapshot) => {
    const { title, items } =docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
   }, {})
}
   