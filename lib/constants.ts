export const MAX_TEXT_LENGTH = 15000;

export const RISK_PATTERNS = [
    {
        category: "Data Selling",
        severity: "High",
        pattern: /sell your data|sell personal information/i,
        explanation:
            "Your personal data may be sold to external parties.",
    },

    {
        category: "Biometric Collection",
        severity: "High",
        pattern: /biometric|face recognition|fingerprint/i,
        explanation:
            "Sensitive biometric information may be collected.",
    },

    {
        category: "Auto Renewal",
        severity: "Medium",
        pattern: /automatically renew|auto-renewing subscription/i,
        explanation:
            "Subscriptions may renew automatically without clear reminders.",
    },

    {
        category: "Account Termination",
        severity: "Medium",
        pattern: /terminate your account|suspend your account/i,
        explanation:
            "Your access may be removed at the platform's discretion.",
    },

    {
        category: "Children's Data",
        severity: "High",
        pattern: /children under 13|childrens privacy/i,
        explanation:
            "The policy references collection or handling of children's data.",
    },

    {
        category: "Liability Waiver",
        severity: "High",
        pattern: /limited liability|not liable for damages/i,
        explanation:
            "The company limits responsibility for damages or losses.",
    },
    {
        category: "Third-Party Sharing",
        severity: "High",
        pattern: /third[- ]party|share your data|advertisers/i,
        explanation:
            "This policy may share your information with external companies.",
    },

    {
        category: "Binding Arbitration",
        severity: "High",
        pattern: /binding arbitration|waive.*class action/i,
        explanation:
            "You may lose the right to sue through normal legal processes.",
    },

    {
        category: "Targeted Advertising",
        severity: "Medium",
        pattern: /targeted advertising|personalized ads/i,
        explanation:
            "Your behavior may be tracked for advertising purposes.",
    },

    {
        category: "Location Tracking",
        severity: "High",
        pattern: /precise location|location tracking|gps/i,
        explanation:
            "The service may track your real-world location.",
    },

    {
        category: "Data Retention",
        severity: "Medium",
        pattern: /retain your data|store your data/i,
        explanation:
            "Your information may be stored for long periods.",
    },
] as const;

export const BLOCKED_HOSTS = [
    "localhost",
    "127.0.0.1",
    "0.0.0.0",
];