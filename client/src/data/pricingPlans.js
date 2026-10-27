const pricingPlans = [
  {
    id: 1,
    name: "Free",
    price: "₹0",
    duration: "/month",
    description: "Perfect for beginners starting interview preparation.",
    features: [
      "3 AI Mock Interviews",
      "Basic AI Feedback",
      "Company Questions",
      "Dashboard Access",
    ],
    buttonText: "Start Free",
    popular: false,
  },

  {
    id: 2,
    name: "Pro",
    price: "₹299",
    duration: "/month",
    description: "Best for students preparing seriously.",
    features: [
      "Unlimited Interviews",
      "Advanced AI Feedback",
      "Resume Analysis",
      "Performance Analytics",
      "Voice Interviews",
      "Priority Support",
    ],
    buttonText: "Get Pro",
    popular: true,
  },

  {
    id: 3,
    name: "Enterprise",
    price: "Custom",
    duration: "",
    description: "For colleges and organizations.",
    features: [
      "Unlimited Students",
      "Admin Dashboard",
      "Detailed Reports",
      "Team Analytics",
      "Dedicated Support",
      "Custom AI Models",
    ],
    buttonText: "Contact Sales",
    popular: false,
  },
];

export default pricingPlans;