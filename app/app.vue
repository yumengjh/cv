<script setup lang="ts">
const publicConfig = useRuntimeConfig().public

const name = publicConfig.name || ''
const phone = publicConfig.phone || ''

useSeoMeta({
	title: `${name} - 前端开发实习`,
	description: `${name}的前端开发实习简历`,
	robots: 'noindex, nofollow',
})
</script>

<template>
<Builder class="block print:hidden" w="fit" m="is-auto x-1 y-.5" />
<article bg="white @dark:slate/10 print:transparent" p="6 print:x-2 print:y-0" text="3.7" tracking="wide"
	rounded="xl print:0">
	<h1 text="center" m="be-4">
		{{ name }}
	</h1>

	<ul columns="sm:2" p="is-0">
		<InfoLi icon="ri:smartphone-line" label="电话">
			{{ phone }} (同微信)
		</InfoLi>

		<InfoLi icon="ri:mail-line" label="邮箱">
			<InfoLink to="mailto:hi@yumg.top" />
		</InfoLi>

		<InfoLi icon="ri:github-line" label="GitHub">
			<InfoLink to="https://github.com/yumengjh">
				yumengjh
			</InfoLink>
		</InfoLi>

		<InfoLi icon="ri:men-line" label="性别">
			男
		</InfoLi>

		<InfoLi icon="ri:school-line" label="学校">
			**大学 (计算机科学与技术)
		</InfoLi>

		<InfoLi icon="ri:graduation-cap-line" label="学历">
			** (2026 届)
		</InfoLi>
	</ul>

	<InfoSection title="个人技能">
		<ul>
			<li>******************************</li>
			<li>************************************************</li>
			<li>************************************************</li>
		</ul>
	</InfoSection>

	<InfoSection title="实习经历">
		<Project name="********" desc="************-****-********" from="***" to="***">
			<ul>
				<li>************************************************************</li>
				<li>*****************************</li>
				<li>**********************************************************************</li>
			</ul>
		</Project>
	</InfoSection>

	<InfoSection title="项目经验">
		<Project name="********" desc="******" role="***" link="https://github.com/yumengjh/******" from="***" to="***"
			:techs="['Nuxt', 'Vue 3', 'TypeScript', 'Pinia', 'Scss']">
			<ul>
				<li>**********************</li>
				<li>**********************************************************************************</li>
				<li>******************************************</li>
				<li>**************************************************************</li>
			</ul>
		</Project>
		<Project name="********" desc="******" role="***" link="https://github.com/yumengjh/******" from="***" to="***"
			:techs="['Nuxt', 'Vue 3', 'TypeScript', 'Pinia', 'Scss']">
			<ul>
				<li>**********************</li>
				<li>**********************************************************************************</li>
				<li>******************************************</li>
				<li>**************************************************************</li>
			</ul>
		</Project>

	</InfoSection>

	<InfoSection title="个人证书">
		<ul>
			<li>******，******</li>
			<li>***************************************</li>
		</ul>
	</InfoSection>
</article>
</template>
