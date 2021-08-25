let queue = ["A", "B", "C", "D", "E"];
let k = 5;

const DuckDuckGoose = (queue, k)=>{
	let counter = 0;
  while(counter < k){
  	queue.push(queue.shift());
    counter++;
  }
  if(queue.length > 1){
  	queue.pop();
  }
  
  return queue.length === 1 ? queue[0] : DuckDuckGoose(queue, k);
}

console.log(DuckDuckGoose(queue, k));

module.exports=DuckDuckGoose