# Daily AI News Generation Prompt

## Instructions for AI Assistant

When the user says **"hi"** or **"Hello"** (case-insensitive), automatically start this daily news generation workflow.

---

## Workflow Steps

### 1. Determine Today's Date
- Get current date in format: `YYYY-MM-DD` (e.g., 2026-01-12)
- Confirm with user: "Starting daily AI news generation for `[DATE]`. Proceeding..."

### 2. Search for Latest AI News
- Search the internet for **latest AI and technology news** from the past 24 hours
- Focus on:
  - AI model releases and updates
  - Major tech company AI announcements
  - Open-source AI projects and frameworks
  - AI safety and ethics developments
  - AI research breakthroughs
  - AI tools and applications
  - Content relevant to global audience (simple, accessible language)

### 3. Generate Candidate News Items
- Identify **5-10 high-quality news items**
- For each item, gather:
  - Clear, compelling headline
  - Source URL (must be valid and accessible)
  - Brief description (max 100 words)
  - Category/topic classification
  - Optional: image URL (only if reliably available)

### 4. Check for Duplicates
**IMPORTANT**: Before finalizing, check if any items already exist in the system
- Review recent news files in `/public/news/` directory
- Compare by `source_url` (exact match = duplicate)
- If `source_url` differs but headline is very similar, flag for review
- **Remove all duplicates** from the final list

### 5. Format News Items
Create JSON array with this exact structure:

```json
[
  {
    "id": 1,
    "title": "Clear, compelling headline (60 chars or less)",
    "description": "Brief description explaining the news in simple, accessible language. Max 100 words. Focus on what matters to readers.",
    "url": "https://source-website.com/article-url",
    "category": "AI Models | Open Source | AI Safety | Research | Tools | Other",
    "date": "YYYY-MM-DD"
  }
]
```

**Field Requirements**:
- `id`: Sequential number starting from 1
- `title`: Concise headline (preferably under 60 characters)
- `description`: Max 100 words, simple Indian English, accessible to general audience
- `url`: Valid source URL (verify it's accessible)
- `category`: One of: "AI Models", "Open Source", "AI Safety", "Research", "Tools", "Industry", "Ethics", or "Other"
- `date`: Today's date in YYYY-MM-DD format

### 6. Generate File
- Create file path: `/public/news/[YYYY-MM-DD].json`
- Example: `/public/news/2026-01-12.json`
- Ensure proper JSON formatting (valid, no trailing commas, proper escaping)

### 7. Present for Approval
Show the user:
1. **Summary**: "Found [N] new AI news items for [DATE]"
2. **Categories breakdown**: List count per category
3. **Preview**: Show the first 2 items in readable format
4. **Full JSON**: Display the complete JSON that will be saved
5. **Ask**: "Approve and create `/public/news/[DATE].json`? (yes/no/edit)"

### 8. Handle User Response
- **yes**: Create the file immediately using the `create_file` tool
- **no**: Cancel and ask what to change
- **edit**: Ask which items to modify and make changes

### 9. Completion
After file creation:
- Confirm: "✅ Created `/public/news/[DATE].json` with [N] items"
- Remind: "The news tab will automatically display these items when you refresh the page"
- Suggest: "Say 'hi' tomorrow to generate the next day's news!"

---

## Quality Guidelines

### News Selection Criteria
✅ **Include**:
- Major announcements from leading AI companies
- Significant open-source releases
- Important research breakthroughs
- AI safety and ethics discussions
- Practical AI tools and applications
- Industry-changing developments

❌ **Exclude**:
- Minor updates or patches
- Duplicate news from different sources
- Overly technical content without broader impact
- Unverified rumors or speculation
- Content behind paywalls

### Writing Style
- **Simple Indian English**: Clear, accessible language
- **Concise**: Get to the point quickly
- **Factual**: Based on reliable sources
- **Neutral**: Avoid hype or sensationalism
- **Accessible**: Explain technical terms when needed

### URL Verification
- Ensure all source URLs are valid and accessible
- Prefer original sources over aggregators
- Use HTTPS when available
- Avoid shortened URLs (use full URLs)

---

## Example Output

```json
[
  {
    "id": 1,
    "title": "OpenAI Releases GPT-5 with Enhanced Reasoning",
    "description": "New model shows significant improvements in complex problem-solving and multi-step reasoning tasks.",
    "url": "https://openai.com/blog/gpt-5",
    "category": "AI Models",
    "date": "2026-01-12"
  },
  {
    "id": 2,
    "title": "Google Announces Gemini 2.0 Ultra",
    "description": "Latest multimodal AI excels at understanding images, video, and audio alongside text.",
    "url": "https://blog.google/technology/ai/gemini-2-ultra",
    "category": "AI Models",
    "date": "2026-01-12"
  },
  {
    "id": 3,
    "title": "New Open Source AI Framework Gains Traction",
    "description": "Community-driven project aims to democratize access to large language models.",
    "url": "https://github.com/example/ai-framework",
    "category": "Open Source",
    "date": "2026-01-12"
  },
  {
    "id": 4,
    "title": "AI Safety Research: New Guidelines Published",
    "description": "International consortium releases comprehensive framework for responsible AI development.",
    "url": "https://aisafety.org/guidelines",
    "category": "AI Safety",
    "date": "2026-01-12"
  }
]
```

---

## Trigger Words

Start this workflow automatically when user says:
- "hi"
- "hello"
- "Hi"
- "Hello"
- "HI"
- "HELLO"
- (any case variation)

**Note**: Only trigger on standalone greetings. If the user says "hi" as part of a longer sentence with other instructions, follow those instructions instead.

---

## Error Handling

If you encounter issues:
1. **No internet search results**: Inform user and suggest trying again later
2. **Duplicate detection unclear**: Show both items and ask user to decide
3. **Invalid URLs**: Skip those items and note in summary
4. **File already exists**: Ask if user wants to overwrite or append
5. **JSON formatting errors**: Validate before presenting, fix automatically

---

## Maintenance Notes

- File naming convention: `/public/news/YYYY-MM-DD.json`
- Each day gets its own file
- Old files are kept for historical reference
- No automatic deletion or archival
- Frontend automatically loads today's date file

---

## Quick Reference

**Daily Trigger**: User says "hi"
**Action**: Generate 5-10 AI news items for today
**Output**: `/public/news/[TODAY].json`
**Format**: JSON array with id, title, description, url, category, date
**Approval**: Always ask before creating file
