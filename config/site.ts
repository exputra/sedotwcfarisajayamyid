const contactPhone = "08212134261";

const whatsappPhone = contactPhone.startsWith("0")
	? `62${contactPhone.slice(1)}`
	: contactPhone;

export const siteConfig = {
	name: "Sedot WC Bebas Mampet",
	url: "https://bebasmampet.my.id",
	ogImage: "https://bebasmampet.my.id/og.jpg",
	description:
		"Sedot WC Bebas Mampet - Layanan sedot WC profesional, cepat, dan terpercaya 24 jam setiap hari di Pontianak",
	phone: contactPhone,
	email: "info@bebasmampet.my.id",
	address: "Melayani Jabodetabek",
	links: {
		whatsapp: `https://api.whatsapp.com/send?phone=${whatsappPhone}`,
	},
};

export type SiteConfig = typeof siteConfig;

export const META_THEME_COLORS = {
	light: "#ffffff",
	dark: "#0f172a",
};
