export default function orderByProps(obj, array) {
  const firstArr = [];
  const copyObj = { ...obj };

  array.forEach((prop) => {
    firstArr.push({
      key: prop,
      value: obj[prop],
    });
    delete copyObj[prop];
  });

  const secondArr = [];

  for (const prop in copyObj) {
    if (Object.hasOwn(copyObj, prop)) {
      secondArr.push({
        key: prop,
        value: copyObj[prop],
      });
    }
  }

  secondArr.sort((a, b) => (a.key > b.key ? 1 : -1));

  const result = [...firstArr, ...secondArr];
  return result;
}
