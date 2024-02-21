import { useEffect, useState } from "react";
import ProductCart from "../components/common/ProductCart";
import axios from "axios";
import { Link } from "react-router-dom";
import ProtectedComponent from "../components/ProtectedComponent";
import ReactPaginate from "react-paginate"

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pageCount,setPageCount] = useState(0)
  const [currentItems,setCurrentItems] = useState([])
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 4
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/v1/product/")
      .then((res) => {
        setProducts(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });

      
  }, []);


  useEffect(()=>{
  
    
    // Simulate fetching items from another resources.
    // (This could be items from props; or items loaded in a local state
    // from an API endpoint with useEffect and useState)
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(products.slice(itemOffset, endOffset))
    setPageCount(Math.ceil(products.length / itemsPerPage))
    
    
    // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    // Invoke when user click to request another page.
   
        
    },[itemOffset,itemsPerPage,products])

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
   /*  console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
        ); */
        setItemOffset(newOffset);
    };

  return (
    <>
      
      <div className="bg-primary ">
        <div className="container flex    h-[40vh] items-center text-xl text-white md:text-6xl">
          Shop
        </div>

        <div className="container flex gap-4 pb-4 font-sans text-white">
          <ProtectedComponent>
            <Link to={"/addproduct"}> Add product</Link>
            <Link to={"/upsertProduct"}>Check Product</Link>
            <Link to={"/checkorders"}>Check Orders</Link>
            <Link to={"/addTeam"}>Add Team</Link>
          </ProtectedComponent>
        </div>
      </div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className=" container grid grid-cols-1 place-content-center place-items-center gap-12  pt-24  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  ">
            {currentItems?.map((product) => (
              <ProductCart product={product} key={product._id} />
            ))}
          </div>
          <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        className="flex gap-2 pb-44  items-center justify-center "
        containerClassName=""
        pageLinkClassName=""
        previousLinkClassName="bg-primary text-white rounded-3xl p-2 min-w-[100px]"
        nextLinkClassName="bg-primary text-white rounded-3xl p-2 min-w-[200px]"
        activeLinkClassName="bg-secondary border rounded-full p-2 "
      />
        </>
      )}
    </>
  );
}
