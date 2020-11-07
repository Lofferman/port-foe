<template>
<div class="container-fluid">
<div class="row nav">
		<div class="col-1 mr-auto"></div>
		<div class="col-1 justify-content-center"><router-link to="resume">Resume</router-link ></div>
		<div class="col-1 justify-content-center"><router-link to="/">Home</router-link ></div>
		<div class="col-1 justify-content-center"><router-link to="projects">Projects</router-link ></div>
        <div class="col-1 justify-content-center"><router-link to="about">About</router-link ></div>


		<div class="col justify-content-end social ml-auto"><a target="_blank" href="https://www.linkedin.com/in/luke-offerman/">IN</a></div>
		<div class="col justify-content-end social"><a target="_blank" href="https://github.com/Lofferman">Git</a></div>
		<div class="col justify-content-end social"><a target="_blank" href="https://dribbble.com/lofferman">Dribb</a></div>
	</div>
</div>

</template>

<script setup>
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.nav {
        background: rgba(255, 255, 255, 0.73);
		border-bottom: 1px solid rgba(245, 245, 245, 0.2);
		font-weight: 300;
        width: 100vw;
        height: 7vh;
        margin-bottom: -7vh;
	}
	.social{
		max-width: 50px;
		display: inline-flex;
	
	}

	.nav div {
		text-decoration: none;
		padding: 0.9em 0.5em;
		display: block;
	}
    
	.nav div a, .nav div router-link{
		text-decoration: none;
        padding: 1em 0;
        color: rgba(51, 51, 51, 1);;

	}
    .router-link-active{
		border-bottom: 2px solid rgba(51, 51, 51, 1);
        
	}
</style>
