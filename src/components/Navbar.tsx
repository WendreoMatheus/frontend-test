'use client';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import Link from 'next/link';

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, fontWeight: 'bold' }}
        >
          <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            Devnews
          </Link>
        </Typography>
        
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button color="inherit">
            <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              Home
            </Link>
          </Button>
          <Button color="inherit">
            <Link href="/posts" style={{ textDecoration: 'none', color: 'inherit' }}>
              Posts
            </Link>
          </Button>
          <Button color="inherit">
            <Link href="/about" style={{ textDecoration: 'none', color: 'inherit' }}>
              About
            </Link>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}