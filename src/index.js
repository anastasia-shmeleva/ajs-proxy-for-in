/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-unused-expressions */
/* eslint-disable guard-for-in */
export default function orderByProps(object, [...props]) {
  const orderedObj = [];
  for (const property in object) {
    props.forEach((prop) => {
      if (prop === property) {
        orderedObj.push({ key: `${property}`, value: `${object[property]}` });
        delete object[property] === prop;
      }
    });
  }

  const orderedAlph = [];
  Object.keys(object).sort().reduce(
    (_obj, key) => (orderedAlph.push({ key: `${key}`, value: `${object[key]}` })),
    {},
  );

  return orderedObj.concat(orderedAlph);
}
