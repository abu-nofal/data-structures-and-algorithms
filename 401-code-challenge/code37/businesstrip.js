function BusinessTrip(graph, cities) {
    let totalWeight = 0;
    let possible = false;
    let pArray = new Array(cities.length - 1).fill(false);
    for (let i = 0; i < cities.length - 1; i++) {
      let neighbors = graph.adjacencyList.get(cities[i]);
      if (!neighbors) {
        totalWeight = 0;
        possible = false;
        break;
      }
  
      for (const neighbor of neighbors) {
        if (neighbor.vertex === cities[i + 1]) {
          pArray[i] = true;
          totalWeight += neighbor.weight;
        }
      }
    }
  
    if (pArray.includes(false)) {
      totalWeight = 0;
      possible = false;
    } else {
      possible = true;
    }
  
    return `${possible}, $${totalWeight}`;
  }

  module.exports = BusinessTrip;