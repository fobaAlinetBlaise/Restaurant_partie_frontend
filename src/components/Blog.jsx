import React from 'react'

const Blog = () => {
  return (
    <div>
        {/* <!-- Start breadcrumb section --> */}
        <section class="breadcrumb__section breadcrumb__bg">
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
                    <h2 class="section__heading--maintitle text__secondary mb-10">Our Largest Blog</h2>
                    <p class="section__heading--desc">Beyond more stoic this along goodness this sed wow manatee mongos 
                        flusterd impressive man farcrud opened.</p>
                </div>
                <div class="blog__section--inner p-0">
                    <div class="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-2 mb--n50">
                        <div class="col custom-col mb-50">
                            <article class="blog__card">
                                <div class="blog__card--thumbnail">
                                    <a class="blog__card--thumbnail__link display-block" href="blog-details.html"><img class="blog__card--thumbnail__img display-block" src="assets/img/blog/blog1.webp" alt="blog-img" /></a>
                                </div>
                                <div class="blog__card--content blog__card--page--content">
                                    <ul class="blog__card--meta d-flex justify-content-center">
                                        <li class="blog__card--meta__text text__secondary">
                                            Ruso Jonsong
                                        </li>
                                        <li class="blog__card--meta__text">
                                            / Mar 02, 2022
                                        </li>
                                    </ul>
                                    <h3 class="blog__card--title"><a href="blog-details.html">What is business contents 
                                        insurance this Blog. </a></h3>
                                    <a class="blog__card--btn primary__btn" href="blog-details.html">Read More </a>
                                </div>
                            </article>
                        </div>
                        <div class="col custom-col mb-50">
                            <article class="blog__card">
                                <div class="blog__card--thumbnail">
                                    <a class="blog__card--thumbnail__link display-block" href="blog-details.html"><img class="blog__card--thumbnail__img display-block" src="assets/img/blog/blog2.webp" alt="blog-img" /></a>
                                </div>
                                <div class="blog__card--content blog__card--page--content">
                                    <ul class="blog__card--meta d-flex justify-content-center">
                                        <li class="blog__card--meta__text text__secondary">
                                            Ruso Jonsong
                                        </li>
                                        <li class="blog__card--meta__text">
                                            / Mar 02, 2022
                                        </li>
                                    </ul>
                                    <h3 class="blog__card--title"><a href="blog-details.html"> Amet This is adipisicing elit. Error, nons. </a></h3>
                                    <a class="blog__card--btn primary__btn" href="blog-details.html">Read More </a>
                                </div>
                            </article>
                        </div>
                        <div class="col custom-col mb-50">
                            <article class="blog__card">
                                <div class="blog__card--thumbnail">
                                    <a class="blog__card--thumbnail__link display-block" href="blog-details.html"><img class="blog__card--thumbnail__img display-block" src="assets/img/blog/blog3.webp" alt="blog-img" /></a>
                                </div>
                                <div class="blog__card--content blog__card--page--content">
                                    <ul class="blog__card--meta d-flex justify-content-center">
                                        <li class="blog__card--meta__text text__secondary">
                                            Ruso Jonsong
                                        </li>
                                        <li class="blog__card--meta__text">
                                            / Mar 02, 2022
                                        </li>
                                    </ul>
                                    <h3 class="blog__card--title"><a href="blog-details.html">Lorem ipsum dolor sit amet, are adipisicing elit. </a></h3>
                                    <a class="blog__card--btn primary__btn" href="blog-details.html">Read More </a>
                                </div>
                            </article>
                        </div>
                        <div class="col custom-col mb-50">
                            <article class="blog__card">
                                <div class="blog__card--thumbnail">
                                    <a class="blog__card--thumbnail__link display-block" href="blog-details.html"><img class="blog__card--thumbnail__img display-block" src="assets/img/blog/blog11.webp" alt="blog-img" /></a>
                                </div>
                                <div class="blog__card--content blog__card--page--content">
                                    <ul class="blog__card--meta d-flex justify-content-center">
                                        <li class="blog__card--meta__text text__secondary">
                                            Ruso Jonsong
                                        </li>
                                        <li class="blog__card--meta__text">
                                            / Mar 02, 2022
                                        </li>
                                    </ul>
                                    <h3 class="blog__card--title"><a href="blog-details.html">What is business contents 
                                        insurance this Blog. </a></h3>
                                    <a class="blog__card--btn primary__btn" href="blog-details.html">Read More </a>
                                </div>
                            </article>
                        </div>
                        <div class="col custom-col mb-50">
                            <article class="blog__card">
                                <div class="blog__card--thumbnail">
                                    <a class="blog__card--thumbnail__link display-block" href="blog-details.html"><img class="blog__card--thumbnail__img display-block" src="assets/img/blog/blog12.webp" alt="blog-img" /></a>
                                </div>
                                <div class="blog__card--content blog__card--page--content">
                                    <ul class="blog__card--meta d-flex justify-content-center">
                                        <li class="blog__card--meta__text text__secondary">
                                            Ruso Jonsong
                                        </li>
                                        <li class="blog__card--meta__text">
                                            / Mar 02, 2022
                                        </li>
                                    </ul>
                                    <h3 class="blog__card--title"><a href="blog-details.html">Amet elit. Doloremque cupiditate neque harum. </a></h3>
                                    <a class="blog__card--btn primary__btn" href="blog-details.html">Read More </a>
                                </div>
                            </article>
                        </div>
                        <div class="col custom-col mb-50">
                            <article class="blog__card">
                                <div class="blog__card--thumbnail">
                                    <a class="blog__card--thumbnail__link display-block" href="blog-details.html"><img class="blog__card--thumbnail__img display-block" src="assets/img/blog/blog13.webp" alt="blog-img" /></a>
                                </div>
                                <div class="blog__card--content blog__card--page--content">
                                    <ul class="blog__card--meta d-flex justify-content-center">
                                        <li class="blog__card--meta__text text__secondary">
                                            Ruso Jonsong
                                        </li>
                                        <li class="blog__card--meta__text">
                                            / Mar 02, 2022
                                        </li>
                                    </ul>
                                    <h3 class="blog__card--title"><a href="blog-details.html"> Amet This is adipisicing elit. Error, nons. </a></h3>
                                    <a class="blog__card--btn primary__btn" href="blog-details.html">Read More </a>
                                </div>
                            </article>
                        </div>
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
                                <li class="pagination__list"><a href="blog.html" class="pagination__item link">2</a></li>
                                <li class="pagination__list"><a href="blog.html" class="pagination__item link">3</a></li>
                                <li class="pagination__list"><a href="blog.html" class="pagination__item link">4</a></li>
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
        {/* <!-- End blog section --> */}
{/* 
    <!-- Start footer section --> */}
    <footer class="footer__section footer__bg">
        <div class="container">
            <div class="main__footer section--padding">
                <div class="row">
                    <div class="col-lg-4 col-md-6">
                        <div class="footer__widget">
                            <h2 class="footer__widget--title d-none d-md-block">About Us <button class="footer__widget--button" aria-label="footer widget button"></button>
                               
                            </h2>
                            <div class="footer__widget--inner">
                                <a class="footer__logo" href="index.html"><img class="footer__logo--img display-block" src="assets/img/logo/nav-logo-white.webp" alt="footer-logo" /></a>
                                <p class="footer__widget--desc">Nemo enim ipsam voluptate quia 
                                    voluptas sit aspernatur aut odit
                                    aut fugit, sed quia magni this
                                    dolores eos qui ratione.</p>
                                <div class="footer__social">
                                    <ul class="social__shear d-flex">
                                        <li class="social__shear--list">
                                            <a class="social__shear--list__icon" target="_blank" href="https://www.facebook.com/">
                                             
                                                <span class="visually-hidden">Facebook</span>
                                            </a>
                                        </li>
                                        <li class="social__shear--list">
                                            <a class="social__shear--list__icon" target="_blank" href="https://twitter.com/">
                                                
                                                <span class="visually-hidden">Twitter</span>
                                            </a>
                                        </li>
                                        <li class="social__shear--list">
                                            <a class="social__shear--list__icon" target="_blank" href="https://www.instagram.com/">
                                                
                                                <span class="visually-hidden">Instagram</span>
                                            </a>
                                        </li>
                                        <li class="social__shear--list">
                                            <a class="social__shear--list__icon" target="_blank" href="https://www.linkedin.com/">
                                               
                                                <span class="visually-hidden">Linkedin</span>
                                            </a>
                                        </li>
                                        <li class="social__shear--list">
                                            <a class="social__shear--list__icon" target="_blank" href="https://www.linkedin.com/">
                                               
                                                <span class="visually-hidden">Youtube</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="footer__widget">
                            <h2 class="footer__widget--title ">Recent Post <button class="footer__widget--button" aria-label="footer widget button"></button>
                               
                            </h2>
                            <ul class="footer__widget--menu footer__widget--inner">
                                <li class="footer__widget--menu__list"><a class="footer__widget--menu__text" href="about.html">About Us</a></li>
                                <li class="footer__widget--menu__list"><a class="footer__widget--menu__text" href="wishlist.html">Wishlist</a></li>
                                <li class="footer__widget--menu__list"><a class="footer__widget--menu__text" href="contact.html">Contact Us</a></li>
                                <li class="footer__widget--menu__list"><a class="footer__widget--menu__text" href="privacy-policy.html">Privacy Policy</a></li>
                                <li class="footer__widget--menu__list"><a class="footer__widget--menu__text" href="faq.html">Frequently</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-6">
                        <div class="footer__widget">
                            <h2 class="footer__widget--title ">Account Info <button class="footer__widget--button" aria-label="footer widget button"></button>
                                
                            </h2>
                            <ul class="footer__widget--menu footer__widget--inner">
                                <li class="footer__widget--menu__list"><a class="footer__widget--menu__text" href="my-account.html">My Account</a></li>
                                <li class="footer__widget--menu__list"><a class="footer__widget--menu__text" href="cart.html">Shopping Cart</a></li>
                                <li class="footer__widget--menu__list"><a class="footer__widget--menu__text" href="login.html">Login</a></li>
                                <li class="footer__widget--menu__list"><a class="footer__widget--menu__text" href="login.html">Register</a></li>
                                <li class="footer__widget--menu__list"><a class="footer__widget--menu__text" href="checkout.html">Checkout</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="footer__widget">
                            <h2 class="footer__widget--title ">Newsletter <button class="footer__widget--button" aria-label="footer widget button"></button>
                                
                            </h2>
                            <div class="footer__newsletter footer__widget--inner">
                                <p class="footer__newsletter--desc">Get updates by subscribe our
                                    weekly newsletter</p>
                                <form class="newsletter__subscribe--form__style position__relative" action="#">
                                    <label>
                                        <input class="footer__newsletter--input newsletter__subscribe--input" placeholder="Enter your email address" type="email" />
                                    </label>
                                    <button class="footer__newsletter--button newsletter__subscribe--button primary__btn" type="submit">Subscribe
                                       
                                    </button>
                                </form> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </div>
  )
}

export default Blog