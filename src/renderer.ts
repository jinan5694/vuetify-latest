import { h, type VNode } from "vue";

export type FormDesignerData = {
  type: string
  props: {
    key?: string
    [key : string]: any
  }
  children: FormDesignerData[] | string
}


export function renderer(data: FormDesignerData): VNode {
  const { type, props, children } = data
  
  return h(type, props, typeof children === 'string' ? children : children.map(child => {
    return renderer(child)
  }))
}