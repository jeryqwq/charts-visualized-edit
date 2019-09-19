//处理图表配置关系
import BaseAttr from './base-attr';//引入通用属性
import GridAttr from './../global/grid-attributes';//网格属性
import ToolTip from './../global/tooltip-attributes';//提示框
import xAxis from './../global/xAxis--attributes';
export default {
    ...BaseAttr,
    ...GridAttr,
    ...ToolTip,
    ...xAxis
}