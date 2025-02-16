'use client'

import { navigate } from "./lib/navigate"
import { motion } from "framer-motion"

export default function Home() {
	return (
        <motion.div 
            key="box"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            >
            <div className="flex flex-col items-center justify-center min-h-screen text-center p-3 bg-zinc-900">
                <h1 className="blue-gradient-title text-[45px] lg:text-[65px]">First Move</h1>
                <div className="flex flex-col gap-1">
                    <h1 className="gray-gradient-title text-[25px] lg:text-[45px]">Make the trip happen</h1>
                    <p className="text-neutral-300">Start your journey with confidence, powered by AI.</p>
                    <button className="button" onClick={() => navigate('/pages/plan')}>Start now</button>
                </div>
            </div>
        </motion.div>
	)
}
