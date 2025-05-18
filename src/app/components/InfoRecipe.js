import Link from "next/link";

const InfoRecipe = ({name}) => {
    return(
          <main class="recipe">
        <section class="hero">
        <Link class="cornerIcon" href="./HomeContainer.js"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m4 10l-.707.707L2.586 10l.707-.707zm17 8a1 1 0 1 1-2 0zM8.293 15.707l-5-5l1.414-1.414l5 5zm-5-6.414l5-5l1.414 1.414l-5 5zM4 9h10v2H4zm17 7v2h-2v-2zm-7-7a7 7 0 0 1 7 7h-2a5 5 0 0 0-5-5z"/></svg></Link>
         <h1>{name}</h1>
        </section>
        <section class="extraInfo">

        </section>
          <section class="informationSection">
         <div class="information">

         </div>

          </section>
    </main>
    )

}

export default InfoRecipe;