import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
//   const [data, setData] = useState([]);
//     useEffect(()=>{
//         fetch("https://api.github.com/users/chiragparihar7")
//         .then(response => response.json())
//         .then((data) =>{
//             console.log(data)
//             setData(data)
//         })
//     }, [])
        const data = useLoaderData()
  return (
    <div className="bg-gray-500 p-4 text-center text-white text-2xl">
      Github Follwers : {data.followers}
      <img  className="my-5" src={data.avatar_url} alt="github"  width={300}/>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/hiteshchoudhary")
    return response.json();
}