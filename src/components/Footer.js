import React from 'react'

const Footer = () => {
  return (
    <div>
         {/* <!-- Start footer section --> */}
    <footer class="footer__section footer__bg">
        <div class="container">
            <div class="footer__bottom d-flex justify-content-between align-items-center">
                <p class="copyright__content  m-0">Copyright © 2022 <a class="copyright__content--link" href="index.html">Rokon</a> . All Rights Reserved.</p>
                <p class="footer__bottom--desc"><a href="privacy-policy.html">Term & condition</a> , <a href="privacy-policy.html">Privacy Policy</a></p>
            </div>
        </div>
    </footer>
    {/* <!-- End footer section --> */}
    </div>
  )
}

export default Footer