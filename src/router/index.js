/*
 * @Author: yangyang 1710001012@qq.com
 * @Date: 2025-06-30 10:03:28
 * @LastEditors: yangyang 1710001012@qq.com
 * @LastEditTime: 2025-06-30 16:13:57
 * @FilePath: /jfjs_door/src/router/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";

export default function RouteConfig () { 
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<About />} />
            <Route path="/dashboard" element={<Dashboard />} /> */}
        </Routes>
    );
}