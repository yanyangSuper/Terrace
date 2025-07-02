/*
 * @Author: yangyang 1710001012@qq.com
 * @Date: 2025-06-30 15:29:01
 * @LastEditors: yangyang 1710001012@qq.com
 * @LastEditTime: 2025-07-02 10:10:01
 * @FilePath: /jfjs_door/src/pages/home/components/partner.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Legend from "./legend";
import { useEffect, useState } from "react";
import Api from '../../../api/index'
import "./partner.css"
export default function Partner () {
    const [partnerList, setPartnerList] = useState([]);
    const getPartnerList = () => {
        Api.getPartner().then(res => {
            console.log(res)
          setPartnerList(res.data)
        })
    }

    useEffect(() => {
        getPartnerList()
    }, [])

    return (
        <div className="partner-wrap pb-8">
            <Legend title="合作伙伴"/>
            <div className="partner-list grid grid-cols-4 gap-4 xl:px-80 2xl:px-[360px]">
                {
                    partnerList.map((item, index) => (
                        <div className="partner-item h-[127px] flex items-center justify-center" key={index}>
                            <img className="h-[58px]" src={item.logo} alt=""/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}