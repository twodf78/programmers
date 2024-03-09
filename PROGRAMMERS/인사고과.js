function solution(scores) {
  let answer = 0;
  const [wanhoAtt, wanhoPeer] = scores[0];
  scores = scores.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : b[0] - a[0]));
    
  let max = 0;
  for(let i = 0 ; i < scores.length; i++) {
    const [att, peer] = scores[i];
    if (peer < max) {
      if (att === wanhoAtt && peer === wanhoPeer) return -1;
    } else {
      max = Math.max(max, peer);
      if (att + peer > wanhoAtt + wanhoPeer) answer++;
    }
  }
  return answer + 1;
}
​