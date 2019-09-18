import BaseAttr from './base-attr';//引入通用属性
import GridAttr from './../global/grid-attrs-desc';//网格属性
import ToolTip from './../global/tooltip-attrs-desc';
export default {
    ...BaseAttr,
    ...GridAttr,
    ...ToolTip
}