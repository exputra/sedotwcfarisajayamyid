const contactPhone = "081311885641";

const whatsappPhone = contactPhone.startsWith("0")
	? `62${contactPhone.slice(1)}`
	: contactPhone;

const googleTagManagerId = "GTM-WHV4G73R";

const seoKeywords = [
	"jasa sedot WC Jakarta",
	"sedot WC Jakarta",
	"sedot WC Jabodetabek",
	"sedot WC Jakarta Selatan",
	"sedot WC Jakarta Timur",
	"sedot WC Jakarta Barat",
	"sedot WC Jakarta Utara",
	"sedot WC Jakarta Pusat",
	"sedot WC Bekasi",
	"sedot WC Depok",
	"sedot WC Tangerang",
	"sedot WC Bogor",
	"jasa sedot WC 24 jam",
	"sedot WC mampet",
	"sedot limbah Jakarta",
	"sedot limbah Jabodetabek",
	"cuci tangki air Jakarta",
	"Jasa Sedot WC Farisa Jaya",
];

export const siteConfig = {
	name: "Jasa Sedot WC Farisa Jaya",
	url: "https://bebasmampet.my.id",
	ogImage: "https://bebasmampet.my.id/og.jpg",
	description:
		"Jasa Sedot WC Farisa Jaya - Layanan sedot WC profesional, cepat, dan terpercaya 24 jam untuk Jakarta dan Jabodetabek",
	keywords: seoKeywords,
	phone: contactPhone,
	email: "info@bebasmampet.my.id",
	address: "Melayani Jabodetabek",
	links: {
		whatsapp: `https://api.whatsapp.com/send?phone=${whatsappPhone}`,
	},
	analytics: {
		googleTagManagerId,
		googleTagManagerScript: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${googleTagManagerId}');`,
	},
};

export type SiteConfig = typeof siteConfig;

export const META_THEME_COLORS = {
	light: "#ffffff",
	dark: "#0f172a",
};
