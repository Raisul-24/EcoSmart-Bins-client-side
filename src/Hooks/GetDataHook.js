import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
const GetData = (url)=>{
    const [data, setData] = useState([]);
    const [dataLoaing, setDataLoading] = useState(true);
    useEffect(() => {
      axios(url).then((res) => {
        setData(res.data);
        setDataLoading(false);
      });
    }, [url]);
    return [data,dataLoaing]
}
export default GetData