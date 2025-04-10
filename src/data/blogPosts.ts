import { BlogPost } from '../types/blog';

export const blogPosts: BlogPost[] = [
  {
    id: 'understanding-uae-labor-law',
    title: "Understanding UAE Labor Law: Your Rights as an Employee",
    excerpt: "A comprehensive guide to employee rights, benefits, and protections under UAE labor law. Learn about working hours, leave entitlements, and more.",
    date: "March 15, 2025",
    readTime: "8 min read",
    category: "Labor Law",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80",
    author: {
      name: "Sarah Ahmed",
      position: "Senior Partner",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
    },
    content: [
      {
        type: 'paragraph',
        content: "The UAE Labor Law is a comprehensive framework that governs employment relationships in the private sector. Understanding your rights and obligations under this law is crucial for both employees and employers."
      },
      {
        type: 'heading',
        content: "Working Hours and Rest Periods"
      },
      {
        type: 'paragraph',
        content: "The standard working hours in the UAE are 8 hours per day or 48 hours per week. During Ramadan, working hours are reduced by 2 hours per day. Employees are entitled to breaks after 5 consecutive hours of work."
      },
      {
        type: 'heading',
        content: "Leave Entitlements"
      },
      {
        type: 'paragraph',
        content: "Employees are entitled to various types of leave, including annual leave (30 days for each year of service), sick leave (up to 90 days), and maternity leave (45 days with full pay for female employees)."
      },
      {
        type: 'heading',
        content: "End of Service Benefits"
      },
      {
        type: 'paragraph',
        content: "Upon completion of one year of continuous service, employees are entitled to end of service gratuity. The calculation is based on basic salary and length of service."
      }
    ]
  },
  {
    id: 'real-estate-investment-dubai',
    title: "Real Estate Investment in Dubai: Legal Considerations",
    excerpt: "Essential legal aspects to consider when investing in Dubai's real estate market. From property laws to transaction procedures.",
    date: "March 10, 2025",
    readTime: "6 min read",
    category: "Real Estate",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80",
    author: {
      name: "Omar Hassan",
      position: "Partner",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
    },
    content: [
      {
        type: 'paragraph',
        content: "Investing in Dubai's real estate market can be highly rewarding, but it requires careful consideration of various legal aspects to ensure a smooth and secure investment process."
      },
      {
        type: 'heading',
        content: "Property Ownership Laws"
      },
      {
        type: 'paragraph',
        content: "Dubai allows foreign ownership of property in designated freehold areas. Understanding these zones and the specific regulations governing them is crucial for international investors."
      },
      {
        type: 'heading',
        content: "Transaction Requirements"
      },
      {
        type: 'paragraph',
        content: "All property transactions must be registered with the Dubai Land Department. This includes paying registration fees, obtaining necessary approvals, and completing proper documentation."
      },
      {
        type: 'heading',
        content: "Investment Protection"
      },
      {
        type: 'paragraph',
        content: "UAE laws provide strong protection for property investors, including clear title deed systems and regulated escrow accounts for off-plan purchases."
      }
    ]
  },
  {
    id: 'family-law-uae-guide',
    title: "Family Law in the UAE: A Comprehensive Guide",
    excerpt: "Understanding the complexities of family law in the UAE, including marriage, divorce, child custody, and inheritance matters.",
    date: "March 20, 2025",
    readTime: "10 min read",
    category: "Family Law",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80",
    author: {
      name: "Fatima Al Sayed",
      position: "Senior Associate",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
    },
    content: [
      {
        type: 'paragraph',
        content: "Family law in the UAE is governed by both civil law and Sharia principles, creating a unique legal framework that addresses various aspects of family matters. This comprehensive guide will help you understand your rights and obligations under UAE family law."
      },
      {
        type: 'heading',
        content: "Marriage Requirements"
      },
      {
        type: 'paragraph',
        content: "Marriage in the UAE requires specific legal procedures and documentation. Both UAE nationals and expatriates must meet certain requirements, including age restrictions, consent requirements, and medical examinations. The process also varies depending on whether both parties are Muslims or if one or both are non-Muslims."
      },
      {
        type: 'heading',
        content: "Divorce Proceedings"
      },
      {
        type: 'paragraph',
        content: "Divorce in the UAE can be initiated by either spouse under specific grounds recognized by law. The process involves several stages, including mandatory mediation attempts before the case proceeds to court. Understanding your rights regarding financial settlements, alimony, and child support is crucial during divorce proceedings."
      },
      {
        type: 'heading',
        content: "Child Custody"
      },
      {
        type: 'paragraph',
        content: "Child custody matters are determined based on the best interests of the child. UAE law distinguishes between physical custody (hadhanah) and guardianship (wilayah). Mothers typically have priority for physical custody until children reach a certain age, while fathers usually maintain guardianship rights."
      },
      {
        type: 'heading',
        content: "Inheritance Laws"
      },
      {
        type: 'paragraph',
        content: "Inheritance in the UAE follows Sharia law for Muslims, while non-Muslims can choose to have their home country's laws applied. Understanding these provisions is essential for proper estate planning and protecting your family's interests."
      }
    ]
  }
];