/*
 * @Author: yangyang 1710001012@qq.com
 * @Date: 2025-06-30 15:39:45
 * @LastEditors: yangyang 1710001012@qq.com
 * @LastEditTime: 2025-06-30 16:39:42
 * @FilePath: /jfjs_door/src/pages/home/components/legend.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import "./legend.css";
export default function Legend({ title = "优质项目" }) {
  return (
    <div className="legend-container xl:px-80 2xl:px-[360px] py-10">
      <div className="flex items-center">
        <div className="legend-left flex-1 h-[6px]"></div>
        <div className="legend-center relative mr-5 ml-10">
          <div className="bow absolute w-9 h-9 bg-[#0B81E1] rounded-full left-[-22px] top-[-10px]"></div>
          <div className="legend-txt text-[#121212] text-4xl">{title}</div>
        </div>
        <div className="legend-right flex-1 h-[6px]"></div>
      </div>
    </div>
  );
}
