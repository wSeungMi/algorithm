function solution(num1, num2) {
    var answer = Math.floor(num1 / num2)
    return answer;
}
// Math.floor() : 소수점 첫째 자리에서 내림(버림) -> 정수 반환
// floor 함수는 입력받은 숫자보다 작거나 같은 정수 중 가장 큰 정수를 리턴하기 때문에 음수인 경우 계산 주의! 
// e.g. Math.floor(-1.5); // -2, Math.floor(-45.95); // -46