import '../App.css';
import {  useSelector, useDispatch } from "react-redux";
import { addItem, removeItem, clearItems } from '../store/Actions/actions'
import React, { useEffect, useState } from 'react'
import store from '../store/index'
import gsap from 'gsap';

const data = {
  bookList: [
    { bookId: 1, bookName : "Master Of The Game", price: 335, category: "thrill", url: 'master_of_the_game.jpg'},
    { bookId: 2, bookName : "Tell Me Your Dreams", price: 245, category: "crime", url: 'tell_me_your_dreams.jpg'},
    { bookId: 3, bookName : "If Tomorrow", price: 270, category: "romance", url: 'if_tomorrow_comes.jpg'},
    { bookId: 4, bookName : "Range of Angles", price: 320, category: "thrill", url: 'rage-of-angels.jpg'},
    { bookId: 5, bookName : "Cards On The Table", price: 240, category: "detective", url: 'cards-on-the-table.jpg'},
    { bookId: 6, bookName : "Death on the Nile", price: 330, category: "crime", url: 'death-on-the-nile-agatha-christie.jpg'},
    { bookId: 7, bookName : "Endless Night", price: 350, category: "detective", url: 'endless-night.jpg'},
    { bookId: 8, bookName : "Five Little Pigs", price: 300, category: "thrill", url: 'five-little-pigs.jpg'},
    { bookId: 9, bookName : "The ABC of murder", price: 290, category: "crime", url: 'the-abc-of-murder.jpg'},
    { bookId: 10, bookName : "The Big Four", price: 230, category: "thrill", url: 'the-big-four.jpg'},
    { bookId: 11, bookName : "The Seven Dial", price: 450, category: "crime", url: 'the-seven-dial-mystery.jpg'}
  ],
}

function Shop() {
 
  // useEffect(() => {

  // })
  

  const datai = useSelector(state => state.Test)
  // console.log()
  const dispatch = useDispatch()
  // {store.getState()}
  // {store.subscribe(() => {
  //   console.log('store changed!', store.getState())
  // })}
  const [books, setBooks] = useState(data.bookList)
  const categories = [...new Set(data.bookList.map(d => d.category))]
  const handleFilter = (category) => {
    setBooks(books.filter(book => book.category != category))
     console.log(category)
  }
  
  return (
     <div className='bg-white flex'>
       {/* <div className='min-w-full background-image py-32 bg-no-repeat bg-cover bg-bottom'>
        <div className='container mx-auto  flex'>
          <div className='md:w-1/2 w-full px-4 py-6 rounded bg-gray-500 shadow'>
            <h2 className='leading-10 -tracking-wide text-4xl font-bold text-white'>Buy your faviourite, <br/>best prices from our store.</h2>
            <p className='font-semibold text-white leading-6 mt-3'>we have a wide collection of books from authors around the world. The store is commited to keeping reading ethusiast with costant supply of the best writing availale. Shop with us for reliable services</p>
            <button className='text-2xl font-medium tracking-wide rounded mt-3 px-5 py-2 bg-orange-400 uppercase hover:bg-orange-200 transition ease-in-out'>Shop with Us</button>
          </div>
        </div>
       </div> */}
        <aside className='flex flex-col w-48'>
         {/* <a className='inline-flex items-center justify-center h-20 w-full bg-blue-600 hover:bg-blue-500 focus:bg-blue-500'>
              <svg className="h-12 w-12 text-white" fill="currentColor" version="1.1" viewBox="0 0 215 215" stroke="none">
                  <path transform="matrix(1.28 0 0 1.28 13.057 10.462)" d="m121.65 15.95-11.2 11.2q-5.9-4.75-12.8-7.3-5.7-2.35-10.05-3.15v-16.7h-22.8v16.35l-6.9 1.75q-8.1 2.55-16.15 7.5l-11.6-11.65-15.95 15.75 11.8 11.65q-6.1 8.85-8.85 19.65l-0.8 4.55h-16.35v21.65h16.75l2.15 7.45q2.35 7.9 7.3 14.4l-12 11.6 15.35 15.35 12-11.8 6.5 3.95q8.85 4.3 16.75 5.7v16.15h22.8v-16.55q8.05-1.8 15.75-5.7l5.55-3.35 11.4 11.4 16.15-16.15-11.25-11.4q5.1-7.85 7.5-16.9l1.2-4.15h16.1v-21.65h-15.75q-1.55-8.5-4.5-15.35l-3.55-5.9 12-12.05-16.55-16.3m-7.65 58.85q-0.05 15.9-11.25 27.55-11.6 11-27.55 11-16.15 0-27.55-11.4-11.2-10.85-11.2-27.15 0-15.95 11.2-27.55 11.8-11.25 27.55-11.25 15.75 0 27.55 11.25 11.2 11.8 11.25 27.55" strokeLinecap="square" strokeWidth="1"/>
                  <path transform="matrix(.34872 0 0 .34872 83.818 78.7)" d="m144.75 65.137-94.088 94.088-50.662-50.663v-65.138l50.662 50.663 94.088-94.088v65.137"  strokeLinecap="square" strokeWidth="6" />
              </svg>
              <span class="text-white text-2xl ml-2">Simba</span>
         </a> */}
         <div className='flex-grow flex flex-col justify-between text-gray-500 bg-[#ECEAD6]'>
           <nav className='flex flex-col w-48'>
              <div className='py-4'></div>
              <a href='#' className='inline-flex items-start'>
              <span className="ml-2 text-lg uppercase font-bold">Filter</span>
              </a>
              
              <ul className=''>
                {
                  categories.map(item => 
                  <li key={item.bookId} className='hover:bg-slate-400 py-2 hover:text-slate-50 border-b-2' onClick={() => handleFilter(item)}>
                   <a key={item.bookId} href='#' className='text-sm capitalize pl-4 font-semibold '>{item}</a>
                 </li>)
                }
              </ul>
           </nav>
         </div>
       </aside>
       
        <div className='max-w-2xl mx-auto py-4 px-4 sm:py-23 sm:px-6 lg:max-w-7xl lg:px-8 bg-[#ECDFD6]'>
          <div>

          </div>
          <div className='mt-6 grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-3 lg:grid-cols-5 xl:gap-x-8'>
            {books.map(item => (
                <div className='group relative shadow-lg text-sm hover:scale-105 ease-in duration-200' key={item.bookId}> 
                    <div className='w-full max-h-60 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-8- lg:aspect-none'>
                       <img className=' object-center object-cover lg:w-full lg:h-full' src={process.env.PUBLIC_URL + `/${item.url}`} />
                    </div>
                    <div className=' mt-4 p-2'>
                        <div className=''>
                          <h3 className='text-gray-700 font-medium'>Book: {item.bookName}</h3>
                          <a href='#' className='font-medium'> Price: $ {item.price}</a>
                        </div>

                        <div className=''>          
                        <button className="bg-indigo-500 w-full font-semibold hover:bg-indigo-300 text-white uppercase px-2 py-2 rounded-sm text-xs inline-block min-w-15" onClick={() => dispatch(addItem(item))}>Add To Cart</button>
                        </div>
                    </div>
                    
                </div>
              ))}
          </div>
        {/* <button onClick={() => dispatch(clearCart())}>Clear</button> */}
        </div>
     </div>
    // <div className='flex bg-gray-100 min-h-screen'>
      //  <aside className='flex flex-col bg-red-200'>
      //    <a className='inline-flex items-center justify-center h-20 w-full bg-blue-600 hover:bg-blue-500 focus:bg-blue-500'>
      //         <svg className="h-12 w-12 text-white" fill="currentColor" version="1.1" viewBox="0 0 215 215" stroke="none">
      //             <path transform="matrix(1.28 0 0 1.28 13.057 10.462)" d="m121.65 15.95-11.2 11.2q-5.9-4.75-12.8-7.3-5.7-2.35-10.05-3.15v-16.7h-22.8v16.35l-6.9 1.75q-8.1 2.55-16.15 7.5l-11.6-11.65-15.95 15.75 11.8 11.65q-6.1 8.85-8.85 19.65l-0.8 4.55h-16.35v21.65h16.75l2.15 7.45q2.35 7.9 7.3 14.4l-12 11.6 15.35 15.35 12-11.8 6.5 3.95q8.85 4.3 16.75 5.7v16.15h22.8v-16.55q8.05-1.8 15.75-5.7l5.55-3.35 11.4 11.4 16.15-16.15-11.25-11.4q5.1-7.85 7.5-16.9l1.2-4.15h16.1v-21.65h-15.75q-1.55-8.5-4.5-15.35l-3.55-5.9 12-12.05-16.55-16.3m-7.65 58.85q-0.05 15.9-11.25 27.55-11.6 11-27.55 11-16.15 0-27.55-11.4-11.2-10.85-11.2-27.15 0-15.95 11.2-27.55 11.8-11.25 27.55-11.25 15.75 0 27.55 11.25 11.2 11.8 11.25 27.55" strokeLinecap="square" strokeWidth="1"/>
      //             <path transform="matrix(.34872 0 0 .34872 83.818 78.7)" d="m144.75 65.137-94.088 94.088-50.662-50.663v-65.138l50.662 50.663 94.088-94.088v65.137"  strokeLinecap="square" strokeWidth="6" />
      //         </svg>
      //         <span class="text-white text-2xl ml-2">Simba</span>
      //    </a>
      //    <div className='flex-grow flex flex-col justify-between text-gray-500 bg-gray-200'>
      //      <nav className='flex flex-col mx-4 my-6 space-y-4'>
      //         <a href='#' className='inline-flex items-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg px-2'>
      //         <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
      //          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
      //         </svg>
      //         <span class="ml-2"  x-show="menu">Folders</span>
      //         </a>
      //      </nav>
      //    </div>
      //  </aside>
    //    <div className='flex-grow bg-gray-800'>
    //       <header className='flex items-center h-20 px-6 sm:px-10 bg-white'>
    //             <div className='mr-8 cursor-pointer'>
    //               <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
    //             </svg>
    //             </div>
    //        </header>
    //    </div>
    // </div>

  );
}

export default Shop;
