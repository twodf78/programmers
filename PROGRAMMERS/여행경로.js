function solution(tickets) {
  let answer = [];
  let correctCount = tickets.length;
​
  let withICN = [];
  let withoutICN = [];
​
  for (let i = 0; i < tickets.length; i++) {
    if (tickets[i][0] === 'ICN') withICN.push(tickets[i]);
    else withoutICN.push(tickets[i]);
  }
​
  tickets = [...withICN.sort(), ...withoutICN.sort()];
​
  function bfs(i) {
    let visited = [];
    let queue = [];
​
    queue.push([tickets[i][1], [tickets[i][0]]]);
    visited.push([i]);
​
    while (queue.length) {
      let current = queue.shift();
      let checkVisited = visited.shift();
​
      if (current[1].length === correctCount) {
        return (answer = [...current[1], current[0]]);
      }
​
      tickets.forEach((ticket, index) => {
        if (checkVisited.includes(index)) return;
        if (ticket[0] === current[0]) {
          queue.push([ticket[1], [...current[1], ticket[0]]]);
          visited.push([...checkVisited, index]);
        }
      });
    }
  }
​
  for (let i = 0; i < tickets.length; i++) {
    if (answer.length) {
      return answer;
    }
    bfs(i);
  }
}