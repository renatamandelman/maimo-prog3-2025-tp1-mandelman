import RecipesGrid from "@/app/components/RecipesGrid"

const HomeContainer = () => {
  return (
    <main>
    <section className="hero">
      <h1>The Best Recipes</h1>
    </section>
    <section className="recetas boxed">
      <h2>latest recipes</h2>
      <RecipesGrid/>
    </section>
  </main>
  )
}

export default HomeContainer