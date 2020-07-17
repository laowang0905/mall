import {
  instance
} from './ajax'

export const reqDetail = (iid) => {
  return instance({
    method: 'get',
    url: '/detail',
    params: {
      iid
    }
  })
}
export class GOODSINFO {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.columns = columns
    this.services = services
    this.realPrice = itemInfo.lowNowPrice
    this.discountDesc = itemInfo.discountDesc
    this.discountBgColor = itemInfo.discountBgColor
  }
}
export class GOODSPARAMS {
  constructor(info, rule) {
    // 注: images可能没有值(某些商品有值, 某些没有值)
    this.image = info.images ? info.images[0] : '';
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}
// 获取推荐数据
export function reqRecommend() {
  return instance({
    url: '/recommend'
  })
}