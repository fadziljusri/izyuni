<template>
	<section
		id="main-content"
		class="hero is-fullheight"
		:class="[
			'bg-' + i.theme,
			'bg-image-' + i.theme,
			i.main_section && i.main_section.text_transform
				? i.main_section.text_transform
				: '',
		]"
	>
		<!-- floating logged in button -->
		<div v-if="user" class="container floating-container">
			<router-link
				to="/user"
				tag="button"
				class="floating-button no-select container no-select"
			>
				<div class="has-text-link">User Dashboard</div>
			</router-link>
		</div>
		<div class="hero-body">
			<div v-if="!i.override_main" class="container has-text-centered">
				<!-- <img
					data-aos="zoom-in"
					data-aos-duration="1000"
					data-aos-delay="500"
					src="~/assets/images/bismillah-white.png"
					alt="bismillahirrahmanirrahim"
					style="width: 35%; margin-bottom: 0.5rem"
				/> -->
				<div
					data-aos="zoom-in"
					data-aos-offset="0"
					data-aos-duration="1000"
					data-aos-delay="500"
					class="main-content-title"
					:class="'title-' + i.theme"
				>
					{{ i.main_section.title }}
				</div>

				<img
					data-aos="zoom-in"
					data-aos-duration="2000"
					data-aos-delay="500"
					src="~/assets/images/Signature.svg"
					style="width: 60%; margin-bottom: 0.5rem"
				/>

				<div
					class="couples"
					:class="[
						'couples-' + i.theme,
						i.groom_or_bride_first === 'bride' ? 'reverse' : '',
						i.main_section && i.main_section.couples_text_transform
							? i.main_section.couples_text_transform
							: '',
					]"
					data-aos="zoom-in"
					data-aos-duration="2000"
					data-aos-delay="500"
					data-aos-offset="0"
				>
					<div class="groom">
						{{ i.groom[i.main_section.name_type] }}
					</div>
					<div>&amp;</div>
					<div class="bride">
						{{ i.bride[i.main_section.name_type] }}
					</div>
				</div>

				<!-- <img
					data-aos="zoom-in"
					data-aos-duration="1000"
					data-aos-delay="500"
					src="~/assets/images/line-down.png"
					style="width: 60%; margin-top: 0; margin-bottom: 1rem"
				/> -->

				<div
					data-aos="zoom-in"
					data-aos-offset="0"
					data-aos-duration="1000"
					data-aos-delay="500"
					class="dates"
					:class="'dates-' + i.theme"
				>
					<!-- <div class="date-gregorian">{{ i.date.greg }}</div> -->

					<div class="date-gregorian">
						<span class="month">Februari</span>
						<span>
							<span class="day">Sabtu</span>
							<span class="day-number">18</span>
							<span class="time">12PM - 5PM</span>
						</span>
						<span class="year">2023</span>
					</div>
					<div v-if="i.date.hijri" class="date-hijri">
						{{ i.date.hijri }}
					</div>
				</div>

				<div
					data-aos="zoom-in"
					data-aos-offset="0"
					data-aos-duration="1000"
					data-aos-delay="500"
					class="venue"
					:class="'venue-' + i.theme"
					v-html="i.address.general"
				></div>
			</div>
		</div>

		<div id="av">
			<audio
				ref="song"
				controls
				autoplay
				preload="auto"
				style="width: 90%; margin: auto 5%"
			>
				<source src="/song.mp3" type="audio/mp3" />
			</audio>
		</div>
	</section>
</template>

<script>
import { mapState } from "vuex";
export default {
	computed: {
		...mapState({
			i: (state) => state.info,
			theme: (state) => state.info.theme,
			user: (state) => state.auth.user,
		}),
	},
	// mounted() {
	// 	console.log(this.$refs?.song);
	// }
};
</script>


<style lang="scss" scoped>
@import "~assets/scss/var.scss";

#main-content {
	-webkit-background-size: 100% 100%;
	-moz-background-size: 100% 100%;
	-o-background-size: 100% 100%;
	background-size: 100% 100%;
}

@media (min-width: 320px) and (max-width: 1024px) and (orientation: landscape) {
	#main-content {
		height: 720px;
	}
}

// .hero-body {
//   margin-bottom: 3rem;
// }

.main-content-title {
	font-weight: bold;
	margin-bottom: 1rem;
	font-size: 1rem;
}

.couples {
	display: flex;
	align-items: center;
	flex-direction: row;
	font-family: $cover-font;
	font-size: 4rem;
	// margin-bottom: 1rem;
	line-height: 1;

	&.reverse {
		flex-direction: row-reverse;
	}

	& > .amp {
		line-height: 0.9;
		font-size: 4rem;
	}
}

.date-gregorian,
.venue {
	font-family: $primary-font;
	font-weight: bold;
}

.date-gregorian {
	.month,
	.year {
		font-weight: bold;
		display: block;
		letter-spacing: 2px;
		font-size: 1rem;
	}

	.day,
	.time {
		font-weight: bold;
		display: inline-block;
		padding: 0px 5px;
		text-align: center;
		vertical-align: middle;
		border-top: 1px solid;
		border-bottom: 1px solid;
		font-size: 1rem;
		width: 90px;
	}

	.day-number {
		font-weight: lighter;
		font-style: italic;
		display: inline-block;
		padding: 0px 5px;
		text-align: center;
		vertical-align: middle;
		font-size: 4rem;
		line-height: 1;
	}
}

.floating-container {
	position: fixed;
	width: 100%;
	padding: 0 10px;
	top: 70px;
	z-index: 99;
	background: white;
	// text-align: right;
	-webkit-transform: translateZ(1);
	background: transparent;
	.floating-button {
		cursor: pointer;
		z-index: 99;
		border-radius: 50px;
		text-align: center;
		float: none;
		width: 100%;
		height: 40px;
	}
}
</style>

<style lang="scss">
#av {
	position: fixed;
	top: 10px;
	width: 100%;
	max-width: 520px;
	z-index: 1000;
}
</style>

