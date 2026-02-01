// Axios는 기본 설정이 미리 적용된 인스턴스 객체를 간편하게 생성할 수 있는 기능 제공
// axios 대신에 axios 인스턴스 객체를 불러오고 얘를 임포트 하면 됨

import axios from 'axios';

export const axiosInstance = axios.create({
  // 모든 요청은 baseURL에 지정된 도메인으로 기본 요청이 들어가게 됨
  baseURL: 'http://localhost:3000',
  // 데이터 요청이 5초동안 끝나지 않으면 자동으로 에러를 발생시키게 하는 속성 값
  timeout: 5000, // 5s
  // axios는 content-type이 기본적으로 application/json으로 설정돼있음 -> 생략해도 됨
  headers: {
    'Content-Type': 'application/json',
  },
});
