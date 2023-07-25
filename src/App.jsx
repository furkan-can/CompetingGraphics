import { useEffect, useState } from "react"
import "./app.css"
import Area from "./components/Area";
import GraphicItem from "./components/GraphicItem";

function App() {

  const getRandomNumber = () => Math.floor(Math.random() * 100 + 1);
  const [barData, setBarData] = useState([
    {
      id: 1,
      title: "Facebook",
      color: "#4267B2",
      value: getRandomNumber(),
    },
    {
      id: 2,
      title: "Amazon",
      color: "#FF9960",
      value: getRandomNumber(),
    },
    {
      id: 3,
      title: "Youtube",
      color: "#FF0000",
      value: getRandomNumber(),
    },
    {
      id: 4,
      title: "Google",
      color: "#34A853",
      value: getRandomNumber(),
    },
    {
      id: 5,
      title: "Microsoft",
      color: "#F25822",
      value: getRandomNumber(),
    },
  ]);

  const findBigBarItem = (data) => {
    const x = data.sort((data1, data2) => data2.value - data1.value);
    return x[0].value;
  }

  const [bigBarData, setBigBarData] = useState(findBigBarItem(barData));


  const setBarDataWithRandom = () => {
    let datas = [...barData];
    datas.map((data) => data.value += getRandomNumber())
    setBigBarData(findBigBarItem(datas));
    setBarData(datas);
  }

  useEffect(() => {
    setInterval(() => {
      setBarDataWithRandom();
    }, 2000)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderItem = (item, index) => {
    let rate = item.value / bigBarData;
    rate = rate * 1000 - 40;
    const percent = (rate * 100) / 1040;
    return <GraphicItem
      key={item.id}
      color={item.color}
      top={(index) == 0 ? 10+"px":((index*40)+10)+"px"}
      width={percent + "%"}
      text={item.title}
      count={item.value}
    />
  }

  return (
    <>
      <h1 className="app-title">Number of Customers of Companies</h1>
      <Area data={barData}>
        {barData.map((data,index) => renderItem(data,index))}
      </Area>
    </>
  )
}

export default App
