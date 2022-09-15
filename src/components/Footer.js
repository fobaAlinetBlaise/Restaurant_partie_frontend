import React from 'react'
import { useState, useEffect } from "react";
import axios from 'axios'

   
const Footer = () => {
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
                                        <p class="footer__widget--desc">Nemo enim ipsam voluptate quia voluptas sit aspernatur aut odit aut fugit, sed quia magni this dolores eos qui ratione.</p>
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
                                                    <span class="footer__social--icon__svg">

                                                    </span>
                                                    <span class="footer__social--title">Facebook</span>
                                                </a>
                                            </li>
                                            <li class="footer__social--list">
                                                <a class="footer__social--list__icon" target="_blank" href="https://twitter.com/">
                                                    <span class="footer__social--icon__svg">

                                                    </span>
                                                    <span class="footer__social--title">Twitter</span>
                                                </a>
                                            </li>
                                            <li class="footer__social--list">
                                                <a class="footer__social--list__icon" target="_blank" href="https://www.instagram.com/">
                                                    <span class="footer__social--icon__svg">

                                                    </span>
                                                    <span class="footer__social--title">Instagram</span>
                                                </a>
                                            </li>
                                            <li class="footer__social--list">
                                                <a class="footer__social--list__icon" target="_blank" href="https://www.linkedin.com/">
                                                    <span class="footer__social--icon__svg">

                                                    </span>
                                                    <span class="footer__social--title">Linkedin</span>
                                                </a>
                                            </li>
                                            <li class="footer__social--list">
                                                <a class="footer__social--list__icon" target="_blank" href="https://www.youtube.com/">
                                                    <span class="footer__social--icon__svg">

                                                    </span>
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
    </div>
  )
}

export default Footer