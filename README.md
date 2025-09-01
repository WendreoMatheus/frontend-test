# Live Coding Test - Frontend Developer

## Format: Live Coding Session (60-90 minutes)

### Description
Build a simple blog application that consumes the JSONPlaceholder API and displays a list of posts. When clicking on a post, users should see details and comments.

## Available API
**JSONPlaceholder:** `https://jsonplaceholder.typicode.com/`

### Endpoints to use:
```bash
GET /posts                    # List all posts
GET /posts/{id}              # Specific post  
GET /posts/{id}/comments     # Post comments
GET /users/{userId}          # Author data
```

### Data structure:

**Post:**
```json
{
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "body": "quia et suscipit suscipit recusandae consequuntur expedita et cum..."
}
```

**Comment:**
```json
{
  "postId": 1,
  "id": 1,
  "name": "id labore ex et quam laborum",
  "email": "Eliseo@gardner.biz",
  "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos..."
}
```

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

## Required Technologies

### **Mandatory:**
- **React** (Create React App, Vite, or Next.js)
- **State Management Tool** (choose one):
  - Redux Toolkit
  - Zustand
  - Context API + useReducer
  - Jotai
  - Valtio
  - Any other you prefer
- **JavaScript** or **TypeScript**
- **fetch** or **axios** for API calls

### **CSS Options:**
- Plain CSS, CSS Modules, or Styled Components
- **Frameworks allowed:** Tailwind, Bootstrap, Material-UI, Chakra UI

## Tasks (Priority Order)

### 1. Project Setup (10 min)
- [ ] Create React/Next.js project
- [ ] Set up your chosen state management solution
- [ ] Basic folder structure
- [ ] Configure routing

### 2. State Management Setup (15 min)
- [ ] Configure your state management tool
- [ ] Create actions/reducers/stores for posts
- [ ] Set up loading and error states
- [ ] Plan your state structure

### 3. Posts List (20 min)
- [ ] Fetch posts from API using your state manager
- [ ] Display list with title and body preview (first 100 chars)
- [ ] Implement loading state
- [ ] Add clickable links to details
- [ ] Handle errors gracefully

### 4. Post Details Page (20 min)
- [ ] Implement dynamic routing `/posts/[id]`
- [ ] Fetch specific post data
- [ ] Display full title and body
- [ ] Add back navigation button
- [ ] Handle post not found scenarios

### 5. Comments Integration (15 min)
- [ ] Fetch post comments
- [ ] Display comments in details page
- [ ] Show commenter name and email
- [ ] Handle empty comments state

### 6. Enhancements (Remaining time)
- [ ] Fetch and display post author information
- [ ] Add basic styling/responsive design
- [ ] Implement better error handling
- [ ] Add loading skeletons
- [ ] Search functionality (bonus)

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

## Session Tips

### **Focus First On:**
1. ✅ Get it working (MVP)
2. ✅ State management setup
3. ✅ Data on screen
4. ✅ Basic navigation
5. ✅ Then improve

### **Communicate:**
- "I'm setting up Redux Toolkit for state management..."
- "Let me check the React documentation for this hook..."
- "I'll search Stack Overflow for this error..."
- "I would implement X feature if I had more time..."

### **If You Get Stuck:**
- Use console.log liberally
- Check Network tab in DevTools
- Explain what you're thinking
- It's OK to search for help
- Ask clarifying questions
