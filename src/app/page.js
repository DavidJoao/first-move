'use client'

import Link from "next/link"
import { motion } from "framer-motion"

export default function Home() {
	return (
        <motion.div 
            key="box"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            >
            <div className="flex flex-col items-center justify-center min-h-screen text-center p-3 bg-zinc-900">
                <h1 className="blue-gradient-title text-[45px] lg:text-[65px]">ScenarioGPT</h1>
                <div className="flex flex-col gap-1">
                    <h1 className="gray-gradient-title text-[25px] lg:text-[45px]">Every Scenario? Understood.</h1>
                    <p className="text-neutral-300">Start your journey with confidence, powered by AI.</p>
                    <Link className="button" href={"/pages/create"}>Start now</Link>
                </div>
            </div>
        </motion.div>
	)
}
