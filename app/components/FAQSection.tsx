"use client";

import { Plus, Minus } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    id: "item-1",
    question: "How does Helperr work?",
    answer: "Simply post your task, get matched with a nearby helper instantly, and relax while they handle everything. It's as easy as ordering a ride!"
  },
  {
    id: "item-2", 
    question: "What types of tasks can I post?",
    answer: "From flat-tire fixes and snow clearing to furniture moving and household chores - if you need an extra hand, Helperr can help!"
  },
  {
    id: "item-3",
    question: "How are helpers vetted?",
    answer: "All helpers go through background checks and skill verification. Plus, our rating system ensures you always get quality service from trusted neighbors."
  },
  // {
  //   id: "item-4",
  //   question: "What are the costs?",
  //   answer: "Pricing varies by task complexity and duration. You'll see transparent pricing upfront before confirming any helper, with no hidden fees."
  // },
  {
    id: "item-5",
    question: "Is Helperr available in my area?",
    answer: "We're rapidly expanding! Join our waitlist to be notified when Helperr launches in your neighborhood."
  }
];

export default function FAQSection() {
  return (
    <section id="faqs" className="md:w-[90%] max-w-4xl mx-auto mb-12 px-6 py-16 md:py-36">
      <h1 className="text-center font-bold text-3xl md:text-4xl text-primary mb-12">
        Frequently Asked Questions
      </h1>
      
      <Accordion type="single" collapsible className="py-4">
        {faqs.map((faq) => (
          <AccordionItem 
            key={faq.id} 
            value={faq.id}
            className="border border-gray-200 rounded-lg px-6 py-2 mb-4 hover:bg-gray-50 transition-colors last:border-b"
          >
            <AccordionTrigger className="text-left text-lg font-semibold text-gray-800 hover:text-primary group cursor-pointer">
              <span className="flex-1">{faq.question}</span>
              <div className="flex items-center">
                <Plus className="h-5 w-5 shrink-0 transition-all duration-200 group-data-[state=open]:hidden" />
                <Minus className="h-5 w-5 shrink-0 transition-all duration-200 group-data-[state=closed]:hidden" />
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 text-base leading-relaxed pt-2 pb-4">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>

    
  );
}
