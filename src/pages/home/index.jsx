/*
 * @Author: yangyang 1710001012@qq.com
 * @Date: 2025-06-30 15:23:43
 * @LastEditors: yangyang 1710001012@qq.com
 * @LastEditTime: 2025-07-01 18:02:02
 * @FilePath: /jfjs_door/src/pages/home/index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Header from "../../components/Header";
import Projects from "./components/projects";
import Labour from "./components/labour";
import News from "./components/news";
import Partner from "./components/partner";
import Footer from "../../components/Footer";
export default function Home () {
    return (
        <div className="home-wrapper">
            <Header />
            <Projects />
            <Labour />
            <News />
            <Partner />
            <Footer />
        </div>
    )
}