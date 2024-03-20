<script>
export default {
	data() {
		return {
			message: 'Hi',
		}
	}
}
</script>

<template>
<div class="homepage_div">
	{{ message }}
</div>
</template>

<style>
.homepage_div {
	padding: 20px;
	background-color: lightslategray;
}
</style>