<template>
	<div>
		<MainHeader />

		<v-container>
			<router-view />
		</v-container>	

		<MainFooter/>
	</div>
</template>


<script>
import MainHeader from '../components/MainHeader.vue'
import MainFooter from '../components/MainFooter.vue'
export default {
	components: {
		MainHeader,
		MainFooter
	}
}
</script>