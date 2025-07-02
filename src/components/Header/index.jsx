import UserIcon from "../../assets/header/user.png";
import Logo from '../../assets/header/logo.png';
import { Input, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import "./index.css";
export default function Header() {
  return (
    <div className="App-header">
      <div className="bg-[#0B81E1] h-14 wellcome flex justify-between items-center text-[#FFFFFF] xl:px-80 2xl:px-[360px]">
        <div className="wellcome-text">源建通（湖北）科技有限公司欢迎您！</div>
        <div className="wellcome-line flex justify-between items-center cursor-pointer">
          <img className="h-4 w-4 mr-2" src={UserIcon} alt="" />
          <div>个人中心</div>
          <div className="ml-10">注册</div>
        </div>
      </div>
      <div className="banner bg-[url('http://47.113.110.199:8080/bg.jpg')] bg-cover">
        <div className="bannerCover h-56 xl:px-80 2xl:px-[360px] bg-white/[.6] relative">
          <div className="search-bar pt-8 flex justify-between items-center">
            <div className="search-left flex items-center">
              <img src={Logo} className="w-56 h-24" alt="" />
              <div className="flex items-center mt-7">
                <div className="line h-14 w-0.5 bg-[#0B81E1] mx-5"></div>
                <div className="logo-text text-[#0B81E1] text-2xl font-normal">
                  <div>南水北调水源区</div>
                  <div>建筑产业供应链平台</div>
                </div>
              </div>
            </div>
            <div className="search-right flex items-center">
              <Input placeholder="请输入项目名称" className="w-52 mr-1" />
              <Button type="primary" icon={<SearchOutlined />}>搜索</Button>
            </div>
          </div>
          <div className="menus flex justify-between items-center absolute bottom-0 left-0 xl:px-80 2xl:px-[360px] w-full">
            <div className="menu-item first-menu cursor-pointer">首页</div>
            <div className="menu-item cursor-pointer">项目资源</div>
            <div className="menu-item cursor-pointer">劳务服务</div>
            <div className="menu-item cursor-pointer">招标服务</div>
            <div className="menu-item cursor-pointer">建材商城</div>
            <div className="menu-item cursor-pointer">企业认证</div>
          </div>
        </div>
        <div className="bannerTex h-28 xl:w-[53.25rem] bg-[#EBEBEB] absolute bottom-0 left-0 flex justify-around items-center mb-24 opacity-70 rounded-[1rem] text-[56px] text-[#0B81E1] xl:mx-80 2xl:mx-[360px]">
          <span>联通政企</span>
          <span>融通内外</span>
          <span>畅通供需</span>
        </div>
      </div>
    </div>
  );
}
