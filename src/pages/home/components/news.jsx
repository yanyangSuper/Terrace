/*
 * @Author: yangyang 1710001012@qq.com
 * @Date: 2025-06-30 15:28:47
 * @LastEditors: yangyang 1710001012@qq.com
 * @LastEditTime: 2025-07-02 09:50:35
 * @FilePath: /jfjs_door/src/pages/home/components/news.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Tabs } from "antd";
import { useState, useEffect } from "react";
import Legend from "./legend";
import Api from '../../../api/index'
import "./news.css";
export default function News() {
  const [activeKey, setActiveKey] = useState("0");
  const [tabList, setTabList] = useState([]);
  const [newsList, setNewsList] = useState([]);
  const getNewsType = () => {
    Api.dictData('news_type').then(res => {
        console.log(res)
        const resArr = res.data.map(item => {
            return {
                key:item.dictValue,
                label: item.dictLabel,
                children: '',
                ...item
            }
        })
        setTabList(resArr)
    })
  }
  const getNewsList = () => {
    const params = {
      pageNum: 1,
      pageSize: 10,
      // type: activeKey
    }
    Api.getNewsList(params).then(res => {
      console.log(res)
      const resArr = res.rows.slice(0,3)
      setNewsList(resArr)
    })
  }
  useEffect(() => {
    getNewsType()
    getNewsList()
  }, [])
  const onChange = (key) => {
    console.log(key);
    setActiveKey(key);
  };
  return (
    <div className="news-container">
      <Legend title="行业资讯" />
      <div className="news-card w-full xl:px-80 2xl:px-[360px]">
        <div className="tabs bg-[#FFFFFF p-5">
          <Tabs defaultActiveKey="1" activeKey={activeKey} items={tabList} onChange={onChange} />
          <div className="newsList">
            {newsList.map((item, index) => (
              <div className="news-item flex mb-5" key={index}>
                <div className="news-img rounded-md mr-3">
                  <img
                    className="w-[252px] h-[190px] rounded-md"
                    src={item.newsPic}
                    alt=""
                  />
                </div>
                <div className="news-content flex-1">
                  <div className="news-title text-2xl line-clamp-1">
                    {item.title}
                  </div>
                  <div className="news-desc text-xl text-[#636363] line-clamp-2 my-5">
                    {item.newsDesc}
                  </div>
                  <div className="news-time text-xl text-[#999999]">
                    <span className="mr-5">{item.updateTime}</span>
                    {item.readNum > 0 && <span>浏览：{item.readNum}</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
