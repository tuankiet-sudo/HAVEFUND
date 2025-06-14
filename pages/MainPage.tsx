import * as React from 'react';
import { Box, Typography, Container, Divider, Fade, Slide, Grid } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import NewsCard from '../components/NewsCard';
import { useNavigate } from 'react-router-dom';
import { articles } from '../src/data/articles';

// Updated mock data to include card variants and colors
const mockNewsData = [
  {
    variant: 'normal',
    image: '/news-images/news1.jpg',
    date: '11/10/2024 14:05',
    title: 'Hòa Phát hỗ trợ xây dựng hơn 1,500 căn nhà cho người nghèo trên cả nước',
    quote: 'Hưởng ứng lời kêu gọi của Chính phủ...',
  },
  {
    variant: 'small',
    bgColor: '#fff3cd', // A light yellow, inspired by the image
    date: 'Ông Trần Đình Long',
    title: 'Hòa Phát không bao giờ dừng lại và luôn tiến về phía trước',
  },
  {
    variant: 'normal',
    image: '/news-images/news2.jpg',
    date: '04/03/2025 12:30',
    title: 'Hòa Phát nộp ngân sách hơn 13,400 tỷ đồng, cao nhất từ trước đến nay',
    quote: 'Năm 2024, Tập đoàn Hòa Phát đã nộp vào...',
  },
  {
    variant: 'small',
    bgColor: '#cce5ff', // A light blue, inspired by the image
    date: 'HPG News',
    title: '4 năm, 1 Khu liên hợp công suất 5 triệu tấn trên năm và 11,000 CBCNV',
  },
  {
    variant: 'normal',
    image: '/news-images/news3.jpg',
    date: '15/05/2024 09:23',
    title: 'Khởi công xây dựng dự án Trường Tiểu học Bình Đông',
    quote: 'Sáng ngày 13/5/2024, tại Khu dân cư...',
  },
  {
    variant: 'small',
    bgColor: '#d4edda', // A light green
    date: 'HPG News',
    title: 'Thép cuộn cán nóng: Át chủ bài tạo nên tầm vóc mới cho Hòa Phát',
  },
];

// Helper component for animating each card individually
const AnimatedCard = ({ children, index }: { children: React.ReactNode; index: number }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Animate when 10% of the card is visible
    delay: 150 * (index % 3), // Stagger animations for each row
  });

  let direction: 'up' | 'down' | 'left' | 'right' = 'up';
  switch (index) {
    case 0: case 3: direction = 'right'; break;
    case 2: case 5: direction = 'left'; break;
    case 1: direction = 'down'; break;
    case 4: direction = 'up'; break;
    default: direction = 'up';
  }

  return (
    <Box ref={ref}>
      <Slide direction={direction} in={inView} timeout={800}>
        <Fade in={inView} timeout={1200}>
          {/* The extra div is important for the transitions to work correctly */}
          <Box>{children}</Box>
        </Fade>
      </Slide>
    </Box>
  );
};

export default function MainPage() {
  const navigate = useNavigate();
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    setLoaded(true);
  }, []);

  const handleNewsClick = (articleId: string) => {
    navigate(`/news/${articleId}`); // Navigate to the dynamic article route
  };

  return (
    <Box>
      {/* Introduction Section */}
      <Box
        component="main"
        sx={{
          minHeight: '100vh',
          backgroundImage: 'url(/part1-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          pt: '110px',
          pb: 4,
        }}
      >
        <Container maxWidth="md">
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
                <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', color: '#0D47A1' }}>
                  INTRODUCTION
                </Typography>
                <Typography variant="h6" component="h2" sx={{ color: '#1565C0', letterSpacing: '1px', mb: 2 }}>
                  INVESTMENT POLICY STATEMENT
                </Typography>
                <Divider sx={{ mb: 3 }} />
                <Typography variant="body1" sx={{ lineHeight: 1.7, fontSize: '1.1rem' }}>
                  The Investment Policy Statement (IPS) is an official document that outlines the objectives, constraints, and unique circumstances that shape an organization's investment strategy. It provides clear guidelines for managing the investment portfolio and helps ensure alignment between the investor and advisor regarding goals, acceptable risk levels, and execution methods. Serving as a foundational framework, the IPS is essential in minimizing risks and enhancing returns, supporting long-term financial success.
                </Typography>
              </Box>
            </Fade>
          </Slide>
        </Container>
      </Box>

      {/* --- NEW NEWS SECTION START --- */}
      <Box sx={{ py: 8, backgroundColor: '#f4f6f8' }}>
        <Container maxWidth="lg">
          {/* Custom Section Title */}
          <Box sx={{ display: 'flex', justifyContent: 'flex-start', mb: 6 }}>
              <Box
                sx={{
                  display: 'inline-block',
                  backgroundColor: '#0D47A1', // Blue color from image
                  color: 'white',
                  px: 4,
                  py: 1.5,
                  position: 'relative',
                  clipPath: 'polygon(0 0, 100% 0, calc(100% - 30px) 100%, 0 100%)',
                }}
              >
                <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold' }}>
                  Latest News
                </Typography>
              </Box>
          </Box>
          
          {/* White container for the news cards */}
          <Box sx={{ backgroundColor: 'white', p: {xs: 2, md: 4}, borderRadius: 2, boxShadow: 1 }}>
            <Grid container spacing={4}>
              {articles.map((news, index) => (
                // Adjusting grid size to make cards smaller
                <Grid key={index} size= {{xs: 12, sm: 6, md: 4}}>
                  <AnimatedCard index={index}>
                    {/* Using the NewsCard component with the new props */}
                    <NewsCard
                      variant='normal'
                      bgColor='#0D47A1'
                      image={news.image}
                      date={news.date}
                      title={news.title}
                      quote='Việt Nam đã trải qua một quá trình chuyển đổi kinh tế đáng kể kể từ khi triển khai chính sách Đổi Mới vào năm 1986'
                      onClick={() => handleNewsClick(news.id)}
                    />
                  </AnimatedCard>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
      {/* --- NEW NEWS SECTION END --- */}

    </Box>
  );
}