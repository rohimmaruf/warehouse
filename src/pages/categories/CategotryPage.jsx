import CatagoryFilter from "@/features/categories/CategoryFilter"
import CategoryHeader from "@/features/categories/CategoryHeader"
import CategoryStats from "@/features/categories/CategoryStats"
import CategoryTable from "@/features/categories/CategoryTable"

 const CategoryPage = () => {
    return (<>
    <CategoryHeader/>
    <CategoryStats/>
    <CatagoryFilter/>
    <CategoryTable/>
    </>)
 }

 export default CategoryPage