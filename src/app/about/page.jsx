import { Card } from "@heroui/react";
import { Target, Users, Zap, Award } from "lucide-react";

const About = () => {
  const stats = [
    { icon: <Zap className="text-yellow-500" />, label: "Fastest Engine", desc: "Gen in < 2s" },
    { icon: <Users className="text-blue-500" />, label: "Community", desc: "50k+ Creators" },
    { icon: <Target className="text-red-500" />, label: "Precision", desc: "4K AI Output" },
    { icon: <Award className="text-purple-500" />, label: "Quality", desc: "Artist Grade" },
  ];

  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Text Content */}
          <div className="flex-1 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-bold uppercase tracking-widest mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              The Future of Art
            </div>
            <h2 className="text-5xl font-black text-gray-900 leading-[1.1] mb-6">
              We empower creators with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">AI intelligence.</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              PixGen started with a simple idea: that everyone has a story to tell, but not everyone has the tools to draw it. We bridge that gap using the world's most advanced generative models.
            </p>
            <div className="h-1 w-20 bg-black rounded-full" />
          </div>

          {/* Feature Grid */}
          <div className="flex-1 grid grid-cols-2 gap-4">
            {stats.map((item, index) => (
              <Card key={index} className="rounded-md p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow">
                <div className="p-2 bg-gray-50 rounded-lg inline-block mb-3">
                  {item.icon}
                </div>
                <h4 className="font-bold text-gray-900">{item.label}</h4>
                <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
              </Card>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About