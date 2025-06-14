// import * as React from 'react';
import { Box, Typography, Container, Grid, Paper, List, ListItem, ListItemText, Divider, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Link as MuiLink } from '@mui/material';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'; // Import the GFM plugin
import { articles } from '../src/data/articles';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LinkIcon from '@mui/icons-material/Link';

// Define the mapping from Markdown elements to MUI components
const componentMap = {
    h1: ({...props}) => <Typography variant="h3" gutterBottom {...props} />,
    h2: ({...props}) => <Typography variant="h4" gutterBottom sx={{ mt: 3 }} {...props} />,
    h3: ({...props}) => <Typography variant="h5" gutterBottom sx={{ mt: 2 }} {...props} />,
    h4: ({...props}) => <Typography variant="h6" gutterBottom sx={{ mt: 2 }} {...props} />,
    p: ({...props}) => <Typography variant="body1" paragraph {...props} />,
    ul: ({...props}) => <ul style={{ paddingLeft: '20px' }} {...props} />,
    ol: ({...props}) => <ol style={{ paddingLeft: '20px' }} {...props} />,
    li: ({...props}) => <li><Typography variant="body1" component="span" {...props} /></li>,
    a: ({...props}) => <MuiLink sx={{ overflowWrap: 'break-word', wordBreak: 'break-all' }} {...props} />,
    img: ({ ...props}) => <Box component="img" sx={{ maxWidth: '100%', height: 'auto', my: 2, borderRadius: 1 }} {...props} />,
    table: ({...props}) => <TableContainer component={Paper} sx={{ my: 2 }}><Table {...props} /></TableContainer>,
    thead: ({...props}) => <TableHead sx={{ backgroundColor: '#f5f5f5' }} {...props} />,
    tbody: ({...props}) => <TableBody {...props} />,
    tr: ({...props}) => <TableRow {...props} />,
    th: ({...props}) => <TableCell sx={{ fontWeight: 'bold' }} {...props} />,
    td: ({...props}) => <TableCell {...props} />,
};

export default function NewsPage() {
  const { articleId } = useParams<{ articleId: string }>();
  const article = articles.find(p => p.id === articleId);

  if (!article) {
    return (
      <Container sx={{ py: '120px' }}>
        <Typography variant="h3" align="center">Article not found!</Typography>
      </Container>
    );
  }

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          pt: '110px',
          height: '50vh',
          minHeight: '350px',
          backgroundImage: `url(${article.image})`,
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
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
          },
        }}
      >
        <Container>
          <Typography
            variant="h3"
            component="h2"
            align="center"
            sx={{ fontWeight: 'bold', zIndex: 1, position: 'relative' }}
          >
            {article.title}
          </Typography>
        </Container>
      </Box>

      {/* Main Content Area */}
      <Container sx={{ py: 6 }}>
        <Grid container spacing={5}>
          {/* Left Column: Article Content */}
          <Grid size={{xs:12, md:8}}>
            <Box sx={{
                // Specific styling for the rendered markdown content
                '& h1, & h2, & h3, & h4, & h5, & h6': {
                    fontWeight: 'bold',
                },
            }}>
              <ReactMarkdown
                components={componentMap} // Use our MUI component map
                remarkPlugins={[remarkGfm]} // Enable the GFM plugin for tables
              >
                {article.content}
              </ReactMarkdown>
            </Box>
          </Grid>

          {/* Right Column: Metadata and References */}
          <Grid size={{xs:12, md:4}}>
            <Paper elevation={2} sx={{ p: 3, position: 'sticky', top: '120px' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <CalendarMonthIcon color="action" sx={{ mr: 1 }} />
                <Typography variant="body1">Published on: {article.date}</Typography>
              </Box>
              <Divider sx={{ my: 2 }} />
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <LinkIcon color="action" sx={{ mr: 1 }}/>
                <Typography variant="h6">References</Typography>
              </Box>
              <ReactMarkdown
                components={componentMap}
                remarkPlugins={[remarkGfm]}
              >
                {article.references || ''}
              </ReactMarkdown>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
