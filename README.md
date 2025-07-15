# Oreon Wiki

This is the community-driven wiki for the Oreon Project, built using [Docusaurus](https://docusaurus.io/).

## Writing Documentation

### Folder Structure

All documentation pages should be placed in the appropriate subfolder within `docs/`:

- **`docs/Basics/`** - Fundamental concepts, installation guides, and getting started information
- **`docs/Guides/`** - Step-by-step tutorials, how-to guides, and practical examples
- **`docs/Information/`** - Reference materials, API documentation, and detailed technical information

### Creating New Pages

1. Create a new `.md` or `.mdx` file in the appropriate folder
2. Add frontmatter at the top of your file:
   ```markdown
   ---
   sidebar_position: 1
   title: "Your Page Title"
   ---
   ```
3. Write your content using standard Markdown
4. The page will automatically appear in the sidebar

### Markdown Guidelines

- Use clear, descriptive headings with `#`, `##`, `###` etc.
- Include code examples in proper code blocks with syntax highlighting
- Use relative links to other wiki pages: `[Link Text](../other-page)`
- Link to external resources when helpful
- Keep content organized with proper heading hierarchy

### Contributing Guidelines

1. Fork the repository
2. Create a new branch for your changes
3. Add or edit documentation in the appropriate `docs/` subfolder
4. Test your changes locally (see Development section below)
5. Submit a pull request with a clear description of your changes

### Content Standards

- Write for your audience - assume basic familiarity with development concepts
- Provide working code examples when possible
- Include troubleshooting sections for common issues
- Keep content up-to-date with current Oreon versions
- Cross-reference the official documentation when appropriate

## Development

### Installation

```bash
npm install
```

### Local Development

```bash
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```bash
npm build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Using SSH:

```bash
USE_SSH=true npm deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> npm deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## Project Structure

```
docs/
├── basics/          # Fundamental concepts and getting started
├── guides/          # Tutorials and how-to guides  
├── information/     # Reference and technical documentation
└── intro.md         # Wiki homepage

src/
├── css/            # Custom styling
└── pages/          # Custom pages (auto-redirects to docs)

static/
└── img/            # Images and assets
```

## Links

- [Official Oreon Documentation](https://oreonproject.org/docs/)
- [Oreon Project Website](https://oreonproject.org/)
- [GitHub Repository](https://github.com/oreonproject/wiki)
- [Docusaurus Documentation](https://docusaurus.io/docs)
