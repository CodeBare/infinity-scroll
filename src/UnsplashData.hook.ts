import {useEffect, useState} from "react";
import IUnsplash from "./IUnsplash.interface";

// API location
const IMAGE_COUNT = 30
const API_URL = `https://api.unsplash.com/photos/random/?client_id=DsYAMZ7K_FPMuspt_BTgLXakTKPonfThEdtRzib0mAE&count=${IMAGE_COUNT}`
let dataLoading = false

const fetchData = async (): Promise<IUnsplash[]> => {
    try {
        if(dataLoading) {
            return []
        }
        dataLoading = true
        const results = await fetch(API_URL)
        const images = await results.json()
        dataLoading = false
        return images as IUnsplash[]
    } catch(error: any) {
        console.error('Unable to fetch images', error.message)
        dataLoading = false
        return []
    }
}

const UnsplashDataHook = (load: boolean): IUnsplash[] => {
    const [sData, setData] = useState<IUnsplash[]>([])

    useEffect(() => {
        if(load) {
            fetchData()
                .then((images) => {
                    setData(prev => ([...prev, ...images]))
                })
                .catch(error => {
                    console.error('UnsplashDataHook Error', error.message)
                })
        }
    }, [load])

    return sData
}

export default UnsplashDataHook