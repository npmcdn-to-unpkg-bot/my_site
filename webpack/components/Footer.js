import React, { Component } from 'react';
// const footer = require('../../src/_pugfiles/footer.pug');

class Footer extends Component {
  render () {
    return (
      <div className="section-footer" id="footer">
        <div className="pv4 ph3 ph5-ns tc"><a className="link dib h2 w3 mr3 hide-child relative" href="https://twitter.com/intent/tweet?screen_name=corderophi678">
          <svg width="32" height="32" style={{fill:'#033648'}} data-icon="twitter">
            <path d="M2 4 C6 8 10 12 15 11 A6 6 0 0 1 22 4 A6 6 0 0 1 26 6 A8 8 0 0 0 31 4 A8 8 0 0 1 28 8 A8 8 0 0 0 32 7 A8 8 0 0 1 28 11 A18 18 0 0 1 10 30 A18 18 0 0 1 0 27 A12 12 0 0 0 8 24 A8 8 0 0 1 3 20 A8 8 0 0 0 6 19.5 A8 8 0 0 1 0 12 A8 8 0 0 0 3 13 A8 8 0 0 1 2 4"></path>
            <p className="db tc contact-tag">Twitter</p>
          </svg>
          <div className="child twitter-bubble-child absolute bg-white ba b--near-black bw2 br3 pa1">Send me a Tweet!</div></a><a className="link dib h2 w3 hide-child relative" href="mailto:rich@corderophilosophy.com">
            <svg width="32" height="32" style={{fill:'#033648'}} data-icon="email">
              <path d="M32 12.679v14.179q0 1.179-0.839 2.018t-2.018 0.839h-26.286q-1.179 0-2.018-0.839t-0.839-2.018v-14.179q0.786 0.875 1.804 1.554 6.464 4.393 8.875 6.161 1.018 0.75 1.652 1.17t1.688 0.857 1.964 0.438h0.036q0.911 0 1.964-0.438t1.688-0.857 1.652-1.17q3.036-2.196 8.893-6.161 1.018-0.696 1.786-1.554zM32 7.429q0 1.411-0.875 2.696t-2.179 2.196q-6.714 4.661-8.357 5.804-0.179 0.125-0.759 0.545t-0.964 0.679-0.929 0.58-1.027 0.482-0.893 0.161h-0.036q-0.411 0-0.893-0.161t-1.027-0.482-0.929-0.58-0.964-0.679-0.759-0.545q-1.625-1.143-4.679-3.259t-3.661-2.545q-1.107-0.75-2.089-2.063t-0.982-2.438q0-1.393 0.741-2.321t2.116-0.929h26.286q1.161 0 2.009 0.839t0.848 2.018z"></path>
              <p className="dib tc contact-tag">E-Mail</p>
            </svg>
            <div className="child email-bubble-child absolute bg-white ba b--near-black bw2 br3 pa1">Send me an email!</div></a></div>
      </div>    )
  }
}

export default Footer;
