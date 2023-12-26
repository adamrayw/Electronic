import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const RelatedProduct = () => {
    let settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div>
            <Slider {...settings}>
                <div className='border border-gray-600 rounded overflow-hidden'>
                    <div>
                        <img src="https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&q=80&w=1765&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="related-product" />
                    </div>
                    <div className='p-1'>
                        <p>Nama barang Lorem, ipsum dolor.</p>
                        <p>tipe barang</p>
                        <p>harga Rp000000</p>
                        <p>diskon</p>
                    </div>
                </div>
                <div className='border border-gray-600 rounded overflow-hidden'>
                    <div>
                        <img src="https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&q=80&w=1765&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="related-product" />
                    </div>
                    <div className='p-1'>
                        <p>Nama barang Lorem, ipsum dolor.</p>
                        <p>tipe barang</p>
                        <p>harga Rp000000</p>
                        <p>diskon</p>
                    </div>
                </div>
                <div className='border border-gray-600 rounded overflow-hidden'>
                    <div>
                        <img src="https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&q=80&w=1765&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="related-product" />
                    </div>
                    <div className='p-1'>
                        <p>Nama barang Lorem, ipsum dolor.</p>
                        <p>tipe barang</p>
                        <p>harga Rp000000</p>
                        <p>diskon</p>
                    </div>
                </div>
                <div className='border border-gray-600 rounded overflow-hidden'>
                    <div>
                        <img src="https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&q=80&w=1765&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="related-product" />
                    </div>
                    <div className='p-1'>
                        <p>Nama barang Lorem, ipsum dolor.</p>
                        <p>tipe barang</p>
                        <p>harga Rp000000</p>
                        <p>diskon</p>
                    </div>
                </div>
                <div className='border border-gray-600 rounded overflow-hidden'>
                    <div>
                        <img src="https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&q=80&w=1765&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="related-product" />
                    </div>
                    <div className='p-1'>
                        <p>Nama barang Lorem, ipsum dolor.</p>
                        <p>tipe barang</p>
                        <p>harga Rp000000</p>
                        <p>diskon</p>
                    </div>
                </div>
                <div className='border border-gray-600 rounded overflow-hidden'>
                    <div>
                        <img src="https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&q=80&w=1765&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="related-product" />
                    </div>
                    <div className='p-1'>
                        <p>Nama barang Lorem, ipsum dolor.</p>
                        <p>tipe barang</p>
                        <p>harga Rp000000</p>
                        <p>diskon</p>
                    </div>
                </div>
                <div className='border border-gray-600 rounded overflow-hidden'>
                    <div>
                        <img src="https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&q=80&w=1767&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="related-product" />
                    </div>
                    <div className='p-1'>
                        <p>Nama barang Lorem, ipsum dolor.</p>
                        <p>tipe barang</p>
                        <p>harga Rp000000</p>
                        <p>diskon</p>
                    </div>
                </div>
            </Slider>
        </div>
    )
}

export default RelatedProduct