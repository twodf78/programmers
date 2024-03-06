function solution(sequence) {
  let answer = 0;
  let pSeq = 0;
  let mSeq = 0;
​
  for (let i = 0; i < sequence.length; i++) {
    if (i === 0) {
      pSeq = sequence[i];
      mSeq = -sequence[i];
    } else if (i % 2 === 0) {
      pSeq = (Math.max(pSeq + sequence[i], sequence[i]));
      mSeq = (Math.max(mSeq - sequence[i], -sequence[i]));
    } else {
      pSeq = (Math.max(pSeq - sequence[i], -sequence[i]));
      mSeq = (Math.max(mSeq + sequence[i], sequence[i]));
    }
    answer = Math.max(answer, pSeq, mSeq);
  }
​
  return answer;
}