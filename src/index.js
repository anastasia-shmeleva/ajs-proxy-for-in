/* eslint-disable no-restricted-syntax */
export default function orderByProps(object, values) {
  const orderedObj = [];
  const notInValues = [];
  for (const key in object) {
    // instead of object.hasOwnProperty(key)
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      const obj = {
        key,
        value: object[key],
      };

      if (values.indexOf(key) !== -1) {
        orderedObj[values.indexOf(key)] = obj;
      } else {
        notInValues.push(obj);
      }
    }
  }

  const orderedAlph = notInValues.sort((a, b) => a.key.localeCompare(b.key));

  return orderedObj.concat(orderedAlph);
}
