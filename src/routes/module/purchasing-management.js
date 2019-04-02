
/** ******************** 采购管理 ********************/
// 礼品采购
const GiftPurchase = {
  name: 'gift_purchase',
  path: '/gift-purchase',
  meta: {
    icon: 'gift_purchase' // 图标
  },
  component: () => import(/* webpackChunkName: "GiftPurchase" */'@v/purchasing-management/gift-purchase.vue')
}
// 订货建议
const OrderProposals = {
  name: 'order_proposals',
  path: '/order-proposals',
  meta: {
    icon: 'order_proposals' // 图标
  },
  component: () => import(/* webpackChunkName: "OrderProposals" */'@v/purchasing-management/order-proposals.vue')
}
// 礼品订单
const GiftOrder = {
  name: 'gift_order',
  path: '/gift-order',
  meta: {
    icon: 'gift_order' // 图标
  },
  component: () => import(/* webpackChunkName: "GiftOrder" */'@v/purchasing-management/gift-order.vue')
}
// 采购退货
const PurchaseReturns = {
  name: 'purchase_returns',
  path: '/purchase-returns',
  meta: {
    icon: 'purchase_returns' // 图标
  },
  component: () => import(/* webpackChunkName: "PurchaseReturns" */'@v/purchasing-management/purchase-returns.vue')
}
// 异常单审核
const AbnormalListAudit = {
  name: 'abnormal_list_audit',
  path: '/abnormal-list-audit',
  meta: {
    icon: 'abnormal_list_audit' // 图标
  },
  component: () => import(/* webpackChunkName: "AbnormalListAudit" */'@v/purchasing-management/abnormal-list-audit.vue')
}
// 礼品部审核
const GiftDepartmentAudit = {
  name: 'gift_department_audit',
  path: '/gift-department-audit',
  meta: {
    icon: 'abnormal_list_audit' // 图标
  },
  component: () => import(/* webpackChunkName: "GiftDepartmentAudit" */'@v/purchasing-management/order-audit/gift-department-audit.vue')
}
// 采购部审核
const ProcurementDepartmentAudit = {
  name: 'procurement_department_audit',
  path: '/procurement-department-audit',
  meta: {
    icon: 'procurement_department_audit' // 图标
  },
  component: () => import(/* webpackChunkName: "ProcurementDepartmentAudit" */'@v/purchasing-management/order-audit/procurement-department-audit.vue')
}
export default {
  GiftPurchase,
  OrderProposals,
  GiftOrder,
  PurchaseReturns,
  AbnormalListAudit,
  GiftDepartmentAudit,
  ProcurementDepartmentAudit
}
