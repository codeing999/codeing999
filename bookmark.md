## NGINX 
(이 세개는 순서대로 보기)

[How To Install Nginx on Ubuntu 22.04](https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-22-04#step-5-%E2%80%93-setting-up-server-blocks-)

[How To Secure Nginx with Let's Encrypt on Ubuntu 22.04](https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-22-04)

[Docs : EC2 인스턴스 셋업 총괄 (Git, Node, Nginx 까지)](https://github.com/CloneCoding-Pinterest/PinterestBE/issues/18)

## 코딩 컨벤션

[airbnb 코딩 컨벤션 번역](https://github.com/ParkSB/javascript-style-guide)

[Naver 코딩 컨벤션](https://github.com/naver/eslint-config-naver/blob/master/STYLE_GUIDE.md)

[standardJS](https://standardjs.com/readme-kokr.html)

## TEST
[TOAST UI - 테스트](https://ui.toast.com/fe-guide/ko_TEST)

## CS
[부스트코스 무료 강의](https://www.boostcourse.org/cs112)

[코딩 면접 대학](https://github.com/jwasham/coding-interview-university/blob/main/translations/README-ko.md)

## CICD
[튜토리얼: CodeDeploy를 사용하여 GitHub에서 애플리케이션 배포](https://docs.aws.amazon.com/ko_kr/codedeploy/latest/userguide/tutorials-github.html)

이 튜토리얼 따라서 링크들 따라서 하다보면 됨. 
단 5단계와 6단계 사이에는 애플리케이션 개정 작업이란 것을 해야하는데 좌측 메뉴 밑에 내려보면 보면 

https://docs.aws.amazon.com/ko_kr/codedeploy/latest/userguide/application-revisions.html
공식문서로는 여기에 나와 있음.

https://velog.io/@orijoon98/Github-Actions-AWS-CodeDeploy%EB%A5%BC-%ED%99%9C%EC%9A%A9%ED%95%9C-CICD-Node.js1

정확히 어떤 yml 파일을 작성해야하는지는 이 블로그 참고 2번글도 있음. (이 yml부분은 밑에 파이프라인 글 따라서 할거면 일단 지나가도됨)

여기까지가 코드 디플로이이고

이제 파이프라인으로 CI를 하려면

[[CI/CD] AWS CodeDeploy, CodePipeline 으로 node.js, ec2, git 배포 자동화하기](https://iot624.tistory.com/180#%F0%9F%93%8C_CodePipeline_%EC%9D%84_%ED%86%B5%ED%95%9C_%EB%B0%B0%ED%8F%AC_%EC%9E%90%EB%8F%99%ED%99%94)

이 링크 참조
다만, 중간에 빌드를 지나가버리는데 .env 환경변수를 등록해주려면 빌드를 해야됨. 아래의 공식문서 참고.

https://docs.aws.amazon.com/ko_kr/codepipeline/latest/userguide/pipelines-create.html

파이프라인이 성공하면 마지막으로 echosystem.json같은 파일을 만들라고하는데, 이게 위의 yml이랑 겹치는 동작을 함. 둘중 어느 방법을 해도 될 듯함. 나는 yml로 해서 성공함.

[Github Action, AWS CodeDeploy를 사용하여 자동 배포하기!](https://bohyeon-n.github.io/deploy/devops/github_action.html)

[야 너두 자동 배포 할 수 있어 with AWS CodeDeploy](https://jhpa.tistory.com/10)

[Github Action으로 CI/CD 구축하기 - 5편 : appspec.yaml 분석](https://goodgid.github.io/Github-Action-CI-CD-CodeDeploy-App-Spec-File/)

위 세개 사이트는 s3와 script를 써서 pipeline쓰는 나랑은 다른 방법이지만 자세해서 나중에 참고해볼만 할 듯.

[워크플로우를 깃허브 액션으로 자동화하기](https://techwell.wooritech.com/docs/github-action/overview)

깃헙액션 잘 정리되어 있음

## 나머지

[](https://velog.io/@unchapterd)

[RESTful API 설계 가이드](https://sanghaklee.tistory.com/57)

[ES6 이후의 변경점 총정리](https://teamdable.github.io/techblog/after-es6)

[정규표현식 테스트](https://www.regextester.com/)

[[WEB] Access Token & Refresh Token 원리 (feat. JWT)](https://inpa.tistory.com/561?category=889117)

[우린 Git-flow를 사용하고 있어요](https://techblog.woowahan.com/2553/)

[Passport 모듈 사용법](https://inpa.tistory.com/entry/NODE-%F0%9F%93%9A-Passport-%EB%AA%A8%EB%93%88-%EA%B7%B8%EB%A6%BC%EC%9C%BC%EB%A1%9C-%EC%B2%98%EB%A6%AC%EA%B3%BC%EC%A0%95-%F0%9F%92%AF-%EC%9D%B4%ED%95%B4%ED%95%98%EC%9E%90#)

[NestJS로 배우는 백엔드 프로그래밍](https://wikidocs.net/book/7059)

[Node js + Express + Socket.io 로 1대 1 채팅 구현하기 (1)](https://iot624.tistory.com/126?category=1001197)
[]()
[]()



[Programmers
MBTI·Survey·2020](https://programmers.co.kr/pages/2020-mbti-survey)





[]()
[]()
[]()
[]()
[]()
[]()
[]()
[]()
[]()
[]()
[]()
[]()
[]()
[]()
[]()
[]()
[]()
[]()
[]()
[]()
[]()
[]()
[]()
[]()
[]()
