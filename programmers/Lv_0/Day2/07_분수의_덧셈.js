function solution(denum1, num1, denum2, num2) {
    // topNumber : 분자
    // bottomNumber : 분모
    var answer = [];
    var topNumber = (denum1 * num2) + (denum2 * num1);
    var bottomNumber = num1 * num2;
    var maximum = 1; // 서로소(최대공약수가 1인 두 자연수)
    
    for(let i =2; i<=Math.min(topNumber, bottomNumber); i++) {
        if(topNumber % i === 0 && bottomNumber % i === 0) {
            maximum = i;
        }
    }
    answer.push(topNumber / maximum);
    answer.push(bottomNumber / maximum);
    return answer;
}