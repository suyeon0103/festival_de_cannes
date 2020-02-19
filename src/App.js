import React, { Component } from 'react';
import Header from './components/Header';
import Contents from './components/Contents';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      year: 'all',
      movies: [
        {id:1, href: 'https://movie.naver.com/movie/bi/mi/basic.nhn?code=161967', photo:'https://movie-phinf.pstatic.net/20190528_36/1559024198386YVTEw_JPEG/movie_image.jpg', title:'기생충 (2019)', year:'2019', director: '봉준호', actors: '송강호(기택), 이선균(동익), 조여정(연교)', branch: '경쟁부문 - 황금종려상', synopsis: '"폐 끼치고 싶진 않았어요" 전원백수로 살 길 막막하지만 사이는 좋은 기택(송강호) 가족. 장남 기우(최우식)에게 명문대생 친구가 연결시켜 준 고액 과외 자리는 모처럼 싹튼 고정수입의 희망이다. 온 가족의 기대 속에 박사장(이선균) 집으로 향하는 기우. 글로벌 IT기업 CEO인 박사장의 저택에 도착하자 젊고 아름다운 사모님 연교(조여정)가 기우를 맞이한다. 그러나 두 가족의 만남 뒤로, 걷잡을 수 없는 사건이 기다리고 있었으니…'},
        {id:2, href: 'https://movie.naver.com/movie/bi/mi/basic.nhn?code=185438', photo:'https://movie-phinf.pstatic.net/20190508_61/1557295855620gDo9C_JPEG/movie_image.jpg', title:'령희 (2019)', year:'2019', director: '연제광', actors: '한지원(홍매)', branch: '시네파운데이션', synopsis: '나와 내 룸메이트 령희는 불법체류자다. 어제, 령희가 단속반에 쫓기다 사고로 사망했다. 회사는 추모보다는 뒷수습 하기에만 바쁘다. 나는 회사가 숨긴 령희를 찾아 나만의 장례식을 치러줄 것이다.'},
        {id:3, href: 'https://movie.naver.com/movie/bi/mi/basic.nhn?code=177967', photo:'https://movie-phinf.pstatic.net/20190515_203/1557888285764Rvouz_JPEG/movie_image.jpg', title:'악인전 (2019)', year:'2019', director: '이원태', actors: '마동석(장동수), 김무열(정태석), 김성규(강경호)', branch: '미드나잇 스크리닝', synopsis: '우연히 연쇄살인마의 표적이 되었다 살아난 조직 보스 장동수와 범인잡기에 혈안이 된 강력반 미친개 정태석. 타협할 수 없는 두 사람이 연쇄살인마 K를 잡기 위해 손잡는다. 표적은 하나, 룰도 하나! 먼저 잡는 놈이 갖는다!'},
        {id:4, href: 'https://movie.naver.com/movie/bi/mi/basic.nhn?code=184321', photo:'https://movie-phinf.pstatic.net/20190502_186/15567877153672xYCM_JPEG/movie_image.jpg', title:'무기들의 시간 (2019)', year:'2019', director: '허건', actors: '하정민(참슬), 이가경(은미), 이호아(예령)', branch: '비경쟁 단편', synopsis: '젊은 자영업자 참슬은 돈이 필요하다. 오랜만에 만난 고교동창들과의 송년회. 변호사가 된 은미는 비싼 밥을 사주며 으스대는 가운데, 집으로 돌아가는 길에 참슬은 어렵게 입을 연다. “은미야 돈 좀 빌려줄 수 있어?” 서로 자존심을 긁으며 날선 대화가 벌어지던 차. 그때, 쾅! 누군가 차에 치인다.'},
        {id:5, href: 'https://movie.naver.com/movie/bi/mi/basic.nhn?code=175086', photo:'/images/5.jpg', title:'나들이 (2018)', year:'2018', director: '장성원', actors: '이승연(나영란), 정희태(이병환), 송광자(안옥녀)', branch: '비경쟁 단편', synopsis: '가족들은 나들이를 떠난다.'},
        {id:6, href: 'https://movie.naver.com/movie/bi/mi/basic.nhn?code=153687', photo:'/images/6.jpg', title:'공작 (2018)', year:'2018', director: '윤종빈', actors: '황정민(흑금성(박석영)), 이성민(리명운), 조진웅(최학성)', branch: '미드나잇 스크리닝', synopsis: '북으로 간 스파이, 암호명 흑금성 1993년, 북한 핵 개발을 둘러싸고 한반도의 위기가 고조된다. 정보사 소령 출신으로 안기부에 스카우트된 박석영(황정민)은 ‘흑금성’이라는 암호명으로 북핵의 실체를 캐기 위해 북의 고위층 내부로 잠입하라는 지령을 받는다. 조국을 위해 굳은 신념으로 모든 것을 걸고 공작을 수행했던 그는 걷잡을 수 없는 갈등에 휩싸이는데…'},
        {id:7, href: 'https://movie.naver.com/movie/bi/mi/basic.nhn?code=173086', photo:'/images/7.jpg', title:'시계 (2018)', year:'2018', director: '조현준', actors: '류경수(진현호)', branch: '비경쟁 단편', synopsis: '이병 진현호는 군대 선임에게 성추행을 당한다. 어느날, 그는 선임으로부터 학대의 수위를 감면받을 기회를 얻게 된다. 그러나 그에게는 더욱 심한 대가를 치러야 한다는 비극이 기다리고 있는데...'},
        {id:8, href: 'https://movie.naver.com/movie/bi/mi/basic.nhn?code=155263', photo:'/images/8.jpg', title:'버닝 (2018)', year:'2018', director: '이창동', actors: '유아인(종수), 스티븐 연(벤), 전종서(해미)', branch: '경쟁부문 - 벌칸상', synopsis: '"이제 진실을 얘기해봐" 유통회사 알바생 종수(유아인)는 배달을 갔다가 어릴 적 같은 동네에서 살았던 해미(전종서)를 만나고, 그녀에게서 아프리카 여행을 간 동안 고양이를 돌봐 달라는 부탁을 받는다. 여행에서 돌아온 해미는 벤(스티븐 연)이라는 정체불명의 남자를 종수에게 소개한다. 어느 날 벤은 해미와 함께 종수의 집으로 찾아와 비밀스러운 취미에 대해 고백한다. 그때부터 종수는 무서운 예감에 사로잡히게 되는데...'},
        {id:9, href: 'https://movie.naver.com/movie/bi/mi/basic.nhn?code=164107', photo:'http://www.kobis.or.kr/common/mast/movie/2017/05/fe82f31594f7421e84ee1cee74a58fdd.jpg', title:'첫만남 (2017)', year:'2017', director: '박재현', actors: '최종률', branch: '쇼트 필름 코너', synopsis: '다문화 가정의 특별한 하루를 들여다보는 영화로, 외국인 며느리를 본 어느 할아버지의 자신의 손자가 태어나는 하루를 그린 영화'},
        {id:10, href: 'https://movie.naver.com/movie/bi/mi/basic.nhn?code=162956', photo:'https://movie-phinf.pstatic.net/20170621_47/1498034379629wpGB6_JPEG/movie_image.jpg', title:'그 후 (2017)', year:'2017', director: '홍상수', actors: '권해효(봉완)', branch: '경쟁부문', synopsis: '첫 출근날, 아름은 사장인 봉완의 헤어진 여자 자리에서 일하게 된다. 사랑의 노트가 발견되고, 봉완의 처가 회사로 찾아 오고, 아름은 헤어진 여자로 오해를 받는다. 결국 아름은 그날 회사를 그만 둘 수 밖에 없게 되는데…'},
        {id:11, href: '', photo:'http://www.kobis.or.kr/common/mast/movie/2017/05/29224b9a282c49d4ace8ed6cb7818415.jpg', title:'뫼비우스 (2017)', year:'2017', director: '번가남', actors: '', branch: '쇼트 필름 코너', synopsis: '금붕어의 기억력은 7초라고 한다. 7초 뒤 그들은 자연적으로 지나간 일들을 모두 잊고 모든 것들이 처음인 것처럼 새롭게 시작한다고 한다. 본편에서는 금붕어와 인간의 시각에서 보는 복잡하고 변화무쌍한 인성을 관찰하고 표현하였다.'},
        {id:12, href: 'https://movie.naver.com/movie/bi/mi/basic.nhn?code=159827', photo:'https://movie-phinf.pstatic.net/20180412_77/1523512188117Crr2W_JPEG/movie_image.jpg', title:'클레어의 카메라 (2017)', year:'2017', director: '홍상수', actors: '이자벨 위페르(클레어), 김민희(전만희), 장미희(남양혜)', branch: '특별상영', synopsis: '만희는 칸 영화제 출장 중에 부정직하다는 이유로 일자리에서 쫓겨난다. 클레어라는 여자는 선생인데 거기서 폴라로이드 카메라로 사진을 찍고 다닌다. 그러다 만희를 만나 그녀의 사정에 공감하게 된다. 클레어는 마치 여러 가능성의 만희를 미리 혹은 돌아가서 볼 수 있는 사람인 듯 하고, 그건 칸 해변의 신비한 굴을 통해서 그렇게 할 수 있을 것이다.'},
        {id:13, href: 'https://movie.naver.com/movie/bi/mi/basic.nhn?code=175090', photo:'https://movie-phinf.pstatic.net/20180510_109/1525936126435oS7Pr_JPEG/movie_image.jpg', title:'하늘피리 (2017)', year:'2017', director: '홍선영', actors: '전성우(오름), 박문아(아라), 금새록(찬미)', branch: '하늘피리', synopsis: '말 대신, 피리 소리를 통해 자신의 감정을 알리는 아라. 오름은 그런 아라와 가까워지면서, 미소를 짓는 방법도... 진심으로 마음을 전하는 방법도 배워가기 시작한다.'},
        {id:14, href: 'https://movie.naver.com/movie/bi/mi/basic.nhn?code=155256', photo:'https://movie-phinf.pstatic.net/20170510_67/1494379581052e3Eqd_JPEG/movie_image.jpg', title:'악녀 (2017)', year:'2017', director: '정병길', actors: '김옥빈(숙희), 신하균(중상), 성준(현수)', branch: '미드나잇 스크리닝', synopsis: '어린 시절부터 킬러로 길러진 숙희. 그녀는 국가 비밀조직에 스카우트되어 새로운 삶을 살 기회를 얻는다. “10년만 일해주면 넌 자유야. 하지만 가짜처럼 보이는 순간, 그땐 우리가 널 제거한다" 살기 위해 죽여야만 하는 킬러 숙희 앞에 진실을 숨긴 의문의 두 남자가 등장하고, 자신을 둘러싼 엄청난 비밀에 마주하게 되면서 운명에 맞서기 시작하는데... "보여줄게, 내가 어떻게 만들어졌는지"'},
        {id:15, href: 'https://movie.naver.com/movie/bi/mi/basic.nhn?code=154112', photo:'https://movie-phinf.pstatic.net/20170517_137/1494988360843qAvzP_JPEG/movie_image.jpg', title:'불한당: 나쁜 놈들의 세상 (2017)', year:'2017', director: '변성현', actors: '설경구(한재호), 임시완(조현수)', branch: '미드나잇 스크리닝', synopsis: '범죄조직의 1인자를 노리는 재호와 세상 무서운 것 없는 패기 넘치는 신참 현수는 교도소에서 만나 서로에게 끌리고 끈끈한 의리를 다져간다. 출소 후, 함께 권력을 차지하기 위해 의기투합하던 중, 두 사람의 숨겨왔던 야망이 조금씩 드러나고, 서로에 대해 새로운 사실을 알게 되면서 그들의 관계는 흔들리기 시작하는데… 믿는 놈을 조심하라! 믿음의 순간 배신은 이미 시작되었다!'},
        {id:16, href: 'https://movie.naver.com/movie/bi/mi/basic.nhn?code=162255', photo:'https://movie-phinf.pstatic.net/20170704_257/1499145381161javaE_JPEG/movie_image.jpg', title:'포구 (2017)', year:'2017', director: '문재웅', actors: '고동원(아버지), 이영원(어머니), 강민석(아들)', branch: '쇼트 필름 코너', synopsis: '이른 아침 아들 재혁이 공부를 하는데, 아버지가 집으로 돌아오더니 직장을 그만두었다고 가족들에게 통보를 한다. 당황한 어머니는 아버지를 몰아세우고, 딸도 일어나 눈물을 흘린다. 이해받지 못한 아버지는 포구로 자리를 피한다. 그러자, 어머니와 딸, 아들이 아버지를 따라 포구로 향한다.'},
        {id:17, href: 'https://movie.naver.com/movie/bi/mi/basic.nhn?code=162961', photo:'https://movie-phinf.pstatic.net/20170417_299/14924162005870qqqe_JPEG/movie_image.jpg', title:'백천 (2017)', year:'2017', director: '신동영', actors: '서현우(백천)', branch: '쇼트 필름 코너', synopsis: '두통에 시달리던 백천은 주위사람들에게 무시당하고 있다는 망상에 빠져들게 되고.. 쌓여가던 그의 증오는 점차 엉뚱한 이들에게로 향하기 시작한다.'},
        {id:18, href: 'https://movie.naver.com/movie/bi/mi/basic.nhn?code=130966', photo:'https://movie-phinf.pstatic.net/20160720_9/1469001478520W9vSu_JPEG/movie_image.jpg', title:'부산행 (2016)', year:'2016', director: '연상호', actors: '공유(석우), 정유미(성경), 마동석(상화)', branch: '미드나잇 스크리닝', synopsis: '전대미문의 재난이 대한민국을 덮친다! 정체불명의 바이러스가 전국으로 확산되고 대한민국 긴급재난경보령이 선포된 가운데, 열차에 몸을 실은 사람들은 단 하나의 안전한 도시 부산까지 살아가기 위한 치열한 사투를 벌이게 된다. 서울에서 부산까지의 거리 442KM 지키고 싶은, 지켜야만 하는 사람들의 극한의 사투!'},
        {id:19, href: 'https://movie.naver.com/movie/bi/mi/basic.nhn?code=150110', photo:'http://www.kobis.or.kr/common/mast/movie/2016/04/e1b939d5747e4ceaba68d9b897fcc909.jpg', title:'히치하이커 (2016)', year:'2016', director: '윤재호', actors: '이태규(중년남자), 강석철(동료경찰), 신정만(운전수)', branch: "The Directors' Fortnight", synopsis: '늦은 밤. 도로변에서 정체 불명의 한 중년 남자가 히치하이킹을 시도한다. 남자는 봉고차에 무작정 올라타서는 술을 마시자고 권유 한다. 어이없어 하는 운전수는 그의 북한 말투와 지저분한 옷차림을 보고는 그를 간첩으로 여겨 근처 파출소로 데려간다. 그는 벙어리 처럼 단 한마디도 하질 않는다. 운전수가 집으로 돌아간 뒤, 파출소 팀장과 대면을 하게 된 중년 남자는 이윽고 말을 꺼내고 그에게 술을 마시자고 권유를 한다...'},
        {id:20, href: 'https://movie.naver.com/movie/bi/mi/basic.nhn?code=150411', photo:'https://movie-phinf.pstatic.net/20160531_282/1464671895383gpCsH_JPEG/movie_image.jpg', title:'1킬로그램 (2016)', year:'2016', director: '박영주', actors: '이승연(민영)', branch: '파운데이션', synopsis: '5년 전, 어린 아들을 잃은 민영. 그녀는 ‘아이 잃은 엄마들의 모임’에 참석했다가 누군가의 웃음소리를 듣는다.'},
        {id:21, href: 'https://movie.naver.com/movie/bi/mi/basic.nhn?code=121051', photo:'https://movie-phinf.pstatic.net/20160425_165/1461560165179gYQ0g_JPEG/movie_image.jpg', title:'곡성 (2016)', year:'2016', director: '나홍진', actors: '곽도원(종구), 황정민(일광), 쿠니무라 준(외지인)', branch: '비경쟁부문', synopsis: '낯선 외지인(쿠니무라 준)이 나타난 후 벌어지는 의문의 연쇄 사건들로 마을이 발칵 뒤집힌다. 경찰은 집단 야생 버섯 중독으로 잠정적 결론을 내리지만 모든 사건의 원인이 그 외지인 때문이라는 소문과 의심이 걷잡을 수 없이 퍼져 나간다. 딸 ‘효진’(김환희)이 피해자들과 비슷한 증상으로 아파오기 시작하자 다급해진 ‘종구’. 외지인을 찾아 난동을 부리고, 무속인 ‘일광’(황정민)을 불러들이는데...'},
        {id:22, href: 'https://movie.naver.com/movie/bi/mi/basic.nhn?code=123519', photo:'https://movie-phinf.pstatic.net/20160523_204/14639851237601hEGQ_JPEG/movie_image.jpg', title:'아가씨 (2016)', year:'2016', director: '박찬욱', actors: '김민희(히데코), 김태리(숙희), 하정우(백작)', branch: '경쟁부문 - 벌칸상', synopsis: '후견인 이모부(조진웅)의 엄격한 보호 아래 살아가는 귀족 아가씨(김민희). 그녀에게 새로운 하녀가 찾아온다. 하녀의 정체는 유명한 여도둑의 딸로, 소매치기 고아 소녀 숙희(김태리). 아가씨를 유혹하여 돈을 가로채겠다는 사기꾼 백작(하정우)의 제안을 받고 아가씨가 백작을 사랑하게 만들기 위해 하녀가 된 것. 드디어 백작이 등장하고, 백작과 숙희는 자신만의 방식으로 아가씨의 마음을 흔들기 시작하는데…'},
        {id:23, href: 'https://movie.naver.com/movie/bi/mi/basic.nhn?code=127449', photo:'https://movie-phinf.pstatic.net/20150604_47/14333848916694WRRG_JPEG/movie_image.jpg', title:'마돈나 (2015)', year:'2015', director: '신수원', actors: '서영희(해림), 권소현(미나), 김영민(상우)', branch: '주목할 만한 시선', synopsis: '간호조무사 해림(서영희)과 의사 혁규(변요한)는 심장 이식이 필요한 전신마비 환자 철오를 담당하게 된다. 철오의 아들 상우(김영민)가 아버지의 생명을 억지로 연장하고 있다는 사실을 알게 된 그들. 어느 날, 정체불명의 사고 환자 미나(권소현)가 실려오게 되고, 상우는 해림에게 장기기증 동의서를 받아오라는 거래를 제안한다. 해림은 제안을 어렵게 수락하고, 미나의 과거를 추적해가며 충격적인 비밀들을 마주하게 되는데…'},
        {id:24, href: 'https://movie.naver.com/movie/bi/mi/basic.nhn?code=44911', photo:'https://movie-phinf.pstatic.net/20150508_242/1431069888008i7klX_JPEG/movie_image.jpg', title:'무뢰한 (2015)', year:'2015', director: '오승욱', actors: '전도연(김혜경), 김남길(정재곤), 박성웅(박준길)', branch: '주목할 만한 시선', synopsis: '범인을 잡기 위해선 어떤 수단이든 다 쓸 수 있는 형사 정재곤(김남길 扮). 그는 사람을 죽이고 잠적한 박준길(박성웅 扮)을 쫓고 있다. 그를 잡을 수 있는 유일한 실마리는 박준길의 애인인 김혜경(전도연 扮). 재곤은 정체를 숨긴 채 혜경이 일하고 있는 단란주점 마카오의 영업상무로 들어간다. 그리고 언제 연락이 올 지도 모르는 준길을 기다리던 혜경은, 자기 옆에 있어주는 그에게 마음을 열기 시작한다.'},
        {id:25, href: 'https://movie.naver.com/movie/bi/mi/basic.nhn?code=144380', photo:'http://www.kobis.or.kr/common/mast/movie/2016/03/540273dd1551462a99cd12ee0b745082.jpg', title:'무꾸리 (2015)', year:'2015', director: '김명석', actors: '주하(보라), 이다정(수리)', branch: '비경쟁 단편 영화 부문', synopsis: '고등학생 18살 소녀 보라. 평범한 삶을 살기를 원하지만 엄마가 무당이라는 이유로 학교에서 늘 괴롭힘을 받는다. 보라의 유일한 친구였던 선희도 학교 일진 수리에게 협박을 받고 보라를 배신하게 되고, 보라는 막다른 길로 내몰린다. 아무도 자신을 도와줄 수 없는 상황에서 엄마에게 물려받은 신기로 자신의 선택에 따라 벌어질 미래를 점치게 되는데...'},
        {id:26, href: 'https://movie.naver.com/movie/bi/mi/basic.nhn?code=120141', photo:'https://movie-phinf.pstatic.net/20150818_179/1439862816889AJ2qM_JPEG/movie_image.jpg', title:'오피스 (2015)', year:'2015', director: '홍원찬', actors: '고아성(이미례), 박성웅(종훈)', branch: '미드나잇 스크리닝', synopsis: '어느 날 한 가족의 가장이자 착실한 회사원인 김병국 과장이 일가족을 살해하고 사라졌다. 이에 형사 종훈은 그의 회사 동료들을 상대로 수사를 시작하지만 모두들 말을 아끼고, 특히 김과장과 사이가 좋았다는 이미례 인턴은 무언가를 숨기고 있는 눈치다. 사건 직후 회사에 들어온 CCTV 화면을 확보하지만, 그가 회사를 떠난 화면은 어디에도 없어 사건은 미궁으로 빠진다. 한편, 동료들은 불안에 떠는 가운데, 이들에게 의문의 사건들이 계속 일어나는데…'}
      ]
    }
  }
  componentWillMount() {
    document.title = 'FESTIVAL DE CANNES'
  }
  render() {
    return (
      <div className="App">
        <Header
          onChangeYear={(year) => {
            this.setState({
              year: year
            });
          }}
        ></Header>
        <p>아래 이미지 왜안보여</p>
        <img src={process.env.PUBLIC_URL + '/images/5.jpg'} alt=""/>
        <Contents
          data={this.state.movies}
          selected_year={this.state.year}
        ></Contents>
      </div>
    );
  }
}

export default App;