const getParent = (parent, x) => {
  return parent[x] === x ? x : getParent(parent, parent[x]);
};
​
const unionParent = (parent, a, b) => {
  const n1 = getParent(parent, a);
  const n2 = getParent(parent, b);
  n1 < n2 ? (parent[n2] = n1) : (parent[n1] = n2);
};
​
const findParent = (parent, a, b) => {
  const n1 = getParent(parent, a);
  const n2 = getParent(parent, b);
  return n1 === n2;
};
​
function solution(n, costs) {
  let answer = 0;
  const parent = Array.from({ length: n }, (v, i) => i);
​
  costs.sort((a, b) => a[2] - b[2]);
​
  for (const cost of costs) {
    if (!findParent(parent, cost[0], cost[1])) {
      answer += cost[2];
      unionParent(parent, cost[0], cost[1]);
    }
  }
​
  return answer;
}
​