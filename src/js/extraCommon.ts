import CommonUtil from './common.ts';
import Laohen from './laohen.ts';

declare global {
    interface Window {
      $commonUtil: CommonUtil;
      $laohen: Laohen
    }
}
window.$commonUtil = CommonUtil
window.$laohen = Laohen