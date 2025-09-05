'use client';
import { Typography, Grid, Box } from '@mui/material';
import PageContainer from '../components/PageContainer';
import PostCard from '../components/PostCard';
import { Post } from '../types/post';

const samplePosts: Post[] = [
  {
    id: '1',
    title: 'Lorem Ipsum Dolor Sit Amet',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore...',
    author: 'John Doe',
    createdAt: '2024-01-15T10:30:00Z',
    updatedAt: '2024-01-15T10:30:00Z',
    tags: ['lorem', 'ipsum', 'sample'],
  },
  {
    id: '2',
    title: 'Ut Enim Ad Minim Veniam',
    content:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    excerpt:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea...',
    author: 'Jane Smith',
    createdAt: '2024-01-14T14:20:00Z',
    updatedAt: '2024-01-14T14:20:00Z',
    tags: ['veniam', 'exercitation'],
  },
  {
    id: '3',
    title: 'Duis Aute Irure Dolor',
    content:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    excerpt:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat...',
    author: 'Bob Johnson',
    createdAt: '2024-01-13T09:15:00Z',
    updatedAt: '2024-01-13T09:15:00Z',
    tags: ['dolor', 'voluptate'],
  },
];

export default function Home() {
  const handleReadMore = (post: Post) => {
    console.log('Read more:', post.title);
  };

  const handleEdit = (post: Post) => {
    console.log('Edit post:', post.title);
  };

  const handleDelete = (post: Post) => {
    console.log('Delete post:', post.title);
  };

  return (
    <PageContainer>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to Devnews
        </Typography>
        <Typography
          variant="h5"
          component="h2"
          color="text.secondary"
          sx={{ mb: 2 }}
        >
          Discover amazing content and stories
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Typography>
      </Box>

      <Typography variant="h4" component="h3" gutterBottom sx={{ mb: 3 }}>
        Featured Posts
      </Typography>

      <Grid container spacing={3}>
        {samplePosts.map((post) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={post.id}>
            <PostCard
              post={post}
              onReadMore={handleReadMore}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          </Grid>
        ))}
      </Grid>
    </PageContainer>
  );
}
