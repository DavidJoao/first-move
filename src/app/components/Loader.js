import React, { useEffect } from 'react'
import { motion, animate, stagger } from 'framer-motion'

const Loader = () => {

    useEffect(() => {
        animate(
          '.example li',
          { opacity: [1, 1, 0], y: [50, 0, 50] },
          { delay: stagger(0.09), duration: 1.5, repeat: Infinity }
        );
      }, []);

  return (
		<div className="flex flex-col items-center justify-center min-h-screen text-center p-3 bg-zinc-900">
      <h1 className='mb-5'>Generating response, please wait...</h1>
			<ul className="example flex justify-center gap-5 list-none m-0 p-0">
				{[...Array(4)].map((_, index) => (
					<li
						key={index}
						className="w-[45px] h-[45px] lg:w-[50px] lg:h-[50px] rounded-[10px] bg-blue-500 opacity-0"></li>
				))}
			</ul>
		</div>
  )
}

export default Loader