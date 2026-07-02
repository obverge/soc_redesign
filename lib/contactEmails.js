export const societyOptions = [
	{ value: "society-a", label: "Society A" },
	{ value: "society-b", label: "Society B" },
	{ value: "both", label: "Both Societies" },
];

export const reasonOptions = [
	{ value: "academic", label: "Academic support" },
	{ value: "financial", label: "Financial support" },
	{ value: "internal", label: "Internal event or society question" },
	{ value: "external", label: "External partnership or sponsor" },
	{ value: "general", label: "General inquiry" },
];

export const contactEmails = {
	"society-a": {
		academic: "vpacademic.societya@gmail.com",
		financial: "vpfinance.societya@gmail.com",
		internal: "vpinternal.societya@gmail.com",
		external: "external.societya@gmail.com",
		general: "president.societya@gmail.com",
	},
	"society-b": {
		academic: "ejcochran@mun.ca",
		financial: "nbhopkins@mun.ca",
		internal: "fchisholm@mun.ca",
		external: "sjebruneau@mun.ca",
		general: "obverge@mun.ca",
	},
	both: {
		academic: "vpacademic.societya@gmail.com,ejcochran@mun.ca",
		financial: "vpfinance.societya@gmail.com,nbhopkins@mun.ca",
		internal: "vpinternal.societya@gmail.com,fchisholm@mun.ca",
		external: "external.societya@gmail.com,sjebruneau@mun.ca",
		general: "president.societya@gmail.com,obverge@mun.ca",
	},
};

export function getContactRecipient(society, reason) {
	const group = contactEmails[society] || contactEmails["society-a"];
	return group[reason] || group.general;
}
