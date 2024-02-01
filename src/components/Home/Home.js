import React, { useState, useEffect } from 'react';
import './Home.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
    const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const response = await axios.get('https://api.tvmaze.com/search/shows?q=all');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchShows();
  }, []);

  return (
    <div>
        <h1>Movies</h1> <hr />
        <div className="product__grid">
        {
        products.map((product) => (
        
        <div  key={product.show.id} className="product__card">
            
            <img src={product.show.image ? product.show.image.medium : " "} alt="Movie Poster Not Found !!!" />
            <p>{product.show.name}</p>
            <Link to={`/products/${product.show.id}`}>
            <button type="button" class="btn btn-outline-dark">Show Details</button>
            </Link>
        </div>
            
            
        ))
        }
        </div>
    </div>
  );
};

export default Home;

