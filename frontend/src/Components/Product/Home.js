import React from 'react'
import { Link } from 'react-router-dom'
import ProductCard from './ProductCard';
import Slideshow from './slideshow';
import CategoryCard from './CategoryCard';

const Category = [
  {
    "id": 1,
    "title": "LV BaoBao",
    "image": "http://localhost:3000/images/bag_1.jpg",
  },
  {
    "id": 2,
    "title": "LV Tote Bag",
  },
  {
    "id": 3,
    "title": "LV Pouch",
  },
  {
    "id": 4,
    "title": "LV Buckeet",
  },
  {
    "id": 5,
    "title": "LV Wallet",
  },
];



const Home = ({data}) => {
  return (
    <>
      <section className='home-wrapper-1 '>
        <div className='d-flex flex-column'>
          <div className='row justify-content-center' style={{padding:0}}>
            <div className='col' style={{padding:0}}>
              <Slideshow/>
            </div>
          </div>
        </div>
      </section>
      <section className='row pt-3'>
        <div className='col text-center'>
          <h2 className='text'>New Items</h2>
        </div>
      </section>
      <section className='blog-wrapper pt-0 pb-5 home-wrapper-2'>
          <div className="row">
            { data.map((element, key) =>
              <ProductCard key={key} data={element}/>
            )}
          </div>
          <div className='row'>
            <div className="col mt-3 pt-3 d-flex justify-content-center gap-15 align-items-center">
              <Link to="/items" className="button signup border-dark">
                    See More
              </Link>
            </div>
          </div>
      </section>
      <section className='blog-wrapper pt-0 pb-5 home-wrapper-2'>
        <div className='row'>
          <CategoryCard/>
        </div>
      </section>
    </>
  )
}

export default Home