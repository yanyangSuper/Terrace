/*
 * @Author: yangyang 1710001012@qq.com
 * @Date: 2025-06-30 15:28:33
 * @LastEditors: yangyang 1710001012@qq.com
 * @LastEditTime: 2025-07-01 18:33:22
 * @FilePath: /jfjs_door/src/pages/home/components/labour.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useEffect, useState } from "react";
import Legend from "./legend";
import { UserOutlined } from "@ant-design/icons";
import AddressIcon from "../../../assets/index/address.jpg";
import Api from '../../../api/index'
import "./labour.css";
export default function Labour() {
  const firmIcons = [
    {
      icon: "https://jfjs-1301526884.cos.ap-chengdu.myqcloud.com/jfjs/2025/06/25/b7daca31f0354cca9beeba34085a7a54.png",
    },
    {
      icon: "https://jfjs-1301526884.cos.ap-chengdu.myqcloud.com/jfjs/2025/06/25/1d25acdddfbe468ebafb33878220a4e2.png",
    },
    {
      icon: "https://jfjs-1301526884.cos.ap-chengdu.myqcloud.com/jfjs/2025/06/25/a199dc607239446e9559c5ca5b1bc395.png",
    },
    {
      icon: "https://jfjs-1301526884.cos.ap-chengdu.myqcloud.com/jfjs/2025/06/25/8930a7f755084333b23580d02e4cda13.png",
    },
    {
      icon: "https://jfjs-1301526884.cos.ap-chengdu.myqcloud.com/jfjs/2025/06/25/926692eee893448da66ada9bce600298.png",
    },
    {
      icon: "https://jfjs-1301526884.cos.ap-chengdu.myqcloud.com/jfjs/2025/06/25/367aa0bcbe6a42f2b87069ca48b4fb2f.png",
    },
  ];
  const [labourList, setLabourList] = useState([]);
  const getLabourList = () => {
    Api.getLabourList().then(res => {
      console.log(res);
      const resArr = res.data.slice(0, 6)
      setLabourList(resArr);
    });
  }
  useEffect(() => {
    getLabourList();
  }, []);
  return (
    <div className="labour-wrapper">
      <Legend title="优质劳务" />
      <div className="labour-list grid grid-cols-3 gap-3 xl:px-80 2xl:px-[360px]">
        {labourList.map((item, index) => (
          <div className="labour-item bg-[#FFFFFF] text-center mb-5 py-5 rounded-xl px-4" key={index}>
            <div className="labour-item-img flex justify-center">
              <img src={firmIcons[index].icon} className="h-20 w-20" alt="" />
            </div>
            <div className="labour-item-intro text-[30px]">{item.companyName ? item.companyName.slice(0, 4) : ''}</div>
            <div className="labour-item-name text-[20px] my-5 line-clamp-1">{item.companyName}</div>
            <div className="labour-item-desc flex items-center justify-between text-[14px] text-[#999999]">
              <div className="flex items-center">
                <img src={AddressIcon} className="h-[16px] w-[12px]" alt="" />
                <div className="line-clamp-1 ml-1">{item.address}</div>
              </div>
              <div className="flex">
                <UserOutlined style={{ color: "#AFAFAF" }} />
                <div className="ml-1">{item.account}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
