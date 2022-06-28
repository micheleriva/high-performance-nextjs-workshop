// import { getProducts } from "../data/products";

/*
export async function getStaticProps() {
  const products = await getProducts();
  return {
    props: {
      products,
    },
  };
}
*/

export async function getServerSideProps() {
  const req = await fetch('http://127.0.0.1:3000/api/products');
  const { products } = await req.json();

  return {
    props: {
      products,
    },
  }
}


export default function Home(props) {
  return (
    <>
      <h1 className='w-full text-center text-4xl font-bold py-36'> My store </h1>
      <div className='pb-36 grid grid-cols-4 gap-4'>
        {
          props.products.map((p) => (
            <div className='relative bg-slate-200 rounded-md' key={p.id}>
              <img src={p.thumbnail} className='w-full h-52 object-cover rounded-t-md' />
              <div className='p-4'>
                <h2 className='font-bold text-lg'> {p.title} </h2>
                <p className='text-md h-28'> {p.description} </p>

                <div className='flex justify-between'>
                  <p className='text-emerald-600 font-bold'> {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(p.price)} </p>
                  <a href={`/products/${p.id}`} className='bg-emerald-500 text-white rounded-md px-2 py-1'>Details</a>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}
