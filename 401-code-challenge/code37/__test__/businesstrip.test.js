const BusinessTrip =require('../businesstrip')
const Graph=require('../../code36/graph')

describe(' BusinessTrip ', () => {
    const cities = ['Metroville', 'Pandora'];
    const cities2 = ['Arendelle', 'Monstropolis', 'Naboo'];
    const cities3 = ['Naboo', 'Pandora'];
    const cities4 = ['Narnia', 'Arendelle', 'Naboo'];
    let g;
    beforeEach(() => {
      g = new Graph();
  
      const Pandora = 'Pandora';
      const Metroville = 'Metroville';
      const Arendelle = 'Arendelle';
      const Monstropolis = 'Monstropolis';
      const Naboo = 'Naboo';
      const Narnia = 'Narnia';
  
      g.addVertex(Pandora);
      g.addVertex(Metroville);
      g.addVertex(Arendelle);
      g.addVertex(Monstropolis);
      g.addVertex(Naboo);
      g.addVertex(Narnia);
  
      g.addDirectedEdge(Pandora, Arendelle, 150);
      g.addDirectedEdge(Arendelle, Pandora, 150);
  
      g.addDirectedEdge(Pandora, Metroville, 82);
      g.addDirectedEdge(Metroville, Pandora, 82);
  
      g.addDirectedEdge(Arendelle, Metroville, 99);
      g.addDirectedEdge(Metroville, Arendelle, 99);
  
      g.addDirectedEdge(Arendelle, Monstropolis, 42);
      g.addDirectedEdge(Monstropolis, Arendelle, 42);
  
      g.addDirectedEdge(Metroville, Narnia, 37);
      g.addDirectedEdge(Narnia, Metroville, 37);
  
      g.addDirectedEdge(Metroville, Naboo, 26);
      g.addDirectedEdge(Naboo, Metroville, 26);
  
      g.addDirectedEdge(Metroville, Monstropolis, 105);
      g.addDirectedEdge(Monstropolis, Metroville, 105);
  
      g.addDirectedEdge(Monstropolis, Naboo, 73);
      g.addDirectedEdge(Naboo, Monstropolis, 73);
  
      g.addDirectedEdge(Naboo, Narnia, 250);
      g.addDirectedEdge(Narnia, Naboo, 250);
    });
  
    it('returns true with pricing', () => {
      expect(BusinessTrip(g, cities)).toEqual('true, $0');
      expect(BusinessTrip(g, cities2)).toEqual('true, $0');
    });
  
    it('returns false with big lonely 0 dollar!!!!', () => {
      expect(BusinessTrip(g, cities3)).toEqual('false, $0');
      expect(BusinessTrip(g, cities4)).toEqual('false, $0');
    });
  });