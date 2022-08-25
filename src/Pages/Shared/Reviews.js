import React from 'react';

const Reviews = () => {
    return (
        <section className="relative pt-24 pb-32 overflow-hidden">
  <div className="container mx-auto px-4">
   <div className='bg-green-100 p-4 rounded-lg'>
   <h2 className="text-blue-300 mb-5 max-w-2xl mx-auto font-heading font-bold text-center text-6xl sm:text-7xl text-gray-900">12k+ Happy Clients</h2>
    <p className=" font-medium mb-16 text-base max-w-md mx-auto text-center text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
   </div>
    <div className="flex flex-wrap -m-5 mt-5 p-4">
      <div className="w-full md:w-1/3 p-5 border-1 drop-shadow-lg shadow-slate-300">
        <div className="h-full p-0.5 bg-gradient-cyan transform hover:-translate-y-3 rounded-10 transition ease-out duration-1000">
          <div className="h-full px-7 py-8  rounded-lg bg-blue-200">
            <img className="mb-8" src="gradia-assets/images/testimonials/avatar.png" alt=""/>
            <p className="mb-8 text-lg text-gray-900">&ldquo;You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.&rdquo;</p>
            <h3 className="mb-1.5 font-heading font-bold text-lg text-gray-900">Darrell Steward</h3>
            <p className="text-sm text-gray-600">Product Designer</p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/3 p-5 drop-shadow-lg shadow-slate-300">
        <div className="h-full p-0.5 bg-gradient-cyan transform hover:-translate-y-3 rounded-10 shadow-5xl transition ease-out duration-1000">
          <div className="h-full px-7 py-8  rounded-lg bg-red-200">
            <img className="mb-8" src="gradia-assets/images/testimonials/avatar2.png" alt=""/>
            <p className="mb-8 text-lg text-gray-900">&ldquo;Simply the best. Better than all the rest. I&rsquo;d recommend this product to beginners and advanced users.&rdquo;</p>
            <h3 className="mb-1.5 font-heading font-bold text-lg text-gray-900">Ronald Richards</h3>
            <p className="text-sm text-gray-600">Software Engineer</p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/3 p-5 drop-shadow-lg shadow-slate-300">
        <div className="h-full p-0.5 bg-gradient-cyan transform hover:-translate-y-3 rounded-10 transition ease-out duration-1000">
          <div className="h-full px-7 py-8  rounded-lg bg-yellow-200">
            <img className="mb-8" src="gradia-assets/images/testimonials/avatar3.png" alt=""/>
            <p className="mb-8 text-lg text-gray-900">&ldquo;I cannot believe that I have got a brand new landing page after getting Omega. It was super easy to edit and publish.&rdquo;</p>
            <h3 className="mb-1.5 font-heading font-bold text-lg text-gray-900">Darrell Steward</h3>
            <p className="text-sm text-gray-600">Product Designer</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    );
};

export default Reviews;