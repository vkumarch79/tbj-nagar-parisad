// सरकारी योजनाएँ — हर योजना का कार्ड होम पेज पर और पूरा पेज /schemes/<slug> पर दिखता है
// हर टेक्स्ट { hi, en } में है। images डमी फोटो हैं — असली फोटो public/ में रखकर "/awas1.jpg" जैसे लिखें
// sections में हर कार्ड: content (पैराग्राफ), points (✓ सूची), steps (क्रमांक वाले चरण), table (पहली पंक्ति शीर्षक)
// योजना के नियम समय-समय पर बदलते हैं — आधिकारिक पोर्टल से जाँचते रहें

export const schemes = [
  {
    "slug": "housing",
    "icon": "🏠",
    "title": {
      "hi": "आवास योजना",
      "en": "Housing Scheme"
    },
    "desc": {
      "hi": "लागू आवास सहायता योजनाओं के बारे में जानकारी।",
      "en": "Information about housing assistance schemes."
    },
    "badge": {
      "hi": "सरकारी आवास योजना",
      "en": "Government Housing Scheme"
    },
    "heading": {
      "hi": "प्रधानमंत्री आवास योजना",
      "en": "Pradhan Mantri Awas Yojana"
    },
    "intro": {
      "hi": "प्रधानमंत्री आवास योजना–शहरी 2.0 (PMAY-U 2.0) का उद्देश्य पात्र शहरी परिवारों को किफायती, सुरक्षित और पक्का आवास उपलब्ध कराने में सहायता करना है।",
      "en": "Pradhan Mantri Awas Yojana – Urban 2.0 (PMAY-U 2.0) aims to support eligible urban families in accessing affordable, safe and pucca housing."
    },
    "galleryTitle": {
      "hi": "आवास एवं नागरिक सुविधाएँ",
      "en": "Housing & Civic Facilities"
    },
    "images": [
      {
        "src": "https://picsum.photos/seed/triveniganj-awas1/1200/800",
        "title": {
          "hi": "सुरक्षित आवास",
          "en": "Safe Housing"
        }
      },
      {
        "src": "https://picsum.photos/seed/triveniganj-awas2/1200/800",
        "title": {
          "hi": "नगर परिषद सहायता",
          "en": "Nagar Parishad Support"
        }
      },
      {
        "src": "https://picsum.photos/seed/triveniganj-awas3/1200/800",
        "title": {
          "hi": "बेहतर शहरी सुविधाएं",
          "en": "Better Urban Facilities"
        }
      },
      {
        "src": "https://picsum.photos/seed/triveniganj-awas4/1200/800",
        "title": {
          "hi": "आवश्यक नागरिक सुविधाएं",
          "en": "Essential Civic Facilities"
        }
      }
    ],
    "highlightsTitle": {
      "hi": "योजना की मुख्य बातें",
      "en": "Key Highlights"
    },
    "highlights": [
      {
        "icon": "🏠",
        "title": {
          "hi": "पक्का आवास",
          "en": "Pucca Housing"
        },
        "text": {
          "hi": "पात्र परिवारों को सुरक्षित आवास के लिए सहायता",
          "en": "Housing assistance for eligible families"
        }
      },
      {
        "icon": "👨‍👩‍👧",
        "title": {
          "hi": "पात्र परिवार",
          "en": "Eligible Families"
        },
        "text": {
          "hi": "EWS, LIG और MIG परिवारों के लिए प्रावधान",
          "en": "Provisions for EWS, LIG and MIG households"
        }
      },
      {
        "icon": "📄",
        "title": {
          "hi": "सरल प्रक्रिया",
          "en": "Application Support"
        },
        "text": {
          "hi": "आवेदन और दस्तावेजों के लिए मार्गदर्शन",
          "en": "Guidance on applications and documents"
        }
      },
      {
        "icon": "🤝",
        "title": {
          "hi": "स्थानीय सहायता",
          "en": "Local Assistance"
        },
        "text": {
          "hi": "नगर परिषद स्तर पर जानकारी और सहायता",
          "en": "Information and support through the Nagar Parishad"
        }
      }
    ],
    "infoTitle": {
      "hi": "योजना की पूरी जानकारी",
      "en": "Complete Scheme Information"
    },
    "sections": [
      {
        "icon": "🏠",
        "title": {
          "hi": "प्रधानमंत्री आवास योजना – शहरी 2.0 क्या है?",
          "en": "What is PMAY-U 2.0?"
        },
        "content": {
          "hi": "PMAY-U 2.0 केंद्र सरकार की आवास योजना है, जिसके माध्यम से पात्र शहरी परिवारों को पक्का और सुरक्षित घर उपलब्ध कराने के लिए सहायता दी जाती है। योजना का कार्यान्वयन राज्य सरकारों, नगर निकायों, वित्तीय संस्थानों और अन्य संबंधित एजेंसियों के माध्यम से किया जाता है।",
          "en": "PMAY-U 2.0 is a Government of India housing scheme that supports eligible urban families in accessing safe and pucca housing. The scheme is implemented through State Governments, Urban Local Bodies, financial institutions and other participating agencies."
        }
      },
      {
        "icon": "✅",
        "title": {
          "hi": "पात्रता",
          "en": "Eligibility"
        },
        "points": [
          {
            "hi": "आवेदक शहरी क्षेत्र में रहने वाला परिवार होना चाहिए।",
            "en": "The applicant family should be residing in an urban area."
          },
          {
            "hi": "परिवार के किसी सदस्य के नाम देश में कहीं भी पक्का घर नहीं होना चाहिए।",
            "en": "No member of the beneficiary family should own a pucca house anywhere in the country."
          },
          {
            "hi": "परिवार EWS, LIG या MIG आय वर्ग में होना चाहिए।",
            "en": "The household should fall under the applicable EWS, LIG or MIG income category."
          },
          {
            "hi": "आवेदक को योजना के नियमों के अनुसार पात्रता सत्यापन पूरा करना होगा।",
            "en": "The applicant must complete the eligibility verification required under the scheme."
          },
          {
            "hi": "जिन परिवारों ने पिछले 20 वर्षों में किसी सरकारी आवास योजना का लाभ लिया है, वे लागू नियमों के अनुसार पात्र नहीं हो सकते हैं।",
            "en": "Families that have received benefits under a government housing scheme during the previous 20 years may not be eligible, subject to applicable rules."
          },
          {
            "hi": "लाभार्थी परिवार में पति, पत्नी और अविवाहित बच्चे शामिल हो सकते हैं।",
            "en": "The beneficiary family may include husband, wife and unmarried children."
          }
        ]
      },
      {
        "icon": "💰",
        "title": {
          "hi": "आय वर्ग",
          "en": "Income Categories"
        },
        "table": [
          [
            {
              "hi": "श्रेणी",
              "en": "Category"
            },
            {
              "hi": "वार्षिक पारिवारिक आय",
              "en": "Annual Household Income"
            }
          ],
          [
            {
              "hi": "EWS",
              "en": "EWS"
            },
            {
              "hi": "₹3 लाख तक",
              "en": "Up to ₹3 lakh"
            }
          ],
          [
            {
              "hi": "LIG",
              "en": "LIG"
            },
            {
              "hi": "₹3 लाख से ₹6 लाख तक",
              "en": "₹3 lakh to ₹6 lakh"
            }
          ],
          [
            {
              "hi": "MIG",
              "en": "MIG"
            },
            {
              "hi": "₹6 लाख से ₹9 लाख तक",
              "en": "₹6 lakh to ₹9 lakh"
            }
          ]
        ]
      },
      {
        "icon": "🏗️",
        "title": {
          "hi": "PMAY-U 2.0 के चार प्रमुख घटक",
          "en": "Four Major Components of PMAY-U 2.0"
        },
        "points": [
          {
            "hi": "BLC – Beneficiary Led Construction: पात्र EWS परिवारों को उपलब्ध भूमि पर नया पक्का घर बनाने में सहायता।",
            "en": "BLC – Beneficiary Led Construction: Assistance for eligible EWS families to construct a new pucca house on available land."
          },
          {
            "hi": "AHP – Affordable Housing in Partnership: साझेदारी के माध्यम से पात्र EWS परिवारों के लिए किफायती आवास।",
            "en": "AHP – Affordable Housing in Partnership: Affordable housing for eligible EWS families through approved partnerships."
          },
          {
            "hi": "ARH – Affordable Rental Housing: जरूरतमंद शहरी परिवारों, प्रवासियों और कामगारों के लिए किफायती किराये के आवास को बढ़ावा देना।",
            "en": "ARH – Affordable Rental Housing: Affordable rental housing for eligible urban families, migrants and workers."
          },
          {
            "hi": "ISS – Interest Subsidy Scheme: पात्र EWS, LIG और MIG परिवारों के लिए निर्धारित होम लोन पर ब्याज सब्सिडी का प्रावधान।",
            "en": "ISS – Interest Subsidy Scheme: Interest subsidy provisions for eligible EWS, LIG and MIG families on qualifying home loans."
          }
        ]
      },
      {
        "icon": "📄",
        "title": {
          "hi": "आवश्यक दस्तावेज",
          "en": "Required Documents"
        },
        "points": [
          {
            "hi": "आधार कार्ड",
            "en": "Aadhaar Card"
          },
          {
            "hi": "बैंक खाते का विवरण",
            "en": "Bank account details"
          },
          {
            "hi": "परिवार के सदस्यों की जानकारी",
            "en": "Family member details"
          },
          {
            "hi": "आय प्रमाण / आय से संबंधित दस्तावेज",
            "en": "Income proof / income-related documents"
          },
          {
            "hi": "पात्रता संबंधी घोषणा / Undertaking",
            "en": "Eligibility declaration / Undertaking"
          },
          {
            "hi": "BLC के लिए भूमि स्वामित्व संबंधी दस्तावेज",
            "en": "Land ownership documents for BLC applications"
          },
          {
            "hi": "संबंधित विभाग या नगर निकाय द्वारा मांगे गए अन्य दस्तावेज",
            "en": "Any other documents required by the concerned department or Urban Local Body"
          }
        ]
      },
      {
        "icon": "📝",
        "title": {
          "hi": "PMAY-U 2.0 के लिए आवेदन कैसे करें?",
          "en": "How to Apply for PMAY-U 2.0"
        },
        "steps": [
          {
            "hi": "सबसे पहले अपनी पात्रता की जांच करें।",
            "en": "Check your eligibility first."
          },
          {
            "hi": "PMAY-U 2.0 के आधिकारिक पोर्टल पर आवेदन प्रक्रिया शुरू करें।",
            "en": "Start the application process through the official PMAY-U 2.0 portal."
          },
          {
            "hi": "व्यक्तिगत एवं परिवार संबंधी जानकारी भरें।",
            "en": "Enter your personal and family details."
          },
          {
            "hi": "आधार और बैंक खाते की जानकारी उपलब्ध कराएं।",
            "en": "Provide Aadhaar and bank account information as required."
          },
          {
            "hi": "आय एवं पात्रता से संबंधित आवश्यक दस्तावेज जमा करें।",
            "en": "Submit the required income and eligibility documents."
          },
          {
            "hi": "BLC के लिए आवेदन करने पर भूमि संबंधी दस्तावेज उपलब्ध कराएं।",
            "en": "For BLC applications, provide the required land ownership documents."
          },
          {
            "hi": "आवेदन के बाद संबंधित नगर निकाय द्वारा दस्तावेजों एवं पात्रता का सत्यापन किया जाएगा।",
            "en": "The concerned Urban Local Body will verify the application and documents."
          },
          {
            "hi": "सत्यापन और स्वीकृति के बाद योजना के नियमों के अनुसार लाभ प्रदान किया जाएगा।",
            "en": "After verification and approval, benefits will be provided according to the applicable scheme guidelines."
          }
        ]
      },
      {
        "icon": "📍",
        "title": {
          "hi": "आवेदन कहाँ करें?",
          "en": "Where Can You Apply?"
        },
        "points": [
          {
            "hi": "PMAY-U 2.0 के Unified Web Portal के माध्यम से ऑनलाइन आवेदन करें।",
            "en": "Apply online through the PMAY-U 2.0 Unified Web Portal."
          },
          {
            "hi": "नजदीकी Common Service Centre (CSC) से आवेदन में सहायता प्राप्त करें।",
            "en": "Visit a nearby Common Service Centre (CSC) for assistance."
          },
          {
            "hi": "अपने संबंधित नगर परिषद कार्यालय में जाकर जानकारी और सहायता प्राप्त करें।",
            "en": "Visit your concerned Nagar Parishad / Urban Local Body office for information and assistance."
          }
        ]
      },
      {
        "icon": "👩‍🦽",
        "title": {
          "hi": "प्राथमिकता वाले लाभार्थी",
          "en": "Priority Beneficiaries"
        },
        "points": [
          {
            "hi": "विधवा एवं एकल महिलाएं",
            "en": "Widows and single women"
          },
          {
            "hi": "दिव्यांगजन",
            "en": "Persons with disabilities"
          },
          {
            "hi": "वरिष्ठ नागरिक",
            "en": "Senior citizens"
          },
          {
            "hi": "अनुसूचित जाति एवं अनुसूचित जनजाति",
            "en": "Scheduled Castes and Scheduled Tribes"
          },
          {
            "hi": "अल्पसंख्यक एवं अन्य कमजोर वर्ग",
            "en": "Minorities and other vulnerable groups"
          },
          {
            "hi": "सफाई कर्मी",
            "en": "Safai Karmis"
          },
          {
            "hi": "स्ट्रीट वेंडर्स",
            "en": "Street vendors"
          },
          {
            "hi": "प्रधानमंत्री विश्वकर्मा योजना से जुड़े कारीगर",
            "en": "Artisans covered under PM Vishwakarma"
          },
          {
            "hi": "आंगनवाड़ी कार्यकर्ता",
            "en": "Anganwadi workers"
          },
          {
            "hi": "निर्माण श्रमिक",
            "en": "Construction workers"
          },
          {
            "hi": "झुग्गी/चॉल में रहने वाले परिवार",
            "en": "Families living in slums/chawls"
          }
        ]
      }
    ],
    "help": {
      "label": {
        "hi": "सहायता एवं संपर्क",
        "en": "Help & Contact"
      },
      "title": {
        "hi": "आवास योजना के लिए सहायता चाहिए?",
        "en": "Need Help With the Housing Scheme?"
      },
      "text": {
        "hi": "पात्रता, आवेदन प्रक्रिया और आवश्यक दस्तावेजों के संबंध में जानकारी के लिए अपने संबंधित नगर परिषद कार्यालय से संपर्क करें।",
        "en": "For information about eligibility, application procedures and required documents, contact your concerned Nagar Parishad office."
      },
      "link": {
        "href": "https://pmay-urban.gov.in/",
        "label": {
          "hi": "आधिकारिक पोर्टल ↗",
          "en": "Official Portal ↗"
        },
        "external": true
      }
    }
  },
  {
    "slug": "water-sanitation",
    "icon": "🚰",
    "title": {
      "hi": "जल एवं स्वच्छता",
      "en": "Water & Sanitation"
    },
    "desc": {
      "hi": "जल और स्वच्छता कार्यक्रमों के बारे में जानकारी।",
      "en": "Information about water and sanitation programmes."
    },
    "badge": {
      "hi": "जल एवं स्वच्छता सेवाएं",
      "en": "Water & Sanitation Services"
    },
    "heading": {
      "hi": "जल नल योजना एवं स्वच्छ नगर परिषद",
      "en": "Jal Nal Scheme & Clean Nagar Parishad"
    },
    "intro": {
      "hi": "त्रिवेणीगंज नगर परिषद का उद्देश्य नागरिकों को सुरक्षित जल आपूर्ति, स्वच्छ वातावरण, बेहतर कचरा प्रबंधन और गुणवत्तापूर्ण स्वच्छता सुविधाएं उपलब्ध कराने में सहयोग करना है।",
      "en": "Triveniganj Nagar Parishad aims to support safe water supply, a cleaner environment, better waste management and improved sanitation facilities for citizens."
    },
    "galleryTitle": {
      "hi": "स्वच्छ और स्वस्थ त्रिवेणीगंज",
      "en": "Clean & Healthy Triveniganj"
    },
    "images": [
      {
        "src": "https://picsum.photos/seed/triveniganj-jal1/1200/800",
        "title": {
          "hi": "जल आपूर्ति",
          "en": "Water Supply"
        }
      },
      {
        "src": "https://picsum.photos/seed/triveniganj-jal2/1200/800",
        "title": {
          "hi": "नल से जल",
          "en": "Tap Water"
        }
      },
      {
        "src": "https://picsum.photos/seed/triveniganj-jal3/1200/800",
        "title": {
          "hi": "स्वच्छता अभियान",
          "en": "Cleanliness Campaign"
        }
      },
      {
        "src": "https://picsum.photos/seed/triveniganj-jal4/1200/800",
        "title": {
          "hi": "स्वच्छ सड़क एवं नाली",
          "en": "Clean Roads & Drains"
        }
      }
    ],
    "highlightsTitle": {
      "hi": "मुख्य सेवाएँ एवं प्राथमिकताएँ",
      "en": "Key Services & Priorities"
    },
    "highlights": [
      {
        "icon": "💧",
        "title": {
          "hi": "स्वच्छ पेयजल",
          "en": "Safe Drinking Water"
        },
        "text": {
          "hi": "नागरिकों तक सुरक्षित एवं गुणवत्तापूर्ण जल पहुंचाने पर ध्यान",
          "en": "Focus on safe and quality water supply for citizens"
        }
      },
      {
        "icon": "🚰",
        "title": {
          "hi": "नल से जल",
          "en": "Tap Water"
        },
        "text": {
          "hi": "घरों तक पाइपलाइन एवं नल जल सुविधा को बेहतर बनाना",
          "en": "Improving household pipeline and tap water services"
        }
      },
      {
        "icon": "🗑️",
        "title": {
          "hi": "कचरा प्रबंधन",
          "en": "Waste Management"
        },
        "text": {
          "hi": "कचरे के संग्रहण, पृथक्करण एवं वैज्ञानिक प्रबंधन को बढ़ावा",
          "en": "Better collection, segregation and scientific waste management"
        }
      },
      {
        "icon": "🧹",
        "title": {
          "hi": "स्वच्छ नगर",
          "en": "Clean City"
        },
        "text": {
          "hi": "स्वच्छ सड़क, नाली और सार्वजनिक स्थानों को बढ़ावा देना",
          "en": "Promoting clean roads, drains and public spaces"
        }
      }
    ],
    "infoTitle": {
      "hi": "जल एवं स्वच्छता सेवाओं की पूरी जानकारी",
      "en": "Complete Water & Sanitation Information"
    },
    "sections": [
      {
        "icon": "💧",
        "title": {
          "hi": "जल नल योजना एवं सुरक्षित जल आपूर्ति",
          "en": "Jal Nal Scheme & Safe Water Supply"
        },
        "content": {
          "hi": "नगर परिषद क्षेत्र में नागरिकों को सुरक्षित एवं पर्याप्त जल उपलब्ध कराने के लिए पाइपलाइन, नल जल कनेक्शन, जल स्रोतों की देखभाल, जल गुणवत्ता और जल आपूर्ति व्यवस्था को बेहतर बनाने पर ध्यान दिया जाता है।",
          "en": "The Nagar Parishad focuses on improving safe and adequate water supply through better pipelines, tap water connections, maintenance of water sources, water-quality awareness and improved water distribution systems."
        },
        "points": [
          {
            "hi": "घरों तक सुरक्षित एवं नियमित नल जल पहुंचाने के प्रयास।",
            "en": "Efforts to provide safe and regular tap water to households."
          },
          {
            "hi": "पाइपलाइन एवं जल वितरण व्यवस्था को बेहतर बनाने पर ध्यान।",
            "en": "Improvement and maintenance of pipeline and water distribution systems."
          },
          {
            "hi": "जल स्रोतों और जल आपूर्ति प्रणाली के रखरखाव में सहयोग।",
            "en": "Maintenance and protection of water sources and supply infrastructure."
          },
          {
            "hi": "जल की गुणवत्ता की निगरानी एवं सुरक्षित पेयजल के प्रति जागरूकता।",
            "en": "Awareness and monitoring related to drinking-water quality."
          },
          {
            "hi": "जल संरक्षण, वर्षा जल संचयन और पानी के पुन: उपयोग को प्रोत्साहन।",
            "en": "Promotion of water conservation, rainwater harvesting and water reuse."
          },
          {
            "hi": "जल आपूर्ति से संबंधित नागरिक शिकायतों के समाधान के लिए सहायता।",
            "en": "Support for citizens facing water-supply-related problems."
          }
        ]
      },
      {
        "icon": "🚰",
        "title": {
          "hi": "नल जल कनेक्शन के लिए क्या करें?",
          "en": "How to Get a Tap Water Connection?"
        },
        "steps": [
          {
            "hi": "अपने घर के जल कनेक्शन की पात्रता एवं उपलब्धता की जानकारी प्राप्त करें।",
            "en": "Check the availability and eligibility for a household water connection."
          },
          {
            "hi": "आवश्यक दस्तावेजों के साथ संबंधित नगर परिषद कार्यालय से संपर्क करें।",
            "en": "Contact the concerned Nagar Parishad office with the required documents."
          },
          {
            "hi": "यदि ऑनलाइन आवेदन सुविधा उपलब्ध है तो संबंधित आधिकारिक पोर्टल के माध्यम से आवेदन करें।",
            "en": "Where online application is available, use the concerned official portal."
          },
          {
            "hi": "आवेदन के बाद संबंधित विभाग द्वारा दस्तावेज एवं कनेक्शन की जानकारी का सत्यापन किया जा सकता है।",
            "en": "The concerned department may verify the submitted details and documents."
          },
          {
            "hi": "स्वीकृति के बाद निर्धारित प्रक्रिया एवं शुल्क के अनुसार जल कनेक्शन प्रदान किया जा सकता है।",
            "en": "After approval, the connection may be provided according to the applicable process and prescribed charges."
          }
        ]
      },
      {
        "icon": "📄",
        "title": {
          "hi": "जल कनेक्शन के लिए संभावित दस्तावेज",
          "en": "Possible Documents for Water Connection"
        },
        "points": [
          {
            "hi": "आधार कार्ड या अन्य पहचान प्रमाण",
            "en": "Aadhaar Card or other identity proof"
          },
          {
            "hi": "पते का प्रमाण",
            "en": "Address proof"
          },
          {
            "hi": "मोबाइल नंबर",
            "en": "Mobile number"
          },
          {
            "hi": "बैंक खाता विवरण, जहां आवश्यक हो",
            "en": "Bank account details, where required"
          },
          {
            "hi": "मकान / संपत्ति से संबंधित दस्तावेज, जहां आवश्यक हो",
            "en": "House / property-related documents, where required"
          },
          {
            "hi": "नगर परिषद या संबंधित विभाग द्वारा मांगे गए अन्य दस्तावेज",
            "en": "Any other documents requested by the Nagar Parishad or concerned department"
          }
        ]
      },
      {
        "icon": "🧹",
        "title": {
          "hi": "स्वच्छ नगर परिषद योजना",
          "en": "Clean Nagar Parishad Scheme"
        },
        "content": {
          "hi": "स्वच्छ नगर परिषद का उद्देश्य स्वच्छ और स्वस्थ शहरी वातावरण को बढ़ावा देना है। इसके अंतर्गत घर-घर कचरा संग्रहण, कचरे का पृथक्करण, सड़क एवं नाली की सफाई, सार्वजनिक स्थानों की स्वच्छता और वैज्ञानिक कचरा प्रबंधन जैसी गतिविधियों को मजबूत किया जा सकता है।",
          "en": "The Clean Nagar Parishad initiative focuses on creating a cleaner and healthier urban environment. Activities may include door-to-door waste collection, source segregation, road and drain cleaning, cleanliness of public places and scientific waste management."
        },
        "points": [
          {
            "hi": "घर-घर कचरा संग्रहण व्यवस्था को मजबूत करना।",
            "en": "Strengthening door-to-door waste collection."
          },
          {
            "hi": "गीले और सूखे कचरे को अलग-अलग रखने के लिए नागरिकों को प्रोत्साहित करना।",
            "en": "Encouraging citizens to keep wet and dry waste separately."
          },
          {
            "hi": "कचरे के स्रोत पर ही पृथक्करण को बढ़ावा देना।",
            "en": "Promoting segregation of waste at source."
          },
          {
            "hi": "कचरे के वैज्ञानिक प्रसंस्करण एवं पुनर्चक्रण को बढ़ावा देना।",
            "en": "Promoting scientific processing and recycling of waste."
          },
          {
            "hi": "सड़कों, नालियों और सार्वजनिक स्थानों की नियमित सफाई।",
            "en": "Regular cleaning of roads, drains and public places."
          },
          {
            "hi": "जलभराव एवं नाली जाम की समस्या को कम करने के लिए सफाई व्यवस्था मजबूत करना।",
            "en": "Improving cleaning systems to reduce waterlogging and blocked drains."
          },
          {
            "hi": "सिंगल-यूज प्लास्टिक के उपयोग को कम करने के लिए जागरूकता।",
            "en": "Creating awareness to reduce the use of single-use plastic."
          },
          {
            "hi": "स्वच्छता के प्रति नागरिक भागीदारी और जन-जागरूकता अभियान।",
            "en": "Promoting citizen participation and cleanliness awareness campaigns."
          }
        ]
      },
      {
        "icon": "♻️",
        "title": {
          "hi": "गीला एवं सूखा कचरा प्रबंधन",
          "en": "Wet & Dry Waste Management"
        },
        "points": [
          {
            "hi": "गीला कचरा – भोजन, सब्जियों और अन्य जैविक कचरे को अलग रखें।",
            "en": "Wet waste – Keep food, vegetable and other biodegradable waste separate."
          },
          {
            "hi": "सूखा कचरा – कागज, प्लास्टिक, धातु और अन्य पुनर्चक्रण योग्य सामग्री को अलग रखें।",
            "en": "Dry waste – Keep paper, plastic, metal and other recyclable materials separate."
          },
          {
            "hi": "हानिकारक / घरेलू खतरनाक कचरे को सामान्य कचरे से अलग रखें।",
            "en": "Keep household hazardous waste separate from regular waste."
          },
          {
            "hi": "कचरा सड़क, नाली या खुले स्थान पर न फेंकें।",
            "en": "Do not throw waste on roads, drains or open spaces."
          },
          {
            "hi": "कचरा संग्रहण वाहन को निर्धारित समय पर कचरा दें।",
            "en": "Hand over waste to the collection vehicle at the designated time."
          },
          {
            "hi": "पुनर्चक्रण योग्य सामग्री को अधिकृत संग्रहण / रिसाइक्लिंग व्यवस्था से जोड़ने में सहयोग करें।",
            "en": "Support authorized collection and recycling systems for recyclable materials."
          }
        ]
      },
      {
        "icon": "🚽",
        "title": {
          "hi": "स्वच्छता एवं सार्वजनिक सुविधाएं",
          "en": "Sanitation & Public Facilities"
        },
        "points": [
          {
            "hi": "सार्वजनिक एवं सामुदायिक शौचालयों की स्वच्छता और रखरखाव को बढ़ावा देना।",
            "en": "Promoting cleanliness and maintenance of public and community toilets."
          },
          {
            "hi": "खुले में शौच की समस्या को समाप्त करने के लिए जागरूकता।",
            "en": "Creating awareness to eliminate open defecation."
          },
          {
            "hi": "सार्वजनिक स्थानों पर स्वच्छता सुविधाओं को बेहतर बनाना।",
            "en": "Improving sanitation facilities in public places."
          },
          {
            "hi": "सीवेज एवं गंदे पानी के सुरक्षित प्रबंधन को बढ़ावा देना।",
            "en": "Promoting safe management of sewage and wastewater."
          },
          {
            "hi": "स्वच्छता कर्मचारियों के सुरक्षित एवं सम्मानजनक कार्य वातावरण पर ध्यान।",
            "en": "Supporting a safe and dignified working environment for sanitation workers."
          },
          {
            "hi": "स्वच्छता संबंधी नागरिक शिकायतों के समाधान के लिए व्यवस्था मजबूत करना।",
            "en": "Strengthening systems for resolving sanitation-related citizen complaints."
          }
        ]
      },
      {
        "icon": "🌱",
        "title": {
          "hi": "जल संरक्षण एवं पर्यावरण",
          "en": "Water Conservation & Environment"
        },
        "points": [
          {
            "hi": "वर्षा जल संचयन को बढ़ावा देना।",
            "en": "Promoting rainwater harvesting."
          },
          {
            "hi": "पानी की बर्बादी को कम करने के लिए नागरिक जागरूकता।",
            "en": "Creating awareness to reduce water wastage."
          },
          {
            "hi": "जल स्रोतों को प्रदूषण से बचाने के लिए जागरूकता।",
            "en": "Protecting water sources from pollution."
          },
          {
            "hi": "ग्रे वाटर के उचित प्रबंधन और पुन: उपयोग को प्रोत्साहित करना।",
            "en": "Encouraging proper management and reuse of grey water."
          },
          {
            "hi": "हरित क्षेत्र एवं स्वच्छ सार्वजनिक स्थानों को बढ़ावा देना।",
            "en": "Promoting green areas and clean public spaces."
          }
        ]
      },
      {
        "icon": "📝",
        "title": {
          "hi": "नागरिक शिकायत कैसे दर्ज करें?",
          "en": "How to Register a Citizen Complaint?"
        },
        "steps": [
          {
            "hi": "जल आपूर्ति या स्वच्छता से संबंधित समस्या की जानकारी तैयार करें।",
            "en": "Prepare the details of your water or sanitation-related problem."
          },
          {
            "hi": "समस्या का स्थान, वार्ड और संपर्क विवरण उपलब्ध कराएं।",
            "en": "Provide the location, ward number and contact details."
          },
          {
            "hi": "नगर परिषद के उपलब्ध शिकायत माध्यम / कार्यालय में शिकायत दर्ज करें।",
            "en": "Register the complaint through the available Nagar Parishad office or complaint mechanism."
          },
          {
            "hi": "यदि ऑनलाइन शिकायत सुविधा उपलब्ध है तो आधिकारिक पोर्टल का उपयोग करें।",
            "en": "If an online complaint facility is available, use the official portal."
          },
          {
            "hi": "शिकायत संख्या / संदर्भ संख्या उपलब्ध होने पर उसे सुरक्षित रखें।",
            "en": "Keep the complaint/reference number safely, if provided."
          },
          {
            "hi": "समस्या के समाधान की स्थिति के लिए संबंधित कार्यालय से संपर्क करें।",
            "en": "Contact the concerned office to check the status of the complaint."
          }
        ]
      },
      {
        "icon": "📍",
        "title": {
          "hi": "कहां संपर्क करें?",
          "en": "Where to Contact?"
        },
        "points": [
          {
            "hi": "जल आपूर्ति से संबंधित समस्या के लिए संबंधित नगर परिषद / जल आपूर्ति विभाग से संपर्क करें।",
            "en": "For water-supply issues, contact the concerned Nagar Parishad / water-supply department."
          },
          {
            "hi": "कचरा संग्रहण, सड़क या नाली की सफाई के लिए नगर परिषद कार्यालय या संबंधित वार्ड स्तर के माध्यम से शिकायत करें।",
            "en": "For waste collection, road or drain-cleaning issues, contact the Nagar Parishad office or the relevant ward-level mechanism."
          },
          {
            "hi": "सार्वजनिक शौचालय एवं स्वच्छता संबंधी समस्या के लिए नगर परिषद कार्यालय से संपर्क करें।",
            "en": "For public toilet and sanitation issues, contact the Nagar Parishad office."
          },
          {
            "hi": "आपात स्थिति में स्थानीय प्रशासन द्वारा उपलब्ध आधिकारिक संपर्क माध्यम का उपयोग करें।",
            "en": "For emergencies, use the official contact channels provided by the local administration."
          }
        ]
      }
    ],
    "help": {
      "label": {
        "hi": "सहायता एवं शिकायत",
        "en": "Help & Complaints"
      },
      "title": {
        "hi": "जल या स्वच्छता से संबंधित समस्या है?",
        "en": "Have a Water or Sanitation Issue?"
      },
      "text": {
        "hi": "अपनी समस्या के समाधान के लिए संबंधित नगर परिषद कार्यालय या उपलब्ध आधिकारिक शिकायत माध्यम से संपर्क करें।",
        "en": "Contact the concerned Nagar Parishad office or the available official complaint mechanism for assistance with your issue."
      },
      "link": {
        "href": "/#contact",
        "label": {
          "hi": "शिकायत दर्ज करें →",
          "en": "Register Complaint →"
        }
      }
    }
  },
  {
    "slug": "clean-city",
    "icon": "🌱",
    "title": {
      "hi": "स्वच्छ शहर पहल",
      "en": "Clean City Initiative"
    },
    "desc": {
      "hi": "नगर परिषद की स्वच्छता और पर्यावरण संबंधी पहल।",
      "en": "Cleanliness and environment initiatives of the Nagar Parishad."
    },
    "badge": {
      "hi": "स्वच्छता, स्वच्छ ऊर्जा और पर्यावरण संरक्षण की दिशा में एक कदम",
      "en": "A step towards cleanliness, clean energy and environmental protection"
    },
    "heading": {
      "hi": "स्वच्छ एवं हरित नगर परिषद योजना",
      "en": "Clean & Green Nagar Parishad Scheme"
    },
    "intro": {
      "hi": "त्रिवेणीगंज नगर परिषद का उद्देश्य स्वच्छ, सुंदर, स्वस्थ और पर्यावरण के अनुकूल नगर का निर्माण करना है। इस दिशा में स्वच्छता व्यवस्था, कचरा प्रबंधन, हरित क्षेत्र के विकास तथा घरों में सौर ऊर्जा को बढ़ावा देने जैसे प्रयास महत्वपूर्ण हैं।",
      "en": "Triveniganj Nagar Parishad aims to develop a clean, beautiful, healthy and environmentally friendly town. Important areas include sanitation, waste management, development of green spaces and promotion of solar energy for households."
    },
    "galleryTitle": {
      "hi": "स्वच्छ एवं हरित त्रिवेणीगंज",
      "en": "Clean & Green Triveniganj"
    },
    "images": [
      {
        "src": "https://picsum.photos/seed/triveniganj-harit1/1200/800",
        "title": {
          "hi": "सौर ऊर्जा",
          "en": "Solar Energy"
        }
      },
      {
        "src": "https://picsum.photos/seed/triveniganj-harit2/1200/800",
        "title": {
          "hi": "हरित क्षेत्र",
          "en": "Green Spaces"
        }
      },
      {
        "src": "https://picsum.photos/seed/triveniganj-harit3/1200/800",
        "title": {
          "hi": "नगर परिषद कार्यालय",
          "en": "Nagar Parishad Office"
        }
      },
      {
        "src": "https://picsum.photos/seed/triveniganj-harit4/1200/800",
        "title": {
          "hi": "जल संरक्षण",
          "en": "Water Conservation"
        }
      }
    ],
    "highlightsTitle": {
      "hi": "योजना की मुख्य बातें",
      "en": "Key Highlights"
    },
    "highlights": [
      {
        "icon": "☀️",
        "title": {
          "hi": "सौर ऊर्जा",
          "en": "Solar Energy"
        },
        "text": {
          "hi": "घरों की छत पर रूफटॉप सोलर लगाने को बढ़ावा",
          "en": "Promoting rooftop solar systems for residential households"
        }
      },
      {
        "icon": "💡",
        "title": {
          "hi": "बिजली की बचत",
          "en": "Energy Saving"
        },
        "text": {
          "hi": "सौर ऊर्जा से घरेलू बिजली खर्च को कम करने में सहायता",
          "en": "Solar power can help reduce household electricity expenses"
        }
      },
      {
        "icon": "🌱",
        "title": {
          "hi": "स्वच्छ पर्यावरण",
          "en": "Clean Environment"
        },
        "text": {
          "hi": "स्वच्छ ऊर्जा के उपयोग से पर्यावरण संरक्षण को बढ़ावा",
          "en": "Encouraging renewable and cleaner sources of energy"
        }
      },
      {
        "icon": "🏠",
        "title": {
          "hi": "हर घर की भागीदारी",
          "en": "Every Household"
        },
        "text": {
          "hi": "घरेलू परिवारों को सौर ऊर्जा से जोड़ने का प्रयास",
          "en": "Encouraging households to participate in clean-energy adoption"
        }
      }
    ],
    "infoTitle": {
      "hi": "योजना की पूरी जानकारी",
      "en": "Complete Scheme Information"
    },
    "sections": [
      {
        "icon": "🔆",
        "title": {
          "hi": "हर घर सोलर योजना – पीएम सूर्य घर: मुफ्त बिजली योजना",
          "en": "Har Ghar Solar – PM Surya Ghar: Muft Bijli Yojana"
        },
        "content": {
          "hi": "प्रधानमंत्री सूर्य घर: मुफ्त बिजली योजना भारत सरकार की एक प्रमुख रूफटॉप सोलर योजना है। इसका उद्देश्य घरों की छतों पर सोलर पैनल लगाकर परिवारों को स्वच्छ ऊर्जा उपलब्ध कराना और बिजली के खर्च को कम करने में सहायता करना है। पात्र घरेलू उपभोक्ता अपने घर की छत पर रूफटॉप सोलर सिस्टम स्थापित कर योजना के अंतर्गत केंद्रीय वित्तीय सहायता प्राप्त कर सकते हैं।",
          "en": "PM Surya Ghar: Muft Bijli Yojana is a Government of India rooftop solar programme for residential households. The scheme aims to encourage rooftop solar installation and help households meet a part of their electricity requirements through clean solar energy. Eligible residential consumers can install rooftop solar systems and receive Central Financial Assistance as per the applicable scheme rules."
        }
      },
      {
        "icon": "☀️",
        "title": {
          "hi": "योजना क्या है?",
          "en": "What is the Scheme?"
        },
        "points": [
          {
            "hi": "पीएम सूर्य घर: मुफ्त बिजली योजना का उद्देश्य देश के घरेलू बिजली उपभोक्ताओं को रूफटॉप सोलर से जोड़ना है।",
            "en": "PM Surya Ghar: Muft Bijli Yojana aims to connect residential electricity consumers with rooftop solar systems."
          },
          {
            "hi": "योजना के अंतर्गत पात्र परिवार अपने घर की छत पर सोलर पैनल स्थापित करा सकते हैं।",
            "en": "Eligible households can install rooftop solar systems on suitable residential premises."
          },
          {
            "hi": "सोलर सिस्टम से उत्पादित बिजली का उपयोग घर में किया जा सकता है।",
            "en": "Electricity generated by the solar system can be used for household requirements."
          },
          {
            "hi": "अतिरिक्त बिजली को लागू नियमों के अनुसार ग्रिड में भेजने की व्यवस्था हो सकती है।",
            "en": "Subject to applicable regulations, surplus electricity may be supplied to the grid."
          },
          {
            "hi": "योजना का उद्देश्य स्वच्छ ऊर्जा को बढ़ावा देना और परिवारों के बिजली खर्च में सहायता करना है।",
            "en": "The programme promotes clean energy and can help households reduce their electricity expenditure."
          }
        ]
      },
      {
        "icon": "💡",
        "title": {
          "hi": "योजना के प्रमुख लाभ",
          "en": "Key Benefits"
        },
        "points": [
          {
            "hi": "घरेलू बिजली की आवश्यकता का एक हिस्सा सौर ऊर्जा से पूरा किया जा सकता है।",
            "en": "A portion of household electricity requirements can be met through solar energy."
          },
          {
            "hi": "बिजली के मासिक खर्च को कम करने में सहायता मिल सकती है।",
            "en": "Rooftop solar can help reduce electricity expenditure."
          },
          {
            "hi": "स्वच्छ और नवीकरणीय ऊर्जा को बढ़ावा मिलता है।",
            "en": "It promotes renewable and cleaner energy."
          },
          {
            "hi": "घरों में रूफटॉप सोलर अपनाने को प्रोत्साहन मिलता है।",
            "en": "It encourages wider adoption of rooftop solar among households."
          },
          {
            "hi": "दीर्घकाल में ऊर्जा की बचत और पर्यावरण संरक्षण में योगदान किया जा सकता है।",
            "en": "It can contribute to long-term energy savings and environmental protection."
          }
        ]
      },
      {
        "icon": "👥",
        "title": {
          "hi": "कौन लाभ ले सकता है?",
          "en": "Who Can Benefit?"
        },
        "points": [
          {
            "hi": "यह योजना मुख्य रूप से घरेलू बिजली उपभोक्ताओं के लिए है।",
            "en": "The scheme is primarily intended for residential electricity consumers."
          },
          {
            "hi": "आवेदक के पास संबंधित घरेलू बिजली कनेक्शन होना आवश्यक है।",
            "en": "The applicant should have a relevant residential electricity connection."
          },
          {
            "hi": "रूफटॉप सोलर लगाने के लिए उपयुक्त छत या स्थान उपलब्ध होना चाहिए।",
            "en": "A suitable rooftop or location should be available for installing the solar system."
          },
          {
            "hi": "योजना के लिए आवेदन और स्थापना निर्धारित सरकारी प्रक्रिया के अनुसार करनी होती है।",
            "en": "Application and installation must follow the prescribed government process."
          },
          {
            "hi": "सब्सिडी/केंद्रीय वित्तीय सहायता की पात्रता लागू सरकारी नियमों और सिस्टम क्षमता पर निर्भर करती है।",
            "en": "Eligibility for Central Financial Assistance depends on applicable government rules and the installed system capacity."
          }
        ]
      },
      {
        "icon": "🛠️",
        "title": {
          "hi": "रूफटॉप सोलर कैसे लगाएं?",
          "en": "How to Install Rooftop Solar?"
        },
        "points": [
          {
            "hi": "सबसे पहले आधिकारिक PM Surya Ghar पोर्टल पर योजना की जानकारी देखें।",
            "en": "First, check the official PM Surya Ghar portal for scheme information."
          },
          {
            "hi": "अपने बिजली कनेक्शन से संबंधित आवश्यक जानकारी के साथ आवेदन करें।",
            "en": "Apply using the required information related to your electricity connection."
          },
          {
            "hi": "पोर्टल पर उपलब्ध पंजीकृत/उपलब्ध विक्रेता से रूफटॉप सोलर सिस्टम का चयन करें।",
            "en": "Select an available registered vendor through the prescribed process."
          },
          {
            "hi": "स्थापना के बाद आवश्यक निरीक्षण, मीटरिंग और अन्य निर्धारित प्रक्रिया पूरी करें।",
            "en": "After installation, complete the required inspection, metering and other formalities."
          },
          {
            "hi": "पात्रता पूरी होने पर निर्धारित प्रक्रिया के अनुसार केंद्रीय वित्तीय सहायता प्राप्त की जा सकती है।",
            "en": "If eligible, Central Financial Assistance may be provided as per the applicable process."
          }
        ]
      },
      {
        "icon": "📄",
        "title": {
          "hi": "आवश्यक दस्तावेज",
          "en": "Required Documents"
        },
        "points": [
          {
            "hi": "बिजली कनेक्शन से संबंधित विवरण",
            "en": "Electricity connection details"
          },
          {
            "hi": "आवेदक का पहचान प्रमाण",
            "en": "Identity proof of the applicant"
          },
          {
            "hi": "मोबाइल नंबर",
            "en": "Mobile number"
          },
          {
            "hi": "बैंक खाते से संबंधित विवरण",
            "en": "Bank account details"
          },
          {
            "hi": "आवश्यक होने पर संपत्ति/छत से संबंधित दस्तावेज",
            "en": "Property/rooftop-related documents, where required"
          },
          {
            "hi": "अन्य दस्तावेज जो आवेदन प्रक्रिया में मांगे जाएं",
            "en": "Any other documents requested during the application process"
          }
        ]
      },
      {
        "icon": "🧹",
        "title": {
          "hi": "स्वच्छ नगर परिषद अभियान",
          "en": "Clean Nagar Parishad Campaign"
        },
        "content": {
          "hi": "स्वच्छ नगर परिषद का लक्ष्य केवल सड़कों की सफाई तक सीमित नहीं है। इसमें घर-घर कचरा संग्रहण, गीले और सूखे कचरे का अलगाव, कचरे का वैज्ञानिक प्रबंधन, सार्वजनिक स्थानों की स्वच्छता और नागरिकों की भागीदारी शामिल है।",
          "en": "A clean Nagar Parishad is not limited to road cleaning. It includes door-to-door waste collection, segregation of wet and dry waste, scientific waste management, cleanliness of public places and active participation by citizens."
        },
        "points": [
          {
            "hi": "घर-घर कचरा संग्रहण व्यवस्था को मजबूत करना",
            "en": "Strengthening door-to-door waste collection"
          },
          {
            "hi": "गीले और सूखे कचरे को अलग-अलग रखना",
            "en": "Keeping wet and dry waste separate"
          },
          {
            "hi": "कचरे को खुले में फेंकने से रोकना",
            "en": "Preventing open dumping of waste"
          },
          {
            "hi": "सार्वजनिक स्थानों, बाजारों और सड़कों की नियमित सफाई",
            "en": "Regular cleaning of roads, markets and public places"
          },
          {
            "hi": "कचरे के पुनर्चक्रण और वैज्ञानिक प्रसंस्करण को बढ़ावा देना",
            "en": "Promoting recycling and scientific waste processing"
          },
          {
            "hi": "प्लास्टिक कचरे के उपयोग को कम करना",
            "en": "Reducing the use of unnecessary plastic"
          },
          {
            "hi": "नालियों और जल निकासी व्यवस्था को साफ रखना",
            "en": "Keeping drains and drainage systems clean"
          },
          {
            "hi": "स्वच्छता के प्रति नागरिकों में जागरूकता बढ़ाना",
            "en": "Creating awareness among citizens about sanitation"
          }
        ]
      },
      {
        "icon": "🌱",
        "title": {
          "hi": "हरित एवं स्वच्छ ऊर्जा",
          "en": "Green City & Clean Energy"
        },
        "points": [
          {
            "hi": "घरों में रूफटॉप सोलर ऊर्जा को बढ़ावा देना",
            "en": "Promoting rooftop solar energy for households"
          },
          {
            "hi": "सरकारी एवं सार्वजनिक भवनों में ऊर्जा बचत के उपाय अपनाना",
            "en": "Encouraging energy-saving measures in public and government buildings"
          },
          {
            "hi": "LED एवं ऊर्जा-कुशल प्रकाश व्यवस्था को प्रोत्साहित करना",
            "en": "Promoting LED and energy-efficient lighting"
          },
          {
            "hi": "पेड़-पौधों और हरित क्षेत्रों का विकास",
            "en": "Developing trees and green spaces"
          },
          {
            "hi": "जल संरक्षण एवं वर्षा जल संचयन को बढ़ावा देना",
            "en": "Promoting water conservation and rainwater harvesting"
          },
          {
            "hi": "स्वच्छ ऊर्जा और पर्यावरण संरक्षण के प्रति नागरिकों को जागरूक करना",
            "en": "Creating awareness about clean energy and environmental protection"
          }
        ]
      },
      {
        "icon": "🤝",
        "title": {
          "hi": "नागरिकों की भूमिका",
          "en": "Role of Citizens"
        },
        "points": [
          {
            "hi": "घर से ही गीला और सूखा कचरा अलग रखें।",
            "en": "Separate wet and dry waste at source."
          },
          {
            "hi": "कचरा केवल निर्धारित स्थान या संग्रहण वाहन को दें।",
            "en": "Hand over waste only to the designated collection system."
          },
          {
            "hi": "सार्वजनिक स्थानों पर कचरा न फेंकें।",
            "en": "Do not throw waste in public places."
          },
          {
            "hi": "पानी और बिजली की अनावश्यक बर्बादी से बचें।",
            "en": "Avoid unnecessary wastage of water and electricity."
          },
          {
            "hi": "जहां संभव हो, रूफटॉप सोलर और ऊर्जा-कुशल उपकरणों का उपयोग करें।",
            "en": "Where feasible, use rooftop solar and energy-efficient appliances."
          },
          {
            "hi": "नगर परिषद की स्वच्छता एवं पर्यावरण संबंधी गतिविधियों में सहयोग करें।",
            "en": "Participate in Nagar Parishad cleanliness and environmental initiatives."
          },
          {
            "hi": "स्वच्छता से जुड़ी समस्या होने पर नगर परिषद को सूचना दें।",
            "en": "Report sanitation-related problems to the Nagar Parishad."
          }
        ]
      }
    ],
    "note": {
      "title": {
        "hi": "महत्वपूर्ण सूचना",
        "en": "Important Information"
      },
      "text": {
        "hi": "योजना की पात्रता, सब्सिडी की राशि, सोलर सिस्टम की क्षमता, आवेदन प्रक्रिया और अन्य नियम समय-समय पर भारत सरकार एवं संबंधित विभाग द्वारा निर्धारित/संशोधित किए जा सकते हैं। आवेदन करने से पहले आधिकारिक जानकारी अवश्य जांचें।",
        "en": "Eligibility, subsidy amount, solar-system capacity, application procedure and other scheme rules may be updated by the Government of India and concerned departments from time to time. Please verify the latest official information before applying."
      }
    },
    "help": {
      "label": {
        "hi": "सहायता एवं संपर्क",
        "en": "Help & Contact"
      },
      "title": {
        "hi": "योजना एवं सहायता के लिए",
        "en": "For Scheme & Assistance"
      },
      "text": {
        "hi": "रूफटॉप सोलर योजना के आवेदन, सब्सिडी, बिजली कनेक्शन, विक्रेता, मीटरिंग या अन्य तकनीकी विषयों के लिए संबंधित आधिकारिक पोर्टल एवं बिजली वितरण कंपनी के निर्देशों का पालन करें। नगर परिषद से संबंधित स्थानीय स्वच्छता एवं नागरिक सेवाओं के लिए त्रिवेणीगंज नगर परिषद कार्यालय से संपर्क करें।",
        "en": "For rooftop solar applications, subsidy, electricity connection, vendors, metering or technical matters, citizens should follow the instructions of the official scheme portal and the concerned electricity distribution company. For local sanitation and civic services, citizens may contact Triveniganj Nagar Parishad office."
      },
      "link": {
        "href": "https://pmsuryaghar.gov.in/",
        "label": {
          "hi": "पीएम सूर्य घर पोर्टल ↗",
          "en": "PM Surya Ghar Portal ↗"
        },
        "external": true
      }
    }
  }
];
