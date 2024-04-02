import React, { useEffect, useState } from 'react'
import { getPopulation } from '../api/population'
import { useDispatch, useSelector } from 'react-redux'
import { setPopulation } from '../slice/population'
import { Line } from 'react-chartjs-2'
import Chart from 'chart.js/auto';

const Population = () => {

    useEffect(() => {
        getPopulation().then(({ data }) => {
            dispatch(setPopulation(data.data));
        })
    }, [])

    const dispatch = useDispatch();
    const populationData = useSelector((state) => state.population.population);
    console.log(populationData);
    const populationChartData = {
        labels: populationData.map((record) => record.Year),
        datasets: [
            {
                label: "United States",
                data: populationData.map((record) => record.Population),
                backgroundColor: "green",
                borderColor: "green"
            }
        ]
    }
   
    return (
        <div className='flex flex-col gap-6 lg:w-full md:w-[300px]'>
            <div className='text-white text-xl'>
                Population
            </div>
            <Line className='bg-gray-900 p-5 rounded-md w-full' data={populationChartData} />
        </div>
    )
}

export default Population