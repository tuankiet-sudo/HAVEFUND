import { Box, Typography, Container, Grid, Paper, Avatar, Fade } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import FeatureSection from '../components/FeatureSection'; // We will reuse this component

// Data for the team members
const teamMembers = [
  { name: 'Pham Bao Khang', role: 'Portfolio Manager', avatar: 'https://cdn2.tuoitre.vn/thumb_w/480/471584752817336320/2024/11/12/46613579011052247849409991340192009853180212n-17313964248971548322946.jpg' },
  { name: 'Tran Minh Hieu', role: 'Investment Analyst', avatar: 'https://i.vietgiaitri.com/2023/1/15/chu-tich-giao-hang-song-luan-vao-vai-dam-my-hieuthuhai-bung-no-dien-xuat-417-6825225.jpg' },
  { name: 'Tran Dang Duong', role: 'Project Manager', avatar: 'https://i.pinimg.com/474x/5f/c6/a0/5fc6a095afbcdbd5ec4f086ec5fd9e44.jpg' },
  { name: 'Pham Anh Quan', role: 'Financial Advisor', avatar: 'https://tudienwiki.com/wp-content/uploads/2023/07/quan-ap.jpg' },
];

// Data for the responsibilities, now with images
const responsibilities = [
  {
    image: 'https://images.unsplash.com/photo-1711097383282-28097ae16b1d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: "1. Identifying Financial Goals and Building a Suitable Investment Strategy",
    content: "An investment advisor plays a vital role in working closely with clients to define clear financial goals, from short-term objectives like purchasing a home to long-term aims such as retirement planning or asset growth. Based on information such as income, risk tolerance, investment time frame, and personal priorities, the advisor helps develop an overall investment strategy. This strategy must be realistic, achievable, and clearly oriented, serving as a guiding framework for all future investment decisions."
  },
  {
    image: 'https://www.davy.ie/binaries/content/gallery/davy/insights/investing-insights/2022/df-diversification-desktop.jpg/df-diversification-desktop.jpg/davy%3Amobile',
    title: "2. Selecting Investment Products and Effectively Managing the Portfolio",
    content: "Once the strategy is in place, the advisor selects appropriate investment products, including stocks, bonds, mutual funds, real estate, or alternative assets. The selection is based not only on return potential but also on stability, liquidity, and associated risks. The advisor is also responsible for building a balanced and diversified portfolio to reduce risk. This portfolio must be monitored regularly, its performance assessed, and adjustments made as needed based on market developments or changes in the client’s goals."
  },
  {
    image: 'https://online.hbs.edu/Style%20Library/api/resize.aspx?imgpath=/PublishingImages/blog/posts/risk-management.jpg&w=1200&h=630',
    title: "3. Transparent Cost Management and Comprehensive Risk Control",
    content: "Investment costs can significantly affect net returns, so the advisor must disclose all related fees, such as advisory fees, management fees, transaction costs, or hidden charges. Clients should receive clear and transparent information to make informed decisions. In addition, the advisor plays a key role in identifying, analyzing, and managing the risks of each investment. This includes assessing market volatility, providing timely risk warnings, and proposing solutions such as rebalancing the portfolio, setting stop-loss points, or reallocating assets to ensure financial safety for the client."
  },
  {
    image: 'https://carterbond.co.uk/wp-content/uploads/2023/03/15-Confidentiality-Agreement-1080x675.jpg.webp',
    title: "4. Upholding Professional Ethics and Protecting Client Confidentiality",
    content: "A professional advisor must prioritize the client’s best interests, strictly adhere to ethical standards, and comply with financial and securities laws. This includes avoiding biased recommendations for personal or corporate gain, being honest about risks, and not manipulating or withholding information. The advisor must also maintain strict confidentiality of the client’s personal and financial information, not disclosing it to third parties without clear permission. Trust and integrity are the foundations of a long-term, sustainable advisory relationship."
  },
  {
    image: 'https://t4.ftcdn.net/jpg/02/22/72/97/360_F_222729791_o03ayz6Y8X5UP97kTGbP0Aca6k05XW2B.jpg',
    title: "5. Continuously Updating Knowledge and Enhancing Advisory Expertise",
    content: "In a constantly evolving financial environment, an advisor must stay informed about new investment products, market trends, legal changes, and advanced analytical tools. By continuously improving knowledge and advisory skills, the advisor can adapt quickly to changes and provide accurate, tailored advice for each client. This professionalism and in-depth understanding are key factors in helping clients achieve long-term financial success and peace of mind."
  }
];

export default function AdvisorsPage() {
  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: teamRef, inView: teamInView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <Box>
      {/* Hero Section */}
      <Box
        ref={heroRef}
        sx={{
          pt: '110px',
          height: '60vh',
          minHeight: '400px',
          backgroundImage: 'url(https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1974&auto=format&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0, left: 0, width: '100%', height: '100%',
            backgroundColor: 'rgba(0, 33, 64, 0.7)',
          },
        }}
      >
        <Container>
          <Fade in={heroInView} timeout={1500}>
            <Typography variant="h2" component="h2" align="center" sx={{ fontWeight: 'bold', zIndex: 1, position: 'relative' }}>
              Our Advisors
            </Typography>
          </Fade>
        </Container>
      </Box>

      {/* Section 1: Project Team Structure */}
      <Box id="project-team-structure" sx={{ pt: '120px', pb: 8, backgroundColor: 'white' }} ref={teamRef}>
        <Container maxWidth="lg">
          <Typography variant="h3" align="center" sx={{ fontWeight: 'bold', mb: 8 }}>
            Project Team Structure
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {teamMembers.map((member, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3}} key={index}>
                <Fade in={teamInView} timeout={1000} style={{ transitionDelay: `${index * 200}ms` }}>
                  <Paper
                    elevation={3}
                    sx={{
                      p: 3,
                      textAlign: 'center',
                      transition: 'transform 0.3s, box-shadow 0.3s',
                      borderRadius: '16px',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: 8,
                      },
                    }}
                  >
                    <Avatar
                      alt={member.name}
                      src={member.avatar}
                      sx={{ width: 120, height: 120, margin: '0 auto', mb: 2, border: '4px solid', borderColor: 'primary.main' }}
                    />
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{member.name}</Typography>
                    <Typography variant="body1" color="text.secondary">{member.role}</Typography>
                  </Paper>
                </Fade>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Section 2: Responsibility of Advisor */}
      <Box id="responsibility-of-advisors" sx={{ pt: '120px', pb: 8, backgroundColor: '#f4f6f8' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" align="center" sx={{ fontWeight: 'bold', mb: 8 }}>
            Responsibility of Advisor
          </Typography>
            {responsibilities.map((item, index) => (
              <FeatureSection
                key={item.title}
                title={item.title}
                description={item.content}
                image={item.image}
                imagePosition={index % 2 === 0 ? 'left' : 'right'} // Alternate image position for dynamic layout
              />
            ))}
        </Container>
      </Box>
    </Box>
  );
}
