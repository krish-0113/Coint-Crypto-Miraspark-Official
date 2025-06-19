"use client"

import { useState } from "react"

type NewsItem = {
  id: number
  title: string
  description: string
  image: string
  img?: string
  fullContent: string
  marketData: {
    trend: "bull" | "bear"
    percentage: number
  }
}

type Section1Props = {
  onNewsSelect: (newsItem: NewsItem) => void
  selectedNewsId?: number
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=300&fit=crop",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=300&fit=crop",
    title: "Another Unexpected Loss for Tesla Company",
    description: "Tesla's shares fell 30% this year due to protests and vandalism at its dealerships.",
    fullContent: `In a surprising turn of events, Tesla Inc. has reported another significant loss this quarter, marking a challenging period for the electric vehicle giant. The company's shares have plummeted by 30% this year, primarily attributed to widespread protests and vandalism incidents at its dealerships across multiple states.

The protests, initially sparked by concerns over working conditions at Tesla's manufacturing facilities, have escalated to include broader criticisms of the company's environmental claims and labor practices. Several dealerships have reported broken windows, graffiti, and disrupted operations, leading to temporary closures and increased security measures.

CEO Elon Musk addressed the situation in a recent statement, acknowledging the challenges while defending the company's commitment to sustainable transportation. "We understand the concerns raised by various groups, and we're committed to addressing them through constructive dialogue and improved practices," Musk stated during a press conference.

The financial impact has been substantial, with Tesla reporting a 15% decrease in quarterly sales compared to the same period last year. Industry analysts suggest that the company's reputation has been significantly affected, potentially influencing consumer purchasing decisions.

Despite these setbacks, Tesla maintains its long-term vision for electric vehicle adoption and continues to invest in new technologies and manufacturing capabilities. The company has announced plans to enhance security at its facilities and engage more actively with community stakeholders to address ongoing concerns.`,
    marketData: {
      trend: "bear",
      percentage: -30.2,
    },
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=300&fit=crop",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=300&fit=crop",
    title: "Meta Faces Legal Battle",
    description: "Meta is under fire for data privacy issues in Europe as regulators tighten their grip.",
    fullContent: `Meta Platforms Inc. is facing its most significant legal challenge in Europe as regulators intensify their scrutiny over data privacy practices. The European Union's data protection authorities have launched multiple investigations into the social media giant's handling of user information.

The legal battle centers around allegations that Meta has violated the General Data Protection Regulation (GDPR) by collecting and processing user data without proper consent. European regulators claim that the company's data collection practices are overly broad and lack transparency.

"This case represents a fundamental question about user privacy rights in the digital age," said Maria Gonzalez, a leading data protection lawyer in Brussels. "The outcome could set important precedents for how tech companies operate in Europe."

Meta has strongly defended its practices, arguing that its data collection is necessary to provide personalized services and maintain platform security. The company has invested billions in privacy infrastructure and claims to be fully compliant with European regulations.

The legal proceedings could result in substantial fines, potentially reaching billions of euros under GDPR provisions. More significantly, the case could force Meta to fundamentally alter how it collects and uses data from European users.

Industry observers note that this case is part of a broader regulatory trend targeting big tech companies. The outcome could influence similar cases against other major platforms and shape the future of digital privacy regulation globally.`,
    marketData: {
      trend: "bear",
      percentage: -12.8,
    },
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=300&fit=crop",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=300&fit=crop",
    title: "AI Is Reshaping Jobs",
    description: "AI automation is expected to impact 40% of global jobs, according to a new report.",
    fullContent: `A comprehensive new study reveals that artificial intelligence automation is poised to impact approximately 40% of global jobs over the next decade, fundamentally reshaping the employment landscape across industries.

The report, conducted by the International Labor Organization in collaboration with leading technology research institutes, analyzes the potential effects of AI adoption on various sectors including manufacturing, healthcare, finance, and education.

"We're witnessing the most significant transformation in work since the Industrial Revolution," said Dr. Sarah Chen, lead researcher on the study. "While AI will eliminate certain roles, it will also create new opportunities that we're only beginning to understand."

The research indicates that routine and repetitive tasks are most vulnerable to automation, affecting roles in data entry, basic customer service, and simple manufacturing processes. However, jobs requiring creativity, complex problem-solving, and human interaction are expected to remain largely secure.

Interestingly, the study also highlights the emergence of entirely new job categories, including AI trainers, human-AI interaction designers, and algorithmic auditors. These roles are expected to grow significantly as organizations integrate AI technologies into their operations.

Governments and educational institutions are being urged to develop comprehensive retraining programs to help workers transition to new roles. The report emphasizes that proactive policy measures will be crucial in managing this technological transition and ensuring that the benefits of AI are broadly shared across society.`,
    marketData: {
      trend: "bull",
      percentage: 25.6,
    },
  },
]

export default function NewsSection({ onNewsSelect, selectedNewsId }: Section1Props) {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const handleCardClick = (newsItem: NewsItem) => {
    onNewsSelect(newsItem)
  }

  return (
    <>
      <style>{`
        @keyframes gradient-border {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        .news-card-border {
          position: relative;
          background: linear-gradient(45deg, #00f0ff, #4c00ff, #ff00c8, #00f0ff);
          background-size: 400% 400%;
          animation: gradient-border 3s ease infinite;
          padding: 2px;
          border-radius: 16px;
          transition: all 0.3s ease;
        }
        
        .news-card-border:hover {
          box-shadow: 0 8px 25px rgba(0, 240, 255, 0.4), 
                      0 0 30px rgba(76, 0, 255, 0.3),
                      0 0 40px rgba(255, 0, 200, 0.2);
          transform: translateY(-5px) scale(1.02);
        }
        
        .news-card-inner {
          background: linear-gradient(135deg, #000000 0%, #001f3f 50%, #0a0a0a 100%);
          border-radius: 14px;
          height: 100%;
          transition: all 0.3s ease;
        }
        
        .news-card-inner:hover {
          background: linear-gradient(135deg, #0a0a0a 0%, #002a5f 50%, #1a1a1a 100%);
        }
        
        .news-image-border {
          background: linear-gradient(45deg, #00f0ff, #4c00ff, #ff00c8, #00f0ff);
          background-size: 400% 400%;
          animation: gradient-border 3s ease infinite;
          padding: 1px;
          border-radius: 12px;
        }
      `}</style>

      <div className="w-full py-16 flex flex-col items-center justify-center px-4 bg-gradient-to-b from-[#000000] via-[#001f3f] to-[#000000]">
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-900 bg-clip-text text-transparent">
          Latest Trending News
        </h1>

        <div className="w-full max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsItems.map((item, index) => (
              <div
                key={item.id}
                className={`news-card-border cursor-pointer ${selectedNewsId === item.id ? "scale-105" : ""}`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => handleCardClick(item)}
              >
                <div className="news-card-inner flex flex-col overflow-hidden">
                  <div className="news-image-border m-4 mb-3">
                    <img
                      src={item.img || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-40 object-cover rounded-xl"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = "/placeholder.svg?height=300&width=600"
                      }}
                    />
                  </div>
                  <div className="px-4 pb-4 flex flex-col justify-between flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">{item.title}</h3>
                    <p className="text-sm text-gray-300 font-light mb-3 line-clamp-3">{item.description}</p>
                    <span
                      className={`text-sm font-medium transition-all duration-300 ${
                        hoveredCard === index
                          ? "text-cyan-400 transform translate-x-1"
                          : selectedNewsId === item.id
                            ? "text-cyan-400"
                            : "text-blue-400"
                      }`}
                    >
                      {selectedNewsId === item.id ? "Currently Reading" : "Read more"} →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
