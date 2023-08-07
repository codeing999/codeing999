// 한글, 영어, 숫자 제외한 특수문자를 찾는 정규표현식
const specialCharacter = /[^\w\sㄱ-힣]|[\_]/;

// 핸드폰 번호 검사
const numberCheck = /^\d+$/;

// 경도, 위도 검사
const coordinateCheck = /^\d+\.\d+$/;

//핸드폰 번호 유효성 검사
exports.checkPhoneValidate = (phone) => {
  // 핸드폰 번호 길이 확인
  if (!phone || phone.length < 10 || phone.length > 11) {
    return false;
  }

  // 핸드폰 번호 숫자 확인
  if (!numberCheck.test(phone)) {
    return false;
  }

  return true;
};
