type Obj = { foo?: number };
const objDes: Obj = {};

const { foo = 500 } = objDes;
