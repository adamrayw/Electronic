import React, { useState, useEffect } from 'react'
import { getProvinceRajaOngkir } from '../../services/apiServices';

const ProvinsiOption = () => {
    const [getProvince, setGetProvince] = useState([]);

    const fetchGetProvince = async () => {
        try {
            const response = await getProvinceRajaOngkir();
            const province = response.data.getProvince.rajaongkir.results;
            setGetProvince(province);
        } catch (error) {
            console.error('failed get province', error)
        }
    }

    useEffect(() => {
        fetchGetProvince();
    }, [])


    return (
        <>
            <option value="" disabled selected>Pilih Provinsi</option>
            {getProvince.map(provinces => (
                <option key={provinces.province_id} value={provinces.province_id}>
                    {provinces.province}
                </option>
            ))}
        </>
    )
}

export default ProvinsiOption