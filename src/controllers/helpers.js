const mergeObj = object => {
  let obj = {};
  let newKey = 'message';
  let number = 1;

    if (object) {
      (Object.keys(object)).map((key) => {
        if (!obj[key]) {
          obj[key] = object[key];
        } else if (key.indexOf('message') !== -1 && typeof object[key] !== number) {
          number += 1;
          obj[newKey + number] = object[key];
        }
      });
    } else {
      obj = {};
    }
  return obj;
};

const addData = (object1, object2) => {
  const array = Object.keys(object2);
  array.forEach((key) => {
    if (key === 'email') {
      object1['useremail'] = object2['email'];
    } else if (!object1[key] && key !== 'email') {
      object1[key] = object2[key];
    }
  });
  return object1;
};

function generateToken() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }
  return `${s4() + s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
}

module.exports = {
  mergeObj,
  addData,
  generateToken,
};
