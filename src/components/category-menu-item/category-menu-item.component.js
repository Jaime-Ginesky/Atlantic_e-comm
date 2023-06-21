import { BackgroundImage, CategoryMenuItemContainer, Body } from "./category-menu-item.styles";

const CategoryMenuItem = ({ category }) => {
    const { imageUrl, title } = category;
   return (
    <CategoryMenuItemContainer>
    <BackgroundImage
     imageUrl={imageUrl} />
   <Body>
      <h2>{title}</h2>
      <p>Shop Now</p>
    </Body>
  </CategoryMenuItemContainer>
   )
}

export default CategoryMenuItem;