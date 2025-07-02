/*
 * @Author: yangyang 1710001012@qq.com
 * @Date: 2025-07-01 17:00:45
 * @LastEditors: yangyang 1710001012@qq.com
 * @LastEditTime: 2025-07-02 10:07:02
 * @FilePath: /jfjs_door/src/api/home/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { apiUrl } from "../config";

import Ajax from "../../request/index";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  parentProjectTypes() {
    return Ajax.get(apiUrl + "/pro/parentProjectTypes");
  },
  parentProjects(params) {
    return Ajax.get(apiUrl + "/pro/parentProjectList", params);
  },
  inviteTenderList(params) {
      return Ajax.get(apiUrl + "/pro/inviteTenderList", params)
  },
  getLabourList(params) {
    return Ajax.get(apiUrl + "/pro/topLaborServiceList", params);
  },
  getNewsList(params) {
    return Ajax.get(apiUrl + "/share/news/page", params);
  },
  getPartner(params) {
    return Ajax.get(apiUrl + "/share/getCooperativePartner", params);
  }
};
