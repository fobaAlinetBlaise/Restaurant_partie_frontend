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
            <section class="breadcrumb__section breadcrumb__bg" style={{width:'100%', height:'200px'}}>
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
                                        <button class="contact__form--btn primary__btn" disabled={isSubmetting} onClick={onSubmit} type="submit">Submit Now</button>
                                        <p class="form-messege"></p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact