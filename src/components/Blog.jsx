import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Blog = () => {

    const [blog, setBlog] = useState([]);
    //creer une fonction qui va recuperer nos données
    const getBlogs = () => {
        axios.get(`http://127.0.0.1:8000/blogs/`)
            .then((res) => {
                console.log("Request response ", res);
                if (res.status === 200)
                    setBlog(res.data);
            })
    }

    //detection du premier rendu du composant ou lors de la mise à jour
    useEffect(() => {
        getBlogs();
    }, [])
    return (
        <div>
            {/* <!-- Start breadcrumb section --> */}
            <section class="breadcrumb__section breadcrumb__bg" style={{width:'100%', height:'200px'}}>
                <div class="container">
                    <div class="row row-cols-1">
                        <div class="col">
                            <div class="breadcrumb__content">
                                <h1 class="breadcrumb__content--title mb-10">Blog Grid</h1>
                                <ul class="breadcrumb__content--menu d-flex">
                                    <li class="breadcrumb__content--menu__items"><a href="index.html">Home</a></li>
                                    <li class="breadcrumb__content--menu__items"><span class="text__secondary">Blog Grid</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End breadcrumb section -->

        <!-- Start blog section --> */}
            <section class="blog__section section--padding">
                <div class="container">
                    <div class="section__heading text-center mb-50">
                        <h2 class="section__heading--maintitle text__secondary mb-10">Nos Blogs</h2>
                        <p class="section__heading--desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, maiores eaque non nam unde possimus quos placeat officia doloremque. Distinctio fuga voluptate labore! Quas, at reiciendis delectus hic assumenda numquam?</p>
                    </div>
                    <div class="blog__section--inner p-0">

                        <div class="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-2 mb--n50">
                            {
                                blog.map((blogs) => {
                                    return (
                                        <div class="col custom-col mb-50">

                                            <article class="blog__card">
                                                <div class="blog__card--thumbnail">
                                                    <Link to={`/blogs/${blogs.id}`}>
                                                        <a class="blog__card--thumbnail__link display-block" href="#"><img class="blog__card--thumbnail__img display-block" src={blogs.photo} alt="blog-img" /></a>
                                                    </Link>
                                                </div>
                                                <div class="blog__card--content blog__card--page--content">
                                                    <ul class="blog__card--meta d-flex justify-content-center">
                                                        <li class="blog__card--meta__text text__secondary">

                                                            <Link to={`/blogs/${blogs.id}`}>
                                                                {blogs.nom}
                                                            </Link>
                                                        </li>
                                                        <li class="blog__card--meta__text">
                                                            / {blogs.date_ajout}
                                                        </li>
                                                    </ul>
                                                    <h3 class="blog__card--title"><a href="blog-details.html">{blogs.description} .</a></h3>
                                                    <a class="blog__card--btn primary__btn" href="blog-details.html">Read More </a>
                                                </div>
                                            </article>

                                        </div>
                                    );
                                })
                            }
                        </div>
                        <div class="pagination__area bg__gray--color">
                            <nav class="pagination">
                                <ul class="pagination__wrapper d-flex align-items-center justify-content-center">
                                    <li class="pagination__list">
                                        <a href="blog.html" class="pagination__item--arrow  link ">

                                            <span class="visually-hidden">pagination arrow</span>
                                        </a>
                                    </li>
                                    <li class="pagination__list"><span class="pagination__item pagination__item--current">1</span></li>
                                    <li class="pagination__list"><a href="/blog" class="pagination__item link">2</a></li>
                                    <li class="pagination__list"><a href="/blog" class="pagination__item link">3</a></li>
                                    <li class="pagination__list"><a href="/blog" class="pagination__item link">4</a></li>
                                    <li class="pagination__list">
                                        <a href="blog.html" class="pagination__item--arrow  link ">

                                            <span class="visually-hidden">pagination arrow</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Blog