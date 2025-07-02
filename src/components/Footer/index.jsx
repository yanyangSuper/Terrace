/*
 * @Author: yangyang 1710001012@qq.com
 * @Date: 2025-06-30 15:29:38
 * @LastEditors: yangyang 1710001012@qq.com
 * @LastEditTime: 2025-07-01 17:26:56
 * @FilePath: /jfjs_door/src/components/Footer/index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Divider } from "antd";
import mpPic from "../../assets/common/mp.jpg";
import "./index.css";
export default function Footer() {
  const footerGroup = [
    {
      title: "关于我们",
      list: [
        {
          name: "平台简介",
          link: "/",
        },
        {
          name: "连写我们",
          link: "/",
        },
      ],
    },
    {
      title: "采购方",
      list: [
        {
          name: "操作指引",
          link: "/",
        },
        {
          name: "视频教程",
          link: "/",
        },
      ],
    },
    {
      title: "供应商",
      list: [
        {
          name: "操作指引",
          link: "/",
        },
        {
          name: "入网须知",
          link: "/",
        },
      ],
    },
    {
      title: "常见问题",
      list: [
        {
          name: "采购方",
          link: "/",
        },
        {
          name: "供应商",
          link: "/",
        },
      ],
    },
    {
      title: "服务中心",
      list: [
        {
          name: "在线咨询",
          link: "/",
        },
        {
          name: "售后服务",
          link: "/",
        },
        {
          name: "意见反馈",
          link: "/",
        },
      ],
    },
    {
      title: "供应链金融服务",
      list: [
        {
          name: "操作指引",
          link: "/",
        },
        {
          name: "常见问题",
          link: "/",
        },
      ],
    },
  ];
  const yearText = 2025;
  return (
    <div className="footer-wrapper xl:px-80 2xl:px-[360px] relative">
      <div className="slogan flex items-center justify-between text-2xl text-white py-6">
        <span>资源共享</span>
        <span>品质无忧</span>
        <span>合规合法</span>
        <span>资本增效</span>
      </div>
      <div className="line absolute top-14 left-0 w-full">
        <Divider style={{ backgroundColor: "#F2F2F2" }} />
      </div>
      <div className="footer-group mt-8 pb-5 flex justify-between">
        <div className="footer-group-left flex-1 flex justify-between mr-20">
          {footerGroup.map((item, index) => (
            <div className="group-item" key={index}>
              <div className="group-item-title text-[22px] text-white mb-3 cursor-pointer">
                <span>{item.title}</span>
              </div>
              <div className="group-item-content text-white">
                {item.list.map((snap, i) => (
                  <div className="group-item-content-item text-lg py-3 cursor-pointer" key={i}>
                    {snap.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="footer-group-right flex flex-col items-center">
          <img src={mpPic} className="w-[125px] h-[125px]" alt="" />
          <div className="text-white text-lg">官方小程序</div>
        </div>
      </div>
      <div className="footer-copyright absolute w-full left-0 flex items-center justify-center text-white bg-[#4B4F50] py-3">
        <span>Copyright © { yearText } 源建通（湖北）科技有限公司</span>
        <a
          href="https://beian.mps.gov.cn/#/query/webSearch"
          target="_blank"
          rel="noreferrer"
          className="flex items-center mr-3"
        >
          <img
            src="https://static-assets.sxlcdn.com/images/landing-sxl/gongan-beian.png"
            style={{ marginRight: '5px' }}
            alt=""
            data-v-1a789a3f=""
          />
          鄂公网安备42030002420366号
        </a>
        <a href="https://beian.miit.gov.cn/" target="_blank" rel="noreferrer">
          鄂ICP备2025093124号-3
        </a>
      </div>
    </div>
  );
}
