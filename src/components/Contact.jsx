import axios from "axios";
import React, { useState, useEffect } from "react";

const Contact = (propos) => {
    const [nom, setNom] = useState('');
    //permet de passer un message
    const [feedback, setFeedback] = useState('');
    const [email, setEmail] = useState('');
    const [telephone, setTelephone] = useState('');
    const [sujet, setSujet] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');
    const [isSubmetting, setIsSubmetting] = useState(false);
    const [errors, setErrors] = useState('');
// fonction permettant de reinitialiser les champs après envoi des données
    function reset() {
        setNom('');
        setEmail('');
        setTelephone('');
        setSujet('');
        setMessage('');
    }

    const onSubmit = () => {
        var errs = errors;
        if (nom === '')
            errs['nom'] = 'le champs nom est obligatoire !';
        else if (nom.length > 255)
            errs[nom] = 'le nombre maxi est de 255';
        else if (email === '')
            errs['email'] = 'le champs nom est obligatoire !';
        else if (telephone === '')
            errs['telephone'] = 'le champs telephone est obligatoire !';
        else if (sujet === '')
            errs['sujet'] = 'le champs sujet est obligatoire !';
        else if (message === '')
            errs['message'] = 'le champs message est obligatoire !';

        if (!errs.nom && !errs.email && !errs.telephone && !errs.sujet && !errs.message) {
            setIsSubmetting(true)


            const formData = new FormData()
            formData.append('nom', nom)
            formData.append('email', email)
            formData.append('telephone', telephone)
            formData.append('sujet', sujet)
            formData.append('message', message)
            formData.append('status', status)

            axios.post('http://127.0.0.1:8000/contact/', formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                .then(res => {
                    console.log(res);
                    if (res.status === 201) {
                        setFeedback('votre contact a été ajouté avec succes')
                        reset()
                        // window.location = '/contact';
                    }

                })
                .catch(error => console.error('on added contact', error.response?.data))
                .finally(() => setIsSubmetting(false));

        }
        else
            setErrors([...errs]);


        console.log('Its submit succesfuly!')
    }


    return (
        <div>
            <section class="breadcrumb__section breadcrumb__bg">
                <div class="container">
                    <div class="row row-cols-1">
                        <div class="col">
                            <div class="breadcrumb__content">
                                <h1 class="breadcrumb__content--title mb-10">Contact Us</h1>
                                <ul class="breadcrumb__content--menu d-flex">
                                    <li class="breadcrumb__content--menu__items"><a href="index.html">Home</a></li>
                                    <li class="breadcrumb__content--menu__items"><span class="text__secondary">Contact Us</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="contact__section section--padding">
                <div class="container">
                    <div class="section__heading text-center mb-40">
                        <h2 class="section__heading--maintitle text__secondary mb-10">Get In Touch</h2>
                        <p class="section__heading--desc">Beyond more stoic this along goodness this sed wow manatee mongos flusterd impressive man farcrud opened.</p>
                    </div>
                    {feedback !== '' && <span style={{color:'#FF0000', fontSize:'22px'}}>{feedback} </span>}
                    <div class="main__contact--area">
                        <div class="row align-items-center row-md-reverse">
                            <div class="col-lg-5">
                                <div class="contact__info border-radius-10">
                                    <div class="contact__info--items">
                                        <h3 class="contact__info--content__title text-white mb-15">Contact Us</h3>
                                        <div class="contact__info--items__inner d-flex">
                                            <div class="contact__info--icon">

                                            </div>
                                            <div class="contact__info--content">
                                                <p class="contact__info--content__desc text-white">Change the design through a range <br /> <a href="tel:+01234-567890">+01234-567890</a> <a href="tel:++01234-5688765">+01234-5688765</a> </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="contact__info--items">
                                        <h3 class="contact__info--content__title text-white mb-15">Email Address</h3>
                                        <div class="contact__info--items__inner d-flex">
                                            <div class="contact__info--icon">

                                            </div>
                                            <div class="contact__info--content">
                                                <p class="contact__info--content__desc text-white"> <a href="mailto:info@example.com">info@example.com</a> <br /> <a href="mailto:info@example.com">info@example.com</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="contact__info--items">
                                        <h3 class="contact__info--content__title text-white mb-15">Office Location</h3>
                                        <div class="contact__info--items__inner d-flex">
                                            <div class="contact__info--icon">

                                            </div>
                                            <div class="contact__info--content">
                                                <p class="contact__info--content__desc text-white"> 123 Stree New York City , United States Of America NY 750065.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="contact__info--items">
                                        <h3 class="contact__info--content__title text-white mb-15">Follow Us</h3>
                                        <ul class="contact__info--social d-flex">
                                            <li class="contact__info--social__list">
                                                <a class="contact__info--social__icon" target="_blank" href="https://www.facebook.com/">

                                                    <span class="visually-hidden">Facebook</span>
                                                </a>
                                            </li>
                                            <li class="contact__info--social__list">
                                                <a class="contact__info--social__icon" target="_blank" href="https://twitter.com/">

                                                    <span class="visually-hidden">Twitter</span>
                                                </a>
                                            </li>
                                            <li class="contact__info--social__list">
                                                <a class="contact__info--social__icon" target="_blank" href="https://www.skype.com/">

                                                    <span class="visually-hidden">Skype</span>
                                                </a>
                                            </li>
                                            <li class="contact__info--social__list">
                                                <a class="contact__info--social__icon" target="_blank" href="https://www.youtube.com/">

                                                    <span class="visually-hidden">Youtube</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-7">
                                <div class="contact__form">
                                    <form class="contact__form--inner" action="#">
                                        <div class="row">
                                            <div class="col-lg-6 col-md-6">
                                                <div class="contact__form--list mb-20">
                                                    <label class="contact__form--label" for="nom">Saisir votre Nom <span class="contact__form--label__star">*</span></label>
                                                    <input class="contact__form--input" name="nom" id="nom" placeholder="votre Nom" type="text" value={nom}
                                                        onChange={(e) => setNom(e.target.value)} required />
                                                </div>
                                            </div>
                                            <div class="col-lg-6 col-md-6">
                                                <div class="contact__form--list mb-20">
                                                    <label class="contact__form--label" for="email">Email <span class="contact__form--label__star">*</span></label>
                                                    <input class="contact__form--input" name="email" id="email" placeholder="votre mail" type="email" value={email}
                                                        onChange={(e) => setEmail(e.target.value)} required />
                                                </div>
                                            </div>
                                            <div class="col-lg-6 col-md-6">
                                                <div class="contact__form--list mb-20">
                                                    <label class="contact__form--label" for="telephone">Telephone<span class="contact__form--label__star">*</span></label>
                                                    <input class="contact__form--input" name="telephone" id="telephone" placeholder="Votre numero de telephone" type="number" value={telephone}
                                                        onChange={(e) => setTelephone(e.target.value)} required />
                                                </div>
                                            </div>
                                            <div class="col-lg-6 col-md-6">
                                                <div class="contact__form--list mb-20">
                                                    <label class="contact__form--label" for="sujet">Objet <span class="contact__form--label__star">*</span></label>
                                                    <input class="contact__form--input" name="sujet" id="sujet" placeholder="Objet" type="text" value={sujet}
                                                        onChange={(e) => setSujet(e.target.value)} required />
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="contact__form--list mb-10">
                                                    <label class="contact__form--label" for="message">Votre Message Ici <span class="contact__form--label__star">*</span></label>
                                                    <textarea class="contact__form--textarea" name="message" id="input5" placeholder="Votre message " value={message}
                                                        defaultValue={''} onChange={(e) => setMessage(e.target.value)} required></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="account__login--remember position__relative mb-15">
                                            <input class="checkout__checkbox--input" id="status" type="checkbox" />
                                            <span class="checkout__checkbox--checkmark"></span>
                                            <label class="checkout__checkbox--label login__remember--label" for="status" value={status}
                                                defaultValue={'False'} onChange={(e) => setStatus(e.target.value)} >
                                                Status</label>
                                        </div>
                                        <button class="contact__form--btn primary__btn" disabled={isSubmetting} onClick={onSubmit} type="submit">Submit Now</button>
                                        <p class="form-messege"></p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="newsletter__section newsletter__bg">
                <div class="container">
                    <div class="row row-cols-md-2 row-cols-1 align-items-center">
                        <div class="col">
                            <div class="newsletter__content position__relative">
                                <h2 class="newsletter__content--title text-white">We Best To Immediately Do Subscribe Newsleter.</h2>
                            </div>
                        </div>
                        <div class="col">
                            <div class="newsletter__subscribe">
                                <form class="newsletter__subscribe position__relative" action="#">
                                    <label>
                                        <input class="newsletter__subscribe--input style2" placeholder="Enter Your Email" type="email" />
                                    </label>
                                    <button class="newsletter__subscribe--button style2 primary__btn" type="submit">Subscribe

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

export default Contact