import { hashString } from '../utils';

// 存储伪类
const pseudoClasses = new Map();
/**
 * 创建字符串
 * @param obj 
 */
const createStringFromObject = (obj: Record<string, any>): string => {
  const styles = Object.keys(obj).reduce((acc: string, key: string) => {
    const value = obj[key];
    // 处理key，将驼峰转为-
    const k = key.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`);
    if (typeof value === 'string') {
      return `${acc}${k}:${value};`;
    }
    if (typeof value === 'number') {
      return `${acc}${k}:${value}px;`;
    }
    if (typeof value === 'object') {
      // 存储伪类
      if (k.startsWith('&:')) {
        pseudoClasses.set(k, createStringFromObject(value));
        return acc
      }
      return `${acc}${k}:${createStringFromObject(value)}`;
    }
    return acc;
  }, '')
  return styles;
}

/**
 * 处理插值
 * @param interpolation 
 * @returns 
 */
const handleInterpolation = (interpolation: any, props: any): string => {
  switch (typeof interpolation) {
    case 'object':
      return createStringFromObject(interpolation);
    case 'function':
      if(props !== undefined) {
        const result = interpolation(props);
        return handleInterpolation(result, props);
      }
      return interpolation;
    default:
      return interpolation;
  }
}

function serializeStyles(args: any, props?: any) {
  if (typeof args === 'object' && args.styles !== undefined) {
    return args;
  }
  let styles = '';
  const strings = args[0];

  if (strings.raw === undefined) {
    // 如果第一个参数不是模板字符串，则将其视为样式对象
    styles = handleInterpolation(strings, props);
  } else {
    // 处理第一个字符串部分
    styles += strings[0];
    // 如果第一个参数是模板字符串，则将其视为样式字符串
    for (let i = 1; i < args.length; i++) {
      styles +=  handleInterpolation(args[i], props);
      if (strings[i]) {
        styles += strings[i];
      }
    }
  }
  
  const name = hashString(styles);
  return {
    name,
    styles,
    pseudoClasses
  };
}

export default serializeStyles;