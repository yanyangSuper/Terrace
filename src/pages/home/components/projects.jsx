/*
 * @Author: yangyang 1710001012@qq.com
 * @Date: 2025-06-30 15:25:19
 * @LastEditors: yangyang 1710001012@qq.com
 * @LastEditTime: 2025-07-01 18:24:03
 * @FilePath: /jfjs_door/src/pages/home/components/projects.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Legend from "./legend";
import { Tabs, Divider } from "antd";
import Api from "../../../api/index"
import { useState, useEffect } from "react";
import "./projects.css";
export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [parentProjectTypes, setParentProjectTypes] = useState([]);
  const [activeKey, setActiveKey] = useState("0");
  const [bidsList, setBidsList] = useState([]);
  const onChange = (key) => {
    setActiveKey(key)
  };
  const getTypes = () => {
    Api.parentProjectTypes().then(res => {
        const resArr = res.data.map(item => {
            return {
                key:item.dictValue,
                label: item.dictLabel,
                children: '',
                ...item
            }
        })
        setParentProjectTypes(resArr)
    })
  }
  const getParentProjects = () => {
    Api.parentProjects({
        pageSize: 10,
        pageNum: 1,
        projectType: activeKey
    }).then(res => {
        console.log(res)
        const parentsArr = res.rows.slice(0, 6)
        setProjects(parentsArr)
    })
  }
  const getInviteTenderList = () => {
    Api.inviteTenderList({
        pageSize: 10,
        pageNum: 1
    }).then(res => {
        console.log(res)
        const inviteArr = res.rows.slice(0, 3)
        setBidsList(inviteArr)
    })
  }
  useEffect(() => {
    getTypes();
    getParentProjects();
    getInviteTenderList();
  }, [])
  return (
    <div className="projects-wrapper ">
      <Legend title="优质项目" />
      <div className="card flex items-center xl:px-80 2xl:px-[360px]">
        <div className="project-card w-3/4 mr-3 h-[500px] p-5">
          <Tabs defaultActiveKey="1" activeKey={activeKey} items={ parentProjectTypes } onChange={onChange} />
          <div className="project-list">
            {projects.map((item, index) => (
              <div className="project-item mb-3" key={index}>
                <div className="item-bow h-[12px] w-[12px] bg-[#0B81E1] rounded-md float-start mt-[6px]"></div>
                <div className="item-content ml-4">
                  <div className="item-title text-base text-[#333333] pb-2 truncate">{item.name}</div>
                  <div className="item-desc flex items-center text-xs text-[#999999]">
                    <div className="desc-item flex items-center mr-3">
                      <div className="item-label">工程造价：</div>
                      <div className="item-value">{item.engineeringCost}万</div>
                    </div>
                    <div className="desc-item flex items-center">
                      <div className="item-label">工程地点：</div>
                      <div className="item-value">{item.locatio}</div>
                    </div>
                    <div className="desc-item flex items-center">
                      <div className="item-label">发布时间：</div>
                      <div className="item-value">{item.releaseTime}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="project-card w-1/4 h-[500px] p-5">
          <div className="bids-title flex items-center pb-[10px]">
            <div className="line w-[6px] h-9 bg-[#0B81E1] mr-3"></div>
            <div className="text-[20px] text-[#333333]">中标公告</div>
          </div>
          <Divider size="small" />
          <div className="bids-list mt-[15px]">
            {bidsList.map((item, index) => (
              <div className="bids-item mb-3" key={index}>
                <div className="bids-item-title text-base text-[#333333] pb-2 flex items-baseline">
                  <div className="h-[12px] w-[12px] bg-[#0B81E1] rounded-md mr-1"></div>
                  <div className="flex-1 line-clamp-2">{item.title}</div>
                </div>
                <div className="bids-item-content text-xs text-[#999999] ml-4">
                  中标公告发布时间：{item.releaseTime ? item.releaseTime.slice(0, 10) : '--'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
