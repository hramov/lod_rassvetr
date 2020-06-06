<template>
	<v-container>
		<sliderApp />
		<votesApp class="mt-2"/>
        <resultsApp class="mt-2"/>
	</v-container>
</template>

<script>
	import sliderApp from './sliderApp'
	import votesApp from './votesApp'
	import resultsApp from './resultsApp'

	export default {
		name: 'mainContent',
		components: {
			sliderApp,
			votesApp,
			resultsApp
		}
	}
</script>