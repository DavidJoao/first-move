"use client"
import { sendData } from "@/app/actions/chatGTP"
import React, { useEffect, useState } from "react"
import { spinner } from "@/app/lib/icons"

const page = () => {
    
    const initialForm = {
        departure: "",
        arrival: "",
        duration: "1 week",
        partyNo: "",
        notes: ""
    }

    const [form, setForm] = useState(initialForm)
    const [isLoading, setIsLoading] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true)
        const response = await sendData(form)
        if (response.status === 200) {
            console.log(response.data)
            const jsonString = response?.data?.data.replace(/^```json\n/, '').replace(/\n```"?$/, '').trim();  
            const parsedData = JSON.parse(jsonString);
            console.log(parsedData)
            setIsLoading(false)
        }

    }

	return (
		<div className="bg-zinc-900 flex flex-col items-center justify-start min-h-screen p-3 pt-[3rem]">
            <form className="border-[1px] border-neutral-600 bg-neutral-800 rounded w-full lg:w-[70%] h-auto p-4 rounded border grid grid-cols-1 sm:grid-cols-2 gap-3" onSubmit={handleSubmit}>
                <h1 className="gray-gradient-title text-center col-span-2">Start by providing some information</h1>
                <h1 className="text-center text-xs col-span-2">The purpose of this page is to help you find the cheapest dates. That&#39;s why we don&#39;t ask you to select specific dates upfront—our goal is to show you the best deals available.</h1>

                <div className="flex flex-col">
                    <label className="text-sm font-semibold">Departure City</label>
                    <input className="input" name="departure" value={form.departure} onChange={handleChange}/>
                </div>

                <div className="flex flex-col">
                    <label className="text-sm font-semibold">Destination</label>
                    <input className="input" name="arrival" value={form.arrival} onChange={handleChange}/>
                </div>

                <div className="flex flex-col">
                    <label className="text-sm font-semibold">Trip Duration</label>
                    <select className="input" name="duration" value={form.duration} onChange={handleChange}>
                        <option>1 week</option>
                        <option>2 weeks</option>
                        <option>3 weeks</option>
                        <option>1 month</option>
                    </select>
                </div>

                <div className="flex flex-col">
                    <label className="text-sm font-semibold">Party Number</label>
                    <input className="input" type="number" name="partyNo" value={form.partyNo} onChange={handleChange}/>
                </div>

                <div className="flex flex-col col-span-2">
                    <label className="text-sm font-semibold">Extra Notes</label>
                    <label className="text-xs">Any additional notes that could be useful for us to plan your trip.</label>
                    <input className="input" name="notes" value={form.notes} onChange={handleChange}/>
                </div>

                <button type="submit" className="button col-span-2 w-full md:w-1/2 mx-auto flex items-center justify-center my-auto">{isLoading ? spinner : "Let's make it outside the group chat!"}</button>
            </form>


        </div>
	)
}

export default page
