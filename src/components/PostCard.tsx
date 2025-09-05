'use client';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Chip,
  Box,
} from '@mui/material';
import { Post } from '../types/post';

interface PostCardProps {
  post: Post;
  onReadMore?: (post: Post) => void;
  onEdit?: (post: Post) => void;
  onDelete?: (post: Post) => void;
}

export default function PostCard({
  post,
  onReadMore,
  onEdit,
  onDelete,
}: PostCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="div">
          {post.title}
        </Typography>

        <Typography variant="body2" color="text.secondary" paragraph>
          {post.excerpt}
        </Typography>

        <Box sx={{ mb: 2 }}>
          <Typography variant="caption" color="text.secondary">
            By {post.author} • {formatDate(post.createdAt)}
          </Typography>
        </Box>

        {post.tags && post.tags.length > 0 && (
          <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
            {post.tags.map((tag, index) => (
              <Chip key={index} label={tag} size="small" variant="outlined" />
            ))}
          </Box>
        )}
      </CardContent>

      <CardActions sx={{ justifyContent: 'space-between', pt: 0 }}>
        <Button size="small" onClick={() => onReadMore?.(post)}>
          Read More
        </Button>
        <Box>
          {onEdit && (
            <Button size="small" onClick={() => onEdit(post)}>
              Edit
            </Button>
          )}
          {onDelete && (
            <Button size="small" color="error" onClick={() => onDelete(post)}>
              Delete
            </Button>
          )}
        </Box>
      </CardActions>
    </Card>
  );
}
