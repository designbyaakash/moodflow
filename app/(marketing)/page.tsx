import { Heading } from "./_components/heading";
import { Heroes } from "./_components/heroes";
import { Footer } from "./_components/footer";

const MarketingPage = () => {
  return ( 
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="text-center space-y-8">
        <Heading />
        <Heroes />
      </div>
      <Footer />
    </div>
  );
}
 
export default MarketingPage;
