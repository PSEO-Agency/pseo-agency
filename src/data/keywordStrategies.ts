
export interface KeywordStrategy {
  primary: string[];
  secondary: string[];
  longTail: string[];
}

export const getKeywordStrategies = (industryName: string): KeywordStrategy => {
  const industry = industryName.toLowerCase();
  
  if (industry === 'saas') {
    return {
      primary: [
        "best [software category] software",
        "[competitor] alternatives",
        "[software category] comparison",
        "[software category] reviews",
        "top [software category] tools",
        "[software category] pricing",
        "[software category] features",
        "[software category] vs [competitor]"
      ],
      secondary: [
        "[software category] for [industry]",
        "[software category] integration",
        "[software category] API",
        "free [software category] tools",
        "[software category] templates",
        "[software category] tutorials",
        "how to choose [software category]",
        "[software category] benefits"
      ],
      longTail: [
        "best [software category] for small business",
        "[software category] with [specific feature]",
        "affordable [software category] solutions",
        "[software category] free trial",
        "[competitor] vs [competitor] comparison",
        "[software category] implementation guide",
        "[industry] [software category] requirements",
        "[software category] ROI calculator"
      ]
    };
  } else if (industry === 'e-commerce') {
    return {
      primary: [
        "best [product category]",
        "[product name] reviews",
        "buy [product name] online",
        "[product category] deals",
        "cheap [product name]",
        "[brand name] [product]",
        "[product name] price comparison",
        "[product category] sale"
      ],
      secondary: [
        "[product name] discount code",
        "[product category] free shipping",
        "[product name] customer reviews",
        "best [product category] brands",
        "[product name] specifications",
        "[product category] buying guide",
        "[product name] warranty",
        "[product category] return policy"
      ],
      longTail: [
        "best [product name] under $[price]",
        "[product name] vs [competitor product]",
        "[product category] for [specific use case]",
        "where to buy [product name] online",
        "[product name] black friday deals",
        "[brand] [product] customer service",
        "[product category] with free returns",
        "authentic [brand] [product] store"
      ]
    };
  } else if (industry === 'real estate') {
    return {
      primary: [
        "homes for sale [city]",
        "real estate [city]",
        "[city] property listings",
        "houses for sale near me",
        "[neighborhood] homes",
        "real estate agent [city]",
        "property values [city]",
        "[city] housing market"
      ],
      secondary: [
        "luxury homes [city]",
        "first time home buyer [city]",
        "real estate investment [city]",
        "commercial real estate [city]",
        "property management [city]",
        "home appraisal [city]",
        "mortgage rates [city]",
        "rent vs buy [city]"
      ],
      longTail: [
        "best neighborhoods in [city] for families",
        "[city] real estate market trends 2024",
        "how much house can I afford in [city]",
        "top rated real estate agent [neighborhood]",
        "[city] property tax rates by neighborhood",
        "new construction homes [city] [price range]",
        "condos for sale [city] under [price]",
        "[city] real estate forecast next 5 years"
      ]
    };
  } else if (industry === 'healthcare') {
    return {
      primary: [
        "[medical condition] treatment",
        "[specialist] near me",
        "[medical procedure] cost",
        "best [medical specialty] [city]",
        "[symptom] causes",
        "[medical test] preparation",
        "[condition] symptoms",
        "emergency [medical service]"
      ],
      secondary: [
        "[medical condition] prevention",
        "[treatment] side effects",
        "[medical procedure] recovery time",
        "telemedicine [specialty]",
        "[condition] diet plan",
        "[medical device] reviews",
        "health insurance [procedure]",
        "[specialty] clinic [city]"
      ],
      longTail: [
        "best [specialist] for [condition] in [city]",
        "how to prepare for [medical procedure]",
        "[condition] treatment options without surgery",
        "cost of [medical procedure] with insurance",
        "[symptom] when to see a doctor",
        "[medical condition] natural treatment options",
        "recovery timeline for [medical procedure]",
        "[specialty] second opinion [city]"
      ]
    };
  } else if (industry === 'finance') {
    return {
      primary: [
        "best [financial product]",
        "[loan type] rates",
        "financial advisor near me",
        "[investment type] returns",
        "credit score improvement",
        "retirement planning",
        "mortgage calculator",
        "personal loan approval"
      ],
      secondary: [
        "[financial product] comparison",
        "how to invest in [asset]",
        "tax planning strategies",
        "[insurance type] quotes",
        "debt consolidation options",
        "emergency fund calculator",
        "401k rollover guide",
        "[financial service] fees"
      ],
      longTail: [
        "best [financial product] for [specific situation]",
        "how much should I save for retirement at [age]",
        "[loan type] approval with [credit score]",
        "[investment strategy] for beginners guide",
        "cost of [financial service] in [city]",
        "[financial product] requirements and qualifications",
        "difference between [product A] and [product B]",
        "[financial goal] planning calculator"
      ]
    };
  } else if (industry === 'local business') {
    return {
      primary: [
        "[service] near me",
        "[service] in [city]",
        "best [service] [city]",
        "[service] [city] reviews",
        "local [service] provider",
        "[service] [neighborhood]",
        "24/7 [service] [city]",
        "emergency [service] [city]"
      ],
      secondary: [
        "[service] cost [city]",
        "[service] companies [city]",
        "residential [service] [city]",
        "commercial [service] [city]",
        "[service] estimate [city]",
        "[service] contractors [city]",
        "licensed [service] [city]",
        "[service] repair [city]"
      ],
      longTail: [
        "affordable [service] in [city]",
        "[service] [city] same day",
        "best rated [service] [neighborhood]",
        "[service] [city] free quote",
        "[specific service type] [city]",
        "[service] near [landmark]",
        "[service] [city] [specific need]",
        "professional [service] [area]"
      ]
    };
  } else if (industry === 'accounting firm') {
    return {
      primary: [
        "CPA near me",
        "tax preparation [city]",
        "accounting services [city]",
        "bookkeeping services",
        "tax accountant [city]",
        "business tax services",
        "personal tax preparation",
        "certified public accountant"
      ],
      secondary: [
        "small business accounting",
        "tax planning services",
        "payroll services [city]",
        "financial statement preparation",
        "IRS audit representation",
        "business consulting services",
        "QuickBooks setup",
        "tax resolution services"
      ],
      longTail: [
        "best CPA for small business [city]",
        "tax preparation cost [city]",
        "business accounting services near me",
        "individual tax return preparation",
        "[industry] accounting specialist",
        "tax deadline extension services",
        "business startup accounting help",
        "nonprofit accounting services [city]"
      ]
    };
  } else if (industry === 'law firm') {
    return {
      primary: [
        "[practice area] lawyer",
        "[practice area] attorney",
        "law firm [city]",
        "[practice area] law firm",
        "legal services [city]",
        "[practice area] consultation",
        "attorney near me",
        "[practice area] legal advice"
      ],
      secondary: [
        "[practice area] case evaluation",
        "[practice area] lawyer cost",
        "free legal consultation",
        "[practice area] settlement",
        "[practice area] court representation",
        "experienced [practice area] attorney",
        "[practice area] legal help",
        "[practice area] law office"
      ],
      longTail: [
        "best [practice area] lawyer [city]",
        "[practice area] attorney free consultation",
        "[specific legal issue] lawyer help",
        "[practice area] lawyer near me reviews",
        "affordable [practice area] attorney",
        "[practice area] lawyer [city] experience",
        "[specific case type] legal representation",
        "[practice area] attorney [city] results"
      ]
    };
  } else if (industry === 'automotive') {
    return {
      primary: [
        "[car make model] for sale",
        "used cars [city]",
        "car dealership near me",
        "[service type] [city]",
        "auto repair shop",
        "[car part] replacement",
        "car maintenance [city]",
        "automotive service center"
      ],
      secondary: [
        "[car make] certified pre-owned",
        "car financing options",
        "auto insurance quotes",
        "[service] cost estimate",
        "brake repair [city]",
        "oil change near me",
        "transmission repair",
        "car inspection services"
      ],
      longTail: [
        "best [car make] dealer in [city]",
        "reliable used cars under [price]",
        "[specific car problem] repair cost",
        "automotive service [city] reviews",
        "[car make model] maintenance schedule",
        "certified mechanic [city] area",
        "[service type] near me open now",
        "car parts [make model] [year]"
      ]
    };
  }
  
  // Fallback for any other industries
  return {
    primary: [
      "[industry] solutions",
      "best [industry] services",
      "[industry] consulting",
      "[industry] experts",
      "[industry] strategy",
      "[industry] optimization",
      "[industry] management",
      "[industry] specialists"
    ],
    secondary: [
      "[industry] best practices",
      "[industry] case studies",
      "[industry] ROI",
      "[industry] implementation",
      "[industry] trends",
      "[industry] analysis",
      "[industry] tools",
      "[industry] services cost"
    ],
    longTail: [
      "best [industry] company for [specific need]",
      "[industry] services in [location]",
      "affordable [industry] solutions",
      "[industry] consulting near me",
      "[industry] expert advice",
      "[industry] service provider",
      "[industry] strategy development",
      "[industry] performance optimization"
    ]
  };
};
