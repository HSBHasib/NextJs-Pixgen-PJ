"use client";

import React from "react";
import { Card, Button } from "@heroui/react";
import { FaCheck } from "react-icons/fa";

const PricingPage = () => {
  const plans = [
    {
      title: "Basic",
      price: "$0",
      description: "Perfect for personal projects and exploration.",
      features: ["10 AI Generations", "Standard Speed", "Basic Editing"],
      buttonText: "Get Started",
      isFeatured: false,
    },
    {
      title: "Premium",
      price: "$19",
      description: "High-quality results for power users.",
      features: ["Unlimited Generations", "Fast Track Processing", "HD Exports", "Commercial License"],
      buttonText: "Upgrade to Pro",
      isFeatured: true,
    },
    {
      title: "Team",
      price: "$49",
      description: "Complete solution for design agencies.",
      features: ["Team Collaboration", "Priority Support", "Shared Assets", "API Access"],
      buttonText: "Contact Team",
      isFeatured: false,
    },
  ];

  return (
    <section className="py-20 bg-[#F9FAFB] min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Header Style */}
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold text-[16px] tracking-widest uppercase mb-3">Pricing Plans</h2>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
            Flexible plans for everyone
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto">
            Scale your creativity with our simple and transparent pricing model.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 rounded-md">
          {plans.map((plan, index) => (
            <Card

              key={index}
              className={`p-8 border-2 transition-all duration-300 rounded-lg ${
                plan.isFeatured 
                ? "border-blue-500 shadow-border-blue-500 shadow-2xl scale-105" 
                : "border-gray-200 shadow-border-blue-500 shadow-sm hover:border-blue-500 hover:shadow-2xl hover:scale-105 transition-all duration-300"
              }`}
              
            >
              <div className="flex flex-col h-full">
                {/* Plan Info */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{plan.title}</h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-4xl font-black text-gray-900">{plan.price}</span>
                    <span className="text-gray-400 font-medium">/mo</span>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">{plan.description}</p>
                </div>

                {/* Separation Line (Custom Style) */}
                <div className="h-[1px] w-full bg-gray-100 mb-6" />

                {/* Features List */}
                <ul className="space-y-4 flex-grow mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-600">
                      <div className="bg-blue-50 p-1 rounded-full">
                        <FaCheck className="text-blue-600 text-[10px]" />
                      </div>
                      <span className="text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* PixGen Style Button */}
                <Button
                isDisabled
                  fullWidth
                  className={`h-12 font-bold transition-all ${
                    plan.isFeatured
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg hover:shadow-blue-200"
                    : "bg-white border-2 border-gray-200 text-gray-700 hover:bg-gray-50"
                  }`}
                  radius="lg"
                >
                  {plan.buttonText}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPage;
