import { useLanguage } from "@/_core/hooks/useLanguage";
import { Card } from "@/components/ui/card";
import { Info, FileText, ExternalLink, CheckCircle, TrendingUp, Users, MessageCircle, UserCheck, Globe, Target, BookOpen, Network } from "lucide-react";
import Navigation from "@/components/Navigation";
import { useSEO } from "@/_core/hooks/useSEO";

export default function Membership() {
  const { language, setLanguage, t, localePath } = useLanguage();

  useSEO(language === 'en' ? {
    title: "Membership | KAIB",
    description: "KAIB membership plans: Regular Member, Associate Member, and Student Member. Flexible categories to meet diverse needs.",
    path: "/en/membership",
  } : {
    title: "会員制度 | KAIB",
    description: "KAIBの会員制度：正会員・準会員・学生会員。多様なニーズに応える柔軟な会員区分をご案内します。",
    path: "/membership",
  });

  const membershipData = [
    {
      category: { ja: '正会員', en: 'Regular Member' },
      admissionFee: { ja: '30,000円', en: '¥30,000' },
      annualFee: { ja: '120,000円', en: '¥120,000' },
      admissionFeeHighlight: false,
      benefits: [
        { ja: '運営会議参加資格', en: 'Eligibility to attend management meetings' },
        { ja: '月例会参加、他支部イベント参加', en: 'Monthly meetings & other branch events' },
        { ja: 'メンタリング優先枠', en: 'Priority mentoring slots' },
        { ja: 'ビジネスマッチング、フォーラム参加', en: 'Business matching & forum participation' },
      ],
    },
    {
      category: { ja: '準会員', en: 'Associate Member' },
      admissionFee: { ja: '10,000円', en: '¥10,000' },
      annualFee: { ja: '60,000円', en: '¥60,000' },
      admissionFeeHighlight: false,
      benefits: [
        { ja: '月例会参加', en: 'Monthly meeting attendance' },
        { ja: '一部イベント参加', en: 'Participation in select events' },
        { ja: '正会員への移行優遇（※下記参照）', en: 'Preferential upgrade to Regular Member (see below)' },
      ],
    },
    {
      category: { ja: '学生会員', en: 'Student Member' },
      subLabel: { ja: '（未起業学生のみ）', en: '(Pre-venture students only)' },
      admissionFee: { ja: '0円', en: '¥0' },
      annualFee: { ja: '30,000円', en: '¥30,000' },
      admissionFeeHighlight: true,
      benefits: [
        { ja: '月例会参加', en: 'Monthly meeting attendance' },
        { ja: '学生向け特別プログラム', en: 'Special programs for students' },
        { ja: 'メンター紹介', en: 'Mentor introductions' },
        { ja: '正会員への移行優遇（※下記参照）', en: 'Preferential upgrade to Regular Member (see below)' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation activePage="membership" />

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container max-w-5xl">
          {/* Page Title */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-12 bg-primary rounded-full" />
              <h1 className="text-4xl font-bold text-foreground">
                {language === 'en' ? 'Membership' : '会員制度'}
              </h1>
            </div>
            <p className="text-lg text-muted-foreground">
              {language === 'en'
                ? 'Flexible membership categories to meet diverse needs'
                : '多様なニーズに応える柔軟な会員区分'
              }
            </p>
          </div>

          {/* Value Proposition */}
          <div className="mb-16">
            <div className="mb-10 p-8 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg border border-primary/20">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                {language === 'en' ? 'For Those Considering Membership' : '入会をご検討中の方へ'}
              </h2>
              <p className="text-foreground leading-relaxed mb-3">
                {language === 'en'
                  ? 'KAIB is an entrepreneur community where business leaders in Kagawa learn from each other, support each other, and accelerate business growth.'
                  : 'KAIBは、香川で挑戦する起業家・経営者が学び合い、支え合い、事業成長を加速させるための起業家コミュニティです。'
                }
              </p>
              <p className="text-foreground leading-relaxed mb-3">
                {language === 'en'
                  ? 'We are not just a networking group or study circle. Our goal is to produce growth companies from Kagawa that create employment and revitalize the regional economy.'
                  : '単なる交流会や勉強会ではありません。目指しているのは、香川から成長企業を生み出し、雇用をつくり、地域経済を活性化させることです。'
                }
              </p>
              <p className="text-foreground leading-relaxed font-semibold text-primary">
                {language === 'en'
                  ? 'Your growth as an entrepreneur drives the future of Kagawa.'
                  : '経営者一人ひとりの成長が、香川の未来をつくる。'
                }
              </p>
            </div>

            {/* Benefits Summary Table */}
            <h3 className="text-xl font-bold text-foreground mb-6">
              {language === 'en' ? 'What You Gain by Joining' : '入会することで得られる主なメリット'}
            </h3>
            <div className="grid gap-4 mb-10">
              {[
                { icon: <Users className="w-5 h-5 text-primary" />, label: { en: 'Monthly Meetings', ja: '月例会' }, desc: { en: 'Learn directly from growth company leaders', ja: '成長企業の経営者から直接学べる' } },
                { icon: <MessageCircle className="w-5 h-5 text-secondary" />, label: { en: 'Forum', ja: 'フォーラム' }, desc: { en: 'Share real business challenges honestly with peers', ja: '経営者同士で本音の課題共有ができる' } },
                { icon: <UserCheck className="w-5 h-5 text-accent" />, label: { en: 'Mentoring', ja: 'メンタリング' }, desc: { en: 'Practical learning from experienced entrepreneurs', ja: '先輩経営者から実践的に学べる' } },
                { icon: <BookOpen className="w-5 h-5 text-primary" />, label: { en: 'Learning', ja: 'ラーニング' }, desc: { en: 'Practical skills in AI, hiring, fundraising, and more', ja: 'AI・採用・資金調達など経営実務を学べる' } },
                { icon: <Globe className="w-5 h-5 text-green-600" />, label: { en: 'Regional Collaboration', ja: '地域連携' }, desc: { en: 'Connect with government, financial institutions, and media', ja: '行政・金融機関・メディアなどと接点が持てる' } },
                { icon: <Network className="w-5 h-5 text-green-600" />, label: { en: 'xIB Network', ja: 'xIBネットワーク' }, desc: { en: 'Connect with entrepreneurs across Japan', ja: '全国の起業家・経営者とつながれる' } },
                { icon: <Target className="w-5 h-5 text-blue-600" />, label: { en: 'EO Connection', ja: 'EOとの関係性' }, desc: { en: 'Access growth methods from a world-class entrepreneur network', ja: '世界的な起業家ネットワークの知見に触れられる' } },
                { icon: <TrendingUp className="w-5 h-5 text-accent" />, label: { en: 'Business Growth', ja: '事業成長' }, desc: { en: 'An environment to aim for ¥100M+ revenue', ja: '年商1億円を目指す環境が得られる' } },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-lg border border-border">
                  <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="font-semibold text-foreground text-sm">{item.label[language]}</span>
                    <span className="text-muted-foreground text-sm ml-2">— {item.desc[language]}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Target Audience */}
            <h3 className="text-xl font-bold text-foreground mb-6">
              {language === 'en' ? 'Recommended For' : 'こんな方におすすめです'}
            </h3>
            <div className="grid sm:grid-cols-2 gap-3 mb-10">
              {(language === 'en' ? [
                'Business owners aiming for ¥100M+ revenue',
                'Entrepreneurs who want to grow in Kagawa',
                'Those who want to keep learning as leaders',
                'Those seeking peers to consult with on challenges',
                'Those who want mentoring from experienced entrepreneurs',
                'Successors preparing for business succession',
                'Leaders launching new business ventures',
                'Students aspiring to start a business',
              ] : [
                '年商1億円を目指したい経営者',
                '香川で事業を成長させたい経営者',
                '経営者として学び続けたい方',
                '経営課題を相談できる仲間がほしい方',
                '先輩経営者から学びたい方',
                '事業承継を予定している後継者',
                '新規事業に挑戦したい方',
                '起業を目指している学生・若手',
              ]).map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-foreground">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Membership Table */}
          <Card className="overflow-hidden mb-8">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-700 text-white">
                    <th className="text-left px-6 py-4 font-semibold text-sm min-w-[140px]">
                      {language === 'en' ? 'Category' : '会員区分'}
                    </th>
                    <th className="text-left px-6 py-4 font-semibold text-sm min-w-[120px]">
                      {language === 'en' ? 'Admission Fee' : '入会金'}
                    </th>
                    <th className="text-left px-6 py-4 font-semibold text-sm min-w-[120px]">
                      {language === 'en' ? 'Annual Fee' : '年会費'}
                    </th>
                    <th className="text-left px-6 py-4 font-semibold text-sm">
                      {language === 'en' ? 'Main Benefits' : '主な特典'}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {membershipData.map((row, idx) => (
                    <tr key={idx} className="hover:bg-muted/30 transition">
                      <td className="px-6 py-6 align-top">
                        <span className="font-bold text-foreground text-base">
                          {row.category[language]}
                        </span>
                        {row.subLabel && (
                          <span className="block text-xs text-muted-foreground mt-1">
                            {row.subLabel[language]}
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-6 align-top">
                        <span className={`font-bold text-base ${row.admissionFeeHighlight ? 'text-red-600' : 'text-foreground'}`}>
                          {row.admissionFee[language]}
                        </span>
                      </td>
                      <td className="px-6 py-6 align-top">
                        <span className="font-bold text-foreground text-base">
                          {row.annualFee[language]}
                        </span>
                      </td>
                      <td className="px-6 py-6 align-top">
                        <ul className="space-y-2">
                          {row.benefits.map((b, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-red-600 mt-1.5 text-xs">&#9679;</span>
                              <span className="text-foreground text-sm">{b[language]}</span>
                            </li>
                          ))}
                        </ul>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          {/* Membership Agreement */}
          <Card className="p-6 mb-8 bg-primary/5 border-2 border-primary">
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-foreground text-lg mb-1">
                  {language === 'en' ? 'Membership Agreement' : '会員規約'}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {language === 'en'
                    ? 'Please review the membership agreement before applying.'
                    : '入会をご検討の方は、会員規約をご確認ください。'
                  }
                </p>
              </div>
              <a
                href="https://drive.google.com/file/d/1T6Cz_E4Qcor6PRqPehIlMSOjSNuGyHky/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition text-sm"
              >
                {language === 'en' ? 'View Agreement' : '規約を見る'}
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </Card>

          {/* Upgrade Note */}
          <Card className="p-6 bg-blue-50 border border-blue-200 mb-8">
            <div className="flex gap-3">
              <Info className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-blue-900 mb-1">
                  {language === 'en'
                    ? 'Preferential Upgrade to Regular Member'
                    : '正会員への移行優遇'
                  }
                </h3>
                <ul className="text-sm text-blue-800 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">&#9679;</span>
                    <span>
                      {language === 'en'
                        ? 'Associate members who have been active for six months or more will have their admission fee waived when upgrading to Regular Member.'
                        : '半年以上準会員として活動した方は、正会員への移行時に入会金が免除されます。'
                      }
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">&#9679;</span>
                    <span>
                      {language === 'en'
                        ? 'Student members who have been active for six months or more will have their admission fee waived when upgrading to Regular Member.'
                        : '半年以上学生会員として活動した方は、正会員への移行時に入会金が免除されます。'
                      }
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          {/* CTA Button */}
          <div className="text-center">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeN8mTf8hDxMpRcUCbmHnImCfVxCfCmMUK56fxtlrYHxawu2Q/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-bold rounded-lg hover:bg-accent/90 transition text-lg shadow-lg"
            >
              {language === 'en' ? 'Apply for Membership' : '参加申込書はこちら'}
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
