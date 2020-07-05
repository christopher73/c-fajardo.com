import React, { useEffect, useState } from "react";
export default function Blog() {
  const [news, setNews] = useState([]);
  const api = "https://hn.algolia.com/api/v1/search_by_date?tags=story";

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(api);
        const res = await response.json();
        console.log(res);
        setNews([...news, ...res.hits]);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className='container'>
      <h4 className='h4 p-4 text-secondary shadow my-5'>
        {" "}
        ...sorry no blogs yet! ...but for the meantime, you can enjoy this
        awesome content from{" "}
        <span className=' bg-danger text-white px-2'>HackerNews</span>
      </h4>
      {news.map((elem, i) => (
        <div key={i}>
          <h5 style={{ marginBottom: "1px" }}> {elem.title} </h5>
          <a
            href={elem.url}
            target='_black'
            style={{
              color: "#ef0d33",
              fontSize: ".7rem",
              textDecoration: "none",
            }}
          >
            {"  <Story Link>"}
          </a>
          <p
            style={{
              marginTop: "1px",
              fontSize: "small",
              textTransform: "capitalize",
            }}
          >
            by : {elem.author}
            <br /> date: {elem.created_at.split("T")[0]}
          </p>
        </div>
      ))}
    </div>
  );
}
