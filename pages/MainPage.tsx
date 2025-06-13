import * as React from 'react';
import { Box, Typography, Container, Divider, Fade, Slide, Grid } from '@mui/material';
import Header from '../components/Header';
import NewsCard from '../components/NewsCard'; // Import the new component

const mockNewsData = [
  {
    image: '/news-images/news1.jpg', // Example path
    date: '11/10/2024 14:05',
    title: 'Hòa Phát hỗ trợ xây dựng hơn 1,500 căn nhà cho người nghèo trên cả nước',
    quote: 'Hưởng ứng lời kêu gọi của Chính phủ...',
  },
  {
    image: '/news-images/news2.jpg',
    date: '04/03/2025 12:30',
    title: 'Hòa Phát nộp ngân sách hơn 13,400 tỷ đồng, cao nhất từ trước đến nay',
    quote: 'Năm 2024, Tập đoàn Hòa Phát đã nộp vào ngân sách Nhà nước...',
  },
  {
    image: '/news-images/news3.jpg',
    date: '15/05/2024 09:23',
    title: 'Khởi công xây dựng dự án Trường Tiểu học Bình Đông huyện Bình Sơn',
    quote: 'Sáng ngày 13/5/2024, tại Khu dân cư hạ lưu sông Trà Bồng...',
  },
  {
    image: '/news-images/news5.jpg',
    date: 'General News',
    title: 'Hòa Phát không bao giờ dừng lại và luôn tiến về phía trước',
    quote: 'Ông Trần Đình Long - Chủ tịch HĐQT Tập đoàn Hòa Phát',
  },
  {
    image: '/news-images/news4.jpg',
    date: 'HPG News',
    title: '4 năm, 1 Khu liên hợp công suất 5 triệu tấn trên năm và 11,000 CBCNV',
    quote: 'A testament to growth and dedication.',
  },
  {
    image: '/news-images/news6.jpg',
    date: 'HPG News',
    title: 'Thép cuộn cán nóng: Át chủ bài tạo nên tầm vóc mới cho Hòa Phát',
    quote: 'Innovation driving the future of steel.',
  },
];

export default function MainPage() {
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    setLoaded(true);
  }, []);

  const handleNewsClick = (title: string) => {
    // In a real app, you would navigate to a new page, e.g., with react-router-dom
    console.log(`Navigating to news article: ${title}`);
  };

  return (
    <Box>
      <Header />

      {/* Main content area with background image */}
      <Box
        component="main"
        sx={{
          minHeight: '100vh',
          backgroundImage: 'url(/part1-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center', // Center the content vertically
          pt: '110px', // Add padding to push content below the initial header
          pb: 4, // Add some bottom padding
        }}
      >
        {/* Container to constrain the width of the text content */}
        <Container maxWidth="md">
          {/* --- ANIMATION WRAPPERS START --- */}
          <Slide direction="up" in={loaded} mountOnEnter unmountOnExit timeout={1000}>
            <Fade in={loaded} timeout={1500}>
              <Box
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  p: { xs: 3, md: 5 },
                  borderRadius: 2,
                  boxShadow: 3,
                }}
              >
                <Typography
                  variant="h3"
                  component="h1"
                  sx={{ fontWeight: 'bold', color: '#0D47A1' /* A deep blue */ }}
                >
                  INTRODUCTION
                </Typography>
                <Typography
                  variant="h6"
                  component="h2"
                  sx={{ color: '#1565C0', letterSpacing: '1px', mb: 2 }}
                >
                  INVESTMENT POLICY STATEMENT
                </Typography>
                <Divider sx={{ mb: 3 }} />
                <Typography variant="body1" sx={{ lineHeight: 1.7, fontSize: '1.1rem' }}>
                  The Investment Policy Statement (IPS) is an official document that outlines the objectives, constraints, and unique circumstances that shape an organization's investment strategy. It provides clear guidelines for managing the investment portfolio and helps ensure alignment between the investor and advisor regarding goals, acceptable risk levels, and execution methods. Serving as a foundational framework, the IPS is essential in minimizing risks and enhancing returns, supporting long-term financial success.
                </Typography>
              </Box>
            </Fade>
          </Slide>
          {/* --- ANIMATION WRAPPERS END --- */}
        </Container>
      </Box>
      
            <Box sx={{ py: 8, backgroundColor: '#f4f6f8' }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            component="h2"
            align="center"
            sx={{ fontWeight: 'bold', mb: 6 }}
          >
            Latest News
          </Typography>
          <Grid container spacing={4}>
            {mockNewsData.map((news, index) => (
              <Grid key={index} size={{xs: 12, sm: 6, md: 4}}>
                <NewsCard
                  image={news.image}
                  date={news.date}
                  title={news.title}
                  quote={news.quote}
                  onClick={() => handleNewsClick(news.title)}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

    </Box>
  );
}