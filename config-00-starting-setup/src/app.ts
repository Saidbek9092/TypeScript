const button = document.querySelector("button")!;

function clickHandler(messake: string){
  console.log('Hi' + messake)
}

button.addEventListener('click', clickHandler.bind(this,'saidbek'));

function sendAnalytics (data: string) {
  console.log(data)
}

sendAnalytics('The important data')
