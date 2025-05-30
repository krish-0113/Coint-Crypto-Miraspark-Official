// components/FAQSection.tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
  return (
    <section className="relative w-full py-20 px-6 overflow-hidden">
      {/* Enhanced dark gradient background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(135deg, #000000, #0a0a0a, #000814, #001025, #050510, #000000)'
        }}
      />
      {/* Falling Dots */}
{/* Floating Particles Effect */}
{/* <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${5 + Math.random() * 5}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div> */}

      
      {/* Dark cyan overlay */}
      <img
        src="/img/cyan.png"
        alt="Blue Overlay"
        className="absolute top-0 left-0 w-full h-full object-cover object-top opacity-30 mix-blend-overlay pointer-events-none z-0"
      />
       
      <div className="relative container mx-auto flex flex-col lg:flex-row items-start justify-around gap-4 z-10">
        {/* Left Text Section */}
        <div className="max-w-lg">
          <h2 className="text-4xl font-extrabold text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-100 text-base leading-relaxed">
            Find answers to common questions in our comprehensive FAQ section,
            providing clarity and support for your crypto journey.
          </p>
        </div>
 
        {/* FAQ Accordion Section */}
        <div className="w-full max-w-xl space-y-6">
          <Accordion
            type="single"
            collapsible
            className="w-full space-y-4 font-lexend"
          >
            {[
              {
                value: "item-1",
                question: "How to purchase a plan?",
                answer:
                  "You can purchase a plan by visiting the pricing section, selecting your desired plan, and completing the payment process securely.",
              },
              {
                value: "item-2",
                question: "Do I get a refund if I cancel the membership?",
                answer:
                  "Refunds are subject to our refund policy. Please refer to our terms or contact support for more information.",
              },
              {
                value: "item-3",
                question: "How many cryptocurrencies can I choose?",
                answer:
                  "Depending on your plan, you can choose from a wide range of supported cryptocurrencies. Higher tiers allow tracking more coins.",
              },
              {
                value: "item-4",
                question: "Will I get email notifications for important alerts?",
                answer:
                  "Yes, important alerts and updates will be sent to your registered email address.",
              },
            ].map(({ value, question, answer }) => (
              <div
                key={value}
                className="relative p-0.5 rounded-3xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 group"
                style={{
                  background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.4), rgba(139, 0, 255, 0.4), rgba(255, 0, 200, 0.4), rgba(0, 240, 255, 0.4))',
                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.4), 0 4px 15px rgba(0, 240, 255, 0.1)',
                  animation: 'borderGlow 3s ease-in-out infinite alternate'
                }}
              >
                <AccordionItem
                  value={value}
                  className="rounded-3xl overflow-hidden transition-all duration-500 shadow-2xl group-hover:shadow-3xl"
                  style={{
                    background: 'linear-gradient(135deg, #0a0a0a, #000814, #001025, #0a0f1a)',
                    boxShadow: 'inset 0 2px 8px rgba(0, 0, 0, 0.3), 0 10px 30px rgba(0, 0, 0, 0.5)'
                  }}
                >
                  <AccordionTrigger 
                    className="group/trigger text-white text-left px-6 py-5 text-base font-semibold flex justify-between items-center w-full transition-all duration-500 hover:bg-gradient-to-r from-[#00f0ff] via-[#8b00ff] to-[#ff00c8] hover:text-white rounded-3xl hover:shadow-inner"
                    style={{
                      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                  >
                    <span className="transition-all duration-300 group-hover/trigger:drop-shadow-lg">
                      {question}
                    </span>
                    {/* <span 
                      className="ml-2 transition-all duration-500 group-aria-expanded:rotate-45 transform bg-gradient-to-tr from-[#00f0ff] via-[#8b00ff] to-[#ff00c8] text-transparent bg-clip-text text-xl font-bold group-hover/trigger:scale-110 group-hover/trigger:rotate-12"
                      style={{
                        textShadow: '0 0 10px rgba(0, 240, 255, 0.5)',
                        filter: 'drop-shadow(0 0 8px rgba(0, 240, 255, 0.3))'
                      }}
                    >
                      +
                    </span> */}
                  </AccordionTrigger>
                  <AccordionContent 
                    className="text-gray-300 px-6 pb-6 text-sm leading-relaxed transition-all duration-500"
                    style={{
                      background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.2), rgba(0, 8, 20, 0.3), rgba(5, 5, 16, 0.2))',
                    }}
                  >
                    <div className="pt-2 transition-all duration-300 hover:text-gray-200">
                      {answer}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </div>
            ))}
          </Accordion>
        </div>
      </div>

      <style >{`
        @keyframes borderGlow {
          0% {
            box-shadow: 
              0 8px 25px rgba(0, 0, 0, 0.4),
              0 4px 15px rgba(0, 240, 255, 0.1),
              0 0 20px rgba(0, 240, 255, 0.2);
          }
          50% {
            box-shadow: 
              0 12px 35px rgba(0, 0, 0, 0.5),
              0 6px 20px rgba(139, 0, 255, 0.2),
              0 0 30px rgba(139, 0, 255, 0.3);
          }
          100% {
            box-shadow: 
              0 10px 30px rgba(0, 0, 0, 0.45),
              0 5px 18px rgba(255, 0, 200, 0.15),
              0 0 25px rgba(255, 0, 200, 0.25);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }

        .shadow-3xl {
          box-shadow: 
            0 25px 50px rgba(0, 0, 0, 0.6),
            0 15px 30px rgba(0, 240, 255, 0.1),
            0 10px 20px rgba(139, 0, 255, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </section>
  );
}