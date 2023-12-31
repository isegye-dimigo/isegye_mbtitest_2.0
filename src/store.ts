import { writable, type Writable} from "svelte/store";
export const mbtiData = [0,0,0,0];
export let mbtiString:Writable<string> = writable("");

/*
개선사항
선택지 일부 조정
뒤로가기 만들기
이미지 안띄워지는거 개선

기사-istj 0 그림체 이상ㅡㅡ
마왕-estj 1 완
마법사-intj 2 완
귀족-entj 3 완
예언자-infj 4 완
상인-enfj 5 완
힐러-isfj 6 완
교황-esfj 7 완
엘프-infp 8 완
용사-enfp 9 그림체 이상ㅡㅡ
성직자-isfp 10 완
성녀-esfp 11 완(그림체 애매)
마녀-intp 12 완
왕-entp 13 완
암살자-istp 14 완
궁수-estp 15 완
*/

export const characterArr:string[] = ['기사','마왕','마법사','귀족','예언자','상인','힐러','교황','엘프','용사','성직자','성녀','마녀','왕','암살자','궁수'];

export const mbtiCharacters: Record<string, {name:string,mbtiFeature:string[],relationship:number[],imageRoute:string}> = {
    'istj': {
        name:"기사",
        mbtiFeature:[
            '\"이세계의 평화는 나의 무거운 검 아래서 시작된다!\"',
            '기사는 자신에 대한 책임감이 강하며, 주어진 임무를 철저하게 수행합니다.',
            '군대 내에서는 엄격한 규율을 지키며 조직적으로 행동합니다.',
            '전투 상황에서는 냉철한 전략과 신중한 의사결정으로 승리를 추구합니다.',
            '안정된 환경과 질서를 찾아 이세계에서도 안정을 유지하려 노력합니다.',
        ],
        relationship:[9,2],
        imageRoute:"/img/characterImg/istj.png",
    },
    'estj': {
        name:"마왕",
        mbtiFeature:[
            '\"나의 통치 하에 이세계는 더 이상 혼란의 소용돌이에 휩싸이지 않을 것이다!\"',
            '마왕은 강력한 통치력을 가지고 국가를 효율적으로 이끌어갑니다.',
            '안정된 사회 체계를 구축하며 공평한 법과 질서를 유지합니다.',
            '국가의 번영을 위해 경제적 성장을 촉진하고 군사적인 강세를 유지합니다.',
            '강인한 리더십으로 마왕국가를 대표하며 결단력 있게 행동합니다.',
        ],
        relationship:[10,6],
        imageRoute:"/img/characterImg/estj.png",
    },
    'intj': {
        name:"마법사",
        mbtiFeature:[
            '\"고대 마법의 힘을 통해 이세계의 미지를 해부하고 새로운 지식을 창조할 것이다.\"',
            '고대 마법과 지식을 탐험하며 신비한 힘을 이해하려 노력합니다.',
            '강력한 마법을 연구하고 사용하여 이세계의 균형을 유지하려 합니다.',
            '어려운 상황에서도 전술적인 마법 사용으로 승리의 길을 찾습니다.',
            '지식의 깊이와 통찰력을 통해 이세계의 미지의 영역을 탐험합니다.',
        ],
        relationship:[11,7],
        imageRoute:"/img/characterImg/intj.png",
    },
    'entj': {
        name:"귀족",
        mbtiFeature:[
            '\"나의 리더십으로 왕국은 번영하고 국민들은 풍요로워질 것이다!\"',
            '왕국을 효율적으로 통치하여 정교한 정치 전략으로 번영을 이끌어냅니다.',
            '현명한 외교 전략으로 왕국의 영토를 확장하고 권력을 공고히 합니다.',
            '민중의 복지와 국가의 번영을 위해 헌신합니다.',
            '나의 리더십 하에 왕국은 더 크고 강력해지며 귀족과 국민들은 번영할 것이다!',
        ],
        relationship:[10,6],
        imageRoute:"/img/characterImg/entj.png",
    },
    'infj': {
        name:"예언자",
        mbtiFeature:[
            '\"나의 예언은 이세계에 희망의 빛을 비춰주고 모든 이들에게 평화를 안겨줄 것이다.\"',
            '예언자는 미래를 예지하고 타인의 운명을 이해하는 민감한 감성을 가지고 있습니다.',
            '심오한 통찰력으로 상황을 분석하고 이세계의 운명을 이끌어내려 노력합니다.',
            '정신적인 성장과 깨달음을 추구하여 이세계의 평화를 위한 지혜를 쌓습니다.',
            '감정적으로 타인을 이해하며, 예언을 통해 주변에 희망과 조화를 전파합니다.',
        ],
        relationship:[15,1],
        imageRoute:"/img/characterImg/infj.png",
    },
    'enfj': {
        name:"상인",
        mbtiFeature:[
            '\"다양한 자원과 문화를 융합하여, 이세계의 번영과 다양성을 창출할 것이다.\"',
            '상인은 사회적 융화를 추구하며, 다양한 관계를 통해 이세계의 경제를 활성화시킵니다.',
            '소통의 달인으로서 다양한 문화와 협상을 통해 이세계의 다양한 자원을 확보합니다.',
            '상인은 자신의 사업을 통해 사회에 기여하고 지역 경제를 지원합니다.',
            '상인의 긍정적인 에너지로 주변 사람들에게 희망과 경제적 번영을 전파합니다.',
        ],
        relationship:[14,6],
        imageRoute:"/img/characterImg/enfj.png",
    },
    'isfj': {
        name:"힐러",
        mbtiFeature:[
            '\"상처 입은 이들을 치유하며, 이세계에 나눔과 돌봄을 전하리라.\"',
            '힐러는 자신의 능력으로 상처 입은 이들을 치유하고 돌봐줍니다.',
            '환자들에게 안정감을 제공하며, 이세계에서도 사람들의 건강을 책임지려 노력합니다.',
            '힐러는 자기 희생적인 헌신으로 타인의 건강과 행복을 최우선으로 생각합니다.',
            ' 힐러는 사회적 연대를 통해 이세계에서도 건강하고 행복한 사회를 만들려 합니다.',
        ],
        relationship:[13,3],
        imageRoute:"/img/characterImg/isfj.png",
    },
    'esfj': {
        name:"교황",
        mbtiFeature:[
            ' "사랑과 헌신으로, 이세계에는 종교적인 풍요와 평화가 빛날 것이다.\"',
            '교황은 종교적 지도자로서 이세계의 종교와 윤리적인 가치를 강조합니다.',
            '교황은 사회적인 책임감을 가지고 이세계에서도 사회 복지와 자선 활동을 이끌어갑니다.',
            '종교적 의식을 중시하며, 신앙을 통해 이세계의 평화와 긍정적인 변화를 기원합니다.',
            '교황은 커뮤니티 통합을 도모하며, 사람들 간의 연대와 화합을 촉진합니다.',
        ],
        relationship:[12,2],
        imageRoute:"/img/characterImg/esfj.png",
    },
    'infp': {
        name:"엘프",
        mbtiFeature:[
            '\"자연과 예술의 마법으로, 이세계에는 아름다움과 조화가 가득할 것이다.\"',
            '엘프는 자연과의 조화를 중시하며, 이세계의 자연 환경을 지키기 위해 노력합니다.',
            '아름다운 예술과 음악에 대한 예술적 감성을 가지고 이세계의 예술과 문화를 발전시킵니다.',
            '감성적이고 독창적인 성향으로 자신의 감정과 아이덴티티를 표현합니다.',
            '평화를 지향하며, 분쟁을 피하고 이웃들과 조화롭게 살기를 원합니다.',
        ],
        relationship:[1,12],
        imageRoute:"/img/characterImg/infp.png",
    },
    'enfp': {
        name:"용사",
        mbtiFeature:[
            '\"용기와 모험으로 이세계의 어둠을 밝히고 새로운 전설을 쓸 것이다.\"',
            '용사는 모험을 즐기며 용기와 정의로움을 지닌 전사로서 이세계에서도 악을 물리치려 합니다.',
            '다양한 전술과 창의적인 전략을 통해 이세계에서의 어려운 상황에 대응합니다.',
            '동료들과의 강한 유대감을 형성하고 함께 싸워 이세계의 평화를 지킵니다.',
            '자유로운 영혼을 가지고 모험을 통해 새로운 경험을 쌓고 세계를 탐험합니다.',
        ],
        relationship:[0,14],
        imageRoute:"/img/characterImg/enfp.png",
    },
    'isfp': {
        name:"성직자",
        mbtiFeature:[
            '\"예술과 종교를 결합하여, 이세계의 영적인 아름다움을 창조하리라.\"',
            '성직자는 예술적이면서도 종교적인 활동을 통해 이세계의 영적인 가치를 표현합니다.',
            '다양한 이해와 관용을 통해 이웃들을 도우며 사랑을 실천합니다.',
            '연민 넘치는 성향으로 필요한 이웃들을 돌보며 이세계에서도 배려를 전파합니다.',
            '신앙에 기반한 창조적인 활동을 통해 이세계에서의 평화를 실현하려 합니다.',
        ],
        relationship:[3,13],
        imageRoute:"/img/characterImg/isfp.png",
    },
    'esfp': {
        name:"성녀",
        mbtiFeature:[
            '\"긍정과 활기로, 이세계에는 희망의 꽃이 만발할 것이다.\"',
            '성녀는 기쁨과 활기를 퍼뜨려 이세계의 환경을 밝고 생동감 있게 만듭니다.',
            '다양한 사람들과의 관계를 중시하며, 유쾌한 분위기로 주변을 활기차게 만듭니다.',
            '적극적으로 사람들을 돕고 봉사하여 이세계에서도 긍정적인 변화를 이끌어냅니다.',
            '낙천적인 에너지로 주변 사람들에게 희망과 긍정적인 기운을 전파합니다.',
        ],
        relationship:[2,12],
        imageRoute:"/img/characterImg/esfp.png",
    },
    'intp': {
        name:"마녀",
        mbtiFeature:[
            '\"과학과 마법의 합창으로, 이세계의 비밀을 해독하고 새로운 차원을 열어갈 것이다.\"',
            '마녀는 과학적인 사고로 마법을 연구하고 새로운 주문과 마법적인 효과를 실험합니다.',
            '미래를 예지하거나 다른 장소로 이동할 수 있는 비전캐스팅 능력을 가지고 있습니다.',
            '자유로운 사고로 관행에 도전하며 이세계의 마법적인 자원을 창조적으로 활용합니다.',
            '자연과 환경을 소중히 여기며, 마법을 통해 이세계의 균형을 지키려 합니다.',
        ],
        relationship:[7,11],
        imageRoute:"/img/characterImg/intp.png",
    },
    'entp': {
        name:"왕",
        mbtiFeature:[
            '\"혁신과 창조로, 왕국은 더 크고 발전된 모습으로 거듭날 것이다.\"',
            '혁신적이고 창의적인 아이디어로 왕국을 통치하며, 새로운 제도와 정책을 도입합니다.',
            '현명한 외교 전략을 통해 왕국의 권력을 강화하고 다른 왕국들과의 연합을 모색합니다.',
            '다양한 의견을 수렴하고 토론과 논쟁을 통해 왕국을 발전시킵니다.',
            '예술과 문화를 후원하여 왕국의 문화적인 발전을 촉진합니다.',
        ],
        relationship:[6,10],
        imageRoute:"/img/characterImg/entp.png",
    },
    'istp': {
        name:"암살자",
        mbtiFeature:[
            '\"은밀한 액션과 전략으로, 이세계에서도 그림자 속에서 정의를 세울 것이다.\"',
            '암살자는 은밀하고 숨은 행동을 통해 목표를 달성하며, 민첩하고 무엇보다 신중한 전투 기술을 가지고 있습니다.',
            '상황에 따라 적절한 전략을 계획하며, 예기치 못한 위기 상황에도 냉정하게 대응합니다.',
            '다양한 무기와 도구를 숙련되게 다루어, 다양한 상황에 대처할 수 있습니다.',
            '독립적인 성향으로 혼자서도 임무를 완수하고 이세계의 안전을 위해 노력합니다.',
        ],
        relationship:[5,9],
        imageRoute:"/img/characterImg/istp.png",
    },
    'estp': {
        name:"궁수",
        mbtiFeature:[
            '\"뛰어난 명중과 기민함으로, 이세계의 위협에 도전하고 승리할 것이다.\"',
            '궁수는 뛰어난 명중력을 가지며, 화살로 원격에서도 정확하게 목표를 맞힙니다.',
            '빠른 속도와 기민한 움직임으로 전투에서 우위를 유지하며 적에게 접근을 방지합니다.',
            '팀원들과의 효율적인 협동을 중시하며, 전장에서의 협력을 통해 이세계의 위협을 막습니다.',
            '도전과 위험을 두려워하지 않고, 어려운 상황에서도 뛰어난 전투 기술을 펼칩니다.  ',
        ],
        relationship:[4,8],
        imageRoute:"/img/characterImg/estp.png",
    },
};