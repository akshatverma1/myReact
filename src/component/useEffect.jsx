import React, { useEffect, useState } from "react";

export default function Api() {
    let Url = "https://dummyjson.com/products";
    let [apidta, setApidta] = useState([]);

    let details =
        "when the In dependices array is null then the useeffect is call when the page is reload.when the dependices section is null no array and no Dependencies the then useEffect is call every re-render";
    console.log(details);


    useEffect(() => {
        fetch(Url).then((Response) => { Response.json().then((data) => { setApidta(data.products) }) });
    }, [])
    console.log(apidta);



    return (
        <>
            <h1>Api Fetch</h1>
            {apidta.map((item, index) => {
                return (
                    <>
                        <p style={{ display: "inline", fontWeight: 700 }}> - {item.id}</p>
                        <p style={{ display: "inline", fontWeight: 700 }}> {item.title}</p>
                        <br></br>
                        <br></br>
                    </>
                )
            })}
        </>
    )
}