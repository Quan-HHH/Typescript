enum Status {
  MESSAGE = 2,
  SPA,
  DABAOJIAN
}

function getServe(status) {
  if(status === Status.MESSAGE) {
    return 'message'
  } else if (status === Status.SPA) {
    return 'spa'
  } else if (status === Status.DABAOJIAN) {
    return 'dabaojian'
  }
}
console.log(getServe(4))

// 知道枚举类型的值的时候 可以通过下标反查
console.log(Status[3]) // SPA