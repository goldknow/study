<template>
	<section>
		<div class="table">
			<table>
				<colgroup>
					<col width="20%">
					<col width="*">
					<col width="20%">
					<col width="5%">
				</colgroup>
				<thead>
					<tr>
						<!-- 변수처리하기! 재사용성 늘리기! -->
						<th>제목</th>
						<th>내용</th>
						<th>날짜</th>
						<th>조회수</th>
					</tr>
				</thead>
				<tbody>
					<!-- 
						순서는 백단에서 하기 때문에 뷰에서는 그냥 뿌리자
						순서를 움직이는건 소스가 크다

						- 이미 불러와진 데이터는 프론트에서 가능
						- 게시판 리스트는 백에서 가져와야 하기 때문에 백에서
						- 백까지 가지 않아도 되는 것들은 프론트에서 가능하다
					-->
					<tr
						v-for="(list, i)  in lists" :key="i"
					>
						<td
							@click="
								$emit('open', list);
								$emit('input', list)
						">
							<h2 class="ellip3">{{ list.title }}</h2>
						</td>
						<td><div class="ellip3">{{ list.text }}</div></td>
						<td>{{ list.date }}</td>
						<td
							@click="$emit('counter', list)"
						>{{ list.count }}</td>
					</tr>
				</tbody>
			</table>
		</div>	
	</section>
</template>

<script>
export default {
    name: 'VueListTable',
    props: {
        lists: {
            type: Array
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_mixin.scss';

h2 {
    font-size: 18px;
    font-weight: 700;
    line-height: 1.3;
    cursor: pointer;
}

.table {
    thead {
        background-color: blanchedalmond;
    }

    tbody {
        background-color: #fff;
    }

    th,
    td {
        padding: 10px;
        text-align: center;
        border: 1px solid;
    }
}

.ellip3 {
    height: 70px;
}
</style>
