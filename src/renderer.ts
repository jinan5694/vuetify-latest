import { getCurrentInstance, h, type VNode, Component } from "vue";
import { camelCase, upperFirst } from 'lodash-es'

export type FormDesignerData = {
  type: string
  props: {
    [key : string]: any
  }
  children: FormDesignerData[] | string
}


export function useRenderer() {
  const instance = getCurrentInstance()
  const components = instance?.appContext.components ?? {}

  function renderer(data: FormDesignerData): VNode {
    const { type, props = {}, children = [] } = data
    
    // 根据配置的组件名称，找到对应的组件定义
    let component: Component | string

    const compName = upperFirst(camelCase(type)) // v-card to VCard
    const compKeys = Object.keys(components) // 已注册组件名称数组
    if (compKeys.indexOf(compName) !== -1) {
      component = components[compName]
    } else {
      component = type
    }

    // 事件处理
    if (Object.keys(props).includes('onClick')) {
      const funcStr = props['onClick']
      props['onClick'] = new Function(`return (${funcStr})`)(instance)
    }
    
    let defaultSlot: () => string | VNode[]
    if (typeof children === 'string') {
      defaultSlot = () => children
    } else {
      defaultSlot = () => children.map(child => renderer(child))
    }
    return h(component, props, { default: defaultSlot })
  }

  return { renderer }
}





