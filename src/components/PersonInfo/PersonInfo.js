import React, { useEffect, useState } from 'react';
import axios from "axios";
import styling from "./PersonInfo.module.scss";
import spinner from "../../assets/spinner.svg";
import SvgContainer from './components/SvgContainer/SvgContainer';
import ButtonTable from './components/ButtonTable/ButtonTable';

const url = "https://randomuser.me/api/";

const PersonInfo = () => {
    const [fetchPerson, setFetchPerson] = useState({});
    const [text1, setText1] = useState("My name is");
    const [text2, setText2] = useState("");
    const [loading, setLoading] = useState(false);

    // console.log(fetchPerson);

    const ApiFetcher = async () => {
        setLoading(true);
        try {
            const response = await axios.get(url);
            const person = response.data.results[0];
            const { email, phone, gender, dob: { age }, picture: { large: image }, name: { title, first: name, last: surname }, location: { country }, login: { password } } = person;
            const fullname = `${title} ${name} ${surname}`;
            const personData = {
                email,
                gender,
                fullname,
                image,
                age,
                phone,
                country,
                password
            };
            setFetchPerson(personData);
            setText2(personData.fullname);
        } catch (e) {
            console.log(e);
        }
        setLoading(false);
    };

    useEffect(() => {
        ApiFetcher();
    }, []);

    return (
        <div className={styling.card}>
            <nav className={styling.navbar}></nav>
            <div className={styling.container}>
                {loading ? <img src={spinner} alt="spinner-loading" className={styling.spinner} /> :
                    <>
                        <img src={fetchPerson.image} alt="user_picture" className={styling.image} />
                        <div className={styling.text1}>{text1}</div>
                        <div className={styling.text2}>{text2}</div>
                    </>
                }
            </div>
            <SvgContainer fetchPerson={fetchPerson} setText1={setText1} setText2={setText2}/>
            <ButtonTable ApiFetcher={ApiFetcher} fetchPerson={fetchPerson}/>
        </div>
    );
};

export default PersonInfo;