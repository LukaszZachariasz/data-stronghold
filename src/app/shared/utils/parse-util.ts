export class ParseUtil {
  static objectNotNullPropsToString = (canNullPropsObj: any): string => {
    if (canNullPropsObj == null) { return ''; }
    const objToStr = Object.keys(canNullPropsObj)
      .reduce((filterredNotNullPropsObj: any, key: string) => {
        const value = canNullPropsObj[key];
        if (value !== null && value.toString().length > 0) {
          filterredNotNullPropsObj[key] = value;
        }
        return filterredNotNullPropsObj;
      }, {});

    return JSON.stringify(objToStr);
  }
}
