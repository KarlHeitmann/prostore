import ProductList from "@/components/shared/product/product-list";
import sampleData from "@/db/sample-data";
// CODE TO TEST LOADER
// const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export const metadata = {
  title: "HOME",
};

// CODE TO TEST LOADER
// const Homepage = async () => {
//   await delay(2000)
const Homepage = () => {
  console.log(sampleData);
  return (
    <>
      <ProductList
        data={sampleData.products}
        title="Newest Arrivals"
        limit={4}
      />
    </>
  );
};

export default Homepage;
