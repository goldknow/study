<template>
<section>
	<div class="table"
	>
		<table>
			<colgroup>
				<col width="10%">
				<col width="*">
				<col width="20%">
				<col width="5%">
			</colgroup>
			<thead>
				<tr>
					<th>제목</th>
					<th>내용</th>
					<th>날짜</th>
					<th>조회수</th>
				</tr>
			</thead>
			<tbody>
				<tr
					v-for="(list, i)  in lists" :key="i"
				>
					<td>{{ list.title }}</td>
					<td>{{ list.text }}</td>
					<td>{{ list.date }}</td>
					<td
						@click="$emit('click', list)"
					>{{ list.count }}</td>
				</tr>
			</tbody>
		</table>
	</div>	
</section>

</template>
<script>
export default {
	name:'VueListTable',
	props: {
		lists: {
			type: Array
		}
	}
}
</script>
<style lang="scss" scoped>
@import '@/assets/styles/_mixin.scss';

	.table {
		thead {
			background-color: blanchedalmond;
		}
		tbody {
			background-color: #fff;
		}

		th, td {
			padding: 10px;
			text-align: center;
			border: 1px solid;
		}
	}
</style>