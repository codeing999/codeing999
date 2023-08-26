// 참고 자료 : https://miiingo.tistory.com/272

const N = 5;   // 길이 N을 5라고 가정

// Array.fill 사용
let arr1 = new Array(N).fill(0);

// new Array(N)은 속도가 느리기 때문에 다음 방법이 더 빠르다고 한다
let arr2;
(arr2 = []).length = N;
arr2.fill(0);


/**
 * 2차원 배열
 */

// arr[5][2] (빈 배열 생성)
const arr3 = Array.from(Array(5), () => new Array(2));

// arr[5][2] (null로 초기화하여 생성)
const arr4 = Array.from(Array(5), () => Array(2).fill(null));