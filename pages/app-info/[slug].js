import { useRouter } from "next/router";
import Link from 'next/link'
const Post = ({addToCart}) => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPRZ7OJLFc6xnOAtowHLTSPtSTxsz3zP8lHw&usqp=CAU"
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                Paracetamol
              </h1>
              <p className="leading-relaxed">
                Paracetamol, also known as acetaminophen, is a medication used
                to treat fever and mild to moderate pain. Common brand names
                include Tylenol and Panadol.
              </p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              </div>
              <div className="flex justify-between">
                <span className="title-font font-medium text-2xl text-gray-900">
                  ₹58.00
                </span>
                <button onClick={()=>{addToCart(slug, 1, 58, 'Paracetamol', 1, 'Tablet')}}className="flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Post;
