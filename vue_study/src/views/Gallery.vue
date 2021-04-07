<template>
<section class="cont">
    <!--

	1. 리스트 컴포넌트에 들어갈 Model 을 설계해야 합니다.

	2. Model 은 갤러리형, 리스트형, 웹진형에 모두 대응할 수 있어야 합니다.

	3. 갤러리형, 리스트형, 웹진형의 전환 버튼을 구현하여 실시간으로 변경될 수 있어야 합니다.

	-->
		<!--

	html 엘리먼트는 케밥케이스로 한다.

	공통이 3번되면 함수로 묶고, 세개 미만은 하나씩한다.

	부모에게 for문을 돌리고 자식은 순수하게..

	이미지가 없을떄는 이미지가 없습니다. 라고 나오게

	공통 컴포넌트를 mixin으로 만들어 쓴다.

	뷰 인스턴스에서 쓸 수 있는 모든걸 쓸 수 있다.



	# vuex 
	getter / setter
	


	-->
	<div class="wrap">

		<div class="btn-area">
			<button 
				@click="changeType('card')"
			>CARD</button>
			<button 
				@click="changeType('table')"
			>TABLE</button>
			<button 
				@click="changeType('webzine')"
			>WEBZINE</button>
		</div>

		<vue-list
			v-model="selectItem"
			:type="type"
			:lists="ListData"
			@open="modalOpen"
			@counter="incrementCounter"
		></vue-list> 

		<transition name="modal" mode="out-in">
			<vue-modal
				v-if="isShow"
				@close="modalClose"
				:list="ListData"
			>
				<h2 slot="title">{{selectItem.title}}</h2>
				<div slot="date" class="date">{{selectItem.date}}</div>
				<div slot="text" class="text">{{selectItem.text}}</div>
			</vue-modal>	
		</transition>

	</div>
</section>
</template>

<script>
import VueList from '@/components/VueList/'
import VueModal from '../components/VueModal.vue'

export default {
    name: 'Gallery',
    components: {
        VueList,
        VueModal
    },
    data() {
        return {
            isShow: false,
            selectItem: {},
            type: 'card',
            ListData: [{
                    title: '‘30일 공짜’ 서비스 없앤 넷플릭스, 다음은?',
                    text: '전 세계 부동의 1위 온라인동영상서비스(OTT) 넷플릭스가 국내에서 ‘30일 무료체험’ 서비스를 종료했다. 앞서 여러 국가에서 단행한 요금 인상, 계정 공유 금지 등과 마찬가지로 수익성 강화를 위한 제도 재정비의 일환이다.',
                    imgUrl: require('@/assets/images/img01.png'),
                    date: '2021-04-02',
                    count: 0
                },
                {
                    title: 'SK텔레콤, 공채 없앤다… 직무별 ‘연 3회’ 대졸신입 채용',
                    text: 'SK텔레콤은 정기 공개채용을 없애고 대졸 신입 지원자에 대한 실무형 채용을 강화했다고 7일 밝혔다. SK텔레콤은 신입 채용 프로세스를 자사 직무별 특성에 맞춰 세분화하고, 대졸신입 모집시점도 상·하반기 1회에서 연 3회 이상으로 확대하는 등 채용 프로세스를 개선했다. 이를 위해 SKT는 올해부터 신입사원 정기공채를 수시채용 방식의 ‘주니어 탤런트’(직무경력 3년차 미만 지원자 선발) 채용과 통합했다.',
                    imgUrl: require('@/assets/images/img02.png'),
                    date: '2021-04-02',
                    count: 0
                },
                {
                    title: '네이버 로봇개, 시각장애인의 눈이 됐다',
                    text: '안내견을 대신해 시각장애인의 눈이 돼줄 로봇이 등장했다. 상용화되면 안내견처럼 장애물을 피하는 것은 물론이고 내비게이션 앱을 이용해 원하는 장소까지 장애인을 인도할 수도 있을 것으로 기대된다. 미국 버클리 캘리포니아대(UC버클리)의 코우실 스리나스 교수 연구진은 지난달 26일 논문 사전 공개사이트 아카이브에 “시각장애인에게 길을 안내하는 네 발 로봇을 개발했다”고 밝혔다.',
                    imgUrl: require('@/assets/images/img03.png'),
                    date: '2021-04-02',
                    count: 0
                },
            ]
        }
    },
    methods: {
        changeType(type) {
            this.type = type
        },
        incrementCounter(list) {
            list.count++
        },
        modalClose() {
            this.isShow = false
        },
        modalOpen() {
            this.isShow = true
        }
    }
}
</script>

<style lang="scss" scoped>
.cont {
    display: block;
    padding: 50px 0;
    background-color: #e1e0fe;
}

.wrap {
    max-width: 800px;
    margin: auto;

    .btn-area {
        padding-bottom: 20px;

        button {
            padding: 7px 15px;
            background-color: #9e9e9e;
            border-radius: 7px;
            color: #fff;
        }

        button+button {
            margin-left: 15px;
        }
    }
}

.card-area {
    display: flex;
}

.modal-enter-active,
.modal-leave-active {
    transition: opacity .3s;
}

.modal-enter,
.modal-leave-to {
    opacity: 0;
}
</style>
