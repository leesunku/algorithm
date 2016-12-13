/**
 * 달팽이관 알고리즘
 * 2차원 배열을 달팽이관 처럼 접근하는 알고리즘
 * ex)
 * 	1	2	3	4	5 
 * 	16	17	18	19	6
 * 	15	24	25	20	7
 * 	14	23	22	21	8
 * 	13	12	11	10	9
 * 
 * front, back 배열의 인자 값에 사용됨
 * count 배열에 증가 값을 입력하기 위한 count = 1
 * tr 배열 인자 값 증가/감소를 수행하는 트리거 tr = 1
 * start 내부 반복문 횟수를 줄이기 위한 start = 0
 * con 변경 할 배열 인자 값 구분과 내부반복문 횟수를 결정하는데 사용 될 변수 con = 0
 * 
 */
let k = 5, front = 0, back = 0, count = 1, tr = 1, start = 0, con = 0;

let A = new Array();

for (let a = 0; a < k; a++)
	A[a] = new Array();

for (let i = 0; i < (k*2)-1; i++){
	for (start;start<k;start++){
		if (con%2==0)
			back = back + tr;
		else
			front = front + tr;
		A[front][back] = count; 
		count++;
	}
	if (con%2!=0)
		tr = tr * -1;
	start = (con/2) + 1;
	con++;
}
for(let a = 0; a < A.length; a++){
	let arrStr = "";
	for(let b = 0; b < A[a].length; b++)
		arrStr += "\t" + A[a][b];
	console.log(arrStr);
}
		
		
		