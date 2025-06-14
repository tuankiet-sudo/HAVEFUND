import { articles } from './articles';

// Define a common structure for all searchable items
interface SearchableItem {
  id: string;
  type: 'Page' | 'Article';
  title: string;
  path: string;
  content: string; // The text content to be searched
}

// --- Manually add content from your static pages ---
const pageContent: SearchableItem[] = [
  {
    id: 'about-us',
    type: 'Page',
    title: 'About Us',
    path: '/about-us',
    content: `
      Information about the Company HAVEFUND HEF Grow More. Risk Less. HaveFund. Headquarters: 36 Tôn Thất Đạm, Quận 1 Charter Capital: VND Services: Providing financial solutions, investment consulting, and asset portfolio management for businesses and individuals. Network: Headquarters in Ho Chi Minh City Representative offices in Hanoi and DaNang.
      Entrusted Investment Services HAVEUND receives investment mandates from clients (such as Mr. Minh) to manage assets in alignment with their specific requirements. The fund is committed to optimizing the investment portfolio according to each client's risk appetite and long-term financial objectives. Establishing and Updating Investment Policy. Strategic Asset Allocation. Portfolio Monitoring and Risk Alignment. Accountability and Client Protection.
    `
  },
  {
    id: 'customer',
    type: 'Page',
    title: 'Our Customer',
    path: '/customer',
    content: `
      Customer Demographics: NGUYEN VAN MINH Age: 40 Marital status: Married, with 1 children (2020 - 5 years old) Current salary after tax: 50 million VND/month, Mr. Minh’s wife: 20 million VND/month Savings book 1 billion VND. Investment Objectives: Capital accumulation for retirement within a 20–25 years investment horizon. Provision of adequate funding for future educational expenses. Investment Experience: Have a basic understanding of investing in stocks. Have some prior experience creating and managing a simple investment portfolio.
      Responsible for Client: Mr. Minh, acting as a client and beneficiary, has assigned his assets to …Fund for investment purposes. The Client holds the authority to oversee and review all investment activities. The Client may only interfere in the investment strategy with solid proof.
    `
  },
  {
    id: 'advisors',
    type: 'Page',
    title: 'Our Advisors',
    path: '/advisors',
    content: `
      PROJECT TEAM STRUCTURE: Pham Bao Khang – Portfolio Manager, Tran Minh Hieu – Investment Analyst, Tran Dang Duong – Project Manager, Pham Anh Quan – Financial Advisor.
      RESPONSIBILITY OF ADVISOR: Identifying Financial Goals and Building a Suitable Investment Strategy. Selecting Investment Products and Effectively Managing the Portfolio. Transparent Cost Management and Comprehensive Risk Control. Upholding Professional Ethics and Protecting Client Confidentiality. Continuously Updating Knowledge and Enhancing Advisory Expertise.
    `
  },
];

// --- Combine page content with news articles ---
export const searchableContent: SearchableItem[] = [
  ...pageContent,
  // Convert articles to the common SearchableItem format
  ...articles.map(article => ({
    id: article.id,
    type: 'Article' as 'Article',
    title: article.title,
    path: `/news/${article.id}`,
    content: article.content,
  }))
];
