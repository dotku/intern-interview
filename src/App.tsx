import React from 'react';
import { FileText, Phone, Calendar, CheckCircle, Users, Building, ArrowRight, Mail } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              实习生招聘流程
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              加入顶尖科技团队，开启你的职业生涯
            </p>
            <button className="bg-yellow-500 text-blue-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-400 transition-colors">
              立即申请
            </button>
          </div>
        </div>
      </div>

      {/* Process Timeline */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <ProcessStep
              number="1"
              icon={<FileText className="w-8 h-8" />}
              title="提交简历"
              description="提供详细的个人简历，包含项目经验和技术技能"
              details={[
                "个人基本信息",
                "教育背景",
                "项目经验",
                "技术技能清单",
                "实习期望"
              ]}
            />
            
            <ProcessStep
              number="2"
              icon={<Users className="w-8 h-8" />}
              title="猎头接触"
              description="专业猎头顾问进行初步沟通和评估"
              details={[
                "确认求职意向",
                "了解职业规划",
                "评估技能匹配度",
                "介绍公司文化",
                "讨论薪资期望"
              ]}
            />
            
            <ProcessStep
              number="3"
              icon={<Calendar className="w-8 h-8" />}
              title="安排面试"
              description="多轮技术面试和团队文化匹配"
              details={[
                "技术能力评估",
                "算法编程测试",
                "项目经验交流",
                "团队协作能力",
                "英语沟通测试"
              ]}
            />
            
            <ProcessStep
              number="4"
              icon={<CheckCircle className="w-8 h-8" />}
              title="通过入取"
              description="发放录用通知，办理入职手续"
              details={[
                "发放offer",
                "确认入职时间",
                "签署实习协议",
                "办理入职手续",
                "团队见面会"
              ]}
            />
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">实习生福利</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BenefitCard
              icon={<Building className="w-8 h-8" />}
              title="优质办公环境"
              description="现代化办公室，免费咖啡和零食"
            />
            <BenefitCard
              icon={<Users className="w-8 h-8" />}
              title="导师制培养"
              description="一对一专业导师指导，加速成长"
            />
            <BenefitCard
              icon={<Mail className="w-8 h-8" />}
              title="转正机会"
              description="表现优秀可获得正式工作机会"
            />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">准备好开始你的职业旅程了吗？</h2>
          <p className="text-xl mb-8">立即投递简历，开启你的实习之旅</p>
          <button className="bg-yellow-500 text-blue-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-400 transition-colors inline-flex items-center">
            投递简历
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

function ProcessStep({ number, icon, title, description, details }) {
  return (
    <div className="relative flex items-start">
      <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-blue-600 text-white rounded-full text-xl font-bold">
        {number}
      </div>
      <div className="ml-6">
        <div className="flex items-center mb-2">
          <div className="text-blue-600 mr-3">{icon}</div>
          <h3 className="text-2xl font-semibold">{title}</h3>
        </div>
        <p className="text-gray-600 mb-4 text-lg">{description}</p>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {details.map((detail, index) => (
            <li key={index} className="flex items-center text-gray-700">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
              {detail}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function BenefitCard({ icon, title, description }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <div className="text-blue-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default App;