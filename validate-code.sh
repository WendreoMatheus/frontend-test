#!/bin/bash

# Devnews Code Validation Script
# Checks linting, TypeScript, formatting, and code patterns

set -e  # Exit on any error

echo "🔍 Starting Devnews Code Validation..."
echo "======================================"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Track validation results
VALIDATION_ERRORS=0

# Function to print status
print_status() {
    if [ $1 -eq 0 ]; then
        echo -e "${GREEN}✅ $2${NC}"
    else
        echo -e "${RED}❌ $2${NC}"
        VALIDATION_ERRORS=$((VALIDATION_ERRORS + 1))
    fi
}

# Function to print info
print_info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

# Function to print warning
print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

echo ""
print_info "Step 1: TypeScript Type Checking"
echo "--------------------------------"

if npm run type-check &>/dev/null; then
    print_status 0 "TypeScript compilation successful"
else
    print_status 1 "TypeScript compilation failed"
    echo "Run: npm run type-check to see details"
fi

echo ""
print_info "Step 2: ESLint Code Quality"
echo "----------------------------"

if npm run lint &>/dev/null; then
    print_status 0 "ESLint passed - no linting errors"
else
    print_status 1 "ESLint found issues"
    echo "Run: npm run lint to see details"
    echo "Run: npm run lint:fix to auto-fix some issues"
fi

echo ""
print_info "Step 3: Prettier Formatting"
echo "---------------------------"

if npm run format:check &>/dev/null; then
    print_status 0 "Code formatting is consistent"
else
    print_status 1 "Code formatting issues found"
    echo "Run: npm run format to fix formatting"
fi

echo ""
print_info "Step 4: Build Test"
echo "-----------------"

if npm run build &>/dev/null; then
    print_status 0 "Project builds successfully"
else
    print_status 1 "Build failed"
    echo "Run: npm run build to see build errors"
fi

echo ""
print_info "Step 5: Code Pattern Validation"
echo "-------------------------------"

# Check if PostService methods are implemented
if grep -q "throw new Error.*not implemented" src/services/postService.ts; then
    print_status 1 "PostService methods still need implementation"
else
    print_status 0 "PostService methods appear to be implemented"
fi

# Check if sample data is still being used
if grep -q "samplePosts" src/app/page.tsx; then
    print_status 1 "Sample data still being used in main page"
    print_warning "Replace samplePosts with real API calls"
else
    print_status 0 "No sample data found in main page"
fi

# Check if post detail page exists
if [ -f "src/app/posts/[id]/page.tsx" ]; then
    print_status 0 "Post detail page exists"
else
    print_status 1 "Post detail page not created yet"
    print_warning "Create: src/app/posts/[id]/page.tsx"
fi

# Check for state management setup
STATE_MGMT_FOUND=false

# Check for different state management solutions
if grep -rq "createSlice\|configureStore" src/ 2>/dev/null; then
    print_status 0 "Redux Toolkit detected"
    STATE_MGMT_FOUND=true
elif grep -rq "create.*zustand\|useStore" src/ 2>/dev/null; then
    print_status 0 "Zustand detected"
    STATE_MGMT_FOUND=true
elif grep -rq "createContext\|useContext.*Provider" src/ 2>/dev/null; then
    print_status 0 "Context API detected"
    STATE_MGMT_FOUND=true
elif grep -rq "useAtom\|atom" src/ 2>/dev/null; then
    print_status 0 "Jotai detected"
    STATE_MGMT_FOUND=true
fi

if [ "$STATE_MGMT_FOUND" = false ]; then
    print_status 1 "No state management solution detected"
    print_warning "Implement state management (Redux Toolkit, Zustand, Context API, etc.)"
fi

# Check for proper error handling
if grep -rq "try.*catch\|\.catch(" src/app/ src/components/ 2>/dev/null; then
    print_status 0 "Error handling found in components"
else
    print_status 1 "No error handling detected in components"
    print_warning "Add try-catch blocks or .catch() for API calls"
fi

# Check for loading states
if grep -rq "loading\|isLoading\|Loading" src/app/ src/components/ 2>/dev/null; then
    print_status 0 "Loading states implementation found"
else
    print_status 1 "No loading states detected"
    print_warning "Add loading indicators for better UX"
fi

echo ""
print_info "Step 6: Required Functionality Check"
echo "------------------------------------"

# Check if API calls are actually implemented (not just throwing errors)
if grep -q "api\.get" src/services/postService.ts; then
    print_status 0 "API calls are implemented in PostService"
else
    print_status 1 "API calls not implemented in PostService"
    print_warning "Implement fetchPosts() and fetchPost() methods"
fi

# Check for navigation setup
if grep -rq "router\|Link\|href.*posts" src/ 2>/dev/null; then
    print_status 0 "Navigation implementation found"
else
    print_status 1 "Navigation not implemented"
    print_warning "Add navigation between posts list and detail pages"
fi

echo ""
echo "======================================"
if [ $VALIDATION_ERRORS -eq 0 ]; then
    echo -e "${GREEN}🎉 All validations passed! Code is ready for review.${NC}"
    exit 0
else
    echo -e "${RED}❌ Found $VALIDATION_ERRORS validation issue(s).${NC}"
    echo -e "${YELLOW}📝 Please fix the issues above before submitting.${NC}"
    exit 1
fi