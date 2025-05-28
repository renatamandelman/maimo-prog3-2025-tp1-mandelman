import Image from "next/image";
import Link from "next/link";
const RecipesCard = ({name,image, cuisine, id}) => {
  return (
    <div class="receta">
    <Image src={image}  width={200} height={200} alt={name}/>
        <h3>{name}</h3>
        <div>
        <div>
        <h5>{cuisine}</h5> 
        </div>
        <Link href={`/recipe/${id}`}> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10M11 8a1 1 0 0 0 1 1h.008a1 1 0 1 0 0-2H12a1 1 0 0 0-1 1m1 9a1 1 0 0 0 1-1v-5a1 1 0 1 0-2 0v5a1 1 0 0 0 1 1" clip-rule="evenodd"/></svg> </Link>
    </div>
        </div>
  )
}

export default RecipesCard