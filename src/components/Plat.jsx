import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Plat = () => {

    const [plats, setPlats] = useState([]);
    const [categorieplats, setCategorieplats] = useState([]);
    const getPlats = () => {
        axios.get(`http://127.0.0.1:8000/plats/`)
            .then((res) => {
                console.log('request response', res);
                if (res.status === 200)
                    setPlats(res.data);
            })
    }

    //detection du premier rendu du composant ou lors de la mise à jour
    useEffect(() => {
        getPlats();
    }, [])

//partie permettant d'afficher les categories de plat
    const getCategoriePlats = () => {
        axios.get(`http://127.0.0.1:8000/platcategorie/`)
            .then((res) => {
                console.log('request response', res);
                if (res.status === 200)
                    setCategorieplats(res.data);
            })
    }

    //detection du premier rendu du composant ou lors de la mise à jour
    useEffect(() => {
        getCategoriePlats();
    }, [])



//partie permettant de faire de filtre
    const FilterResult = (catItem) => {
        const result = setCategorieplats.filter((curdData) => {
            return curdData.categorieplat === catItem;
        });
        setCategorieplats(result)
    }

    return (
        <div>
            {/* <!-- Start breadcrumb section --> */}
            <section class="breadcrumb__section breadcrumb__bg">
                <div class="container">
                    <div class="row row-cols-1">
                        <div class="col">
                            <div class="breadcrumb__content">
                                <h1 class="breadcrumb__content--title mb-10">Product Sidebar</h1>
                                <ul class="breadcrumb__content--menu d-flex">
                                    <li class="breadcrumb__content--menu__items"><a href="index.html">Home</a></li>
                                    <li class="breadcrumb__content--menu__items"><span class="text__secondary">Product Sidebar</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End breadcrumb section -->

        <!-- Start product details section --> */}
            <section class="product__details--section  section--padding">
                <div class="container-fluid">
                    <div class="row row-md-reverse">
                        <div class="col-xl-3 col-lg-4">
                            <div class="product__sidebar--widget widget__area">
                                <div class="single__widget widget__bg">
                                    <h2 class="widget__title position__relative h3">Search</h2>
                                    <form class="widget__search--form" action="#">
                                        <label>
                                            <input class="widget__search--form__input border-0" placeholder="Search by" type="text" />
                                        </label>
                                        <button class="widget__search--form__btn" type="submit" aria-label="search button">

                                        </button>
                                    </form>
                                </div>
                                <div class="single__widget widget__bg">
                                    <h2 class="widget__title position__relative h3">Categories</h2>
                                    <ul class="widget__categories--menu">
                                        {
                                            categorieplats.map((categorieplat) => {
                                                return (
                                                    <li class="widget__categories--menu__list">
                                                        <label class="widget__categories--menu__label d-flex align-items-center">
                                                            <span class="widget__categories--menu__text">{categorieplat.nom}</span>
                                                            <div className="cat">
                                                                <button onClick={() => setCategorieplats(categorieplat)} >All</button>
                                                                <button onClick={() => FilterResult('{categorieplat.nom}')} >{categorieplat.nom}</button>
                                                            </div>
                                                        </label>
                                                    </li>
                                                );
                                            })
                                        }
                                    </ul>
                                </div>
                                <div class="single__widget price__filter widget__bg">
                                    <h2 class="widget__title position__relative h3">Filter By Price</h2>
                                    <form class="price__filter--form" action="#">
                                        <div class="price__filter--form__inner mb-15 d-flex align-items-center">
                                            <div class="price__filter--group">
                                                <label class="price__filter--label" for="Filter-Price-GTE1">From</label>
                                                <div class="price__filter--input border-radius-5 d-flex align-items-center">
                                                    <span class="price__filter--currency">$</span>
                                                    <input class="price__filter--input__field border-0" id="Filter-Price-GTE1" name="filter.v.price.gte" type="number" placeholder="0" min="0" max="250.00" />
                                                </div>
                                            </div>
                                            <div class="price__divider">
                                                <span>-</span>
                                            </div>
                                            <div class="price__filter--group">
                                                <label class="price__filter--label" for="Filter-Price-LTE1">To</label>
                                                <div class="price__filter--input border-radius-5 d-flex align-items-center">
                                                    <span class="price__filter--currency">$</span>
                                                    <input class="price__filter--input__field border-0" id="Filter-Price-LTE1" name="filter.v.price.lte" type="number" min="0" placeholder="250.00" max="250.00" />
                                                </div>
                                            </div>
                                        </div>
                                        <button class="price__filter--btn primary__btn" type="submit">Filter</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-9 col-lg-8">
                            <div class="product__details--sidebar__wrapper">
                                {/* <!-- Start product section --> */}
                                <div class="product__section  section--padding pb-0">
                                    <div class="section__heading text-center mb-50">
                                        <h2 class="section__heading--maintitle text__secondary mb-10">You may also like</h2>
                                        <p class="section__heading--desc">Beyond more stoic this along goodness this sed wow manatee mongos
                                            flusterd impressive man farcrud opened.</p>
                                    </div>
                                    <div class="product__inner">
                                        <div class="row row-cols-lg-3 row-cols-md-3 row-cols-2 mb--n30">
                                            {
                                                plats.map((plat) => {
                                                    return (
                                                        <div class="col custom-col-2 mb-30">

                                                            <article class="product__card">
                                                                <div class="product__card--thumbnail">
                                                                    <a class="product__card--thumbnail__link display-block" href="product-details.html">
                                                                        <img class="product__card--thumbnail__img product__primary--img display-block" src={plat.photo} alt="product-img" style={{ height: '200px' }} />
                                                                        <img class="product__card--thumbnail__img product__secondary--img display-block" src={plat.photo} alt="product-img" style={{ height: '200px' }} />
                                                                    </a>
                                                                </div>
                                                                <div class="product__card--content text-center">
                                                                    <span class="product__card--meta__tag">{plat.nom}</span>
                                                                    <div class="product__card--price">
                                                                        <span class="current__price">${plat.prix}</span>
                                                                    </div>
                                                                    <a class="product__card--btn primary__btn" href="cart.html">Add To Card</a>
                                                                </div>
                                                            </article>

                                                        </div>

                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- End product section --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End product details section --> */}
        </div >
    )
}

export default Plat