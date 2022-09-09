import React from 'react'
import { useState, useEffect } from "react";
import axios from 'axios'

const About = () => {
    //permet de passer un message
    const [feedback, setFeedback] = useState('');
    const [email, setEmail] = useState('');
    const [isSubmetting, setIsSubmetting] = useState(false);
    const [errors, setErrors] = useState('');


    // fonction permettant de reinitialiser les champs après envoi des données
    function reset() {
        setEmail('');
    }

    const onSubmit = () => {
        var errs = errors;
        if (email === '')
            errs['email'] = 'le champs email est obligatoire !';
        if (!errs.email) {
            setIsSubmetting(true)

            const formData = new FormData()
            formData.append('email', email)
            axios.post('http://127.0.0.1:8000/letters/', formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                .then(res => {
                    console.log(res);
                    if (res.status === 201)
                        setFeedback('votre newsletter a été ajouté avec succes')
                    reset()
                })

                .catch(error => console.error('on added newsletters', error.response?.data))
                .finally(() => setIsSubmetting(false));

        }
        else
            setErrors([...errs]);


        console.log('Its submit succesfuly!')
    }

    return (
        <div>
            {/* <!-- Start breadcrumb section --> */}
            <section class="breadcrumb__section breadcrumb__bg">
                <div class="container">
                    <div class="row row-cols-1">
                        <div class="col">
                            <div class="breadcrumb__content">
                                <h1 class="breadcrumb__content--title mb-10">About Us</h1>
                                <ul class="breadcrumb__content--menu d-flex">
                                    <li class="breadcrumb__content--menu__items"><a href="index.html">Home</a></li>
                                    <li class="breadcrumb__content--menu__items"><span class="text__secondary">About Us</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End breadcrumb section -->

       <!-- Start image with text section --> */}
            <section class="image__with--text__section section--padding">
                <div class="container">
                    <div class="row row-cols-md-2 row-cols-1  align-items-center">
                        <div class="col">
                            <div class="image__with--text__thumbnail">
                                <img class="display-block" src="assets/img/other/drone-image.webp" alt="drone-image" />
                            </div>
                        </div>
                        <div class="col">
                            <div class="image__with--text__content">
                                <h2 class="image__with--text__title mb-18">Most Talented Builders
                                    Architects Drone.</h2>
                                <p class="image__with--text__desc mb-25">Beyond more stoic this along goodness this sed wow manatee mongos
                                    flusterd impressive man farcrud opened inside owin punitively
                                    wasteful telling spransac coldly spokeles.</p>
                                <div class="image__with--text__percent color-primary-2 mb-40">
                                    <ul>
                                        <li class="image__with--text__percent--list mb-25">
                                            <span class="image__with--text__percent--top d-flex justify-content-between align-content-center">
                                                <span class="image__with--text__percent--content">Integrative control</span>
                                                <span class="image__with--text__percent--content">58%</span>
                                            </span>
                                        </li>
                                        <li class="image__with--text__percent--list two">
                                            <span class="image__with--text__percent--top d-flex justify-content-between align-content-center">
                                                <span class="image__with--text__percent--content">Design Device</span>
                                                <span class="image__with--text__percent--content">77%</span>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <div class="image__with--text__content--footer d-flex">
                                    <img class="display-block" src="assets/img/other/text-shape.webp" alt="text-shape" />
                                    <p class="image__with--text__content--footer__desc">
                                        YEARS SINCE WE ESTABLISHED - <br />
                                        EXPERIENCE & STILL A GROWING <br />
                                        PROTFOLIO DAY BY DAY!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img class="image__with--text__position--shape display-block" src="assets/img/other/image-with-text-section-shape.webp" alt="shape img" />
            </section>
            {/* <!-- End image with text section -->

       <!-- Start banner section --> */}
            <div class="banner__video--section banner__section--bg position__relative section--padding">
                <img class="drone__position--img display-block" src="assets/img/other/drone-position-img.webp" alt="drone-position-img" />
                <div class="container">
                    <div class="banner__video--content position__relative text-center">
                        <div class="bideo__play banner__video--play mb-35">
                            <a class="bideo__play--icon banner__video--play__icon glightbox" href="https://vimeo.com/115041822" data-gallery="video">

                                <span class="visually-hidden">Play</span>
                            </a>
                        </div>
                        <h2 class="banner__video--title text-white mb-15">Drone All Repair Service We Call.</h2>
                        <p class="banner__video--info text-white">Get Your Quote or Call: <a href="tel:+88021544142">(+88021544142)</a></p>
                        <a class="banner__video--btn primary__btn" href="contact.html">Ask For Price</a>
                    </div>
                </div>
            </div>
            {/* <!-- End banner section -->

       <!-- Start about section --> */}
            <section class="about__section section--padding border-bottom">
                <div class="container">
                    <div class="row row-cols-lg-2 row-cols-md-2 row-cols-1 align-items-center">
                        <div class="col">
                            <div class="about__content">
                                <h2 class="about__content--title mb-18">We Have This Builders
                                    Easy integrative.</h2>
                                <div class="about__content--step mb-25">
                                    <p class="about__content--desc mb-20">Beyond more stoic this along goodness this sed wow manatee mongos
                                        flusterd impressive man farcrud opened inside owin punitively
                                        wasteful telling spransac coldly spokeles.</p>
                                    <ul class="mb-20">
                                        <li class="about__content--desc__list">Beyond drone is an to be contre unmanned aerial.</li>
                                        <li class="about__content--desc__list">With various equipment including tho drone.</li>
                                    </ul>
                                    <p class="about__content--desc style2">Beyond more stoic this along goodness this sed wow
                                        flusterd impressive</p>
                                </div>
                                <div class="about__content--author d-flex align-items-center mb-50">
                                    <div class="about__content--author__thumb">
                                        <img class="display-block" src="assets/img/other/about-author.webp" alt="about author thumb" />
                                    </div>
                                    <div class="about__content--author__text d-flex align-items-center">
                                        <div class="about__content--author__text--left">
                                            <h3 class="about__content--author__name text__secondary">- Rubel Wilson,</h3>
                                            <span class="about__content--author__rank">Founder</span>
                                        </div>
                                        <img class="about__author--signature display-block" src="assets/img/icon/signature.webp" alt="signature" />
                                    </div>
                                </div>
                                <a class="about__content--btn primary__btn" href="contact.html">Ask For Price</a>
                            </div>
                        </div>
                        <div class="col">
                            <div class="about__thumbnail">
                                <img class="display-block" src="assets/img/other/about-thumb.webp" alt="about-thumb" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End about section -->

       <!-- Start counterup section --> */}
            <div class="counterup__section section--padding" id="funfactId">
                <div class="container">
                    <div class="section__heading text-center mb-50">
                        <h2 class="section__heading--maintitle text__secondary mb-10">Our Best Counter</h2>
                        <p class="section__heading--desc">Beyond more stoic this along goodness this sed wow manatee mongos
                            flusterd impressive man farcrud opened.</p>
                    </div>
                    <div class="counterup--inner">
                        <div class="row row-cols-md-4 row-cols-sm-3 row-cols-2 mb--n30">
                            <div class="col mb-30">
                                <div class="single__counterup">
                                    <div class="counterup__icon">

                                    </div>
                                    <h3 class="counterup__title">Doren Per Week</h3>
                                    <p class="counterup__number" ><span class="js-counter" data-count="12">12</span>k</p>
                                </div>
                            </div>
                            <div class="col mb-30">
                                <div class="single__counterup">
                                    <div class="counterup__icon">


                                    </div>
                                    <h3 class="counterup__title">Google Search</h3>
                                    <p class="counterup__number" ><span class="js-counter" data-count="67">67</span>+</p>
                                </div>
                            </div>
                            <div class="col mb-30">
                                <div class="single__counterup">
                                    <div class="counterup__icon">

                                    </div>
                                    <h3 class="counterup__title">Keywords Data</h3>
                                    <p class="counterup__number" ><span class="js-counter" data-count="255">255</span>+</p>
                                </div>
                            </div>
                            <div class="col mb-30">
                                <div class="single__counterup">
                                    <div class="counterup__icon">


                                    </div>
                                    <h3 class="counterup__title">Indexed Google</h3>
                                    <p class="counterup__number" ><span class="js-counter" data-count="5">5</span>k</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End counterup section -->

       <!-- Start newsletter section --> */}
                        {feedback !== '' && <span style={{ color: '#FF0000', fontSize: '22px' }}>{feedback} </span>}
            <section class="newsletter__section newsletter__bg">
                <div class="container">
                    <div class="row row-cols-md-2 row-cols-1 align-items-center">
                        <div class="col">
                            <div class="newsletter__content position__relative">
                                <h2 class="newsletter__content--title text-white">We Best To Immediately Do
                                    Subscribe Newsleter.</h2>
                            </div>
                        </div>
                        <div class="col">
                            <div class="newsletter__subscribe">
                                <form class="newsletter__subscribe position__relative" action="#">
                                    <label>
                                        <input class="newsletter__subscribe--input style2" name="email" id="email" placeholder="Enter Your Email" type="email" value={email}
                                            onChange={(e) => setEmail(e.target.value)} required />
                                    </label>
                                    <button disabled={isSubmetting} onClick={onSubmit} class="newsletter__subscribe--button style2 primary__btn" type="submit">Subscribe

                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End newsletter section -->

       <!-- Start testimonial section --> */}
            <section class="testimonial__section section--padding">
                <div class="container">
                    <div class="section__heading text-center mb-50">
                        <h2 class="section__heading--maintitle text__secondary mb-10">Our Best Testimonial</h2>
                        <p class="section__heading--desc">Beyond more stoic this along goodness this sed wow manatee mongos
                            flusterd impressive man farcrud opened.</p>
                    </div>
                    <div class="testimonial__inner testimonial__swiper--activation swiper">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <article class="testimonial__card text-center">
                                    <div class="testimonial__card--thumbnail">
                                        <img class="testimonial__card--thumbnail__img display-block" src="assets/img/other/testimonial1.webp" alt="testimonial-img" />
                                    </div>
                                    <div class="testimonial__content">
                                        <p class="testimonial__content--desc">Lorem ipsum dolor sit amet,elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.  </p>
                                        <h3 class="testimonial__content--title">Brandon Bokle</h3>
                                        <h4 class="testimonial__content--subtitle text__secondary">Secretary</h4>
                                    </div>
                                    <div class="testimonial__icon">

                                    </div>

                                </article>
                            </div>
                            <div class="swiper-slide">
                                <article class="testimonial__card text-center">
                                    <div class="testimonial__card--thumbnail">
                                        <img class="testimonial__card--thumbnail__img display-block" src="assets/img/other/testimonial2.webp" alt="testimonial-img" />
                                    </div>
                                    <div class="testimonial__content">
                                        <p class="testimonial__content--desc">Lorem ipsum dolor sit amet,elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.  </p>
                                        <h3 class="testimonial__content--title">Sarrison Samuel</h3>
                                        <h4 class="testimonial__content--subtitle text__secondary">CEO Founder</h4>
                                    </div>
                                    <div class="testimonial__icon">

                                    </div>
                                </article>
                            </div>
                            <div class="swiper-slide">
                                <article class="testimonial__card text-center">
                                    <div class="testimonial__card--thumbnail">
                                        <img class="testimonial__card--thumbnail__img display-block" src="assets/img/other/testimonial3.webp" alt="testimonial-img" />
                                    </div>
                                    <div class="testimonial__content">
                                        <p class="testimonial__content--desc">Lorem ipsum dolor sit amet,elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.  </p>
                                        <h3 class="testimonial__content--title">Warrison Samuel</h3>
                                        <h4 class="testimonial__content--subtitle text__secondary">Spa Manager</h4>
                                    </div>
                                    <div class="testimonial__icon">

                                    </div>
                                </article>
                            </div>
                            <div class="swiper-slide">
                                <article class="testimonial__card text-center">
                                    <div class="testimonial__card--thumbnail">
                                        <img class="testimonial__card--thumbnail__img display-block" src="assets/img/other/testimonial1.webp" alt="testimonial-img" />
                                    </div>
                                    <div class="testimonial__content">
                                        <p class="testimonial__content--desc">Lorem ipsum dolor sit amet,elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.  </p>
                                        <h3 class="testimonial__content--title">Brandon Bokle</h3>
                                        <h4 class="testimonial__content--subtitle text__secondary">Secretary</h4>
                                    </div>
                                    <div class="testimonial__icon">

                                    </div>
                                </article>
                            </div>
                        </div>
                        <div class="swiper__nav--btn swiper-button-next"></div>
                        <div class="swiper__nav--btn swiper-button-prev"></div>
                    </div>
                </div>
            </section>
            {/* <!-- End testimonial section -->

       <!-- Start team members section --> */}
            <section class="team__section team__section--bg section--padding">
                <div class="container">
                    <div class="section__heading text-center mb-50">
                        <h2 class="section__heading--maintitle text__secondary mb-10">Our Team Member</h2>
                        <p class="section__heading--desc">Beyond more stoic this along goodness this sed wow manatee mongos
                            flusterd impressive man farcrud opened.</p>
                    </div>
                    <div class="team__container">
                        <div class="row row-cols-md-3 row-cols-sm-2 row-cols-2 mb--n30">
                            <div class="col custom-col mb-30">
                                <article class="team__card">
                                    <div class="team__card--thumbnail">
                                        <img class="team__card--thumbnail__img display-block" src="assets/img/other/team1.webp" alt="team-thumb" />
                                    </div>
                                    <div class="team__card--content ">
                                        <h3 class="team__card--content__title">Brandon Bokle </h3>
                                        <span class="team__card--content__subtitle text__secondary">Secretary</span>
                                        <ul class="team__card--content__info">
                                            <li class="team__card--content__info--list">

                                                <a href="tel:099-56336958">099 - 563 369 58</a>
                                            </li>
                                            <li class="team__card--content__info--list">

                                                <a href="mailto:demo@example.com">demo@example.com</a>
                                            </li>
                                        </ul>
                                    </div>
                                </article>
                            </div>
                            <div class="col custom-col mb-30">
                                <article class="team__card">
                                    <div class="team__card--thumbnail">
                                        <img class="team__card--thumbnail__img display-block" src="assets/img/other/team2.webp" alt="team-thumb" />
                                    </div>
                                    <div class="team__card--content ">
                                        <h3 class="team__card--content__title">Sarrison Samuel </h3>
                                        <span class="team__card--content__subtitle text__secondary">CEO - Founder</span>
                                        <ul class="team__card--content__info">
                                            <li class="team__card--content__info--list">

                                                <a href="tel:099-56336958">099 - 563 369 58</a>
                                            </li>
                                            <li class="team__card--content__info--list">

                                                <a href="mailto:demo@example.com">demo@example.com</a>
                                            </li>
                                        </ul>
                                    </div>
                                </article>
                            </div>
                            <div class="col custom-col mb-30">
                                <article class="team__card">
                                    <div class="team__card--thumbnail">
                                        <img class="team__card--thumbnail__img display-block" src="assets/img/other/team3.webp" alt="team-thumb" />
                                    </div>
                                    <div class="team__card--content ">
                                        <h3 class="team__card--content__title">Warrison Samuel </h3>
                                        <span class="team__card--content__subtitle text__secondary">Spa Managery</span>
                                        <ul class="team__card--content__info">
                                            <li class="team__card--content__info--list">

                                                <a href="tel:099-56336958">099 - 563 369 58</a>
                                            </li>
                                            <li class="team__card--content__info--list">

                                                <a href="mailto:demo@example.com">demo@example.com</a>
                                            </li>
                                        </ul>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End team members section --> */}

            {/* <!-- Start footer section --> */}
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
                                        <ul class="footer__contact--info">
                                            <li class="footer__contact--info__list">

                                                <a href="tel:+8543553004">+8543553004</a>
                                            </li>
                                            <li class="footer__contact--info__list">

                                                <a href="mailto:demo@example.com">demo@example.com</a>
                                            </li>
                                        </ul>
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
                            <div class="col-lg-3 col-md-6">
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
                            <div class="col-lg-2 col-md-6">
                                <div class="footer__widget">
                                    <h2 class="footer__widget--title ">Social share <button class="footer__widget--button" aria-label="footer widget button"></button>

                                    </h2>
                                    <div class="footer__widget--inner">
                                        <ul class="footer__social--style4">
                                            <li class="footer__social--list">
                                                <a class="footer__social--list__icon" target="_blank" href="https://www.facebook.com/">

                                                    <span class="footer__social--title">Facebook</span>
                                                </a>
                                            </li>
                                            <li class="footer__social--list">
                                                <a class="footer__social--list__icon" target="_blank" href="https://twitter.com/">

                                                    <span class="footer__social--title">Twitter</span>
                                                </a>
                                            </li>
                                            <li class="footer__social--list">
                                                <a class="footer__social--list__icon" target="_blank" href="https://www.instagram.com/">

                                                    <span class="footer__social--title">Instagram</span>
                                                </a>
                                            </li>
                                            <li class="footer__social--list">
                                                <a class="footer__social--list__icon" target="_blank" href="https://www.linkedin.com/">

                                                    <span class="footer__social--title">Linkedin</span>
                                                </a>
                                            </li>
                                            <li class="footer__social--list">
                                                <a class="footer__social--list__icon" target="_blank" href="https://www.youtube.com/">

                                                    <span class="footer__social--title">Youtube</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* <!-- End footer section --> */}
        </div>
    )
}

export default About