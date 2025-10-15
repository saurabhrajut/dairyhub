
export const etpModalContent = {
    hi: {
        title: "Effluent Treatment Plant (ETP)",
        description: "Dairy industry mein wastewater treatment ke liye ek comprehensive guide.",
        tabs: {
            intro: "Introduction",
            processes: "Treatment Processes",
            benefits: "Benefits",
            factors: "Key Factors",
            challenges: "Challenges",
            future: "Future Outlook"
        },
        sections: {
            executive_summary: {
                title: "Executive Summary",
                content: "<p>Dairy industry, global food production ka ek cornerstone, high organic loads, fluctuating pH, aur fats, oils, grease (FOG) aur nutrients ki significant concentrations ki characteristics wala wastewater ki substantial volumes generate karta hai. Is wastewater ka effective management keval ek regulatory obligation nahi hai, balki environmental protection, resource stewardship aur long-term economic viability ke liye ek strategic imperative hai. Effluent Treatment Plants (ETPs) is industrial wastewater ko purify karne ke liye meticulously engineered systems hain, jo iske safe discharge ya beneficial reuse ko enable karte hain. Yeh report dairy sector ke andar ETPs ki ek comprehensive examination provide karti hai, jisme unki fundamental concepts, isme involved multi-stage processes, unke dwara provide kiye jane wale multifaceted environmental, economic aur operational advantages, aur unke design, performance aur regulatory compliance ko influence karne wale critical factors ka detail hai. Iske alava, yeh emerging technologies ke landscape aur dairy industry ko adhik sustainable aur circular future ki taraf lead karne ki unki potential ki exploration karta hai, jo waste ko renewable energy aur agricultural fertilizers jaise valuable resources mein transform kar deta hai.</p>"
            },
            introduction: {
                title: "Dairy Wastewater Treatment ka Introduction",
                content: `<p>Effluent Treatment Plant (ETP) ek meticulously designed process system ka representation karta hai jo industrial wastewater ke treatment ke liye engineer ki jati hai. Is untreated industrial wastewater ko aksar treatment system mein entry karne par "influent" ke roop mein refer kiya jata hai. ETP ka primary objective is influent ko ek aise standard tak purify karna hai jo environment mein safe aur compliant discharge ke liye ya industrial operations ke andar beneficial reuse ke liye suitable ho, jisse ek adhik circular economy ko promote milta hai.</p>`,
                subsections: {
                    characteristics: {
                        title: "Dairy Industry Wastewater ki Characteristics",
                        content: `<p>Dairy industry ka wastewater apni distinct characteristics ke karan treatment ke liye ek unique aur complex challenge present karta hai. Yeh typically white color ka hota hai, isme ek unpleasant odor hoti hai, aur isme high pollutant load hota hai. Is load mein Chemical Oxygen Demand (COD), Biological Oxygen Demand (BOD), aur Total Suspended Solids (TSS) ki significant concentrations shamil hai.</p>`,
                        table: {
                            header1: "Parameter (mg/l)",
                            header2: "Butter Products",
                            header3: "Cream Products",
                            header4: "Milk Products",
                            header5: "Cheese Products",
                            header6: "Powdered Products",
                            rows: [
                                { param: "BOD", butter: "200-2500", cream: "2500", milk: "500-1300", cheese: "500-5000", powdered: "1500" },
                                { param: "TSS", butter: "700-5000", cream: "3000", milk: "100-450", cheese: "-", powdered: "100-3000" },
                                { param: "FOG", butter: "-", cream: "-", milk: "-", cheese: "350-2750", powdered: "-" },
                                { param: "COD", butter: "-", cream: "-", milk: "1000-2500", cheese: "-", powdered: "3000" },
                                { param: "TN", butter: "-", cream: "-", milk: "-", cheese: "-", powdered: "250" },
                                { param: "TP", butter: "-", cream: "-", milk: "-", cheese: "-", powdered: "20" }
                            ]
                        }
                    }
                }
            },
            treatment_processes: {
                title: "Dairy Wastewater Treatment Processes ke Stages",
                content: `<p>Dairy industry mein wastewater treatment mein typically sequential stages ki ek series shamil hoti hai, har ek ko specific types ke pollutants ko remove karne ke liye design kiya gaya hai, jo gradually influent ko discharge ya reuse standards ko meet karne ke liye purify karta hai.</p>`,
                subsections: {
                    preliminary: {
                        title: "Preliminary Treatment",
                        content: `<p>Preliminary treatment wastewater purification ka initial stage hai, jo primarily large-sized impurities ke physical separation par focused hai. In impurities mein cloth, plastics, wood logs aur paper jaisi materials shamil ho sakti hai.</p>`
                    },
                    primary: {
                        title: "Primary Treatment",
                        content: `<p>Primary treatment floating aur settleable materials ko remove karne par focused hai, jisme suspended solids aur organic matter ka ek significant portion shamil hai, jo preliminary treatment ke during nahi capture hue the.</p>`
                    },
                    secondary: {
                        title: "Secondary Treatment (Biological Treatment)",
                        content: `<p>Secondary treatment wastewater treatment mein organic matter degradation ka core hai. Yeh stage primarily biological processes ka use karta hai jahan various microorganisms organic pollutants ko consume aur break down karte hain, effectively wastewater ko clean karte hue.</p>`
                    },
                    tertiary: {
                        title: "Tertiary/Advanced Treatment",
                        content: `<p>Tertiary, ya advanced, treatment wastewater purification ka final aur sabse rigorous stage hai, jise secondary treatment standards se beyond effluent quality mein aur improve karne ke liye design kiya gaya hai. Iska primary goal remaining inorganic compounds, recalcitrant substances (jaise nitrogen aur phosphorus jo fully biologically remove nahi hue the), aur harmful microorganisms (bacteria, viruses aur parasites) ko remove karna hai.</p>`
                    }
                }
            },
            benefits: {
                title: "Dairy Wastewater Treatment ke Benefits",
                content: `<p>Dairy industry mein effective wastewater treatment ko implement karne se kai benefits milte hain, jo keval compliance se beyond significant environmental, economic aur operational advantages ko encompass karte hain.</p>`,
                subsections: {
                    environmental: {
                        title: "Environmental Benefits",
                        content: `<p>Dairy wastewater ka proper treatment aquatic ecosystems aur public health ki protection ke liye paramount hai. Untreated effluent, jo high organic matter loads, chemicals aur excess nutrients se laden hota hai, oxygen levels ko deplete karke aquatic life ko severely harm kar sakta hai aur in water sources par relying human populations ke liye significant health risks pose kar sakta hai.</p>`
                    },
                    economic: {
                        title: "Economic Benefits",
                        content: `<p>Dairy wastewater ke treatment ke economic advantages compelling hain aur keval costs se avoid karne se beyond extend hote hain. On-site wastewater treatment ko implement karne se waste disposal aur fresh water ki procurement se associated costs ko reduce karke substantial operational savings ho sakti hai.</p>`
                    },
                    operational: {
                        title: "Operational Benefits",
                        content: `<p>Effective wastewater treatment ek enhanced brand reputation aur competitive edge mein significantly contribute karta hai. Ek robust ETP ek company ki sustainability strategy ki cornerstone ke roop mein serve karta hai.</p>`
                    }
                }
            },
            key_factors: {
                title: "ETP Design, Operation aur Effectiveness ko Influence karne wale Key Factors",
                content: `<p>Dairy industry mein ek Effluent Treatment Plant ke successful design, operation aur overall effectiveness ko factors ke ek complex interplay se influence kiya jata hai, jo wastewater ke intrinsic properties se lekar external regulatory aur economic pressures tak hota hai.</p>`,
                subsections: {
                    characteristics: {
                        title: "Wastewater Characteristics aur Variability",
                        content: `<p>Dairy wastewater ki inherent characteristics aur variability ETP design aur operation par profound influence exert karti hai.</p>`
                    },
                    compliance: {
                        title: "Regulatory Compliance aur Standards",
                        content: `<p>Legal requirements aur regulatory pressures ek treatment system ke selection aur configuration ko influence karne wale sabse critical factors ke roop mein emerge hote hain.</p>`,
                        table: {
                            header1: "Parameter",
                            header2: "Standard Limit (mg/l, unless specified)",
                            rows: [
                                { param: "pH", limit: "6.5 – 8.5" },
                                { param: "BOD", limit: "100" },
                                { param: "Suspended Solids", limit: "150" },
                                { param: "Oil and Grease", limit: "10" }
                            ]
                        }
                    },
                    technology: {
                        title: "Technological Selection aur Suitability",
                        content: `<p>Appropriate technology ka selection ek pivotal factor hai. Har industry ke wastewater ki unique characteristics ke karan sabse suitable treatment technology develop karna ek significant challenge hai.</p>`
                    }
                }
            },
            challenges: {
                title: "Dairy Wastewater Treatment mein Challenges",
                content: `<p>Dairy industry ko apne wastewater ke efficient aur affordable treatment mein kai distinct challenges ka face karna padta hai, jo primarily iske effluent ki unique composition aur fluctuating nature se stem hoti hain.</p>`
            },
            future_outlook: {
                title: "Emerging Technologies aur Future Outlook",
                content: `<p>Wastewater treatment ka evolving landscape continuous innovation dwara marked hai, jo increasingly stringent environmental regulations aur resource recovery aur circular economy principles par growing emphasis se driven hai.</p>`,
                subsections: {
                    innovations: {
                        title: "Innovations",
                        content: `<p>Kai emerging technologies dairy wastewater management ki sustainability ko enhance karne ke liye significant promise hold karti hain.</p>`
                    },
                    conclusion: {
                        title: "Conclusion",
                        content: `<p>Dairy wastewater treatment ka future integrated, resource-efficient systems ki taraf ek continued shift se characterized hai.</p>`
                    }
                }
            }
        }
    },
    en: {
        title: "Effluent Treatment Plant (ETP)",
        description: "A comprehensive guide to wastewater treatment in the dairy industry.",
        tabs: {
            intro: "Introduction",
            processes: "Treatment Processes",
            benefits: "Benefits",
            factors: "Key Factors",
            challenges: "Challenges",
            future: "Future Outlook"
        },
        sections: {
            executive_summary: {
                title: "Executive Summary",
                content: "<p>The dairy industry, a cornerstone of global food production, generates substantial volumes of wastewater characterized by high organic loads, fluctuating pH, and significant concentrations of fats, oils, grease (FOG), and nutrients. Effective management of this wastewater is not merely a regulatory obligation but a strategic imperative for environmental protection, resource stewardship, and long-term economic viability. Effluent Treatment Plants (ETPs) are meticulously engineered systems designed to purify this industrial wastewater, enabling its safe discharge or beneficial reuse. This report provides a comprehensive examination of ETPs within the dairy sector, detailing their fundamental concepts, the multi-stage processes involved, the multifaceted environmental, economic, and operational advantages they confer, and the critical factors that influence their design, performance, and regulatory compliance. Furthermore, it explores the landscape of emerging technologies and their potential to drive the dairy industry towards a more sustainable and circular future, transforming waste into valuable resources such as renewable energy and agricultural fertilizers.</p>"
            },
            introduction: {
                title: "Introduction to Dairy Wastewater Treatment",
                content: `<p>An Effluent Treatment Plant (ETP) represents a meticulously designed process system engineered to treat industrial wastewater. This untreated industrial wastewater is often referred to as "influent" upon its entry into the treatment system. The primary objective of an ETP is to purify this influent to a standard suitable for either safe and compliant discharge into the environment or for beneficial reuse within industrial operations, thereby fostering a more circular economy.</p>`,
                subsections: {
                    characteristics: {
                        title: "Characteristics of Dairy Industry Wastewater",
                        content: `<p>Dairy industry wastewater presents a unique and complex challenge for treatment due to its distinct characteristics. It is typically white in color, possesses an unpleasant odor, and carries a high pollutant load. This load includes significant concentrations of Chemical Oxygen Demand (COD), Biological Oxygen Demand (BOD), and Total Suspended Solids (TSS).</p>`,
                        table: {
                            header1: "Parameter (mg/l)",
                            header2: "Butter Products",
                            header3: "Cream Products",
                            header4: "Milk Products",
                            header5: "Cheese Products",
                            header6: "Powdered Products",
                            rows: [
                                { param: "BOD", butter: "200-2500", cream: "2500", milk: "500-1300", cheese: "500-5000", powdered: "1500" },
                                { param: "TSS", butter: "700-5000", cream: "3000", milk: "100-450", cheese: "-", powdered: "100-3000" },
                                { param: "FOG", butter: "-", cream: "-", milk: "-", cheese: "350-2750", powdered: "-" },
                                { param: "COD", butter: "-", cream: "-", milk: "1000-2500", cheese: "-", powdered: "3000" },
                                { param: "TN", butter: "-", cream: "-", milk: "-", cheese: "-", powdered: "250" },
                                { param: "TP", butter: "-", cream: "-", milk: "-", cheese: "-", powdered: "20" }
                            ]
                        }
                    }
                }
            },
            treatment_processes: {
                title: "Stages of Dairy Wastewater Treatment Processes",
                content: `<p>Wastewater treatment in the dairy industry typically involves a series of sequential stages, each designed to remove specific types of pollutants, progressively purifying the influent to meet discharge or reuse standards.</p>`,
                subsections: {
                    preliminary: {
                        title: "Preliminary Treatment",
                        content: `<p>Preliminary treatment constitutes the initial stage of wastewater purification, primarily focused on the physical separation of large-sized impurities. These impurities can include materials such as cloth, plastics, wood logs, and paper.</p>`
                    },
                    primary: {
                        title: "Primary Treatment",
                        content: `<p>Primary treatment focuses on the removal of floating and settleable materials, including suspended solids and a significant portion of organic matter, that were not captured during the preliminary treatment stage.</p>`
                    },
                    secondary: {
                        title: "Secondary Treatment (Biological Treatment)",
                        content: `<p>Secondary treatment forms the core of organic matter degradation in wastewater treatment. This stage primarily utilizes biological processes where various microorganisms consume and break down organic pollutants, effectively cleaning the wastewater.</p>`
                    },
                    tertiary: {
                        title: "Tertiary/Advanced Treatment",
                        content: `<p>Tertiary, or advanced, treatment represents the final and most rigorous stage of wastewater purification, designed to further improve effluent quality beyond secondary treatment standards. Its primary goal is to remove remaining inorganic compounds, recalcitrant substances (such as nitrogen and phosphorus that were not fully removed biologically), and harmful microorganisms (bacteria, viruses, and parasites).</p>`
                    }
                }
            },
            benefits: {
                title: "Benefits of Dairy Wastewater Treatment",
                content: `<p>Implementing effective wastewater treatment in the dairy industry yields a wide array of benefits, extending beyond mere compliance to encompass significant environmental, economic, and operational advantages.</p>`,
                subsections: {
                    environmental: {
                        title: "Environmental Benefits",
                        content: `<p>Proper treatment of dairy wastewater is paramount for the protection of aquatic ecosystems and public health. Untreated effluent, laden with high organic matter loads, chemicals, and excess nutrients, can severely harm aquatic life by depleting oxygen levels and pose significant health risks to human populations relying on these water sources.</p>`
                    },
                    economic: {
                        title: "Economic Benefits",
                        content: `<p>The economic advantages of treating dairy wastewater are compelling and extend beyond merely avoiding costs. Implementing on-site wastewater treatment can lead to substantial operational savings by reducing costs associated with waste disposal and the procurement of fresh water.</p>`
                    },
                    operational: {
                        title: "Operational Benefits",
                        content: `<p>Effective wastewater treatment significantly contributes to an enhanced brand reputation and competitive edge. A robust ETP serves as a cornerstone of a company's sustainability strategy.</p>`
                    }
                }
            },
            key_factors: {
                title: "Key Factors Influencing ETP Design, Operation, and Effectiveness",
                content: `<p>The successful design, operation, and overall effectiveness of an Effluent Treatment Plant in the dairy industry are influenced by a complex interplay of factors, ranging from the intrinsic properties of the wastewater to external regulatory and economic pressures.</p>`,
                subsections: {
                    characteristics: {
                        title: "Wastewater Characteristics and Variability",
                        content: `<p>The inherent characteristics and variability of dairy wastewater exert a profound influence on ETP design and operation.</p>`
                    },
                    compliance: {
                        title: "Regulatory Compliance and Standards",
                        content: `<p>Legal requirements and regulatory pressures emerge as the most critical factors influencing the selection and configuration of a treatment system.</p>`,
                        table: {
                            header1: "Parameter",
                            header2: "Standard Limit (mg/l, unless specified)",
                            rows: [
                                { param: "pH", limit: "6.5 – 8.5" },
                                { param: "BOD", limit: "100" },
                                { param: "Suspended Solids", limit: "150" },
                                { param: "Oil and Grease", limit: "10" }
                            ]
                        }
                    },
                    technology: {
                        title: "Technological Selection and Suitability",
                        content: `<p>The selection of appropriate technology is a pivotal factor. Developing the most appropriate treatment technology is a significant challenge due to the unique characteristics of each industry's wastewater.</p>`
                    }
                }
            },
            challenges: {
                title: "Challenges in Dairy Wastewater Treatment",
                content: `<p>The dairy industry faces several distinct challenges in the efficient and affordable treatment of its wastewater, primarily stemming from the unique composition and fluctuating nature of its effluent.</p>`
            },
            future_outlook: {
                title: "Emerging Technologies and Future Outlook",
                content: `<p>The evolving landscape of wastewater treatment is marked by continuous innovation, driven by increasingly stringent environmental regulations and a growing emphasis on resource recovery and circular economy principles.</p>`,
                subsections: {
                    innovations: {
                        title: "Innovations",
                        content: `<p>Several emerging technologies hold significant promise for enhancing the sustainability of dairy wastewater management.</p>`
                    },
                    conclusion: {
                        title: "Conclusion",
                        content: `<p>The future of dairy wastewater treatment is characterized by a continued shift towards integrated, resource-efficient systems.</p>`
                    }
                }
            }
        }
    }
};
