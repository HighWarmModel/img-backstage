
import { delayedExecutionTool } from '@/lib/tools'
const huge = {
  name: '胡哥',
  user_id: 1,
  avator: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554206642289&di=86cbc869399b175c4bf50dc067acf5f1&imgtype=0&src=http%3A%2F%2Fdingyue.nosdn.127.net%2FY0b2B9MCCaqZBGTEhdix78AECPqwFsEiezuc0kwhYeDxL1536463553265.jpeg',
  access: [{
    id: 1,
    parentId: 0,
    keywords: '采购管理',
    title: '采购管理',
    genre: 'page',
    component: 'PurchasingManagement'
  }, {
    id: 2,
    parentId: 1,
    title: '礼品采购',
    keywords: '礼品采购',
    genre: 'page',
    component: 'GiftPurchase'
  }, {
    id: 3,
    parentId: 1,
    title: '订货建议',
    keywords: '订货建议',
    genre: 'page',
    component: 'OrderProposals'
  }, {
    id: 4,
    parentId: 1,
    title: '礼品订单',
    keywords: '礼品订单',
    genre: 'page',
    component: 'GiftOrder'
  }, {
    id: 5,
    parentId: 1,
    title: '采购退货',
    keywords: '采购退货',
    genre: 'page',
    component: 'PurchaseReturns'
  }, {
    id: 6,
    parentId: 1,
    title: '异常单审核',
    keywords: '异常单审核',
    genre: 'page',
    component: 'AbnormalListAudit'
  }, {
    id: 7,
    parentId: 1,
    title: '订单审核',
    keywords: '订单审核',
    genre: 'page',
    component: 'OrderAudit'
  }, {
    id: 8,
    parentId: 7,
    title: '礼品部审核',
    keywords: '礼品部审核',
    genre: 'page',
    component: 'GiftDepartmentAudit'
  }, {
    id: 9,
    parentId: 7,
    title: '采购部审核',
    keywords: '采购部审核',
    genre: 'page',
    component: 'ProcurementDepartmentAudit'
  }
  ]
}

export const login = req => {
  return new Promise((resolve, reject) => {
    if (req.account.toString() === '1' && req.password.toString() === '1') {
      delayedExecutionTool(1000).then(() => {
        resolve({
          code: 1,
          data: {
            token: 123456
          },
          message: '登录成功'
        })
      })
    } else {
      delayedExecutionTool(1000).then(() => {
        resolve({
          code: 2,
          message: '账号或密码错误！'
        })
      })
    }
  })
}
export const getUserInfo = req => {
  return new Promise((resolve) => {
    delayedExecutionTool(1000).then(() => {
      resolve({
        code: 1,
        data: {
          ...huge
        },
        message: '登录成功'
      })
    })
  })
}
