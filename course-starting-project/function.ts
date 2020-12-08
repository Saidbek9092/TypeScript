// function addhandler(n1: number, n2: number, cb: (num:number) => void){
//   const result = n1 + n2;
//   cb(result)
//   return result*result
// }

// const a = addhandler(20,30,(res) => {
//   console.log(res)
// })
// console.log(a)

function send(data: string, cb: (response: any) => void) {
  cb('Saidbek');
}

send('Send this', (response) => {
  console.log(response);
  return true;
});
