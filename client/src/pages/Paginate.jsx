import axios from "axios";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate"
import userSlice from "../app/slice/userSlice";
export default function Paginate() {
 const [posts , setPosts] = useState([])
 const [pageCount,setPageCount] = useState(0)
 const [currentItems,setCurrentItems] = useState([])
 const [itemOffset, setItemOffset] = useState(0);
 const itemsPerPage = 2

 useEffect(()=>{
  axios.get("https://jsonplaceholder.typicode.com/posts").then(res=>setPosts(res.data))
  .catch(err=>console.log(err))

 },[])
 useEffect(()=>{
  
    
    // Simulate fetching items from another resources.
    // (This could be items from props; or items loaded in a local state
    // from an API endpoint with useEffect and useState)
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(posts.slice(itemOffset, endOffset))
    setPageCount(Math.ceil(posts.length / itemsPerPage))
    

    // Invoke when user click to request another page.
   
        
    },[itemOffset,itemsPerPage,posts])
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % posts.length;
       /*  console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
            ); */
            setItemOffset(newOffset);
        };
        return (
    <>

    <div className="container">
         {currentItems.map((data,index) =>(
            <div key={data.title}>
               {data.title}
            </div>
        ))   
                  
            
        }


    </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        className="flex gap-2"
        containerClassName=""
        pageLinkClassName=""
        previousLinkClassName=""
        nextLinkClassName=""
        activeLinkClassName=""
      />
    </>
  );
}
