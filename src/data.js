// All data is hardcoded here to simplify the project for deployment.

export const executiveBrief = {
  opportunity: {
    title: "The Opportunity",
    summary: "A market forced by the EU's 'Critical Medicines Act' to value reliability over price.",
    fullText: "The European pharmaceutical market is undergoing a structural shift... This has created a clear, monetizable opening for an agile and reliable operator to thrive."
  },
  solution: {
    title: "A De-Risked Solution",
    summary: "An 'acqui-hire' of a proven, profitable, turnkey operation with a battle-tested team.",
    fullText: "This is not a theoretical startup... We will empower TGP's existing Portuguese team through a structured knowledge-transfer program, leveraging your current assets for immediate growth."
  },
  financials: {
    title: "The Financial Case",
    summary: "A self-funding P&L contributor, designed to be EBITDA positive in Year 2.",
    fullText: "• Lean and Self-Funding: This is a core team of three—the exact unit that has proven its ability to generate results. The plan is designed to be EBITDA positive in Year 2, funded by its own growth.\n• Immediate Cost Synergies: The integration generates €233,988 in Opex savings over five years by eliminating redundant corporate overhead.\n• Significant, De-Risked Upside: By leveraging the TGP brand and infrastructure, we project a ~40% increase in cumulative cash flow over 5 years compared to the cost-synergy case, reaching €843k."
  }
};

export const financialData = [
    { year: 'Y1', 'Base Case': -70.60, 'Synergies': -20.60, 'Synergies+': -20.60 },
    { year: 'Y2', 'Base Case': 84.79, 'Synergies': 129.43, 'Synergies+': 147.98 },
    { year: 'Y3', 'Base Case': 90.93, 'Synergies': 136.55, 'Synergies+': 180.95 },
    { year: 'Y4', 'Base Case': 181.45, 'Synergies': 228.09, 'Synergies+': 297.87 },
    { year: 'Y5', 'Base Case': 231.85, 'Synergies': 279.22, 'Synergies+': 372.97 },
];

export const cashFlowData = [
    { year: 'Y1', 'Base Case': -212.88, 'Synergies': -161.07, 'Synergies+': -161.07 },
    { year: 'Y2', 'Base Case': -256.55, 'Synergies': -44.12, 'Synergies+': -25.56 },
    { year: 'Y3', 'Base Case': -159.38, 'Synergies': 100.57, 'Synergies+': 163.52 },
    { year: 'Y4', 'Base Case': 33.28, 'Synergies': 333.80, 'Synergies+': 466.53 },
    { year: 'Y5', 'Base Case': 269.12, 'Synergies': 617.14, 'Synergies+': 843.62 },
];

export const opexSavings = [
    { category: 'QA & Regulatory Consulting', savings: '€67,459' },
    { category: 'Insurance', savings: '€41,632' },
    { category: 'IT & Tools', savings: '€62,448' },
    { category: 'Legal & Accounting', savings: '€62,448' },
];