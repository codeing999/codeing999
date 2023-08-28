module.exports = {
  singleQuote: true, // 문자열을 작은따옴표로 포맷팅
  trailingComma: 'es5', // 여러 줄의 객체나 배열에서 후행 쉼표 사용
  tabWidth: 2, // 탭 너비
  semi: true, // 문장 끝에 세미콜론 추가
  useTabs: false, // 탭 대신 공백 사용
};

/**
prettier를 vsocde extension으로 설치하는 방법과
필요한 프로젝트에만
npm install -D prettier 로 설치하는 방법이 있는데,

일부 프로젝트들에만 prettier를 적용하고 싶거나, 프로젝트들마다 다른 prettier를 적용하고 싶을 수가 있다.
두 설치 방법으로 다 가능한 것 같지만.

익스텐션으로 설치한 경우에는
vscode의 프리티어설정에서 Require Config를 체크해줘서 설정 파일이 있을 때만 적용하게 하면된다.

패키지로 설치를 하면 패키지의 설정이 vscode의 설정보다 우선순위로 적용된다고 한다.


프리티어 설정 파일 : https://prettier.io/docs/en/configuration.html
 */

/** 
.prettierrc 로만들 때에는 다음과 같이 json
*/
// {
//   "singleQuote": true,
//   "trailingComma": "es5",
//   "tabWidth": 2,
//   "semi": true,
//   "useTabs": false
// }
