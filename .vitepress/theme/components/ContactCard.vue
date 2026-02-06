<template>
	<div class="contacts-grid">
		<a
			v-for="(contact, index) in contacts"
			:key="index"
			:href="contact.link"
			class="contact-card"
			:style="{ animationDelay: `${index * 0.2}s` }"
		>
			<span class="icon">{{ contact.icon }}</span>
			<div class="content">
				<span class="label">{{ contact.label }}</span>
				<b class="value">{{ contact.value }}</b>
			</div>
		</a>
	</div>
</template>

<script setup>
import { computed } from "vue";
import { useData } from "vitepress";
import contactsData from "../../data/contacts.json";

const { lang } = useData();

const contacts = computed(() => {
	const labels = contactsData.labels[lang.value] || contactsData.labels["uk"];
	return contactsData.items.map((item, index) => ({
		...item,
		label: labels[index],
	}));
});
</script>

<style scoped>
.contacts-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
	gap: 1.5rem;
	margin: 2rem 0;
}

@media (max-width: 768px) {
	.contacts-grid {
		grid-template-columns: 1fr;
	}
}

.contact-card {
	background: var(--vp-c-bg-soft);
	border: 2px solid var(--vp-c-divider);
	border-radius: 12px;
	padding: 1.5rem;
	text-decoration: none;
	color: inherit;
	display: flex;
	align-items: center;
	gap: 1.5rem;
	opacity: 0;
	animation: slideInLeft 0.5s ease-out forwards;
	transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	position: relative;
	overflow: hidden;
}

@keyframes slideInLeft {
	from {
		opacity: 0;
		transform: translateX(-30px);
	}
	to {
		opacity: 1;
		transform: translateX(0);
	}
}

.contact-card::before {
	content: "";
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	width: 4px;
	background: var(--vp-c-brand);
	transform: scaleY(0);
	transform-origin: bottom;
	transition: transform 0.3s ease;
}

.contact-card:hover::before {
	transform: scaleY(1);
}

.contact-card:hover {
	transform: translateX(8px);
	border-color: var(--vp-c-brand);
	box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.icon {
	font-size: 1.8rem;
	display: flex;
	align-items: center;
	justify-content: center;
	min-width: 48px;
	width: 48px;
	height: 48px;
	border-radius: 12px;
	background: var(--vp-c-brand-soft);
	transition: transform 0.3s ease;
}

.contact-card:hover .icon {
	transform: rotate(10deg) scale(1.1);
}

.content {
	display: flex;
	flex-direction: column;
	gap: 0.25rem;
	flex: 1;
	min-width: 0;
}

.label {
	font-size: 0.875rem;
	color: var(--vp-c-text-2);
	font-weight: 500;
}

.value {
	font-size: 1rem;
	color: var(--vp-c-text-1);
	font-weight: 600;
	transition: color 0.3s ease;
	word-break: break-all;
	overflow-wrap: anywhere;
}

.contact-card:hover .value {
	color: var(--vp-c-brand);
}
</style>
