import { useLanguage } from "@/_core/hooks/useLanguage";
import { Card } from "@/components/ui/card";
import { Info, FileText, ExternalLink } from "lucide-react";
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
