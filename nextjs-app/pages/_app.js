import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className='w-full min-h-screen bg-slate-50'>
      <div className='w-10/12 m-auto'>
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
