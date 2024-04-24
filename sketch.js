let ip;
let ip_api = 'https://api.ipify.org?format=json';
let name;
let name_api = 'https://api.apicagent.com/?ua=Mozilla/5.0%20(Macintosh;%20Intel%20Mac%20OS%20X%2010_15_5)%20AppleWebKit/537.36%20(KHTML,%20like%20Gecko)%20Chrome/89.0.4389.114%20Safari/537.36';


async function getIP(){
  let data = await fetch(ip_api);
  let j_data = await data.json();
  ip = j_data.ip;

}

async function getName(){
  let data = await fetch(name_api);
  let j_data = await data.json();
  name = j_data.setup;
  name = j_data.delivery;


}

function setup() {
  createCanvas(800, 800);
  getIP();
  getName();


}

function draw() {
  background(140,33,44);
  text(ip, 50, 200);
  text(name, 20, 100);
  
  
  
}
