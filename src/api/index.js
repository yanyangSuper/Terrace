/*
 * @Author: yangyang 1710001012@qq.com
 * @Date: 2025-07-01 16:59:14
 * @LastEditors: yangyang 1710001012@qq.com
 * @LastEditTime: 2025-07-02 08:37:07
 * @FilePath: /jfjs_door/src/api/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import home from './home/index'
import common from './common/index'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    ...home,
    ...common
};
