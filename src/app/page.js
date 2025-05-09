import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import HomeContainer from "@/app/components/HomeContainer";

export default async function Home() {
  return (
    <div>
      <Header/>
      <HomeContainer/>
      <Footer />
    </div>
  );
}
