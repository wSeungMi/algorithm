function solution(array) {
    var answer = 0;
    array.sort((a,b) => a-b); // 오름차순 정렬
    // 내림차순 정렬 ((a,b) => b-a);
    answer = array[Math.floor(array.length / 2)];
    return answer;
}