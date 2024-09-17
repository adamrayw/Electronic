import React, { useState, useEffect } from 'react'
import { getCityRajaOngkir } from '../../services/apiServices';

const CityOption = () => {
    const [getCity, setGetCity] = useState([]);

    const fetchGetCity = async () => {
        try {
            const response = await getCityRajaOngkir();
            const city = response.data.getCity.rajaongkir.results;
            setGetCity(city);
        } catch (error) {
            console.error('failed get city', error)
        }
    }

    useEffect(() => {
        fetchGetCity();
    }, [])

    return (
        <>
            <option value="" disabled selected>Pilih Kota</option>
            {getCity.map(cities => (
                <option key={cities.city_id} value={cities.city_id}>
                    {cities.city_name}
                </option>
            ))}
        </>
    )
}

export default CityOption