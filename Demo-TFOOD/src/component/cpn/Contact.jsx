/* eslint-disable no-unused-vars */
import React from 'react'

function Contact() {
  return (
    <div>
          {/* <p className='text-center text-4xl font-bold mb-[4%]'>Contact</p> */}
          <section className="text-gray-600 body-font relative">
              <div className="absolute inset-0 bg-gray-300">
                  <iframe width="100%" height="100%" frameBorder={0} marginHeight={0} marginWidth={0} title="map" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d251289.9826291269!2d103.79260962544593!3d10.22880397391525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a78c62b49eda17%3A0x8aa79fbbdd72cdb!2zUGjDuiBRdeG7kWM!5e0!3m2!1svi!2s!4v1697775783145!5m2!1svi!2s" style={{}} />
                  {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d251289.9826291269!2d103.79260962544593!3d10.22880397391525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a78c62b49eda17%3A0x8aa79fbbdd72cdb!2zUGjDuiBRdeG7kWM!5e0!3m2!1svi!2s!4v1697775783145!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" ></iframe> */}
              </div>
              <div className="container px-5 py-24 mx-auto flex">
                  <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
                      <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
                      <p className="leading-relaxed mb-5 text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
                      <div className="relative mb-4">
                          <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                          <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                      </div>
                      <div className="relative mb-4">
                          <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                          <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" defaultValue={""} />
                      </div>
                      <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                      <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
                  </div>
              </div>
          </section>

    </div>
  )
}

export default Contact