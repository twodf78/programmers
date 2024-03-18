function solution(triangle) {
    const dp = Array.from({length: triangle.length}, _ =>0 );
    dp[0] = triangle[0][0];
    let previous = [...dp];
    for(let i = 1; i< triangle.length;i++){
        for(let j = 0; j<triangle[i].length; j++){
            if(j ===0){
                dp[j] = previous[j] + triangle[i][j];
            }else if(j === triangle[i].length - 1){
                dp[j] = previous[j - 1] + triangle[i][j];
            }else{
                dp[j] = Math.max(previous[j] + triangle[i][j],  previous[j - 1] + triangle[i][j]);
            }
        }
        previous = [...dp];
        
    }
    return Math.max(...dp);
}