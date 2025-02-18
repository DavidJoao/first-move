'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { languages } from '@/app/utils/languages'
import { sendData } from '@/app/actions/chatGTP'
import Loader from '@/app/components/Loader'
import { dataArray } from '@/app/utils/data'
import { toast } from 'sonner'


const page = () => {

    const initialForm = {
        language: "Spanish",
        scenario: ""
    }

    const [form, setForm] = useState(initialForm)
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState(null)

    useEffect(() => {
        setData(dataArray)
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value
        }))
    }

    const handleError = async () => {
        setForm(initialForm)
        setData(dataArray)
        toast("There was an error processing your request", {
            description: "Please, try again.",
            className: "bg-red-600 text-white"
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true)

        try {
            const response = await sendData(form);
            if (response.status === 200) {
                setIsLoading(false)
                console.log(response.data)
    
                setData(response?.data?.data)
                setForm((prevForm) => ({
                    ...prevForm,
                    ["scenario"]: ""
                }))

                toast("Success", {
                    description: "Questions generated successfully!.",
                    className: "bg-green-600 text-white"
                })
            }
        } catch (error) {
            handleError()
            setIsLoading(false)
        }
    }

    if (isLoading) return <Loader />

    return (
    <motion.div 
        key="box"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}>
        <div className="flex flex-col items-center justify-start min-h-screen text-center p-3 bg-zinc-900">
            <h1 className='gray-gradient-title text-[35px] text-white'>What is ScenarioGPT?</h1>
            <p className='text-sm text-neutral-300 w-full md:w-[50%]'>ScenarioGPT is a web app that helps you navigate specific interactions by providing the most likely questions and effective responses—all in your chosen language. ScenarioGPT equips you with the best answers for every scenario. This was created because sometimes we are in a hurry and can't wait until we get to a specific lesson in the language we are studying, or the language we need to use. In these situations, having a tool that helps us communicate effectively can make a huge difference.</p>
            <form className='bg-neutral-800 h-auto p-3 mt-5 rounded w-full md:w-[50%] flex flex-col gap-5' onSubmit={handleSubmit}>
                <div className='flex flex-row  flex-wrap  items-center justify-center gap-2 text-[25px]'>
                    <p className='gray-gradient-title whitespace-nowrap text-[15px] lg:text-[25px]'>Scenario: I am going to </p>
                    <div className='bg-neutral-700 rounded min-w-[30px] w-full'>
                        <input required name='scenario' value={form.scenario} className='rounded p-2 text-2xl bg-neutral-600 font-semibold w-full text-center' onChange={handleChange}/>
                    </div>
                    <p className='gray-gradient-title whitespace-nowrap text-[15px] lg:text-[25px]'>And want to translate to</p>
                    <div className='bg-neutral-700 rounded w-full'>
                        <select required name='language' className='rounded p-2 text-2xl bg-neutral-600 font-semibold text-center w-full' value={form.language} onChange={handleChange}>
                            { languages.map((lang, index) => {
                                return (
                                    <option key={index}>{lang.name}</option>
                                )
                            }) }
                        </select>
                    </div>
                </div>
                <button type='submit' className='dark-button w-full'>Generate</button>
            </form>

                { data !== null && (
                    data?.map((question, index) => {
                        return (
                            <div key={index} className='flex flex-col gap-2 rounded-lg border-[1px] p-5 border-neutral-700 bg-neutral-800 shadow-lg hover:shadow-xl transition-shadow duration-300 m-5 w-full md:w-[50%]    '>
                            <div className='text-left text-lg text-white'>
                                <p className='text-xl text-neutral-100 font-semibold'>{question.EQ}</p>
                                <p className='text-lg text-neutral-400'>{question.TQ}</p>
                            </div>

                            <div className='text-left'>
                                <p className='text-lg text-green-500 font-semibold'>{question.EA}</p>
                                <p className='text-lg text-neutral-400'>{question.TA}</p>
                            </div>
                            </div>
                        )
                    })
                ) }
        </div>
    </motion.div>
  )
}

export default page