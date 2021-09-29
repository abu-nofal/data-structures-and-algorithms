const Graph=require('../graphDepthFirst')


describe('DepthFirst ', () => {
    const a = 'a';
    const b = 'b';
    const c = 'c';
    const d = 'd';
    const e = 'e';
    const f = 'f';
    const h = 'h';
    const g = 'g';
    let myGraph;
    beforeEach(() => {
      myGraph = new Graph();
  
      myGraph.addVertex(a);
      myGraph.addVertex(b);
      myGraph.addVertex(c);
      myGraph.addVertex(d);
      myGraph.addVertex(e);
      myGraph.addVertex(f);
      myGraph.addVertex(h);
      myGraph.addVertex(g);
  
      myGraph.addDirectedEdge(a, b);
      myGraph.addDirectedEdge(a, d);
  
      myGraph.addDirectedEdge(b, c);
      myGraph.addDirectedEdge(b, d);
      myGraph.addDirectedEdge(b, a);
  
      myGraph.addDirectedEdge(c, g);
      myGraph.addDirectedEdge(c, b);
  
      myGraph.addDirectedEdge(g, c);
  
      myGraph.addDirectedEdge(d, a);
      myGraph.addDirectedEdge(d, b);
      myGraph.addDirectedEdge(d, e);
      myGraph.addDirectedEdge(d, h);
      myGraph.addDirectedEdge(d, f);
  
      myGraph.addDirectedEdge(e, d);
  
      myGraph.addDirectedEdge(h, f);
      myGraph.addDirectedEdge(h, d);
  
      myGraph.addDirectedEdge(f, d);
      myGraph.addDirectedEdge(f, h);
    });
  
    it('returns correct order', () => {
      expect(myGraph.DepthFirst(a)).toEqual(['a', 'b', 'c', 'g', 'd', 'e', 'h', 'f']);
    });
  });