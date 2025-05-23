import InfoRecipe from "@/app/components/InfoRecipe";
const recipe = async ({params}) => {
    const {id} = await params;
  return (
    <InfoRecipe id={id}/>
  )
}

export default recipe