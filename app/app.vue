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
			{{ phone }}
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
	<InfoSection title="个人简介">
		<ul>
			<li>热衷于研究前端框架底层原理，具备独立实现模板引擎、路由器等核心模块的能力。</li>
			<li>自驱力强，独立完成多个工程化项目，习惯阅读源码并复现关键机制。</li>
			<li>正在积极探索 Vue、Nuxt、NestJS、Supabase 等前后端技术栈。</li>
		</ul>
	</InfoSection>
	<InfoSection title="个人技能">
		<ul>
			<li><strong>前端基础：</strong>熟练掌握 HTML5、CSS3、ES6+，理解原型链、事件循环、模块化、浏览器渲染机制。</li>
			<li><strong>前端框架：</strong>熟练使用 Vue 3、Nuxt、Pinia，掌握组件化、SSR、路由、状态管理。</li>
			<li><strong>工程化：</strong>熟练 Vite、TypeScript、ESBuild，了解 Rollup、Bun，掌握前端构建优化与打包分析。</li>
			<li><strong>全栈探索：</strong>了解 Node.js、NestJS、Supabase（认证、数据库、存储、实时）。</li>
			<li><strong>源码理解：</strong>阅读过 Petite-vue、Vue Router、Navigo 源码，具备手写框架核心模块能力。</li>
		</ul>
	</InfoSection>
	<InfoSection title="技术经历">
		<Project name="开源项目探索" desc="前端框架与底层原理研究" from="2024.10" to="现在">

			<ul>
				<li>深入阅读 Petite-vue 源码并进行代码调试与结构优化，提出潜在改进点。</li>
				<li>研究 Vue Router 与 Navigo 的路由匹配策略、History 管理实现机制。</li>
				<li>基于 NestJS + Supabase 实践全栈开发，探索认证、数据库、存储、实时功能。</li>
				<li>持续构建个人技术体系，对前端工程化、JS 编译器、模板引擎等方向进行深入研究。</li>
			</ul>

		</Project>
	</InfoSection>

	<InfoSection title="项目经验">

		<!-- Mist.js -->
		<Project name="Mist.js" desc="轻量级类 Vue 前端框架" role="核心开发者" link="https://github.com/yumengjh/mist" from="2024.10"
			to="2025.02" :techs="[]">

			<ul>
				<li>从零实现类 Vue 的模板编译器，支持插值表达式、指令系统、m-for 等核心能力。</li>
				<li>自研虚拟 DOM diff、依赖收集与 DOM 更新机制，显著提升渲染性能。</li>
				<li>支持对象/数组/数字遍历、块复用、key diff，设计思路参考 Vue 核心机制。</li>
				<li>整体架构轻量、模块划分明确，适合快速构建中小型应用。</li>
			</ul>
		</Project>

		<!-- JS Router -->
		<Project name="js-router" desc="类 Vue Router 的前端路由器" role="独立开发者" link="https://github.com/yumengjh/js-router"
			from="2024.08" to="2024.12" :techs="[]">

			<ul>
				<li>手写支持 Hash/History 模式的 SPA 路由器，实现路由匹配与参数解析。</li>
				<li>提供 push/replace/go 等导航 API，兼容静态与动态路由。</li>
				<li>实现 router-view / router-link 自定义元素，封装导航逻辑与事件处理。</li>
				<li>支持页面加载进度条、基本导航守卫，增强用户体验。</li>
			</ul>
		</Project>

		<!-- 个人主页 -->
		<Project name="个人主页（blog.yumg.top）" desc="技术内容展示" role="笔者" link="https://blog.yumg.top" from="2024.06"
			to="2025.01" :techs="['Nuxt', 'Vue 3', 'TypeScript']">

			<ul>
				<li>基于 Vue 构建的个人技术博客，支持 SSR、暗黑模式、路由切换动效。</li>
				<li>实现文章系统、归档、标签页等核心功能并支持自动化组件注册。</li>
				<li>使用 Vite 优化构建速度并进行资源按需加载。</li>
				<li>在博客中记录前端、源码分析等内容，累计超 150+ 技术文档撰写。</li>
			</ul>
		</Project>

	</InfoSection>
	<InfoSection title="个人证书">
		<ul>
			<li>计算机等级考试</li>
			<li>英语等级考试</li>
			<li>GitHub 连续学习记录与开源项目产出</li>
		</ul>
	</InfoSection>
</article>
</template>
