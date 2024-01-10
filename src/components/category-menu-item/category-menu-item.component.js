

import { BackgroundImage, CategoryMenuItemContainer, Body } from "./category-menu-item.styles";

// import { useNavigate } from "react-router-dom";

const CategoryMenuItem = ({ category }) => {
    const { imageUrl, title } = category;
    // const navigate = useNavigate();
   
    // const onNavigateHandler = () => navigate(route);

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