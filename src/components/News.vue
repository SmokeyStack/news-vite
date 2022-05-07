<template>
	<div>
		<div>
			<ul>
				<li v-for="article in articles" style="list-style-type:none;border:1px solid black;">
					<div>
						<a :href=article.url target="_blank">
							<img :src="article.urlToImage" width=100>
						</a>
					</div>
					<div>
						<h4>
							<a :href=article.url target="_blank">{{ article.title }}</a>
						</h4>
						<h5>
							<i>by {{ article.author }}</i>
						</h5>
						<p>{{ article.description }}</p>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import axios from 'axios'

export default {
	name: 'news',
	data() {
		return {
			articles: []
		}
	},
	methods: {
		updateSource: function () {
			axios
				.get('https://newsapi.org/v2/everything?domains=' + "theverge.com" + '&apiKey=' + import.meta.env.VITE_NEWSAPI)
				.then(response => {
					this.articles = response.data.articles;
					console.log(response);
					console.log(this.articles);
				})
		}
	},
	created: function () {
		this.updateSource();
	},
}
</script>

<style scoped>
.media-object {
	width: 128px;
	padding: 10px;
}

.media {
	border-top: 1px solid lightgrey;
	padding-top: 20px;
}
</style>
