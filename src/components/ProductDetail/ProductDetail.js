import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './ProductDetail.css'
import Form from '../Form/Form';
import { Parser } from 'html-to-react';



const ProductDetail = () => {
    const {id} = useParams();
    const [products, setProducts] = useState(null);
    const htmlParser = new Parser();
  
    



    useEffect(() => {
        fetch(`https://api.tvmaze.com/shows/${id}`)
            .then((res) => res.json())
            .then((res) => {
                setProducts(res);
            })
    }, [id]);

    return (
        <div className='detail'>
            {
                products ? (
                    <div className='content'>
                        <h1>{products.name}</h1><hr />
                     
                        <img src={products.image.medium} alt={products.name} />
                        <br />
                        <div className="para">
                        <p>{htmlParser.parse(products.summary)}</p>
                        
                        </div>
                       
                        

                        <button type="button" className="btn btn-primary btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        🎥Book Movie Ticket🎬
                        </button>


                        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="staticBackdropLabel">Book Movie Ticket</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                    <Form title={products.name} date={products.premiered}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="spinner-border text-info" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                )
            }



        </div>
    )
}

export default ProductDetail





