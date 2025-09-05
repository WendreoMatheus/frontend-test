# Devnews - Live Coding Test

## Format: Live Coding Session (60 minutes or less)

### Description
Build a simple blog application called "Devnews" that consumes the JSONPlaceholder API and displays a list of posts. When clicking on a post, users should see the full post details.

## Available API
**JSONPlaceholder:** `https://jsonplaceholder.typicode.com/`

### Endpoints to implement:
```bash
GET /posts                    # List all posts (REQUIRED)
GET /posts/{id}              # Specific post details (REQUIRED)
```

### Data structure:

**Post from JSONPlaceholder:**
```json
{
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "body": "quia et suscipit suscipit recusandae consequuntur expedita et cum..."
}
```

## 🏗️ Project Setup Status

### ✅ Already Configured:
- **Next.js 15** with TypeScript and App Router
- **Material-UI** with theme configuration
- **Axios** instance pointing to JSONPlaceholder API
- **Project structure** with organized folders:
  - `src/components/` - UI components (Navbar, PostCard, PageContainer)
  - `src/services/` - API service layer
  - `src/types/` - TypeScript interfaces
  - `src/lib/` - Axios configuration

### 🔧 Ready to Use Components:
- **Navbar** - Navigation with "Devnews" branding
- **PostCard** - Displays post data with title, excerpt, author, date
- **PageContainer** - Layout wrapper with navbar and styling

### 📝 What You Need to Implement:
The infrastructure is ready - you just need to connect the pieces!

## Rules & Guidelines

### ✅ **ALLOWED:**
- **Documentation:** Official docs (React, Next.js, etc.)
- **StackOverflow:** Search for specific technical questions
- **Google:** General searches for syntax, APIs, examples
- **MDN:** JavaScript/Web API references
- **Package registries:** npm, yarn for checking package info

### ❌ **STRICTLY PROHIBITED:**
- **Copy-pasting entire solutions** from tutorials or GitHub
- **Using pre-built complete applications** as starting point
- **Having someone else code for you** during the session
- **Using code generators** that write the full application
- **Screen sharing with external help** during the session

### 📝 **Communication Expectation:**
- **Narrate your thought process** as you code
- **Explain decisions** you're making
- **Mention when consulting external resources**: "I'm checking the React docs for useEffect syntax"
- **Share any challenges** you encounter

## 🛠️ Technology Stack

### ✅ Already Set Up:
- **Next.js 15** with App Router
- **TypeScript**
- **Material-UI** (complete theme setup)
- **Axios** (configured for JSONPlaceholder)

### 🎯 You Need to Choose:
- **State Management Tool** (pick one):
  - Redux Toolkit (full-featured)
  - Zustand (lightweight, recommended)
  - Context API + useReducer (built-in)
  - Jotai or Valtio (atomic)

## 🚀 Implementation Tasks (Priority Order)

### 1. Complete PostService (`src/services/postService.ts`) - 15 min
**File:** `src/services/postService.ts`

The service skeleton is ready - just implement the two methods:

```typescript
// 1. Implement fetchPosts()
static async fetchPosts(): Promise<PostsResponse> {
  // TODO: Uncomment and adapt this code:
  // const response = await api.get('/posts');
  // return {
  //   data: response.data.map(post => ({
  //     id: post.id.toString(),
  //     title: post.title,
  //     content: post.body,
  //     excerpt: post.body.substring(0, 100) + '...',
  //     author: `User ${post.userId}`, // You can enhance this later
  //     createdAt: new Date().toISOString(), // JSONPlaceholder doesn't have dates
  //     updatedAt: new Date().toISOString(),
  //   })),
  //   success: true
  // };
}

// 2. Implement fetchPost(id)
static async fetchPost(id: string): Promise<ApiResponse<Post>> {
  // TODO: Similar implementation for single post
}
```

### 2. State Management Setup - 10 min
**Choose one and set up:**
- **Option A: Context API** (simplest)
- **Option B: Zustand** (recommended)
- **Option C: Redux Toolkit**

Create a store/context to manage:
- Posts list
- Current post
- Loading states
- Error handling

### 3. Connect Posts List (`src/app/page.tsx`) - 10 min
**File:** `src/app/page.tsx`

Replace the sample data with real API calls:
- Remove `samplePosts` array
- Use your state management to fetch posts
- Connect to existing `PostCard` components
- Handle loading/error states

### 4. Create Post Details Page - 15 min
**Create:** `src/app/posts/[id]/page.tsx`

```typescript
// Use existing components:
import PageContainer from '../../../components/PageContainer';
// Create content area for full post details
// Use PostService.fetchPost(id) to get data
```

### 5. Navigation Setup - 10 min
- Update `PostCard` component `onReadMore` handler
- Use Next.js router to navigate to `/posts/[id]`
- Add back button on post detail page

## Evaluation Criteria

### Development Process (40%)
- **Problem-solving approach**
- **State management implementation**
- **Debugging skills and tool usage**
- **Code organization and planning**
- **Communication and explanation**
- **Resource utilization (docs, Stack Overflow, etc.)**

### Functionality (35%)
- **Posts list working correctly**
- **Navigation between pages**
- **API data properly displayed**
- **State management functioning**
- **Dynamic routing implemented**

### Code Quality (25%)
- **Component structure**
- **State management patterns**
- **Clean code practices**
- **Error handling**
- **TypeScript usage (if chosen)**

## 💡 Quick Start Guide

### 1. First Steps:
```bash
npm install    # Dependencies already configured
npm run dev    # Start development server
```

### 2. Development Flow:
1. **Start with PostService** - Implement the API calls first
2. **Choose state management** - Set up your preferred solution
3. **Connect the homepage** - Replace sample data with real API
4. **Create post details** - Add the individual post page
5. **Add navigation** - Connect list to detail pages

### 🎯 Success Criteria:
- [ ] Posts list loads from JSONPlaceholder API
- [ ] Clicking a post navigates to detail page
- [ ] Individual post shows full content
- [ ] Loading states work
- [ ] Error handling implemented

### 🔧 Helpful Files to Check:
- `src/services/postService.ts` - API implementation examples
- `src/components/PostCard.tsx` - Already handles post data
- `src/app/page.tsx` - Current sample data implementation
- `src/types/post.ts` - TypeScript interfaces

### 💬 Communication Tips:
- "I'm implementing the fetchPosts method using the provided example..."
- "Let me set up Zustand for state management..."  
- "I'm creating the post detail page at src/app/posts/[id]/page.tsx..."
- "Checking the Network tab to debug the API call..."
