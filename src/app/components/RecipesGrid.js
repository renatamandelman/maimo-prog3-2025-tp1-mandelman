import RecipesCard from '@/app/components/RecipesCard';
import parseData from '@/data/recipes';

const RecipesGrid = () => {
  

  return (
    <div className='recetas_grid recipes_grid'>
    {
      parseData.recipes.map(({id,name, image, cuisine}) => 
          <RecipesCard key={id} name={name} image={image} cuisine={cuisine}/>
      )
    }
    </div>
  )
}

export default RecipesGrid      