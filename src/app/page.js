import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import HomeContainer from "@/app/components/HomeContainer";

export default async function Home() {
const API_URL = `https://dummyjson.com/recipes?limit=20&skip=0`;
const response = await fetch(API_URL);
const recipesData = await response.json();
  return (
    <div>
      <Header />
      <HomeContainer recipes={recipesData.recipes}/>
      <Footer />
    </div>
  );
}
